import React from 'react';
import SEO from '../components/SEO';

const TermsOfServicePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms of Service - Ramestta"
        description="Terms of Service for Ramestta blockchain platform"
      />

      <div className="min-h-screen bg-black pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Terms of Service</h1>
          <p className="text-gray-400 mb-8">Last Updated: October 19, 2025</p>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-400 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                By accessing or using the Ramestta blockchain platform and related services, you agree to be bound by these Terms of Service.
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-400 mb-4">2. Description of Service</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ramestta is a Layer-3 blockchain platform built on Polygon, secured by Ethereum. We provide:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Blockchain infrastructure and network access</li>
                <li>Smart contract deployment and execution</li>
                <li>Token transfer and transaction processing</li>
                <li>Decentralized application (dApp) support</li>
                <li>Validator and staking services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-400 mb-4">3. User Responsibilities</h2>
              <h3 className="text-xl font-semibold text-gray-200 mb-3">3.1 Account Security</h3>
              <p className="text-gray-300 leading-relaxed mb-4">You are responsible for:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Maintaining the confidentiality of your private keys and wallet credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized access</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">3.2 Prohibited Activities</h3>
              <p className="text-gray-300 leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Engage in fraudulent or deceptive practices</li>
                <li>Interfere with or disrupt the platform's operation</li>
                <li>Deploy malicious smart contracts or code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use the platform for money laundering or terrorist financing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-400 mb-4">4. Wallet and Private Keys</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You acknowledge that:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>We do not custody, control, or have access to your private keys or funds</li>
                <li>You are solely responsible for securing your private keys</li>
                <li>Loss of private keys may result in permanent loss of assets</li>
                <li>Transactions on the blockchain are irreversible</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-400 mb-4">5. Fees and Gas Costs</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Users are responsible for paying all applicable network fees (gas costs) for transactions on the Ramestta blockchain.
                Fees are determined by network congestion and transaction complexity. We reserve the right to adjust fee structures with notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-400 mb-4">6. Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                All content, trademarks, and intellectual property related to the Ramestta platform are owned by Rama Foundation or its licensors.
                You may not use our intellectual property without prior written consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-400 mb-4">7. Disclaimers and Limitations</h2>
              <h3 className="text-xl font-semibold text-gray-200 mb-3">7.1 No Warranties</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                The platform is provided "as is" without warranties of any kind. We do not guarantee:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Uninterrupted or error-free operation</li>
                <li>Security from unauthorized access or attacks</li>
                <li>Accuracy or completeness of blockchain data</li>
                <li>Compatibility with third-party services</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">7.2 Limitation of Liability</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                To the maximum extent permitted by law, Ramestta and Rama Foundation shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, including loss of profits, data, or assets.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-400 mb-4">8. Smart Contracts</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Smart contracts deployed on Ramestta are autonomous and immutable once deployed. We are not responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Bugs, vulnerabilities, or errors in smart contract code</li>
                <li>Loss of funds due to smart contract failures</li>
                <li>Third-party smart contracts or dApps</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-400 mb-4">9. Regulatory Compliance</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You agree to comply with all applicable laws and regulations in your jurisdiction, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Tax obligations related to cryptocurrency transactions</li>
                <li>Securities and financial regulations</li>
                <li>Anti-money laundering (AML) requirements</li>
                <li>Know Your Customer (KYC) procedures where applicable</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-400 mb-4">10. Termination</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We reserve the right to suspend or terminate your access to our services at any time, without notice, for conduct that
                we believe violates these Terms of Service or is harmful to other users, us, or third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-400 mb-4">11. Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may modify these Terms of Service at any time. Continued use of the platform after changes constitutes acceptance
                of the modified terms. We will provide notice of significant changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-400 mb-4">12. Dispute Resolution</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Any disputes arising from these terms shall be resolved through binding arbitration in accordance with applicable laws.
                You waive any right to participate in class action lawsuits.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-400 mb-4">13. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                For questions regarding these Terms of Service, please contact us at:
              </p>
              <p className="text-gray-300 leading-relaxed">
                Email: legal@ramestta.com<br />
                Website: https://ramestta.com/contact
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfServicePage;
