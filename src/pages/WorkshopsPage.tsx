import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, Users, MapPin, Calendar, Award, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

const WorkshopsPage = () => {
  const workshops = [
  {
    id: 1,
    title: "Advanced Mechanical Ventilation",
    instructor: "Dr. Rajesh Kumar",
    date: "March 15, 2024",
    time: "9:00 AM - 12:00 PM",
    venue: "Workshop Hall A",
    capacity: "30 participants",
    level: "Advanced",
    description: "Comprehensive workshop on advanced ventilatory strategies including ECMO, HFOV, and personalized ventilation.",
    topics: [
    "Lung protective ventilation strategies",
    "ECMO indications and management",
    "High-frequency oscillatory ventilation",
    "Personalized ventilation approaches"],


    category: "respiratory"
  },
  {
    id: 2,
    title: "Sepsis Recognition & Management",
    instructor: "Dr. Priya Sharma",
    date: "March 15, 2024",
    time: "2:00 PM - 5:00 PM",
    venue: "Workshop Hall B",
    capacity: "40 participants",
    level: "Intermediate",
    description: "Evidence-based approach to early sepsis recognition and management strategies.",
    topics: [
    "Sepsis-3 definitions and criteria",
    "Early recognition tools",
    "Antibiotic stewardship",
    "Hemodynamic management"],


    category: "infectious"
  },
  {
    id: 3,
    title: "Cardiac Critical Care Essentials",
    instructor: "Dr. Amit Gupta",
    date: "March 16, 2024",
    time: "9:00 AM - 12:00 PM",
    venue: "Workshop Hall C",
    capacity: "25 participants",
    level: "Advanced",
    description: "Specialized training in cardiac critical care management and interventions.",
    topics: [
    "Acute coronary syndrome management",
    "Mechanical circulatory support",
    "Arrhythmia management in ICU",
    "Post-cardiac surgery care"],


    category: "cardiac"
  },
  {
    id: 4,
    title: "Neurological Emergencies",
    instructor: "Dr. Neha Verma",
    date: "March 16, 2024",
    time: "2:00 PM - 5:00 PM",
    venue: "Workshop Hall A",
    capacity: "35 participants",
    level: "Intermediate",
    description: "Management of acute neurological conditions in the ICU setting.",
    topics: [
    "Stroke management protocols",
    "Traumatic brain injury care",
    "Status epilepticus treatment",
    "Neuro-monitoring techniques"],


    category: "neurological"
  },
  {
    id: 5,
    title: "Pediatric Critical Care",
    instructor: "Dr. Suresh Patel",
    date: "March 17, 2024",
    time: "9:00 AM - 12:00 PM",
    venue: "Workshop Hall B",
    capacity: "20 participants",
    level: "Specialized",
    description: "Specialized care for critically ill pediatric patients.",
    topics: [
    "Pediatric ventilation strategies",
    "Fluid management in children",
    "Pediatric shock management",
    "Family-centered care"],


    category: "pediatric"
  },
  {
    id: 6,
    title: "Quality & Safety in ICU",
    instructor: "Dr. Anjali Singh",
    date: "March 17, 2024",
    time: "2:00 PM - 5:00 PM",
    venue: "Workshop Hall C",
    capacity: "50 participants",
    level: "Beginner",
    description: "Implementing quality improvement and safety measures in critical care.",
    topics: [
    "Patient safety protocols",
    "Quality metrics in ICU",
    "Infection prevention strategies",
    "Team communication tools"],


    category: "quality"
  }];


  const getCategoryBadge = (category: string) => {
    const colors = {
      respiratory: "bg-blue-100 text-blue-800",
      infectious: "bg-green-100 text-green-800",
      cardiac: "bg-red-100 text-red-800",
      neurological: "bg-purple-100 text-purple-800",
      pediatric: "bg-yellow-100 text-yellow-800",
      quality: "bg-gray-100 text-gray-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const getLevelBadge = (level: string) => {
    const colors = {
      Beginner: "bg-green-100 text-green-800",
      Intermediate: "bg-yellow-100 text-yellow-800",
      Advanced: "bg-red-100 text-red-800",
      Specialized: "bg-purple-100 text-purple-800"
    };
    return colors[level as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <PageBanner
        title="Hands-on Workshops"
        subtitle="Enhance your skills with expert-led interactive workshops"
        badgeText="DCCS 2024 Workshops"
        showContactButton={false} />


      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Overview */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Workshop Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our workshops provide hands-on training and practical experience in critical care medicine. 
              Learn from renowned experts and enhance your clinical skills.
            </p>
          </div>

          {/* Workshop Categories */}
          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="respiratory">Respiratory</TabsTrigger>
              <TabsTrigger value="cardiac">Cardiac</TabsTrigger>
              <TabsTrigger value="neurological">Neuro</TabsTrigger>
              <TabsTrigger value="pediatric">Pediatric</TabsTrigger>
              <TabsTrigger value="infectious">Infectious</TabsTrigger>
              <TabsTrigger value="quality">Quality</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <div className="grid gap-6">
                {workshops.map((workshop) =>
                <Card key={workshop.id} className="border-2 border-gray-100 hover:border-[#BA0A1E]/20 transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <Badge className={getCategoryBadge(workshop.category)}>
                              {workshop.category}
                            </Badge>
                            <Badge className={getLevelBadge(workshop.level)}>
                              {workshop.level}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl md:text-2xl text-gray-900 mb-2">
                            {workshop.title}
                          </CardTitle>
                          <CardDescription className="text-gray-600">
                            Instructor: {workshop.instructor}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-[#BA0A1E] mb-1">
                            {workshop.price}
                          </div>
                          <Button className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] hover:from-[#035D8E] hover:to-[#BA0A1E] text-white">
                            Register
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{workshop.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="h-4 w-4 mr-2" />
                            {workshop.date}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Clock className="h-4 w-4 mr-2" />
                            {workshop.time}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="h-4 w-4 mr-2" />
                            {workshop.venue}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Users className="h-4 w-4 mr-2" />
                            {workshop.capacity}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Topics Covered
                          </h4>
                          <ul className="space-y-1">
                            {workshop.topics.map((topic, index) =>
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                                <div className="w-1.5 h-1.5 bg-[#BA0A1E] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                {topic}
                              </li>
                          )}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            {/* Individual category content */}
            {['respiratory', 'cardiac', 'neurological', 'pediatric', 'infectious', 'quality'].map((category) =>
            <TabsContent key={category} value={category} className="space-y-6">
                <div className="grid gap-6">
                  {workshops.filter((workshop) => workshop.category === category).map((workshop) =>
                <Card key={workshop.id} className="border-2 border-gray-100 hover:border-[#BA0A1E]/20 transition-all duration-300">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <Badge className={getCategoryBadge(workshop.category)}>
                                {workshop.category}
                              </Badge>
                              <Badge className={getLevelBadge(workshop.level)}>
                                {workshop.level}
                              </Badge>
                            </div>
                            <CardTitle className="text-xl md:text-2xl text-gray-900 mb-2">
                              {workshop.title}
                            </CardTitle>
                            <CardDescription className="text-gray-600">
                              Instructor: {workshop.instructor}
                            </CardDescription>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-[#BA0A1E] mb-1">
                              {workshop.price}
                            </div>
                            <Button className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] hover:from-[#035D8E] hover:to-[#BA0A1E] text-white">
                              Register
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{workshop.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <div className="flex items-center text-gray-600">
                              <Calendar className="h-4 w-4 mr-2" />
                              {workshop.date}
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Clock className="h-4 w-4 mr-2" />
                              {workshop.time}
                            </div>
                            <div className="flex items-center text-gray-600">
                              <MapPin className="h-4 w-4 mr-2" />
                              {workshop.venue}
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Users className="h-4 w-4 mr-2" />
                              {workshop.capacity}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                              <BookOpen className="h-4 w-4 mr-2" />
                              Topics Covered
                            </h4>
                            <ul className="space-y-1">
                              {workshop.topics.map((topic, index) =>
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                                  <div className="w-1.5 h-1.5 bg-[#BA0A1E] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                  {topic}
                                </li>
                          )}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                )}
                </div>
              </TabsContent>
            )}
          </Tabs>

          {/* Registration Information */}
          <div className="bg-gradient-to-r from-[#BA0A1E]/5 to-[#035D8E]/5 rounded-2xl p-8 mb-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Workshop Registration
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Secure your spot in our hands-on workshops. Limited seats available for each session.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <Award className="h-8 w-8 text-[#BA0A1E] mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">CME Credits</h4>
                  <p className="text-gray-600">3 CME hours per workshop</p>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-[#035D8E] mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Small Groups</h4>
                  <p className="text-gray-600">Limited to 20-50 participants</p>
                </div>
                <div className="text-center">
                  <BookOpen className="h-8 w-8 text-[#BA0A1E] mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Materials</h4>
                  <p className="text-gray-600">All materials included</p>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] hover:from-[#035D8E] hover:to-[#BA0A1E] text-white font-semibold">

                Register for Workshops
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>);

};

export default WorkshopsPage;