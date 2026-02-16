"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send } from "lucide-react";

const WHATSAPP_NUMBER = "919871035511"; // +91 8750043123 without + and spaces

const instantAnswers = [
  "Would you like to organise a lifestyle event around food, fashion, and art?",
  "Would you like to start a brand in hospitality?",
  "Would you like to buy or sell modern and contemporary Indian art?",
  "Would you like to organise a food festival with international or Indian celebrity chefs?",
];

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const redirectToWhatsApp = (text: string) => {
    const encodedMessage = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
    setMessage("");
  };

  const handleSend = () => {
    if (message.trim()) {
      redirectToWhatsApp(message.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group md:bottom-8 md:right-8"
        aria-label="Open WhatsApp chat"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
        )}
      </button>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />

            {/* Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 max-w-sm bg-cream rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[80vh] border border-charcoal/10"
            >
              {/* Header */}
              <div className="bg-charcoal text-white p-6 pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 font-serif">Chat with us</h3>
                    <p className="text-sm text-white/90 leading-relaxed">
                      👋 Hi, message us with any questions. We&apos;re happy to
                      help!
                    </p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/80 hover:text-white transition-colors ml-4"
                    aria-label="Close chat"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-4 bg-cream min-h-0">
                {/* Message Input */}
                <div className="flex items-center gap-2 mb-6">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Write message"
                    className="flex-1 px-4 py-3 border border-charcoal/20 rounded-lg text-sm text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-charcoal/20 focus:border-charcoal/40 placeholder:text-charcoal/40"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!message.trim()}
                    className="p-3 bg-charcoal hover:bg-charcoal/90 disabled:bg-charcoal/30 disabled:cursor-not-allowed rounded-lg transition-colors"
                    aria-label="Send message"
                  >
                    <Send className="w-5 h-5 text-white" />
                  </button>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-charcoal text-center mb-4 uppercase tracking-wider">
                    Instant answers
                  </h4>
                  {instantAnswers.map((query, index) => (
                    <button
                      key={index}
                      onClick={() => redirectToWhatsApp(query)}
                      className="w-full px-4 py-3 text-left text-sm text-charcoal border border-charcoal/20 rounded-lg hover:border-charcoal/40 hover:bg-charcoal/5 transition-all duration-200 bg-white"
                    >
                      {query}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
