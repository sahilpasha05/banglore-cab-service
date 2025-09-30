import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, MapPin, Users, Search } from "lucide-react";
import { toast } from "sonner";

const BookingForm = () => {
  const [activeTab, setActiveTab] = useState<"outstation" | "local">("outstation");
  const [formData, setFormData] = useState({
    travelers: "1-7",
    carFrom: "Bangalore",
    hours: "4",
    pickupDate: "",
    pickupTime: "",
  });

  const handleSearch = () => {
    if (!formData.pickupDate || !formData.pickupTime) {
      toast.error("Please select pickup date and time");
      return;
    }

    const message = `Hi! I'd like to book a ${activeTab} trip:\n\nTravelers: ${formData.travelers} members\nFrom: ${formData.carFrom}\nDuration: ${formData.hours} hours\nPickup Date: ${formData.pickupDate}\nPickup Time: ${formData.pickupTime}`;
    
    const whatsappUrl = `https://wa.me/918147260587?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="booking" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Book Your Journey</h2>
            <p className="text-lg text-muted-foreground">Choose your travel type and get started</p>
          </div>

          <Card className="p-6 md:p-8 shadow-lg animate-scale-in">
            {/* Tabs */}
            <div className="flex gap-4 mb-8">
              <Button
                variant={activeTab === "outstation" ? "accent" : "secondary"}
                size="lg"
                onClick={() => setActiveTab("outstation")}
                className="flex-1"
              >
                OUT STATION
              </Button>
              <Button
                variant={activeTab === "local" ? "accent" : "secondary"}
                size="lg"
                onClick={() => setActiveTab("local")}
                className="flex-1"
              >
                WITHIN CITY
              </Button>
            </div>

            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              {/* Travelers */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Traveler(s)
                </Label>
                <Select value={formData.travelers} onValueChange={(value) => setFormData({ ...formData, travelers: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-7">1-7 Members</SelectItem>
                    <SelectItem value="8-16">8-16 Members</SelectItem>
                    <SelectItem value="17-32">17-32 Members</SelectItem>
                    <SelectItem value="33-52">33-52 Members</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Car From */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Car From
                </Label>
                <Select value={formData.carFrom} onValueChange={(value) => setFormData({ ...formData, carFrom: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Bangalore">Bangalore</SelectItem>
                    <SelectItem value="Mysore">Mysore</SelectItem>
                    <SelectItem value="Mangalore">Mangalore</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Hours */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  No. of Hours
                </Label>
                <Select value={formData.hours} onValueChange={(value) => setFormData({ ...formData, hours: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4">4 hours</SelectItem>
                    <SelectItem value="8">8 hours</SelectItem>
                    <SelectItem value="12">12 hours</SelectItem>
                    <SelectItem value="16">16 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Pickup Date */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Pickup Date
                </Label>
                <input
                  type="date"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={formData.pickupDate}
                  onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                />
              </div>

              {/* Pickup Time */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Pickup Time
                </Label>
                <input
                  type="time"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={formData.pickupTime}
                  onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                />
              </div>
            </div>

            <Button variant="gold" size="lg" className="w-full md:w-auto px-12" onClick={handleSearch}>
              <Search className="h-5 w-5" />
              Search & Book via WhatsApp
            </Button>

            <p className="text-sm text-muted-foreground mt-4">
              * Price Excluding Toll, Parking & Road Taxes
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
