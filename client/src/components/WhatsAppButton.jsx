import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = '919876543210'; // Replace with real WhatsApp number
  const message = encodeURIComponent("Hi GreenVeda! I am interested in your products.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} fill="currentColor" />
      <span>Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
