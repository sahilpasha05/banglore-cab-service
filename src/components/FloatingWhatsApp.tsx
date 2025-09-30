import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const message = "I need more information about this.";
    const whatsappUrl = `https://wa.me/918147260587?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {showText && (
        <div className="bg-background border border-border rounded-lg px-4 py-2 shadow-lg animate-fade-in">
          <p className="text-sm font-medium whitespace-nowrap animate-typing">
            Need assistance?
          </p>
        </div>
      )}
      <Button
        onClick={handleClick}
        size="lg"
        className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;
