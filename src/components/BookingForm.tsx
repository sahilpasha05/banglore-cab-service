import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, MapPin, Users, Search } from "lucide-react";
import { toast } from "sonner";
import { SearchBox } from "@mapbox/search-js-react";

// IMPORTANT: Replace with your Mapbox access token
// Best practice: Use environment variables
const ACCESS_TOKEN = "pk.eyJ1Ijoic2FoaWwwOThuIiwiYSI6ImNtaDNoYTUyOTJ0Y24yd3MydXNpYjFvdXEifQ.2nqdddpihwREPiO6KBljeA";

const BookingForm = () => {
  const [activeTab, setActiveTab] = useState("outstation");
  const [airportSubTab, setAirportSubTab] = useState("pickup");

  const [formData, setFormData] = useState({
    travelers: "1-4",
    pickupDate: "",
    pickupTime: "",
    pickupLocation: "Bangalore, Karnataka, India",
    dropLocation: "",
    days: "1",
    hours: "2",
  });

  const handleSearch = () => {
    if (!formData.pickupDate || !formData.pickupTime) {
      toast.error("Please select pickup date and time");
      return;
    }

    // Updated handleSearch logic
    let tripType;
    if (activeTab === "outstation") {
      tripType = "Outstation (Round Trip)";
    } else if (activeTab === "oneway") {
      tripType = "Outstation (One Way)";
    } else if (activeTab === "local") {
      tripType = "Within City";
    } else {
      if (airportSubTab === "pickup") {
        tripType = "Airport Pickup";
      } else {
        tripType = "Airport Drop";
      }
    }

    let message = `Hi! I'd like to book a ${tripType} trip:\nTraveler(s): ${formData.travelers} members\n`;

    if (activeTab === "outstation") {
      // Round Trip: pickup, drop, and days
      message += `Pickup Location: ${formData.pickupLocation}\nDrop-off Location: ${formData.dropLocation}\nNumber of Days: ${formData.days}\n`;
    } else if (activeTab === "oneway") {
      // One Way: pickup and drop only
      message += `Pickup Location: ${formData.pickupLocation}\nDrop-off Location: ${formData.dropLocation}\n`;
    } else if (activeTab === "local") {
      message += `Pickup Location: ${formData.pickupLocation}\nDrop-off Location: ${formData.dropLocation}\nNumber of Hours: ${formData.hours}\n`;
    } else {
      // Airport transfer logic
      if (airportSubTab === "pickup") {
        message += `Pickup Location: Kempegowda International Airport Bengaluru\nDrop-off Location: ${formData.dropLocation}\n`;
      } else {
        message += `Pickup Location: ${formData.pickupLocation}\nDrop-off Location: Kempegowda International Airport Bengaluru\n`;
      }
    }

    message += `Pickup Date: ${formData.pickupDate}\nPickup Time: ${formData.pickupTime}`;

    const whatsappUrl = `https://wa.me/919900987878?text=${encodeURIComponent(message)}`;
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

          <Card className="p-4 sm:p-6 md:p-8 shadow-lg animate-scale-in">
            {/* Main Tabs - 4 tabs in 2x2 grid on mobile */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6">
              <Button
                variant={activeTab === "outstation" ? "accent" : "secondary"}
                size="lg"
                onClick={() => setActiveTab("outstation")}
                className="text-xs sm:text-sm md:text-base lg:text-lg font-bold whitespace-normal leading-tight px-2 sm:px-4 py-5 sm:py-6 h-auto min-h-[50px]"
              >
                OUTSTATION
              </Button>

              <Button
                variant={activeTab === "oneway" ? "accent" : "secondary"}
                size="lg"
                onClick={() => setActiveTab("oneway")}
                className="text-xs sm:text-sm md:text-base lg:text-lg font-bold whitespace-normal leading-tight px-2 sm:px-4 py-5 sm:py-6 h-auto min-h-[50px]"
              >
                ONE WAY
              </Button>

              <Button
                variant={activeTab === "airport" ? "accent" : "secondary"}
                size="lg"
                onClick={() => setActiveTab("airport")}
                className="text-xs sm:text-sm md:text-base lg:text-lg font-bold whitespace-normal leading-tight px-2 sm:px-4 py-5 sm:py-6 h-auto min-h-[50px]"
              >
                AIRPORT TRANSFER
              </Button>

              <Button
                variant={activeTab === "local" ? "accent" : "secondary"}
                size="lg"
                onClick={() => setActiveTab("local")}
                className="text-xs sm:text-sm md:text-base lg:text-lg font-bold whitespace-normal leading-tight px-2 sm:px-4 py-5 sm:py-6 h-auto min-h-[50px]"
              >
                LOCAL PACKAGE
              </Button>
            </div>

            {/* Airport Sub-Tabs */}
            {activeTab === "airport" && (
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-6">
                <Button
                  variant={airportSubTab === "pickup" ? "default" : "outline"}
                  size="lg"
                  onClick={() => setAirportSubTab("pickup")}
                  className="text-sm sm:text-base md:text-lg font-semibold py-5 sm:py-6 whitespace-normal leading-tight h-auto min-h-[50px]"
                >
                  AIRPORT PICKUP
                </Button>

                <Button
                  variant={airportSubTab === "drop" ? "default" : "outline"}
                  size="lg"
                  onClick={() => setAirportSubTab("drop")}
                  className="text-sm sm:text-base md:text-lg font-semibold py-5 sm:py-6 whitespace-normal leading-tight h-auto min-h-[50px]"
                >
                  AIRPORT DROP
                </Button>
              </div>
            )}

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              {/* Travelers */}
              <div className="space-y-2 col-span-1 sm:col-span-1 lg:col-span-1">
                <Label className="flex items-center gap-2 text-sm sm:text-base">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                  Traveler(s)
                </Label>
                <Select
                  value={formData.travelers}
                  onValueChange={(value) => setFormData({ ...formData, travelers: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Travelers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-4">1-4 Members</SelectItem>
                    <SelectItem value="5-7">5-7 Members</SelectItem>
                    <SelectItem value="7-16">7-16 Members</SelectItem>
                    <SelectItem value="17-32">17-32 Members</SelectItem>
                    <SelectItem value="32-53">32-53 Members</SelectItem>
                    <SelectItem value="custom">Custom (My number is not listed here)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Outstation (Round Trip) Fields */}
              {activeTab === "outstation" && (
                <>
                  {/* Pickup Location */}
                  <div className="space-y-2 col-span-1 sm:col-span-1 lg:col-span-2">
                    <Label className="flex items-center gap-2 text-sm sm:text-base">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                      Pickup Location
                    </Label>
                    <SearchBox
                      accessToken={ACCESS_TOKEN}
                      value={formData.pickupLocation}
                      onChange={(value) => setFormData(prev => ({ ...prev, pickupLocation: value }))}
                      onRetrieve={(result) => {
                        const placeName = result.features[0]?.place_name;
                        if (placeName) {
                          setFormData(prev => ({ ...prev, pickupLocation: placeName }));
                        }
                      }}
                      options={{ country: "IN" }}
                      placeholder="Enter pickup location"
                    />
                  </div>

                  {/* Drop-off Location */}
                  <div className="space-y-2 col-span-1 sm:col-span-1 lg:col-span-2">
                    <Label className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Drop-off Location
                    </Label>
                    <SearchBox
                      accessToken={ACCESS_TOKEN}
                      value={formData.dropLocation}
                      onChange={(value) => setFormData(prev => ({ ...prev, dropLocation: value }))}
                      onRetrieve={(result) => {
                        const placeName = result.features[0]?.place_name;
                        if (placeName) {
                          setFormData(prev => ({ ...prev, dropLocation: placeName }));
                        }
                      }}
                      options={{ country: "IN" }}
                      placeholder="Enter drop-off location"
                    />
                  </div>

                  {/* Number of Days */}
                  <div className="space-y-2 col-span-1 sm:col-span-1 lg:col-span-1">
                    <Label className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Number of Days
                    </Label>
                    <Select
                      value={formData.days}
                      onValueChange={(value) => setFormData({ ...formData, days: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Day</SelectItem>
                        <SelectItem value="2">2 Days</SelectItem>
                        <SelectItem value="3">3 Days</SelectItem>
                        <SelectItem value="4">4 Days</SelectItem>
                        <SelectItem value="5">5 Days</SelectItem>
                        <SelectItem value="6">6 Days</SelectItem>
                        <SelectItem value="7">7 Days</SelectItem>
                        <SelectItem value="custom">Custom (Need more days)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              {/* One Way Fields */}
              {activeTab === "oneway" && (
                <>
                  {/* Pickup Location */}
                  <div className="space-y-2 col-span-1 sm:col-span-1 lg:col-span-2">
                    <Label className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Pickup Location
                    </Label>
                    <SearchBox
                      accessToken={ACCESS_TOKEN}
                      value={formData.pickupLocation}
                      onChange={(value) => setFormData(prev => ({ ...prev, pickupLocation: value }))}
                      onRetrieve={(result) => {
                        const placeName = result.features[0]?.place_name;
                        if (placeName) {
                          setFormData(prev => ({ ...prev, pickupLocation: placeName }));
                        }
                      }}
                      options={{ country: "IN" }}
                      placeholder="Enter pickup location"
                    />
                  </div>

                  {/* Drop-off Location */}
                  <div className="space-y-2 col-span-1 sm:col-span-1 lg:col-span-2">
                    <Label className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Drop-off Location
                    </Label>
                    <SearchBox
                      accessToken={ACCESS_TOKEN}
                      value={formData.dropLocation}
                      onChange={(value) => setFormData(prev => ({ ...prev, dropLocation: value }))}
                      onRetrieve={(result) => {
                        const placeName = result.features[0]?.place_name;
                        if (placeName) {
                          setFormData(prev => ({ ...prev, dropLocation: placeName }));
                        }
                      }}
                      options={{ country: "IN" }}
                      placeholder="Enter drop-off location"
                    />
                  </div>
                </>
              )}

              {/* Airport / Local Fields */}
              {(activeTab === "airport" || activeTab === "local") && (
                <>
                  {/* Airport Transfer Fields */}
                  {activeTab === "airport" ? (
                    <>
                      {airportSubTab === "pickup" ? (
                        <>
                          {/* Airport Pickup: Airport is pickup, user enters drop location */}
                          <div className="space-y-2 col-span-1 sm:col-span-1 lg:col-span-2">
                            <Label className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              Pickup Location
                            </Label>
                            <input
                              type="text"
                              className="flex h-10 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm"
                              value="Kempegowda International Airport Bengaluru"
                              disabled
                            />
                          </div>
                          <div className="space-y-2 col-span-1 sm:col-span-1 lg:col-span-2">
                            <Label className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              Drop-off Location
                            </Label>
                            <SearchBox
                              accessToken={ACCESS_TOKEN}
                              value={formData.dropLocation}
                              onChange={(value) => setFormData(prev => ({ ...prev, dropLocation: value }))}
                              onRetrieve={(result) => {
                                const placeName = result.features[0]?.place_name;
                                if (placeName) {
                                  setFormData(prev => ({ ...prev, dropLocation: placeName }));
                                }
                              }}
                              options={{ country: "IN" }}
                              placeholder="Enter drop-off location"
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Airport Drop: User enters pickup, airport is drop */}
                          <div className="space-y-2 col-span-1 sm:col-span-1 lg:col-span-2">
                            <Label className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              Pickup Location
                            </Label>
                            <SearchBox
                              accessToken={ACCESS_TOKEN}
                              value={formData.pickupLocation}
                              onChange={(value) => setFormData(prev => ({ ...prev, pickupLocation: value }))}
                              onRetrieve={(result) => {
                                const placeName = result.features[0]?.place_name;
                                if (placeName) {
                                  setFormData(prev => ({ ...prev, pickupLocation: placeName }));
                                }
                              }}
                              options={{ country: "IN" }}
                              placeholder="Enter pickup location"
                            />
                          </div>
                          <div className="space-y-2 col-span-1 sm:col-span-1 lg:col-span-2">
                            <Label className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              Drop-off Location
                            </Label>
                            <input
                              type="text"
                              className="flex h-10 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm"
                              value="Kempegowda International Airport Bengaluru"
                              disabled
                            />
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      {/* Local Package Fields */}
                      <div className="space-y-2 col-span-1 sm:col-span-1 lg:col-span-2">
                        <Label className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          Pickup Location
                        </Label>
                        <SearchBox
                          accessToken={ACCESS_TOKEN}
                          value={formData.pickupLocation}
                          onChange={(value) => setFormData(prev => ({ ...prev, pickupLocation: value }))}
                          onRetrieve={(result) => {
                            const placeName = result.features[0]?.place_name;
                            if (placeName) {
                              setFormData(prev => ({ ...prev, pickupLocation: placeName }));
                            }
                          }}
                          options={{ country: "IN" }}
                          placeholder="Enter pickup location"
                        />
                      </div>

                      <div className="space-y-2 col-span-1 sm:col-span-1 lg:col-span-2">
                        <Label className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          Drop-off Location
                        </Label>
                        <SearchBox
                          accessToken={ACCESS_TOKEN}
                          value={formData.dropLocation}
                          onChange={(value) => setFormData(prev => ({ ...prev, dropLocation: value }))}
                          onRetrieve={(result) => {
                            const placeName = result.features[0]?.place_name;
                            if (placeName) {
                              setFormData(prev => ({ ...prev, dropLocation: placeName }));
                            }
                          }}
                          options={{ country: "IN" }}
                          placeholder="Enter drop-off location"
                        />
                      </div>

                      {/* Number of Hours for Local Package */}
                      <div className="space-y-2 col-span-1 sm:col-span-1 lg:col-span-1">
                        <Label className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          Number of Hours
                        </Label>
                        <Select
                          value={formData.hours}
                          onValueChange={(value) => setFormData({ ...formData, hours: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2">2 Hours</SelectItem>
                            <SelectItem value="4">4 Hours</SelectItem>
                            <SelectItem value="6">6 Hours</SelectItem>
                            <SelectItem value="custom">Custom (Need more hours)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  )}
                </>
              )}

              {/* Pickup Date */}
              <div className="space-y-2 col-span-1 sm:col-span-1 lg:col-span-1">
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
              <div className="space-y-2 col-span-1 sm:col-span-1 lg:col-span-1">
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

            {/* Book Now Button */}
            <Button
              variant="gold"
              size="lg"
              className="w-full md:w-auto px-12"
              onClick={handleSearch}
            >
              <Search className="h-5 w-5 mr-2" />
              Book Now
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