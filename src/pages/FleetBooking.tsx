import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock, ArrowLeft, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const FleetBooking = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const vehicleName = searchParams.get("vehicle") || "";

  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropoffLocation: "",
    travelDate: undefined as Date | undefined,
    travelTime: "",
    serviceType: "",
    vehicle: vehicleName,
    fullName: "",
  });

  const serviceTypes = [
    "Outstation",
    "Local",
    "Airport Transfer",
    "Corporate Travel",
    "Wedding Events",
    "City Tour",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.pickupLocation || !formData.dropoffLocation || !formData.travelDate || 
        !formData.travelTime || !formData.serviceType || !formData.vehicle || !formData.fullName) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Format the message for WhatsApp
    const message = `🚗 *New Booking Request*

👤 *Customer Details:*
Name: ${formData.fullName}

📍 *Trip Details:*
Pickup: ${formData.pickupLocation}
Drop-off: ${formData.dropoffLocation}
Date: ${format(formData.travelDate, "dd-MM-yyyy")}
Time: ${formData.travelTime}

🚙 *Service Details:*
Vehicle: ${formData.vehicle}
Service Type: ${formData.serviceType}

Looking forward to your confirmation!`;

    const whatsappUrl = `https://wa.me/918147260587?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    toast.success("Redirecting to WhatsApp...");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="animate-fade-in">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
                Book Your Vehicle
              </h1>
              <p className="text-muted-foreground text-lg">
                Fill in the details below to complete your booking
              </p>
            </div>

            {/* Form Card */}
            <div className="bg-card rounded-2xl shadow-elegant p-6 md:p-8 border border-border/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-base">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="h-12"
                  />
                </div>

                {/* Pickup Location */}
                <div className="space-y-2">
                  <Label htmlFor="pickup" className="text-base">
                    Pickup Location <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="pickup"
                    placeholder="Enter pickup address"
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    className="h-12"
                  />
                </div>

                {/* Drop-off Location */}
                <div className="space-y-2">
                  <Label htmlFor="dropoff" className="text-base">
                    Drop-off Location <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="dropoff"
                    placeholder="Enter drop-off address"
                    value={formData.dropoffLocation}
                    onChange={(e) => setFormData({ ...formData, dropoffLocation: e.target.value })}
                    className="h-12"
                  />
                </div>

                {/* Date and Time Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Travel Date */}
                  <div className="space-y-2">
                    <Label className="text-base">
                      Travel Date <span className="text-destructive">*</span>
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full h-12 justify-start text-left font-normal",
                            !formData.travelDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.travelDate ? (
                            format(formData.travelDate, "dd-MM-yyyy")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.travelDate}
                          onSelect={(date) => setFormData({ ...formData, travelDate: date })}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Travel Time */}
                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-base">
                      Travel Time <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="time"
                        type="time"
                        value={formData.travelTime}
                        onChange={(e) => setFormData({ ...formData, travelTime: e.target.value })}
                        className="h-12 pl-10"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Type and Vehicle Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Service Type */}
                  <div className="space-y-2">
                    <Label className="text-base">
                      Service Type <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={formData.serviceType}
                      onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Vehicle */}
                  <div className="space-y-2">
                    <Label htmlFor="vehicle" className="text-base">
                      Vehicle <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="vehicle"
                      value={formData.vehicle}
                      onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                      className="h-12 bg-secondary/50"
                      readOnly
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate("/")}
                    className="h-12 flex-1"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Home
                  </Button>
                  <Button
                    type="submit"
                    variant="default"
                    className="h-12 flex-1 bg-gradient-accent text-white hover:opacity-90"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Submit Booking
                  </Button>
                </div>
              </form>
            </div>

            {/* Info Card */}
            <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
              <p className="text-sm text-center text-muted-foreground">
                📱 Your booking details will be sent via WhatsApp for quick confirmation
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FleetBooking;
