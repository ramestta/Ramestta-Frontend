import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
}

const ContactSubmissions = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get('/api/contacts');

        if (res.data && Array.isArray(res.data)) {
          setContacts(res.data);
          setError(null);
        } else if (res.data && typeof res.data === 'object') {
          throw new Error("Received object instead of contact array.");
        } else {
          throw new Error("Invalid or empty response received.");
        }
      } catch (err: any) {
        console.error("Error fetching contacts:", err);
        setError(err?.message || "Failed to fetch contact submissions.");
        setContacts([]);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="bg-black text-white p-4 sm:p-6 rounded shadow">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">Contact Submissions</h2>

      {error && <p className="text-red-500 mb-4 text-center text-sm">{error}</p>}

      <div className="max-w-6xl mx-auto">
        <div className="overflow-x-auto -mx-4 sm:mx-0" style={{WebkitOverflowScrolling: 'touch'}}>
          <div className="inline-block min-w-full align-middle px-4 sm:px-0">
            <table className="w-full min-w-[500px] border border-gray-700 text-xs sm:text-sm bg-gray-900/50 rounded-lg">
              <thead className="bg-gray-800 text-gray-200">
                <tr>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 border-r border-gray-700 text-xs sm:text-sm whitespace-nowrap">#</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 border-r border-gray-700 text-xs sm:text-sm whitespace-nowrap">Name</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 border-r border-gray-700 text-xs sm:text-sm whitespace-nowrap">Email</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm whitespace-nowrap">Message</th>
                </tr>
              </thead>
              <tbody>
                {contacts.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center py-6 text-gray-400 text-xs sm:text-sm">
                      No submissions yet.
                    </td>
                  </tr>
                ) : (
                  contacts.map((contact, index) => (
                    <tr key={contact.id} className="border-t border-gray-700 hover:bg-gray-800/50 transition-colors">
                      <td className="px-2 sm:px-4 py-2 sm:py-3 border-r border-gray-700 text-xs sm:text-sm whitespace-nowrap">{index + 1}</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 border-r border-gray-700 text-xs sm:text-sm whitespace-nowrap">{contact.name}</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 border-r border-gray-700 text-xs sm:text-sm whitespace-nowrap">{contact.email}</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">{contact.message}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSubmissions;
