import { create } from 'zustand';

const BASE_URL = "https://newapi.ramestta.com";

// Security utility functions
const secureStorage = {
  setItem: (key: string, value: string) => {
    try {
      // In production, consider using httpOnly cookies for tokens
      sessionStorage.setItem(key, value);
    } catch (e) {
      console.error('Storage error:', e);
    }
  },
  getItem: (key: string): string | null => {
    try {
      return sessionStorage.getItem(key);
    } catch (e) {
      return null;
    }
  },
  clear: () => {
    try {
      sessionStorage.clear();
    } catch (e) {
      console.error('Storage clear error:', e);
    }
  }
};

// Input sanitization to prevent XSS
const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>"'&]/g, (char) => {
      const entities: Record<string, string> = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '&': '&amp;'
      };
      return entities[char] || char;
    })
    .trim();
};

// Email validation
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

type Permissions = {
    postBlog?: boolean;
    replyMessage?: boolean;
    editBlog?: boolean;
    deleteBlog?: boolean;
    manageUsers?: boolean;
};

interface AuthState {
    userToken: string | null;
    userId: string | null;
    isAdmin: boolean;
    permissions: Permissions | null;
    isLoading: boolean;
    error: string | null;

    loginUser: (email: string, password: string) => Promise<void>;
    loginAdmin: (email: string, password: string) => Promise<void>;
    logout: () => void;

    fetchPermissions: (userId: string) => Promise<void>;
    updatePermissions: (
        userId: string,
        adminId: string,
        newPermissions: Partial<Permissions>
    ) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
    userToken: secureStorage.getItem('userToken'),
    userId: secureStorage.getItem('userId'),
    isAdmin: secureStorage.getItem('isAdmin') === 'true',
    permissions: null,
    isLoading: false,
    error: null,




    // ========================================================
    // Admin Related Functionality
    // ========================================================

    loginAdmin: async (email, password) => {
        set({ isLoading: true, error: null });
        
        // Input validation
        if (!isValidEmail(email)) {
            set({ error: 'Invalid email format', isLoading: false });
            return;
        }
        if (!password || password.length < 8) {
            set({ error: 'Password must be at least 8 characters', isLoading: false });
            return;
        }
        
        try {
            const res = await fetch(`${BASE_URL}/admin/login`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest' // CSRF protection
                },
                credentials: 'same-origin',
                body: JSON.stringify({ 
                    email: sanitizeInput(email), 
                    password // Don't sanitize password as it may contain special chars
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message || 'Admin login failed');

            // Validate token format before storing
            if (!data.token || typeof data.token !== 'string') {
                throw new Error('Invalid token received');
            }

            secureStorage.setItem('userToken', data.token);
            secureStorage.setItem('isAdmin', 'true');

            set({
                userToken: data.token,
                isAdmin: true,
                isLoading: false
            });
        } catch (err: any) {
            // Don't expose detailed error messages to prevent enumeration
            set({ error: 'Authentication failed. Please check your credentials.', isLoading: false });
            console.error('Login error:', err.message);
        }
    },

    logout: () => {
        // Clear all stored data securely
        secureStorage.clear();
        
        // Also clear localStorage as fallback
        try {
            localStorage.clear();
        } catch (e) {
            // Ignore errors
        }
        
        set({
            userToken: null,
            userId: null,
            isAdmin: false,
            permissions: null,
            isLoading: false,
            error: null
        });
    },


    // ========================================================
    // User Related Functionality
    // ========================================================

    loginUser: async (email, password) => {
        set({ isLoading: true, error: null });
        
        // Input validation
        if (!isValidEmail(email)) {
            set({ error: 'Invalid email format', isLoading: false });
            return;
        }
        if (!password || password.length < 8) {
            set({ error: 'Password must be at least 8 characters', isLoading: false });
            return;
        }
        
        try {
            const res = await fetch(`${BASE_URL}/user/login`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest' // CSRF protection
                },
                credentials: 'same-origin',
                body: JSON.stringify({ 
                    email: sanitizeInput(email), 
                    password 
                })
            });
            const data = await res.json();

            if (!res.ok) throw new Error(data.message || 'Login failed');

            // Validate token format before storing
            if (!data.token || typeof data.token !== 'string') {
                throw new Error('Invalid token received');
            }

            secureStorage.setItem('userToken', data.token);
            secureStorage.setItem('isAdmin', 'false');

            set({
                userToken: data.token,
                isAdmin: false,
                isLoading: false
            });
        } catch (err: any) {
            // Don't expose detailed error messages
            set({ error: 'Authentication failed. Please check your credentials.', isLoading: false });
            console.error('Login error:', err.message);
        }
    },




    fetchPermissions: async (userId) => {
        set({ isLoading: true, error: null });
        try {
            const res = await fetch(`${BASE_URL} / user / ${userId}`);
            const data = await res.json();
            set({
                permissions: data?.user?.permission?.permissions || null,
                isLoading: false
            });
        } catch (err) {
            set({ error: 'Failed to fetch permissions', isLoading: false });
        }
    },

    updatePermissions: async (userId, adminId, newPermissions) => {
        set({ isLoading: true, error: null });
        try {
            const res = await fetch(`${BASE_URL} / admin / assign - permission`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId,
                    adminId,
                    permissions: newPermissions
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message || 'Update failed');
            set({
                permissions: data?.user?.permission?.permissions || null,
                isLoading: false
            });
        } catch (err: any) {
            set({ error: err.message || 'Failed to update permissions', isLoading: false });
        }
    }
}));
