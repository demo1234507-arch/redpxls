import React from 'react';

interface LeadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-white border-4 border-black w-full max-w-xl relative animate-[reveal_0.3s_ease-out]">
                <button 
                    onClick={onClose}
                    className="absolute -top-4 -right-4 w-10 h-10 bg-red-600 text-white border-2 border-black flex items-center justify-center hover:scale-110 transition-transform z-10"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                
                <div className="p-8 md:p-10 max-h-[90vh] overflow-y-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border-l-4 border-red-600 mb-6">
                        <span className="text-red-600 font-bold text-xs uppercase tracking-widest">Project Inquiry</span>
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-2">Let's Build <span className="text-red-600">Together</span></h2>
                    <p className="text-gray-500 mb-8 text-sm">Drop your details below and we'll get back to you with a custom proposal.</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-700">Name</label>
                                <input required type="text" className="w-full border-2 border-black p-3 focus:outline-none focus:border-red-600 transition-colors" placeholder="JOHN DOE" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-700">Email</label>
                                <input required type="email" className="w-full border-2 border-black p-3 focus:outline-none focus:border-red-600 transition-colors" placeholder="JOHN@COMPANY.COM" />
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-700">Company</label>
                                <input required type="text" className="w-full border-2 border-black p-3 focus:outline-none focus:border-red-600 transition-colors" placeholder="ACME CORP" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-700">Budget</label>
                                <select required className="w-full border-2 border-black p-3 focus:outline-none focus:border-red-600 transition-colors appearance-none bg-white rounded-none">
                                    <option value="">SELECT BUDGET</option>
                                    <option value="5k-10k">$5,000 - $10,000</option>
                                    <option value="10k-25k">$10,000 - $25,000</option>
                                    <option value="25k+">$25,000+</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-700">Message</label>
                            <textarea required rows={4} className="w-full border-2 border-black p-3 focus:outline-none focus:border-red-600 transition-colors resize-none" placeholder="TELL US ABOUT YOUR PROJECT..."></textarea>
                        </div>
                        
                        <button type="submit" className="pixel-button w-full justify-center py-4 text-lg">
                            INITIALIZE SEQUENCE
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
