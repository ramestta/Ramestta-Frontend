/**
 * Security Utilities for Ramestta Frontend
 * Provides XSS prevention, input validation, and security helpers
 */

// HTML entity encoding to prevent XSS
export const escapeHtml = (unsafe: string): string => {
  if (typeof unsafe !== 'string') return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

// Sanitize user input - removes potentially dangerous characters
export const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .replace(/data:/gi, '') // Remove data: protocol
    .trim();
};

// Validate email format
export const isValidEmail = (email: string): boolean => {
  if (!email || typeof email !== 'string') return false;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254;
};

// Validate URL format
export const isValidUrl = (url: string): boolean => {
  if (!url || typeof url !== 'string') return false;
  try {
    const parsed = new URL(url);
    return ['http:', 'https:'].includes(parsed.protocol);
  } catch {
    return false;
  }
};

// Validate Ethereum address
export const isValidEthAddress = (address: string): boolean => {
  if (!address || typeof address !== 'string') return false;
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};

// Rate limiting helper (client-side)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export const checkRateLimit = (key: string, maxRequests: number = 5, windowMs: number = 60000): boolean => {
  const now = Date.now();
  const record = rateLimitMap.get(key);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (record.count >= maxRequests) {
    return false;
  }
  
  record.count++;
  return true;
};

// Generate CSRF token
export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

// Store and validate CSRF token
let csrfToken: string | null = null;

export const getCSRFToken = (): string => {
  if (!csrfToken) {
    csrfToken = generateCSRFToken();
    sessionStorage.setItem('csrf_token', csrfToken);
  }
  return csrfToken;
};

export const validateCSRFToken = (token: string): boolean => {
  const storedToken = sessionStorage.getItem('csrf_token');
  return storedToken !== null && storedToken === token;
};

// Secure fetch wrapper with timeout and error handling
export const secureFetch = async (
  url: string, 
  options: RequestInit = {},
  timeoutMs: number = 30000
): Promise<Response> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        ...options.headers,
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': getCSRFToken(),
      },
      credentials: 'same-origin',
    });
    
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
};

// Password strength checker
export const checkPasswordStrength = (password: string): {
  score: number;
  feedback: string[];
} => {
  const feedback: string[] = [];
  let score = 0;
  
  if (password.length >= 8) score++;
  else feedback.push('Password should be at least 8 characters');
  
  if (password.length >= 12) score++;
  
  if (/[a-z]/.test(password)) score++;
  else feedback.push('Add lowercase letters');
  
  if (/[A-Z]/.test(password)) score++;
  else feedback.push('Add uppercase letters');
  
  if (/[0-9]/.test(password)) score++;
  else feedback.push('Add numbers');
  
  if (/[^a-zA-Z0-9]/.test(password)) score++;
  else feedback.push('Add special characters');
  
  return { score, feedback };
};

// Content Security Policy nonce generator
export const generateNonce = (): string => {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array));
};

// Prevent prototype pollution
export const safeJsonParse = <T>(json: string, fallback: T): T => {
  try {
    const parsed = JSON.parse(json);
    // Prevent prototype pollution
    if (parsed && typeof parsed === 'object') {
      delete parsed.__proto__;
      delete parsed.constructor;
      delete parsed.prototype;
    }
    return parsed as T;
  } catch {
    return fallback;
  }
};

// Validate file upload
export const validateFileUpload = (
  file: File,
  allowedTypes: string[] = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  maxSizeMB: number = 5
): { valid: boolean; error?: string } => {
  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: `File type ${file.type} not allowed` };
  }
  
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  if (file.size > maxSizeBytes) {
    return { valid: false, error: `File size exceeds ${maxSizeMB}MB limit` };
  }
  
  // Check for double extensions
  const nameParts = file.name.split('.');
  if (nameParts.length > 2) {
    return { valid: false, error: 'Invalid file name' };
  }
  
  return { valid: true };
};

// Secure redirect - only allow same-origin or whitelisted domains
const ALLOWED_REDIRECT_DOMAINS = [
  'ramestta.com',
  'ramascan.com',
  'ramabridge.com',
  'ramaswap.com',
];

export const secureRedirect = (url: string): void => {
  try {
    const parsed = new URL(url, window.location.origin);
    
    // Allow same-origin redirects
    if (parsed.origin === window.location.origin) {
      window.location.href = url;
      return;
    }
    
    // Check against whitelist
    const hostname = parsed.hostname;
    const isAllowed = ALLOWED_REDIRECT_DOMAINS.some(domain => 
      hostname === domain || hostname.endsWith(`.${domain}`)
    );
    
    if (isAllowed) {
      window.location.href = url;
    } else {
      console.error('Redirect blocked: domain not in whitelist');
    }
  } catch {
    console.error('Invalid redirect URL');
  }
};
