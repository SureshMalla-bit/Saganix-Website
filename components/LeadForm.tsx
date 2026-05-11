
import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * GOOGLE SHEETS INTEGRATION INSTRUCTIONS
 * --------------------------------------
 * To save data to your sheet (https://docs.google.com/spreadsheets/d/1lsKm2_apS2GxKnBmKRsD4AfzHe-IG87_EL0XqcpjewI/edit),
 * you must deploy a Google Apps Script as a Web App.
 * 
 * 1. Open your Google Sheet.
 * 2. Go to Extensions > Apps Script.
 * 3. Delete any code in the editor and paste the following:
 * 
 *    function doPost(e) {
 *      var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *      var timestamp = new Date();
 *      var params = e.parameter;
 *      // Ensure headers exist or just append
 *      sheet.appendRow([timestamp, params.Name, params.Email, params.Phone, params.Remarks]);
 *      return ContentService.createTextOutput("Success");
 *    }
 * 
 * 4. Click "Deploy" > "New deployment".
 * 5. Select type: "Web app".
 * 6. Description: "Lead Form API".
 * 7. Execute as: "Me".
 * 8. Who has access: "Anyone" (Critical for public form access).
 * 9. Click "Deploy".
 * 10. Copy the "Web app URL" and paste it below into the SCRIPT_URL variable.
 */

// TODO: Replace this URL with your deployed Web App URL
const SCRIPT_URL: string = "https://script.google.com/macros/s/AKfycbz_jsmamor3Q-UKIqlZ0UQb3Ki1qUAQop-dwThAefkZgi6zCkmsunE2NzgxSuE9pjmd/exec"; 

export const LeadForm: React.FC<LeadFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    remarks: ''
  });
  
  // Validation state
  const [errors, setErrors] = useState<{
    name?: string; 
    email?: string; 
    phone?: string; 
    countryCode?: string
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Reset form when closed
      if (isSubmitted) {
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', countryCode: '+91', phone: '', remarks: '' });
          setErrors({});
        }, 500);
      }
    }
  }, [isOpen, isSubmitted]);

  const validateForm = () => {
    const newErrors: {name?: string; email?: string; phone?: string; countryCode?: string} = {};
    let isValid = true;

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Country Code Validation
    // Expecting format like +1, +91, +444. Must start with + and have 1-4 digits.
    const countryCodeRegex = /^\+\d{1,4}$/;
    if (!formData.countryCode.trim()) {
      newErrors.countryCode = "Req";
      isValid = false;
    } else if (!countryCodeRegex.test(formData.countryCode)) {
      newErrors.countryCode = "Inv (+00)";
      isValid = false;
    }

    // Phone Validation
    // Strip all non-digit characters for length check
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      newErrors.phone = "Enter a valid phone number (7-15 digits)";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for the specific field when user types
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Prepare data for Google Apps Script
      // We use FormData which is automatically handled by the browser fetch API
      const data = new FormData();
      data.append('Name', formData.name);
      data.append('Email', formData.email);
      data.append('Phone', `${formData.countryCode} ${formData.phone}`);
      data.append('Remarks', formData.remarks);

      // 2. Send data
      if (SCRIPT_URL && SCRIPT_URL !== "") {
        await fetch(SCRIPT_URL, {
          method: 'POST',
          body: data,
          // no-cors mode is required for Google Apps Script simple triggers 
          // to avoid CORS preflight issues on the client side.
          // Note: We won't get a readable response status, but the request will go through.
          mode: 'no-cors'
        });
      } else {
        // Simulation mode if no URL is provided yet
        console.warn("No SCRIPT_URL provided. Simulating submission delay.");
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Form payload:", Object.fromEntries(data));
      }

      // 3. Handle success
      setIsSubmitting(false);
      setIsSubmitted(true);

    } catch (error) {
      console.error("Form submission failed:", error);
      setIsSubmitting(false);
      // Optional: Add error state handling here
      alert("There was an error submitting the form. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-500">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-obsidian/95 backdrop-blur-xl cursor-pointer"
        onClick={onClose}
      />

      {/* Form Container */}
      <div className="relative w-full max-w-2xl bg-obsidian border border-gold-muted/30 p-8 md:p-16 overflow-hidden shadow-[0_0_100px_rgba(140,120,48,0.1)]">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold-muted"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold-muted"></div>

        {/* Premium Cross Close Button */}
        <button 
          onClick={onClose}
          className="loud-element absolute top-8 right-8 w-12 h-12 flex items-center justify-center group z-20"
          aria-label="Close"
        >
          <div className="relative w-6 h-6 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:rotate-180 group-active:scale-90">
            {/* Line 1 */}
            <span className="absolute w-full h-[1.5px] bg-gold-muted rotate-45 transition-all duration-500 group-hover:bg-[#F5D061] group-hover:shadow-[0_0_8px_#F5D061]"></span>
            {/* Line 2 */}
            <span className="absolute w-full h-[1.5px] bg-gold-muted -rotate-45 transition-all duration-500 group-hover:bg-[#F5D061] group-hover:shadow-[0_0_8px_#F5D061]"></span>
          </div>
          {/* Hover Circle Expansion */}
          <div className="absolute inset-0 rounded-full border border-gold-muted/0 transition-all duration-500 group-hover:border-gold-muted/20 group-hover:scale-110"></div>
        </button>

        {!isSubmitted ? (
          <div className="animate-in slide-in-from-bottom-4 duration-700">
            <div className="flex justify-between items-start mb-12">
              <div>
                <h2 className="font-loud text-4xl md:text-5xl mb-2 text-outline-gold uppercase tracking-tighter">
                  Initiate
                </h2>
                <h3 className="font-loud text-4xl md:text-5xl uppercase tracking-tighter leading-none">
                  Contact.
                </h3>
              </div>
              <div className="hidden sm:block transform scale-75 origin-top-right">
                <Logo />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name */}
                <div className="relative group">
                  <label className="block font-minimal text-[10px] text-gold-muted tracking-widest uppercase mb-2">Full Name</label>
                  <input 
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full bg-transparent border-b py-2 font-minimal text-white focus:outline-none transition-colors placeholder:text-white/30 ${
                      errors.name ? 'border-red-500/70' : 'border-white/10 focus:border-gold-muted'
                    }`}
                    placeholder="ENTER NAME"
                  />
                  {errors.name && (
                    <span className="absolute -bottom-5 left-0 font-minimal text-[9px] text-red-400 tracking-wider uppercase animate-in fade-in slide-in-from-top-1">
                      {errors.name}
                    </span>
                  )}
                </div>
                
                {/* Email Address */}
                <div className="relative group">
                  <label className="block font-minimal text-[10px] text-gold-muted tracking-widest uppercase mb-2">Email Address</label>
                  <input 
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full bg-transparent border-b py-2 font-minimal text-white focus:outline-none transition-colors placeholder:text-white/30 ${
                      errors.email ? 'border-red-500/70' : 'border-white/10 focus:border-gold-muted'
                    }`}
                    placeholder="EMAIL@DOMAIN.COM"
                  />
                  {errors.email && (
                    <span className="absolute -bottom-5 left-0 font-minimal text-[9px] text-red-400 tracking-wider uppercase animate-in fade-in slide-in-from-top-1">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Phone Number with Country Code */}
              <div className="relative group">
                <label className="block font-minimal text-[10px] text-gold-muted tracking-widest uppercase mb-2">Phone Number</label>
                <div className="flex gap-4">
                  <div className="w-20 md:w-24 relative">
                    <input 
                      required
                      type="text"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={(e) => handleInputChange('countryCode', e.target.value)}
                      className={`w-full bg-transparent border-b py-2 font-minimal text-white focus:outline-none transition-colors placeholder:text-white/30 ${
                        errors.countryCode ? 'border-red-500/70' : 'border-white/10 focus:border-gold-muted'
                      }`}
                      placeholder="+00"
                    />
                    {errors.countryCode && (
                      <span className="absolute -bottom-5 left-0 font-minimal text-[9px] text-red-400 tracking-wider uppercase animate-in fade-in slide-in-from-top-1 whitespace-nowrap">
                        {errors.countryCode}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 relative">
                    <input 
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full bg-transparent border-b py-2 font-minimal text-white focus:outline-none transition-colors placeholder:text-white/30 ${
                        errors.phone ? 'border-red-500/70' : 'border-white/10 focus:border-gold-muted'
                      }`}
                      placeholder="000 000 0000"
                    />
                    {errors.phone && (
                      <span className="absolute -bottom-5 left-0 font-minimal text-[9px] text-red-400 tracking-wider uppercase animate-in fade-in slide-in-from-top-1">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Remarks */}
              <div className="relative group">
                <label className="block font-minimal text-[10px] text-gold-muted tracking-widest uppercase mb-2">Project Brief / Remarks</label>
                <textarea 
                  rows={3}
                  name="remarks"
                  value={formData.remarks}
                  onChange={(e) => handleInputChange('remarks', e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 py-2 font-minimal text-white focus:outline-none focus:border-gold-muted transition-colors placeholder:text-white/30 resize-none"
                  placeholder="DESCRIBE YOUR VISION"
                />
                <p className="font-minimal text-[9px] text-white/50 tracking-widest uppercase mt-1">Scope of work, timeline, or aesthetic preferences</p>
              </div>

              {/* Submit - Brighter, using logo's metallic theme */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="loud-element group relative w-full py-4 bg-gold-metallic border border-transparent overflow-hidden transition-all duration-300 hover:brightness-110 mt-8 shadow-[0_0_20px_rgba(212,175,55,0.2)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className={`relative font-loud text-sm tracking-[0.3em] uppercase transition-colors duration-300 text-obsidian`}>
                  {isSubmitting ? 'Transmitting...' : 'Send Inquiry'}
                </span>
                {/* Shine effect on hover */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
              </button>
            </form>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center animate-in zoom-in-95 duration-700">
            <div className="w-20 h-20 mb-8 border border-gold-muted rounded-full flex items-center justify-center animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
            </div>
            <h2 className="font-loud text-3xl md:text-5xl mb-4 bg-gold-metallic bg-clip-text text-transparent uppercase tracking-tighter">
              Transmission
            </h2>
            <h2 className="font-loud text-3xl md:text-5xl mb-8 uppercase tracking-tighter leading-none">
              Successful.
            </h2>
            <p className="font-minimal text-gray-400 text-xs tracking-widest uppercase max-w-xs leading-relaxed">
              Your inquiry has been logged into the SagaNix mainframe. Our architects will contact you shortly.
            </p>
            <button 
              onClick={onClose}
              className="loud-element mt-12 font-minimal text-[10px] tracking-[0.3em] text-gold-muted hover:text-white transition-colors uppercase border border-gold-muted/30 px-6 py-2"
            >
              Return to Home
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};
