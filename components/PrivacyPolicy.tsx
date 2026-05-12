import React from 'react';
import { Helmet } from 'react-helmet-async';

export const PrivacyPolicy: React.FC<{ onNavigate: (view: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col bg-background pt-24 md:pt-28 min-h-screen">
      <Helmet>
        <title>Privacy Policy | Saganix Studios — AISU NXT LLP</title>
        <meta name="description" content="Privacy Policy for Saganix Studios (AISU NXT LLP). Learn how we collect, store and protect your data. AI film production studio based in Hyderabad, India." />
        <link rel="canonical" href="https://saganixstudios.com/privacy" />
      </Helmet>
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-[900px] mx-auto w-full">

        <p className="font-mono text-xs text-[#D8B336] uppercase tracking-widest mb-6 border-l border-[#D8B336] pl-4">
          Legal
        </p>
        <h1 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight text-ivory mb-4">
          Privacy Policy
        </h1>
        <p className="font-mono text-[10px] text-[#9D9483] uppercase tracking-widest mb-16">
          Last updated: May 2026
        </p>

        <div className="flex flex-col gap-12 font-body text-[#CFC7B2] text-sm md:text-base leading-relaxed">

          <div>
            <h2 className="font-display font-bold text-lg uppercase tracking-tight text-ivory mb-4">1. About This Policy</h2>
            <p>
              This Privacy Policy explains how <strong className="text-ivory">AISU NXT LLP</strong>, operating under the brand name <strong className="text-ivory">Saganix Studios</strong> ("we", "us", "our"), collects, uses, and protects information you provide when you visit <strong className="text-ivory">saganixstudios.com</strong> ("the Website") or contact us for services.
            </p>
            <p className="mt-4">
              By using this Website or submitting any form, you agree to the terms of this Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-lg uppercase tracking-tight text-ivory mb-4">2. Information We Collect</h2>
            <p className="mb-4">We collect the following information when you submit an enquiry or booking form on our Website:</p>
            <ul className="flex flex-col gap-2 pl-4">
              {["Your name", "Email address", "Phone number", "Project details or messages you provide"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1 h-1 bg-[#D8B336]/50 mt-2 shrink-0 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              We also collect non-personal data automatically through <strong className="text-ivory">Google Analytics</strong>, including browser type, device type, pages visited, time spent on pages, and geographic location (city/country level). This data is anonymised and used solely to understand how visitors use our Website.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-lg uppercase tracking-tight text-ivory mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information you provide to:</p>
            <ul className="flex flex-col gap-2 pl-4">
              {[
                "Respond to your project enquiries and booking requests",
                "Follow up on potential collaborations or service engagements",
                "Maintain an internal leads database for studio operations",
                "Improve our Website and services using anonymised analytics data"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1 h-1 bg-[#D8B336]/50 mt-2 shrink-0 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              We do <strong className="text-ivory">not</strong> sell, rent, or trade your personal information to any third party.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-lg uppercase tracking-tight text-ivory mb-4">4. Data Storage</h2>
            <p>
              Information submitted through our forms is stored securely in our internal database. Access is restricted to authorised Saganix Studios team members only. We retain your data for as long as necessary to manage our business relationship with you or as required by applicable law.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-lg uppercase tracking-tight text-ivory mb-4">5. Google Analytics</h2>
            <p>
              We use Google Analytics to collect anonymised usage data about visitors to our Website. Google Analytics uses cookies to collect this data. You can opt out of Google Analytics tracking by installing the{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-ivory transition-colors">
                Google Analytics Opt-out Browser Add-on
              </a>.
            </p>
            <p className="mt-4">
              For more information on how Google uses data, visit{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-ivory transition-colors">
                Google's Privacy Policy
              </a>.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-lg uppercase tracking-tight text-ivory mb-4">6. Cookies</h2>
            <p>
              Our Website uses cookies for analytics purposes via Google Analytics. Cookies are small text files stored on your device. You can disable cookies through your browser settings, though this may affect your experience on the Website.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-lg uppercase tracking-tight text-ivory mb-4">7. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="flex flex-col gap-2 pl-4">
              {[
                "Request access to the personal data we hold about you",
                "Request correction of inaccurate data",
                "Request deletion of your data from our records",
                "Withdraw consent for us to contact you"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1 h-1 bg-[#D8B336]/50 mt-2 shrink-0 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              To exercise any of these rights, email us at{' '}
              <a href="mailto:studio@saganixstudios.com" className="text-gold hover:text-ivory transition-colors">
                studio@saganixstudios.com
              </a>.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-lg uppercase tracking-tight text-ivory mb-4">8. Third-Party Links</h2>
            <p>
              Our Website may contain links to third-party websites including Instagram, LinkedIn, and WhatsApp. We are not responsible for the privacy practices of those platforms and encourage you to review their respective privacy policies.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-lg uppercase tracking-tight text-ivory mb-4">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. Continued use of the Website after changes are posted constitutes your acceptance of the revised policy.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-lg uppercase tracking-tight text-ivory mb-4">10. Contact</h2>
            <p>For any privacy-related questions or requests, contact us at:</p>
            <div className="mt-4 flex flex-col gap-1 border-l border-[#D8B336]/30 pl-4">
              <span className="text-ivory font-medium">AISU NXT LLP (Saganix Studios)</span>
              <span>36/4, First Floor, GK Colony, Neredmet,</span>
              <span>Hyderabad, Telangana 500094, India</span>
              <a href="mailto:studio@saganixstudios.com" className="text-gold hover:text-ivory transition-colors mt-1">
                studio@saganixstudios.com
              </a>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-gold/10">
          <button
            onClick={() => onNavigate('home')}
            className="font-mono text-xs text-gold hover:text-ivory uppercase tracking-widest transition-colors inline-flex items-center gap-3"
          >
            <span className="w-8 h-[1px] bg-gold" />
            Back to Home
          </button>
        </div>

      </section>
    </div>
  );
};
