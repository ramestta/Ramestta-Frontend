import React, { useState } from 'react';
import { X, Upload, Send, Check } from 'lucide-react';
import toast from 'react-hot-toast';

interface ProjectSubmissionFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectSubmissionForm: React.FC<ProjectSubmissionFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    projectName: '',
    category: '',
    website: '',
    description: '',
    contactName: '',
    email: '',
    twitter: '',
    github: '',
    deployed: false,
    contractAddress: '',
    features: '',
    teamSize: '',
    fundingStatus: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailBody = `
New Project Submission for Ramestta Ecosystem

Project Details:
================
Project Name: ${formData.projectName}
Category: ${formData.category}
Website: ${formData.website}
Description: ${formData.description}

Contact Information:
===================
Contact Name: ${formData.contactName}
Email: ${formData.email}
Twitter: ${formData.twitter || 'N/A'}
GitHub: ${formData.github || 'N/A'}

Technical Details:
=================
Deployed on Ramestta: ${formData.deployed ? 'Yes' : 'No'}
Contract Address: ${formData.contractAddress || 'N/A'}
Key Features: ${formData.features}

Team Information:
================
Team Size: ${formData.teamSize}
Funding Status: ${formData.fundingStatus}

---
Submitted on: ${new Date().toLocaleString()}
      `.trim();

      const mailtoLink = `mailto:support@ramestta.com?subject=${encodeURIComponent(`Ecosystem Project Submission: ${formData.projectName}`)}&body=${encodeURIComponent(emailBody)}`;

      window.location.href = mailtoLink;

      toast.success('Email client opened! Please send the email to complete submission.');

      setTimeout(() => {
        setFormData({
          projectName: '',
          category: '',
          website: '',
          description: '',
          contactName: '',
          email: '',
          twitter: '',
          github: '',
          deployed: false,
          contractAddress: '',
          features: '',
          teamSize: '',
          fundingStatus: ''
        });
        onClose();
      }, 2000);

    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to open email client. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100000] flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-2xl max-w-4xl w-full my-4 sm:my-8 border border-primary-500/20 shadow-2xl shadow-primary-500/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex items-center justify-between p-4 sm:p-6 border-b border-gray-700/50 backdrop-blur-sm">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Submit Your Project</h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">Join the Ramestta ecosystem</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
          >
            <X className="text-gray-300" size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="relative z-10 p-4 sm:p-6 space-y-4 sm:space-y-6 max-h-[calc(100vh-12rem)] sm:max-h-[calc(100vh-10rem)] overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="group">
              <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                Project Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all backdrop-blur-sm text-sm sm:text-base"
                placeholder="Your project name"
              />
            </div>

            <div className="group">
              <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                Category <span className="text-red-400">*</span>
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all backdrop-blur-sm text-sm sm:text-base"
              >
                <option value="">Select a category</option>
                <option value="DeFi">DeFi</option>
                <option value="NFTs">NFTs</option>
                <option value="Gaming">Gaming</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="Social">Social</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>

          <div className="group">
            <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
              Website <span className="text-red-400">*</span>
            </label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all backdrop-blur-sm text-sm sm:text-base"
              placeholder="https://yourproject.com"
            />
          </div>

          <div className="group">
            <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
              Project Description <span className="text-red-400">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none backdrop-blur-sm text-sm sm:text-base"
              placeholder="Describe your project and what makes it unique..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="group">
              <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                Contact Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all backdrop-blur-sm text-sm sm:text-base"
                placeholder="Your name"
              />
            </div>

            <div className="group">
              <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all backdrop-blur-sm text-sm sm:text-base"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="group">
              <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                Twitter <span className="text-gray-500 text-xs">(Optional)</span>
              </label>
              <input
                type="text"
                name="twitter"
                value={formData.twitter}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all backdrop-blur-sm text-sm sm:text-base"
                placeholder="@yourproject"
              />
            </div>

            <div className="group">
              <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                GitHub <span className="text-gray-500 text-xs">(Optional)</span>
              </label>
              <input
                type="url"
                name="github"
                value={formData.github}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all backdrop-blur-sm text-sm sm:text-base"
                placeholder="https://github.com/yourproject"
              />
            </div>
          </div>

          <div className="relative">
            <div
              className="flex items-start space-x-3 p-3 sm:p-4 bg-gradient-to-r from-gray-800/50 to-gray-800/30 rounded-xl border border-gray-700 hover:border-primary-500/50 transition-all cursor-pointer group backdrop-blur-sm"
              onClick={(e) => {
                e.preventDefault();
                setFormData(prev => ({ ...prev, deployed: !prev.deployed }));
              }}
            >
              <div className="relative flex-shrink-0">
                <input
                  type="checkbox"
                  name="deployed"
                  checked={formData.deployed}
                  onChange={(e) => {
                    e.stopPropagation();
                    setFormData(prev => ({ ...prev, deployed: !prev.deployed }));
                  }}
                  className="sr-only"
                />
                <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg border-2 flex items-center justify-center transition-all pointer-events-none ${
                  formData.deployed
                    ? 'bg-gradient-to-br from-primary-500 to-secondary-500 border-primary-500 scale-100'
                    : 'border-gray-600 bg-gray-900/50 group-hover:border-primary-500/50'
                }`}>
                  {formData.deployed && (
                    <Check className="text-white" size={14} strokeWidth={3} />
                  )}
                </div>
              </div>
              <div className="flex-1 pt-0.5">
                <span className="text-xs sm:text-sm text-gray-300 font-medium">Project is already deployed on Ramestta blockchain</span>
                <p className="text-xs text-gray-500 mt-0.5">Check this if your smart contract is live on Ramestta network</p>
              </div>
            </div>
          </div>

          {formData.deployed && (
            <div className="group animate-in fade-in slide-in-from-top-2 duration-300">
              <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                Contract Address
              </label>
              <input
                type="text"
                name="contractAddress"
                value={formData.contractAddress}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all font-mono text-xs sm:text-sm backdrop-blur-sm"
                placeholder="0x..."
              />
            </div>
          )}

          <div className="group">
            <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
              Key Features <span className="text-red-400">*</span>
            </label>
            <textarea
              name="features"
              value={formData.features}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none backdrop-blur-sm text-sm sm:text-base"
              placeholder="List the main features of your project..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="group">
              <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                Team Size <span className="text-red-400">*</span>
              </label>
              <select
                name="teamSize"
                value={formData.teamSize}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all backdrop-blur-sm text-sm sm:text-base"
              >
                <option value="">Select team size</option>
                <option value="1-5">1-5 members</option>
                <option value="6-10">6-10 members</option>
                <option value="11-20">11-20 members</option>
                <option value="20+">20+ members</option>
              </select>
            </div>

            <div className="group">
              <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                Funding Status <span className="text-red-400">*</span>
              </label>
              <select
                name="fundingStatus"
                value={formData.fundingStatus}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all backdrop-blur-sm text-sm sm:text-base"
              >
                <option value="">Select funding status</option>
                <option value="Bootstrapped">Bootstrapped</option>
                <option value="Pre-seed">Pre-seed</option>
                <option value="Seed">Seed</option>
                <option value="Series A+">Series A+</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 sm:space-x-4 pt-4 sm:pt-6 border-t border-gray-700/50">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gray-800/80 hover:bg-gray-700 text-white font-medium transition-all hover:scale-105 active:scale-95 backdrop-blur-sm text-sm sm:text-base"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-medium transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:scale-105 active:scale-95 text-sm sm:text-base"
            >
              <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span>{isSubmitting ? 'Opening Email...' : 'Submit Project'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectSubmissionForm;
