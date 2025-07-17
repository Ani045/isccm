import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, Clock, Users, ExternalLink, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

const EventsPage = () => {
  // Only one upcoming event in November
  const upcomingEvents = [
  {
    id: 1,
    title: "NCR Mega CritiCon 2025",
    date: "November 14-16, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "The Stein Auditorium, India Habitat Centre, New Delhi",
    type: "Conference",
    featured: true,
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/3f96240c-c053-4591-b750-dbf4de31bdf8.png",
    description: "Historic collaboration between ISCCM Delhi-Noida & ISCCM Gurugram Branch. This landmark event combines 20th DCCS & 3rd Gurugram Criticon, featuring global faculty, interactive workshops, and cutting-edge research in critical care medicine.",
    attendees: "500+",
    speakers: ["Dr. Global Expert 1", "Dr. Global Expert 2", "Dr. National Expert"],
    price: "₹18,000",
    registrationOpen: true
  }];


  // Only DCCS event in past events
  const pastEvents = [
  {
    id: 2,
    title: "DCCS 2024 - Delhi Critical Care Summit",
    date: "March 20-22, 2024",
    location: "India Habitat Centre, New Delhi",
    type: "Conference",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/3e66f9ce-c924-49c9-bce5-bbfdb82529e6.png",
    description: "The 19th Delhi Critical Care Summit brought together leading experts from across the globe to discuss the latest advances in critical care medicine. This premier event featured cutting-edge research, innovative treatment protocols, and collaborative learning opportunities.",
    attendees: "650+",
    highlights: ["25 Keynote Sessions", "60+ Research Papers", "Live Surgery Demonstrations", "International Faculty", "Hands-on Workshops"]
  }];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <PageBanner
        title="Events & Conferences"
        subtitle="Join us for world-class educational events, workshops, and networking opportunities"
        badgeText="Events & Conferences"
        showContactButton={false} />

      {/* Events Tabs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/80 backdrop-blur-md shadow-lg">
              <TabsTrigger
                value="upcoming"
                className="text-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#BA0A1E] data-[state=active]:to-[#035D8E] data-[state=active]:text-white">

                Upcoming Events
              </TabsTrigger>
              <TabsTrigger
                value="past"
                className="text-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#BA0A1E] data-[state=active]:to-[#035D8E] data-[state=active]:text-white">

                Past Events
              </TabsTrigger>
            </TabsList>
            
            {/* Upcoming Events */}
            <TabsContent value="upcoming" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Upcoming Events
                </h2>
                <p className="text-lg text-gray-600">
                  Don't miss this exciting opportunity to advance your knowledge and network with peers
                </p>
              </div>

              <div className="space-y-8">
                {upcomingEvents.map((event) =>
                <Card key={event.id} className="overflow-hidden ring-2 ring-[#BA0A1E]/20 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-md">
                    <div className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] text-white px-6 py-3">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5" />
                        <span className="font-semibold text-lg">Featured Event</span>
                      </div>
                    </div>
                    
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-64 md:h-full object-cover" />
                      </div>
                      
                      <div className="md:w-2/3 p-6">
                        <CardHeader className="p-0 mb-4">
                          <div className="flex items-start justify-between mb-2">
                            <CardTitle className="text-2xl font-bold text-gray-900">
                              {event.title}
                            </CardTitle>
                            <Badge className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] text-white">
                              {event.type}
                            </Badge>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="p-0">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center gap-2 text-gray-600">
                              <Calendar className="w-4 h-4 text-[#BA0A1E]" />
                              {event.date}
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Clock className="w-4 h-4 text-[#035D8E]" />
                              {event.time}
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <MapPin className="w-4 h-4 text-[#BA0A1E]" />
                              {event.location}
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Users className="w-4 h-4 text-[#035D8E]" />
                              {event.attendees} Expected
                            </div>
                          </div>
                          
                          <p className="text-gray-700 mb-4 leading-relaxed">
                            {event.description}
                          </p>
                          
                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Key Speakers:</h4>
                            <div className="flex flex-wrap gap-2">
                              {event.speakers.map((speaker, index) =>
                            <Badge key={index} variant="outline" className="border-[#BA0A1E] text-[#BA0A1E]">{speaker}</Badge>
                            )}
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="text-2xl font-bold bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] bg-clip-text text-transparent">
                              {event.price}
                            </div>
                            <div className="flex gap-2">
                              <Button
                              variant="outline"
                              className="border-[#BA0A1E] text-[#BA0A1E] hover:bg-[#BA0A1E] hover:text-white">

                                Learn More
                              </Button>
                              <Button className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] hover:from-[#035D8E] hover:to-[#BA0A1E] text-white">
                                Register Now
                                <ExternalLink className="w-4 h-4 ml-2" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            </TabsContent>
            
            {/* Past Events */}
            <TabsContent value="past" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Past Events
                </h2>
                <p className="text-lg text-gray-600">
                  Explore our previous successful events and their impact on the critical care community
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.map((event) =>
                <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-md">
                    <div className="relative">
                      <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover" />
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] text-white">
                        {event.type}
                      </Badge>
                    </div>
                    
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {event.title}
                      </h3>
                      
                      <div className="space-y-2 mb-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#BA0A1E]" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#035D8E]" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-[#BA0A1E]" />
                          {event.attendees} Attendees
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed text-sm line-clamp-3">
                        {event.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Event Highlights:</h4>
                        <div className="space-y-1">
                          {event.highlights.slice(0, 3).map((highlight, index) =>
                        <div key={index} className="flex items-center gap-2 text-xs text-gray-600">
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] rounded-full"></div>
                              {highlight}
                            </div>
                        )}
                        </div>
                      </div>
                      
                      <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-[#BA0A1E] text-[#BA0A1E] hover:bg-[#BA0A1E] hover:text-white">

                        View Gallery
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>);

};

export default EventsPage;