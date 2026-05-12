
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

// Google Apps Script URL
const SCRIPT_URL: string = "https://script.google.com/macros/s/AKfycbz_jsmamor3Q-UKIqlZ0UQb3Ki1qUAQop-dwThAefkZgi6zCkmsunE2NzgxSuE9pjmd/exec"; 

export const Contact: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    vision: '',
    references: ''
  });
  
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation Logic
  const validateForm = () => {
    const newErrors: Partial<typeof formData> = {};
    let isValid = true;

    if (!formData.name.trim()) { newErrors.name = "Required"; isValid = false; }
    if (!formData.email.trim()) { newErrors.email = "Required"; isValid = false; }
    if (!formData.projectType) { newErrors.projectType = "Required"; isValid = false; }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, val]) => data.append(key, val));

      if (SCRIPT_URL && SCRIPT_URL !== "") {
        await fetch(SCRIPT_URL, { method: 'POST', body: data, mode: 'no-cors' });
      } else {
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission failed:", error);
      setIsSubmitting(false);
      alert("Error submitting. Please try again.");
    }
  };

  return (
    <>
    <Helmet>
      <title>Contact Saganix Studios — Book an AI Film Project | Hyderabad, India</title>
      <meta name="description" content="Start your AI film project with Saganix Studios. Contact India's leading AI film production studio in Hyderabad for movies, short films, AI VFX, and brand commercials. Email: studio@saganixstudios.com" />
      <link rel="canonical" href="https://saganixstudios.com/contact" />
      <meta property="og:title" content="Contact Saganix Studios — Book an AI Film Project | Hyderabad" />
      <meta property="og:description" content="Ready to create your AI film? Contact Saganix Studios in Hyderabad — India's leading AI film and visual production studio." />
      <meta property="og:url" content="https://saganixstudios.com/contact" />
    </Helmet>
    <div className="flex flex-col bg-background pt-24 md:pt-28">
      
      {/* 1. Contact Hero */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-16 px-6 md:px-12 max-w-[1440px] mx-auto w-full relative">
        <div className="max-w-4xl">
          <p className="font-mono text-xs text-[#D8B336] uppercase tracking-widest mb-6 border-l border-[#D8B336] pl-4">
            CONTACT US
          </p>
          <h1 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight mb-8 leading-[1.1]">
            <span className="text-ivory block mb-2">LET’S BUILD YOUR NEXT</span>
            <span className="block text-transparent" style={{ WebkitTextStroke: '1px #CFC7B2' }}>VISUAL WORLD.</span>
          </h1>
          <p className="font-body text-[#CFC7B2] text-base md:text-lg max-w-2xl leading-relaxed">
            Tell us what you’re building — a film, campaign, character system, ad creative, or cinematic world. We’ll respond with the right production direction.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24 px-6 md:px-12 max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Form */}
          <div className="lg:col-span-8 bg-warm-black border border-gold/10 p-8 md:p-12">
            {!isSubmitted ? (
               <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name */}
                    <div className="flex flex-col gap-2 relative">
                       <label className="font-mono text-[10px] text-gold uppercase tracking-widest">Full Name</label>
                       <input 
                         type="text" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)}
                         className={`bg-transparent border-b ${errors.name ? 'border-red-500' : 'border-gold/20'} py-2 font-body text-ivory focus:outline-none focus:border-gold transition-colors`}
                       />
                    </div>
                    {/* Email */}
                    <div className="flex flex-col gap-2 relative">
                       <label className="font-mono text-[10px] text-gold uppercase tracking-widest">Email Address</label>
                       <input 
                         type="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)}
                         className={`bg-transparent border-b ${errors.email ? 'border-red-500' : 'border-gold/20'} py-2 font-body text-ivory focus:outline-none focus:border-gold transition-colors`}
                       />
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Phone */}
                    <div className="flex flex-col gap-2 relative">
                       <label className="font-mono text-[10px] text-gold uppercase tracking-widest">Phone / WhatsApp</label>
                       <input 
                         type="tel" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)}
                         className="bg-transparent border-b border-gold/20 py-2 font-body text-ivory focus:outline-none focus:border-gold transition-colors"
                       />
                    </div>
                    {/* Company */}
                    <div className="flex flex-col gap-2 relative">
                       <label className="font-mono text-[10px] text-gold uppercase tracking-widest">Company / Brand Name</label>
                       <input 
                         type="text" value={formData.company} onChange={(e) => handleInputChange('company', e.target.value)}
                         className="bg-transparent border-b border-gold/20 py-2 font-body text-ivory focus:outline-none focus:border-gold transition-colors"
                       />
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Project Type */}
                    <div className="flex flex-col gap-2 relative">
                       <label className="font-mono text-[10px] text-gold uppercase tracking-widest">Project Type</label>
                       <select 
                         value={formData.projectType} onChange={(e) => handleInputChange('projectType', e.target.value)}
                         className={`bg-warm-black border-b ${errors.projectType ? 'border-red-500' : 'border-gold/20'} py-2 font-body text-ivory focus:outline-none focus:border-gold transition-colors appearance-none`}
                       >
                         <option value="" disabled>Select Type</option>
                         {["AI Film Sequence", "Brand Film", "Mythological Visuals", "Character Design", "AI UGC Ads", "Product Campaign", "Music Video Visuals", "Other"].map(o => <option key={o} value={o}>{o}</option>)}
                       </select>
                    </div>
                    {/* Budget */}
                    <div className="flex flex-col gap-2 relative">
                       <label className="font-mono text-[10px] text-gold uppercase tracking-widest">Budget Range</label>
                       <select 
                         value={formData.budget} onChange={(e) => handleInputChange('budget', e.target.value)}
                         className={`bg-warm-black border-b border-gold/20 py-2 font-body text-ivory focus:outline-none focus:border-gold transition-colors appearance-none`}
                       >
                         <option value="" disabled>Select Budget</option>
                         {["Under ₹25,000", "₹25,000–₹75,000", "₹75,000–₹2,00,000", "₹2,00,000+", "Not sure yet"].map(o => <option key={o} value={o}>{o}</option>)}
                       </select>
                    </div>
                    {/* Timeline */}
                    <div className="flex flex-col gap-2 relative">
                       <label className="font-mono text-[10px] text-gold uppercase tracking-widest">Timeline</label>
                       <select 
                         value={formData.timeline} onChange={(e) => handleInputChange('timeline', e.target.value)}
                         className={`bg-warm-black border-b border-gold/20 py-2 font-body text-ivory focus:outline-none focus:border-gold transition-colors appearance-none`}
                       >
                         <option value="" disabled>Select Timeline</option>
                         {["Urgent", "1–2 weeks", "3–4 weeks", "1–2 months", "Flexible"].map(o => <option key={o} value={o}>{o}</option>)}
                       </select>
                    </div>
                 </div>

                 {/* Describe Vision */}
                 <div className="flex flex-col gap-2 relative">
                    <label className="font-mono text-[10px] text-gold uppercase tracking-widest">Describe Your Vision</label>
                    <textarea 
                      rows={4} value={formData.vision} onChange={(e) => handleInputChange('vision', e.target.value)}
                      className="bg-transparent border-b border-gold/20 py-2 font-body text-ivory focus:outline-none focus:border-gold transition-colors resize-none"
                    />
                 </div>

                 {/* References */}
                 <div className="flex flex-col gap-2 relative">
                    <label className="font-mono text-[10px] text-gold uppercase tracking-widest">Reference Links</label>
                    <input 
                      type="text" value={formData.references} onChange={(e) => handleInputChange('references', e.target.value)} placeholder="Google Drive, Frame.io, YouTube..."
                      className="bg-transparent border-b border-gold/20 py-2 font-body text-ivory focus:outline-none focus:border-gold transition-colors"
                    />
                 </div>

                 <button type="submit" disabled={isSubmitting} className="mt-8 px-8 py-4 bg-gold hover:bg-gold/90 text-background font-mono text-sm font-bold tracking-widest uppercase transition-all duration-300 w-full md:w-auto self-start">
                   {isSubmitting ? 'Sending...' : 'SEND PROJECT BRIEF'}
                 </button>
               </form>
            ) : (
               <div className="flex flex-col py-24 text-center items-center justify-center">
                  <h3 className="font-display font-black text-3xl uppercase tracking-tighter text-gold mb-4">Brief Received.</h3>
                  <p className="font-body text-[#9D9483] text-sm max-w-sm mb-8">Your project inquiry has been received. Our production team will contact you shortly.</p>
                  <button onClick={() => { setIsSubmitted(false); setFormData({name:'', email:'', phone:'', company:'', projectType:'', budget:'', timeline:'', vision:'', references:''}); }} className="px-8 py-4 border border-gold/50 text-gold uppercase tracking-widest text-xs">
                    Send another
                  </button>
               </div>
            )}
          </div>

          {/* Contact Info & Next steps */}
          <div className="lg:col-span-4 flex flex-col gap-16">
            
            <div className="flex flex-col gap-8">
              <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-ivory">Contact Channels</h3>
              
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-[#9D9483] uppercase tracking-widest">General inquiries</span>
                <a href="mailto:hello@saganix.com" className="font-body text-gold hover:text-ivory transition-colors">hello@saganix.com</a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-[#9D9483] uppercase tracking-widest">Careers</span>
                <a href="mailto:careers@saganix.com" className="font-body text-gold hover:text-ivory transition-colors">careers@saganix.com</a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-[#9D9483] uppercase tracking-widest">Business</span>
                <a href="mailto:support@saganixstudios.com" className="font-body text-gold hover:text-ivory transition-colors">support@saganixstudios.com</a>
              </div>
              
              <div className="flex gap-4 mt-2">
                {["Instagram", "LinkedIn", "WhatsApp"].map(social => (
                  <a key={social} href="#" className="font-mono text-[10px] text-ivory/60 hover:text-gold uppercase tracking-widest border-b border-transparent hover:border-gold transition-colors">{social}</a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-ivory">What happens next</h3>
              <div className="flex flex-col gap-4">
                {[
                  "We review your brief",
                  "We understand the visual scope",
                  "We suggest a production direction",
                  "We share timeline and estimate"
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 p-4 border border-gold/10 bg-glass items-center">
                    <span className="font-mono text-gold text-xs">{`0${i+1}`}</span>
                    <span className="font-body text-sm text-ivory">{step}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full h-[500px] border-t border-gold/10 relative overflow-hidden bg-warm-black">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.491436925361!2d78.5356759!3d17.484038899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b6b87c7c15b%3A0x22501cbba1f54cd9!2sSagaNix%20Studios!5e0!3m2!1sen!2sin!4v1770385318468!5m2!1sen!2sin"
            width="100%" height="100%" style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%) brightness(0.8)' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full"
        />
        <div className="absolute bottom-8 left-8 z-20 bg-background/90 backdrop-blur-md border border-gold/20 p-6">
           <h4 className="font-display font-bold uppercase tracking-tight text-ivory mb-2">SagaNix Studios</h4>
           <p className="font-body text-[#9D9483] text-xs">Hyderabad, Telangana, India</p>
        </div>
      </section>

    </div>
    </>
  );
};
