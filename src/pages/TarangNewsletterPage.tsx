import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Download, Eye, FileText, ArrowRight, Mail, Bell, BookOpen, Users, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

const TarangNewsletterPage = () => {
  const newsletters = [
  {
    id: 1,
    title: "Tarang Newsletter - Volume 1, Issue 4",
    issue: "Volume 1, Issue 4",
    date: "2024-01-15",
    period: "January-March 2024",
    description: "ISCCM Delhi-Noida 'Tarang' Newsletter featuring the quarterly e-bulletin of the Society of Critical Care Medicine's Delhi-Noida chapter, which was named 'Best Metro Branch' for the second consecutive year by ISCCM.",
    fullDescription: "This comprehensive issue includes leadership messages from outgoing Chairman Dr. Anil Gurnani reflecting on successful tenure including innovative programs like 'Aap ki Adalat' featuring ICU legends. The newsletter serves as both an educational resource for critical care practitioners and a communication tool for the society's 780+ members, emphasizing evidence-based medicine and continuous learning in intensive care.",
    highlights: [
    "Leadership Messages & Reflections",
    "Comprehensive article on drowning emergencies with case studies",
    "Detailed case report on BRASH syndrome",
    "Review of the CLOVERS trial comparing fluid management in sepsis",
    "Innovation Focus: Wearable technology for early warning systems",
    "Community updates and ultrasound quiz"],

    downloadUrl: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/965343ea-c2b4-4563-9679-4f4c2f36c214.pdf",
    views: 2340,
    featured: true,
    coverImage: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/3f96240c-c053-4591-b750-dbf4de31bdf8.png"
  },
  {
    id: 2,
    title: "Tarang Newsletter - Volume 1, Issue 2",
    issue: "Volume 1, Issue 2",
    date: "2023-08-15",
    period: "July-September 2023",
    description: "The second issue of Tarang continues the tradition of providing comprehensive educational content and community engagement for critical care professionals in the Delhi-Noida region.",
    fullDescription: "This issue builds upon the foundation established in the first volume, featuring advanced clinical cases, expert discussions, and evidence-based insights that are essential for ICU practitioners. The newsletter maintains its commitment to bilingual content and interactive learning elements.",
    highlights: [
    "Advanced Clinical Case Studies",
    "Expert Panel Discussions",
    "Evidence-Based Treatment Protocols",
    "Interactive Medical Quizzes",
    "Community Member Spotlights",
    "Latest Research Updates"],

    downloadUrl: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/b8e39b63-8cc3-4cc1-b961-36220002ec15.pdf",
    views: 1890,
    featured: false,
    coverImage: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/3e66f9ce-c924-49c9-bce5-bbfdb82529e6.png"
  },
  {
    id: 3,
    title: "Tarang Newsletter - Volume 1, Issue 1",
    issue: "Volume 1, Issue 1",
    date: "2023-05-15",
    period: "April-June 2023",
    description: "The inaugural issue of Tarang, the official quarterly e-bulletin of the Society of Critical Care Medicine (ISCCM) Delhi-Noida Chapter, marking the beginning of a comprehensive educational and communication platform for critical care professionals.",
    fullDescription: "This historic first issue establishes Tarang as a bilingual newsletter featuring clinical pearls, case studies, journal reviews, and society updates. Published quarterly since 2023, Tarang combines serious medical education with community engagement, making it an essential resource for critical care physicians, residents, and healthcare professionals in the Delhi-Noida region seeking to stay current with best practices and connect with their professional community.",
    highlights: [
    "Educational Content: Clinical cases and trauma management guidelines",
    "Interactive Elements: Medical quizzes and student sections",
    "Community Updates: New member welcomes and clinical meetings",
    "Practical Learning: Real-world case discussions",
    "Clinical Pearls for ICU practitioners",
    "Journal Quest segments and evidence-based insights"],

    downloadUrl: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/c6fb3376-9a00-4833-99da-fa56b15f6cf6.pdf",
    views: 1654,
    featured: false,
    coverImage: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/11d340e0-44f4-4152-b719-999978c86ece.png"
  }];


  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleDownload = (downloadUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <PageBanner
        title="Tarang Newsletter"
        subtitle="The official quarterly e-bulletin of the Society of Critical Care Medicine (ISCCM) Delhi-Noida Chapter. A comprehensive educational and communication platform for critical care professionals, featuring clinical pearls, case studies, journal reviews, and society updates."
        badgeText="Newsletter"
        showContactButton={false} />


      {/* Newsletter Issues */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Newsletter Issues
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our quarterly publications featuring the latest in critical care medicine, 
            research updates, and community insights.
          </p>
        </div>

        <div className="space-y-12">
          {newsletters.map((newsletter, index) =>
          <Card key={newsletter.id} className={`overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${newsletter.featured ? 'ring-2 ring-[#BA0A1E]' : ''}`}>
              <div className="lg:flex">
                <div className="lg:w-1/3">
                  <img
                  src={newsletter.coverImage}
                  alt={newsletter.title}
                  className="w-full h-64 lg:h-full object-cover" />

                </div>
                <div className="lg:w-2/3 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-[#BA0A1E] text-white">
                      {newsletter.issue}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Eye size={16} />
                      {newsletter.views} views
                    </div>
                    {newsletter.featured &&
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                        Latest
                      </Badge>
                  }
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {newsletter.title}
                  </h3>
                  
                  <p className="text-[#035D8E] font-semibold mb-4">
                    {newsletter.period}
                  </p>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {newsletter.description}
                  </p>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {newsletter.fullDescription}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Heart size={18} className="mr-2 text-[#BA0A1E]" />
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {newsletter.highlights.map((highlight, highlightIndex) =>
                    <li key={highlightIndex} className="flex items-start gap-2 text-gray-700">
                          <div className="w-2 h-2 bg-[#BA0A1E] rounded-full mt-2 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                    )}
                    </ul>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {formatDate(newsletter.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText size={16} />
                      PDF Format
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      ISCCM Delhi-Noida Chapter
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button
                    className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] hover:from-[#035D8E] hover:to-[#BA0A1E] text-white"
                    onClick={() => handleDownload(newsletter.downloadUrl, `tarang-${newsletter.id}.pdf`)}>
                      <Download size={16} className="mr-2" />
                      Download PDF
                    </Button>
                  
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Newsletter Information Section */}
        

        {/* Newsletter Subscription Section */}
        <div className="mt-16 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">
            Never Miss an Issue
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Subscribe to receive the latest Tarang Newsletter directly in your inbox. 
            Stay updated with critical care medicine advancements, research findings, and ISCCM community news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50" />

            <Button
              size="lg"
              className="bg-white text-[#BA0A1E] hover:bg-gray-100 font-semibold">
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>);

};

export default TarangNewsletterPage;