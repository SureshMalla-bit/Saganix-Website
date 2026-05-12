import React from 'react';
import { Helmet } from 'react-helmet-async';

export const Terms: React.FC<{ onNavigate: (view: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col bg-background pt-24 md:pt-28 min-h-screen">
      <Helmet>
        <title>Terms of Service | Saganix Studios — AISU NXT LLP</title>
        <meta name="description" content="Terms of Service for Saganix Studios (AISU NXT LLP). Governing law: Hyderabad, Telangana, India. AI film production studio services, IP rights and client responsibilities." />
        <link rel="canonical" href="https://saganixstudios.com/terms" />
      </Helmet>
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-[900px] mx-auto w-full">

        <p className="font-mono text-xs text-[#D8B336] uppercase tracking-widest mb-6 border-l border-[#D8B336] pl-4">
          Legal
        </p>
        <h1 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight text-ivory mb-4">
          Terms of Service
        </h1>
        <p className="font-mono text-[10px] text-[#9D9483] uppercase tracking-widest mb-16">
          Last updated: May 2026
        </p>

        <div className="flex flex-col gap-12 font-body text-[#CFC7B2] text-sm md:text-base leading-relaxed">

          <div>
            <h2 className="font-display font-bold text-lg uppercase tracking-tight text-ivory mb-4">1. About These Terms</h2>
            <p>
              These Terms of Service govern your use of the website <strong className="text-ivory">saganixstudios.com</strong> and any services offered by <strong className="text-ivory">AISU NXT LLP</strong>, operating under the brand name <strong className="text-ivory">Saganix Studios</strong> ("we", "us", "our"), a company registered in India.
            </p>
            <p className="mt-4">
              By accessing this Website or engaging our services, you agree to be bound by these Terms. If you do not agree, please do not use this Website.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-lg uppercase tracking-tight text-ivory mb-4">2. Services</h2>
            <p className="mb-4">
              Saganix Studios provides AI film and visual production services including but not limited to:
            </p>
            <ul className="flex flex-col gap-2 pl-4">
              {[
                "Full-length AI movie production",
                "Short films and trailers",
                "Pre-visualisation and storyboarding",
                "AI visual effects (VFX)",
                "AI brand commercials and campaign visuals"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1 h-1 bg-[#D8B336]/50 mt-2 shrink-0 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              All services are subject to a separate written agreement or project contract between Saganix Studios and the client prior to commencement of work.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-lg uppercase tracking-tight text-ivory mb-4">3. Enquiries and Bookings</h2>
            <p>
              Submitting a form or booking a call on this Website does not constitute a binding agreement or guarantee of services. It is an expression of interest. A formal engagement begins only when both parties have agreed to and signed a project contract.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-lg uppercase tracking-tight text-ivory mb-4">4. Payments</h2>
            <p>
              No payments are processed through this Website. All payment terms, schedules, and methods are agreed upon separately in the project contract between Saganix Studios and the client.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-lg uppercase tracking-tight text-ivory mb-4">5. No Refund Policy</h2>
            <p>
              All payments made toward Saganix Studios projects are <strong className="text-ivory">non-refundable</strong> unless explicitly stated otherwise in the signed project contract. Once work has commenced on a project, no refunds will be issued for work already completed.
            </p>
            <p className="mt-4">
              Any disputes regarding payments or deliverables must be raised in writing to{' '}
              <a href="mailto:studio@saganixstudios.com" className="text-gold hover:text-ivory transition-colors">
                studio@saganixstudios.com
              </a>{' '}
              within 7 days of the delivery of the relevant work.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-lg uppercase tracking-tight text-ivory mb-4">6. Intellectual Property</h2>
            <p>
              All content on this Website — including text, visuals, logos, film posters, and design elements — is the property of AISU NXT LLP / Saganix Studios and is protected under applicable intellectual property laws.
            </p>
            <p className="mt-4">
              Intellectual property rights for client project deliverables are governed by the individual project contract. Saganix Studios retains the right to display completed work in its portfolio unless a confidentiality clause is agreed upon in writing.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-lg uppercase tracking-tight text-ivory mb-4">7. Client Responsibilities</h2>
            <p className="mb-4">By engaging our services, the client agrees to:</p>
            <ul className="flex flex-col gap-2 pl-4">
              {[
                "Provide accurate project briefs, reference materials, and feedback in a timely manner",
                "Ensure they have rights to any materials submitted to Saganix Studios for use in production",
                "Not use Saganix Studios deliverables for unlawful, defamatory, or infringing purposes",
                "Adhere to payment schedules agreed in the project contract"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1 h-1 bg-[#D8B336]/50 mt-2 shrink-0 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-lg uppercase tracking-tight text-ivory mb-4">8. Limitation of Liability</h2>
            <p>
              Saganix Studios will not be liable for any indirect, incidental, or consequential damages arising from the use of this Website or our services. Our total liability for any claim related to our services will not exceed the amount paid by the client for the specific project in dispute.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-lg uppercase tracking-tight text-ivory mb-4">9. Website Use</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="flex flex-col gap-2 pl-4">
              {[
                "Copy, reproduce, or redistribute any content from this Website without written permission",
                "Use this Website for any unlawful purpose",
                "Attempt to gain unauthorised access to any part of the Website or its infrastructure",
                "Submit false or misleading information through any form on this Website"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1 h-1 bg-[#D8B336]/50 mt-2 shrink-0 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-lg uppercase tracking-tight text-ivory mb-4">10. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes arising from these Terms or the use of our services shall be subject to the exclusive jurisdiction of the courts in <strong className="text-ivory">Hyderabad, Telangana, India</strong>.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-lg uppercase tracking-tight text-ivory mb-4">11. Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated date. Continued use of the Website or our services after changes are posted constitutes your acceptance of the revised Terms.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-lg uppercase tracking-tight text-ivory mb-4">12. Contact</h2>
            <p>For any questions regarding these Terms, contact us at:</p>
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
