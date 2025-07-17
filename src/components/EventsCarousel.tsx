import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Users, Star, ExternalLink, ArrowRight, Sparkles, Award, Globe, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EventsCarousel = () => {
  const navigate = useNavigate();

  const events = [
  {
    id: 1,
    title: "NCR Mega CritiCon 2025",
    date: "November 14-16, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "The Stein Auditorium, India Habitat Centre, New Delhi",
    attendees: "500+",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/3f96240c-c053-4591-b750-dbf4de31bdf8.png",
    description: "A groundbreaking collaboration between ISCCM Delhi-Noida & ISCCM Gurugram Branch. This landmark event combines the 20th DCCS & 3rd Gurugram Criticon, featuring world-renowned faculty, interactive workshops, and cutting-edge research presentations that will shape the future of critical care medicine.",
    featured: true,
    type: "Conference",
    speakers: ["Dr. Global Expert 1", "Dr. Global Expert 2", "Dr. National Expert"],
    price: "₹18,000",
    highlights: ["25 Keynote Sessions", "60+ Research Papers", "Live Surgery Demonstrations", "International Faculty", "Hands-on Workshops"],
    category: "Major Conference",
    registrationOpen: true
  },
  {
    id: 2,
    title: "DCCS 2024 - Delhi Critical Care Summit",
    date: "March 20-22, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "India Habitat Centre, New Delhi",
    attendees: "650+",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/3e66f9ce-c924-49c9-bce5-bbfdb82529e6.png",
    description: "The 19th Delhi Critical Care Summit brought together leading experts from across the globe to discuss revolutionary advances in critical care medicine. This premier event featured cutting-edge research, innovative treatment protocols, and collaborative learning opportunities that redefined standards of care.",
    featured: false,
    type: "Summit",
    highlights: ["25 Keynote Sessions", "60+ Research Papers", "Live Surgery Demonstrations", "International Faculty", "Hands-on Workshops"],
    category: "Annual Summit",
    registrationOpen: false
  },
  {
    id: 3,
    title: "Advanced ICU Management Workshop",
    date: "January 15-16, 2025",
    time: "10:00 AM - 5:00 PM",
    location: "Max Healthcare, Saket, New Delhi",
    attendees: "200+",
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=500&h=300&fit=crop",
    description: "An intensive hands-on workshop designed for critical care professionals looking to enhance their ICU management skills. Features simulation-based learning, real-time case studies, and expert-led sessions on the latest protocols and technologies in intensive care unit management.",
    featured: true,
    type: "Workshop",
    highlights: ["Simulation Training", "Expert Faculty", "Case-based Learning", "Technology Updates", "Certification"],
    category: "Skills Development",
    registrationOpen: true
  },
  {
    id: 4,
    title: "Emergency Medicine Symposium",
    date: "February 8-9, 2025",
    time: "9:30 AM - 6:30 PM",
    location: "AIIMS, New Delhi",
    attendees: "400+",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=500&h=300&fit=crop",
    description: "A comprehensive symposium focusing on emergency medicine protocols, rapid response systems, and critical decision-making in emergency situations. Featuring interactive sessions, case presentations, and demonstrations of life-saving techniques by renowned emergency medicine specialists.",
    featured: false,
    type: "Symposium",
    highlights: ["Emergency Protocols", "Rapid Response Training", "Case Studies", "Equipment Demos", "Networking"],
    category: "Emergency Care",
    registrationOpen: true
  },
  {
    id: 5,
    title: "Pediatric Critical Care Conference",
    date: "March 10-11, 2025",
    time: "8:30 AM - 5:30 PM",
    location: "Fortis Hospital, Gurugram",
    attendees: "300+",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
    description: "A specialized conference dedicated to pediatric critical care medicine, covering neonatal intensive care, pediatric emergency medicine, and advanced life support for children. Features expert presentations, interactive workshops, and the latest research in pediatric critical care.",
    featured: false,
    type: "Conference",
    highlights: ["Pediatric Focus", "Neonatal Care", "Emergency Procedures", "Research Updates", "Expert Panel"],
    category: "Specialized Care",
    registrationOpen: true
  },
  {
    id: 6,
    title: "Telemedicine in Critical Care",
    date: "April 5-6, 2025",
    time: "11:00 AM - 4:00 PM",
    location: "Virtual Event & Hybrid Sessions",
    attendees: "800+",
    image: "https://images.unsplash.com/photo-1752080193173-25f318f9cafb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwY3JvcHBlZCUyMGltYWdlJTIwZnJvbSUyMFVuc3BsYXNoJTIwd2l0aCUyMGElMjB3aWR0aCUyMG9mJTIwNTAwJTIwcGl4ZWxzJTIwYW5kJTIwYSUyMGhlaWdodCUyMG9mJTIwMzAwJTIwcGl4ZWxzLnxlbnwwfHx8fDE3NTI3MzUxNjR8MA&ixlib=rb-4.1.0&q=80&w=200$w=500",
    description: "Explore the future of critical care through telemedicine and digital health solutions. This innovative conference covers remote monitoring, AI-assisted diagnostics, and virtual consultation platforms that are transforming patient care delivery in intensive care units worldwide.",
    featured: true,
    type: "Virtual Conference",
    highlights: ["Digital Health", "Remote Monitoring", "AI in Healthcare", "Virtual Consultations", "Future Tech"],
    category: "Digital Innovation",
    registrationOpen: true
  }];


  const handleRegisterClick = () => {
    navigate('/events');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-red-50/20 relative overflow-hidden" id="events">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg%2Bxml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23035D8E%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-red-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-red-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#035D8E]/10 to-[#BA0A1E]/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-[#BA0A1E]" />
            <span className="text-sm font-medium text-[#035D8E]">Featured Events</span>
          </div>
          
          <h2 className="text-5xl font-bold bg-gradient-to-r from-[#035D8E] to-[#BA0A1E] bg-clip-text text-transparent mb-6">
            Upcoming Events
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] mx-auto mb-6 rounded-full"></div>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Join our educational programs, workshops, and conferences designed to advance your critical care expertise
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {events.map((event) =>
              <CarouselItem key={event.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-0 shadow-2xl bg-white/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] overflow-hidden group">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700" />

                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Date badge */}
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-lg">
                          {event.date.split(',')[0]}
                        </div>
                        
                        {/* Featured badge */}
                        {event.featured &&
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 shadow-lg animate-pulse">
                            <Star className="w-3 h-3" />
                            Featured
                          </div>
                      }
                        
                        {/* Registration status */}
                        <div className="absolute bottom-4 left-4">
                          <Badge className={`${event.registrationOpen ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-500 hover:bg-gray-600'} text-white text-xs px-2 py-1 shadow-md`}>
                            {event.registrationOpen ? 'Open' : 'Closed'}
                          </Badge>
                        </div>
                        
                        {/* Category badge */}
                        <div className="absolute bottom-4 right-4">
                          <Badge className="bg-white/90 text-[#035D8E] hover:bg-white text-xs px-2 py-1 shadow-md">
                            {event.category}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" className="text-[#BA0A1E] border-[#BA0A1E] text-xs">
                            {event.type}
                          </Badge>
                          {event.featured &&
                        <div className="flex items-center gap-1">
                              <Award className="w-3 h-3 text-yellow-500" />
                              <span className="text-xs text-yellow-600 font-medium">Premium</span>
                            </div>
                        }
                        </div>
                        
                        <h3 className="text-lg font-bold text-[#035D8E] mb-3 line-clamp-2 group-hover:text-[#BA0A1E] transition-colors duration-300">
                          {event.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                          {event.description}
                        </p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-gray-600 text-xs">
                            <Calendar className="h-3 w-3 mr-2 text-[#BA0A1E]" />
                            <span className="font-medium">{event.date}</span>
                          </div>
                          <div className="flex items-center text-gray-600 text-xs">
                            <MapPin className="h-3 w-3 mr-2 text-[#BA0A1E]" />
                            <span className="line-clamp-1">{event.location}</span>
                          </div>
                          <div className="flex items-center text-gray-600 text-xs">
                            <Users className="h-3 w-3 mr-2 text-[#BA0A1E]" />
                            <span className="font-medium">{event.attendees} Expected</span>
                          </div>
                        </div>
                        
                        {/* Highlights */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1 mb-2">
                            {event.highlights.slice(0, 3).map((highlight, index) =>
                          <Badge key={index} variant="outline" className="text-xs px-2 py-0.5 text-[#035D8E] border-[#035D8E]/30">
                                {highlight}
                              </Badge>
                          )}
                          </div>
                          {event.highlights.length > 3 &&
                        <span className="text-xs text-gray-500">+{event.highlights.length - 3} more</span>
                        }
                        </div>
                        
                        <Button
                        onClick={handleRegisterClick}
                        className="w-full bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] hover:from-[#035D8E] hover:to-[#BA0A1E] text-white text-sm py-2.5 shadow-lg hover:shadow-xl transition-all duration-300 group/btn">

                          <span className="flex items-center justify-center gap-2">
                            {event.registrationOpen ? 'Register Now' : 'Learn More'}
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              )}
            </CarouselContent>
            
            <CarouselPrevious className="left-2 bg-white/90 hover:bg-white shadow-lg border-0 text-[#035D8E] hover:text-[#BA0A1E] transition-colors duration-300" />
            <CarouselNext className="right-2 bg-white/90 hover:bg-white shadow-lg border-0 text-[#035D8E] hover:text-[#BA0A1E] transition-colors duration-300" />
          </Carousel>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-12">
          <Button
            onClick={handleRegisterClick}
            variant="outline"
            className="border-2 border-[#035D8E] text-[#035D8E] hover:bg-[#035D8E] hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105">

            View All Events
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>);

};

export default EventsCarousel;