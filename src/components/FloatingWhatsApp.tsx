import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Need assistance?";
  const typingSpeed = 150; // milliseconds per character
  const pauseTime = 2000; // 2 seconds pause

  useEffect(() => {
    let index = 0;
    let typing = true;

    const typeInterval = setInterval(() => {
      if (typing) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
        if (index === fullText.length) {
          typing = false;
          setTimeout(() => {
            index = 0;
            setDisplayedText("");
            typing = true;
          }, pauseTime);
        }
      }
    }, typingSpeed);

    return () => clearInterval(typeInterval);
  }, []);

  const handleClick = () => {
    const phoneNumber = "919900987878"; // WhatsApp expects country code, so add 91
    const message = "Hi, I need assistance regarding Booking in Banglore cab services";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Chat Bubble */}
      <div className="bg-background border border-border rounded-lg px-4 py-2 shadow-lg">
        <p className="text-sm font-medium whitespace-nowrap">{displayedText}</p>
      </div>

      {/* WhatsApp Button */}
      <Button
        onClick={handleClick}
        size="lg"
        className="h-14 w-14 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 p-2"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/5968/5968841.png"
          alt="WhatsApp"
          className="h-10 w-10"
        />
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;
