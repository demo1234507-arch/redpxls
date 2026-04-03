import React, { useEffect } from 'react';

interface CalendlyEmbedProps {
  url: string;
}

export default function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  useEffect(() => {
    // Load the Calendly widget script dynamically
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      className="calendly-inline-widget w-full h-[700px] rounded-[2px] overflow-hidden" 
      // We append URL parameters to force Calendly into a dark theme that matches the site
      data-url={`${url}?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=f8f8f8`}
    ></div>
  );
}
