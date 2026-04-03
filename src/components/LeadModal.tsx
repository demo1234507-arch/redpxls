import React from 'react';
import { X } from 'lucide-react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 p-8 rounded-[2px] shadow-2xl">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h2 className="font-instrument text-3xl italic mb-2 text-white">Let's talk about your project</h2>
        <p className="text-white/60 mb-6 font-light">
          Fill out the details below and our team will get back to you within 24 hours.
        </p>
        
        <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm text-white/70">Name</label>
            <input 
              type="text" 
              id="name" 
              className="bg-white/5 border border-white/10 rounded-[2px] p-3 text-white focus:outline-none focus:border-white/30" 
              placeholder="Jane Doe" 
              required 
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm text-white/70">Work Email</label>
            <input 
              type="email" 
              id="email" 
              className="bg-white/5 border border-white/10 rounded-[2px] p-3 text-white focus:outline-none focus:border-white/30" 
              placeholder="jane@company.com" 
              required 
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="company" className="text-sm text-white/70">Company</label>
            <input 
              type="text" 
              id="company" 
              className="bg-white/5 border border-white/10 rounded-[2px] p-3 text-white focus:outline-none focus:border-white/30" 
              placeholder="Acme Corp" 
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="details" className="text-sm text-white/70">Project Details</label>
            <textarea 
              id="details" 
              rows={4} 
              className="bg-white/5 border border-white/10 rounded-[2px] p-3 text-white focus:outline-none focus:border-white/30 resize-none" 
              placeholder="Tell us about your video needs..." 
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="mt-2 rounded-[2px] bg-[#f8f8f8] px-6 py-3 text-base font-medium text-[#171717] transition-colors duration-300 hover:bg-white"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
