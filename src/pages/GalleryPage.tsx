import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Filter, Calendar, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import { useNavigate } from 'react-router-dom';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const categories = ['All', 'Conference', 'Event', 'CME', 'Monthly meets', 'Preceptorship Programme'];

  const galleryItems = [
  // Banner/Event Images
  {
    id: 1,
    title: "ISCCM Annual Conference 2024",
    category: "Conference",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/3f96240c-c053-4591-b750-dbf4de31bdf8.png",
    date: "March 2024",
    location: "New Delhi",
    description: "Main conference banner showcasing the annual gathering of critical care specialists."
  },
  {
    id: 2,
    title: "Critical Care Excellence Summit",
    category: "Event",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/3e66f9ce-c924-49c9-bce5-bbfdb82529e6.png",
    date: "February 2024",
    location: "Mumbai",
    description: "Summit focused on excellence in critical care medicine and patient outcomes."
  },
  {
    id: 3,
    title: "Medical Innovation Conference",
    category: "Conference",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/11d340e0-44f4-4152-b719-999978c86ece.png",
    date: "January 2024",
    location: "Bangalore",
    description: "Conference highlighting innovations and technological advances in critical care."
  },
  {
    id: 4,
    title: "CME: Advanced Ventilator Management",
    category: "CME",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "December 2023",
    location: "New Delhi",
    description: "Continuing medical education session on advanced ventilator management techniques."
  },

  {
    id: 6,
    title: "ISCCM Preceptorship Program: Critical Care Awareness",
    category: "Preceptorship Programme",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/9da3cd17-9d06-4292-9400-e5f46bc92d49.png",
    date: "30th August 2024",
    location: "Rama Medical College, Hapur (UP)",
    description: "ISCCM Preceptorship Program themed 'Critical Care Awareness' at Rama Medical College, Hapur (UP)."
  },
  {
    id: 13,
    title: "ISCCM Preceptorship Program: Core Concept in Critical Care Medicine",
    category: "Preceptorship Programme",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/22deffe6-13be-48c2-918e-c787ebe1db09.png",
    date: "16th October 2024",
    location: "Hamdard Institute of Medical Science & Research (HIMSR), New Delhi",
    description: "ISCCM Preceptorship Program themed 'Core Concept in Critical Care Medicine' at HIMSR, New Delhi."
  },
  {
    id: 14,
    title: "ISCCM Preceptorship Program: Critical Care Awareness Program",
    category: "Preceptorship Programme",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/7eccb6bd-8ded-492a-bd7f-3fbb2753a70b.png",
    date: "17th December 2024",
    location: "Ghaziabad District Hospital",
    description: "ISCCM Preceptorship Program themed Critical Care Awareness Program at Ghaziabad district hospital."
  },

  // Monthly Meet Images
  {
    id: 16,
    title: "SCCM Delhi-Noida Monthly Meet",
    category: "Monthly meets",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/32d5a1b2-610e-4a9e-8ca7-69c1864adfd8.jpg",
    date: "28th June 2024",
    location: "Fortis Hospital Vasant Kunj, New Delhi",
    description: "SCCM, Delhi-Noida, Monthly Meet Presented by Fortis Hospital Vasant Kunj, New Delhi."
  },
  {
    id: 17,
    title: "SCCM Delhi-Noida Monthly Meet",
    category: "Monthly meets",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/75bef29e-6458-4cbf-94f7-3478b1d1ad68.jpeg",
    date: "26th July 2024",
    location: "Max Superspeciality Hospital Patparganj",
    description: "SCCM, Delhi-Noida, Monthly Meet Presented by Max Superspeciality Hospital Patparganj."
  },
  {
    id: 18,
    title: "SCCM Delhi-Noida Monthly Meet",
    category: "Monthly meets",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/4795df6f-9a66-403f-a6e2-b9d18446f408.jpeg",
    date: "27th September 2024",
    location: "Kailash Hospital & Heart Institute, Sector-27, Noida",
    description: "SCCM, Delhi-Noida, Monthly Meet Presented by Kailash Hospital & Heart Institute, Sector-27, Noida."
  },
  {
    id: 19,
    title: "SCCM Delhi-Noida Monthly Meet",
    category: "Monthly meets",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/024b0eb9-6ab1-4f1c-a527-1faed0bf94ad.jpeg",
    date: "27th December 2024",
    location: "Sri Action Balaji Medical Institute",
    description: "SCCM, Delhi-Noida, Monthly Meet Presented by Sri Action Balaji Medical Institute."
  },
  {
    id: 20,
    title: "SCCM Delhi-Noida Monthly Meet",
    category: "Monthly meets",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/1c2c5368-0e71-4740-bf90-9cb7cf95f032.jpeg",
    date: "31st January 2025",
    location: "Swami Dayanand Hospital",
    description: "SCCM, Delhi-Noida, Monthly Meet Presented by Swami Dayanand Hospital."
  },
  {
    id: 21,
    title: "SCCM Delhi-Noida Monthly Meet",
    category: "Monthly meets",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/4a77d3f7-4e07-4f47-920f-eca57d86ab03.jpeg",
    date: "27th June 2025",
    location: "Fortis Escorts Heart Institute, New Delhi",
    description: "SCCM, Delhi-Noida, Monthly Meet Presented by Fortis Escorts Heart Institute, New Delhi."
  },

  {
    id: 8,
    title: "Medical Workshop Event",
    category: "Event",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "August 2023",
    location: "Hyderabad",
    description: "Interactive workshop event covering latest developments in critical care medicine."
  },
  {
    id: 9,
    title: "CME: Sepsis Management Guidelines",
    category: "CME",
    image: "https://images.unsplash.com/photo-1664527121987-d8bb21ae86d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcGhvdG9ncmFwaCUyMHNob3djYXNpbmclMjBhJTIwc2VyZW5lJTIwYW5kJTIwbmF0dXJhbCUyMGVudmlyb25tZW50JTJDJTIwcG9zc2libHklMjBhJTIwbGFuZHNjYXBlJTIwb3IlMjBvdXRkb29yJTIwc2NlbmUlMkMlMjB3aXRoJTIwYSUyMGZvY3VzJTIwb24lMjBhZXN0aGV0aWMlMjBhbmQlMjB2aXN1YWwlMjBhcHBlYWwufGVufDB8fHx8MTc1MjU4MDk1NXww&ixlib=rb-4.1.0&q=80&w=200$w=1000",
    date: "July 2023",
    location: "Pune",
    description: "CME session on updated sepsis management guidelines and best practices."
  },


  {
    id: 15,
    title: "Annual Skills Event",
    category: "Event",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "April 2023",
    location: "Jaipur",
    description: "Annual skills development event for critical care healthcare professionals."
  }];



  const filteredItems = selectedCategory === 'All' ?
  galleryItems :
  galleryItems.filter((item) => item.category === selectedCategory);

  const handleRegisterClick = () => {
    navigate('/events');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <PageBanner
        title="ISCCM Gallery"
        subtitle="Explore moments from our conferences, workshops, and community initiatives"
        badgeText="ISCCM Gallery"
        showContactButton={false} />


      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/30 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600 font-medium">Filter by category:</span>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) =>
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] hover:from-[#BA0A1E]/90 hover:to-[#035D8E]/90" : ""}>
                  {category}
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {selectedCategory === 'All' ? 'All Images' : selectedCategory}
            </h2>
            <p className="text-lg text-gray-600">
              {filteredItems.length} {filteredItems.length === 1 ? 'image' : 'images'} found
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) =>
            <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden bg-white/80 backdrop-blur-md border-0">
                    <div className="relative">
                      <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300" />

                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] text-white text-xs">
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#BA0A1E] transition-colors line-clamp-1">
                        {item.title}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="max-w-4xl">
                  <div className="space-y-4">
                    <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-96 object-contain rounded-lg" />

                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                        <Badge className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] text-white">{item.category}</Badge>
                      </div>
                      
                      <div className="flex items-center gap-4 text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Don't miss our upcoming events and activities. Follow us to stay connected 
            with the latest in critical care medicine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleRegisterClick} size="lg" className="bg-white text-[#BA0A1E] hover:bg-gray-100 font-bold">
              View Upcoming Events
            </Button>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>);

};

export default GalleryPage;