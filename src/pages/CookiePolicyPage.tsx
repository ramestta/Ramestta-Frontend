import React from 'react';
import SEO from '../components/SEO';

const CookiePolicyPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Cookie Policy - Ramestta"
        description="Cookie Policy for Ramestta blockchain platform"
      />

      <div className="min-h-screen bg-black pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Cookie Policy</h1>
          <p className="text-gray-400 mb-8">Last Updated: October 19, 2025</p>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-400 mb-4">1. What Are Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with
                a better experience by remembering your preferences and understanding how you use our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-400 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ramestta uses cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Essential functionality and platform operations</li>
                <li>User authentication and session management</li>
                <li>Security and fraud prevention</li>
                <li>Analytics and performance monitoring</li>
                <li>Personalization of user experience</li>
                <li>Understanding user behavior and preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-400 mb-4">3. Types of Cookies We Use</h2>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">3.1 Essential Cookies</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                These cookies are necessary for the website to function properly. They enable core functionality such as:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>User authentication and session management</li>
                <li>Security features and fraud prevention</li>
                <li>Network routing and load balancing</li>
                <li>Wallet connection persistence</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong>Storage Duration:</strong> Session or up to 1 year
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">3.2 Analytics Cookies</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                These cookies help us understand how visitors interact with our platform by collecting anonymous information:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Page views and navigation patterns</li>
                <li>Time spent on pages</li>
                <li>Traffic sources and referrals</li>
                <li>Device and browser information</li>
                <li>Error tracking and performance metrics</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong>Storage Duration:</strong> Up to 2 years
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">3.3 Functionality Cookies</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                These cookies enable enhanced functionality and personalization:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Language preferences</li>
                <li>Theme and display settings</li>
                <li>Recently viewed transactions or content</li>
                <li>Customized dashboard layouts</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong>Storage Duration:</strong> Up to 1 year
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">3.4 Third-Party Cookies</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may use third-party services that set their own cookies:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Google Analytics for website analytics</li>
                <li>Wallet providers (MetaMask, WalletConnect, etc.)</li>
                <li>Content delivery networks (CDN)</li>
                <li>Social media integration</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-400 mb-4">4. Blockchain-Specific Storage</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                In addition to cookies, we use browser storage technologies to enhance your blockchain experience:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li><strong>Local Storage:</strong> Stores wallet preferences, transaction history cache, and user settings</li>
                <li><strong>Session Storage:</strong> Temporary storage for active sessions and pending transactions</li>
                <li><strong>IndexedDB:</strong> Stores larger datasets like transaction logs and smart contract ABIs</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-400 mb-4">5. Managing Cookies</h2>
              <h3 className="text-xl font-semibold text-gray-200 mb-3">5.1 Browser Settings</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>View cookies stored by websites</li>
                <li>Delete existing cookies</li>
                <li>Block all cookies or specific types</li>
                <li>Set preferences for accepting cookies</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                Please note that blocking essential cookies may impact the functionality of our platform.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">5.2 Opt-Out Options</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                You can opt out of analytics cookies through:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Google Analytics opt-out browser add-on</li>
                <li>Our cookie preference center (if available)</li>
                <li>Do Not Track (DNT) browser settings</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-400 mb-4">6. Cookie Lifespan</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Cookies have different lifespans:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain until expiration date or manual deletion</li>
                <li><strong>First-Party Cookies:</strong> Set by Ramestta directly</li>
                <li><strong>Third-Party Cookies:</strong> Set by external services we use</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-400 mb-4">7. Updates to Cookie Policy</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may update this Cookie Policy periodically to reflect changes in our practices or for operational, legal, or regulatory reasons.
                We will notify you of any material changes by updating the "Last Updated" date at the top of this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-400 mb-4">8. International Users</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you are accessing our platform from outside your country of residence, please note that cookies may be transferred to
                and processed in countries with different data protection laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-400 mb-4">9. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have questions about our use of cookies, please contact us at:
              </p>
              <p className="text-gray-300 leading-relaxed">
                Email: privacy@ramestta.com<br />
                Website: https://ramestta.com/contact
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-400 mb-4">10. Additional Resources</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                For more information about cookies and online privacy:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>AllAboutCookies.org - Comprehensive cookie information</li>
                <li>YourOnlineChoices.eu - EU cookie opt-out tool</li>
                <li>NetworkAdvertising.org - NAI opt-out tool</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiePolicyPage;
