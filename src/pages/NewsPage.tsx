import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowRight, Eye, Share2, Award, Users, MapPin, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

const NewsPage = () => {
  const featuredNews = [
  {
    id: 1,
    title: "ISCCM Delhi-Noida Wins Best Metro Branch Award for 2 Consecutive Years",
    summary: "The Society of Critical Care Medicine (ISCCM) Delhi-Noida chapter has been honored with the Best Metro Branch Award for 2023 and 2024 by the Indian Society of Critical Care Medicine (ISCCM).",
    content: "This prestigious recognition highlights the chapter's outstanding contributions to critical care medicine education, research, and community service. The award recognizes the chapter's innovative academic programs, successful conferences, and the quarterly publication of 'Tarang' newsletter.",
    date: "2024-01-15",
    author: "Dr. Prashant Saxena",
    category: "Achievement",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/3f96240c-c053-4591-b750-dbf4de31bdf8.png",
    views: 1850,
    featured: true
  },
  {
    id: 2,
    title: "DCCS 2024: 19th Delhi Critical Care Symposium Announcement",
    summary: "The highly anticipated 19th Delhi Critical Care Symposium (DCCS 2024) is scheduled for November 8-10, 2024, at India Habitat Centre, New Delhi.",
    content: "This year's theme 'Timed decision making & clinical judgement' will bring together leading experts in critical care medicine. The symposium will feature workshops, case presentations, and the latest research in critical care.",
    date: "2024-01-10",
    author: "Dr. Akhil Taneja",
    category: "Conference",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/3e66f9ce-c924-49c9-bce5-bbfdb82529e6.png",
    views: 1420,
    featured: false
  },
  {
    id: 3,
    title: "Tarang Newsletter Volume 2, Issue 1 Released",
    summary: "The latest issue of our quarterly newsletter 'Tarang' (तरंग) is now available, featuring academic articles, case studies, and society updates.",
    content: "This issue includes Pearls of Wisdom on 'Candida auris', Cases to Remember, Journal Quest on REVISE trial, and Student's Café covering Targeted Temperature Management protocols.",
    date: "2024-01-08",
    author: "Dr. Amit Goel",
    category: "Publication",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/11d340e0-44f4-4152-b719-999978c86ece.png",
    views: 986,
    featured: false
  }];


  const recentNews = [
  {
    id: 4,
    title: "New Executive Committee 2024-26 Announced",
    summary: "The new leadership team for ISCCM Delhi-Noida has been announced with Dr. Prashant Saxena as Chairman, Dr. Akhil Taneja as Secretary, and Dr. Amit Goel as Treasurer.",
    date: "2024-01-05",
    author: "ISCCM Delhi-Noida",
    category: "Announcement",
    views: 764
  },
  {
    id: 5,
    title: "11 New Members Welcomed to ISCCM Delhi-Noida",
    summary: "The society welcomes 11 new members including Life Members and Associate Life Members, expanding our critical care community.",
    date: "2024-01-03",
    author: "Dr. Akhil Taneja",
    category: "Membership",
    views: 532
  },
  {
    id: 6,
    title: "Academic Council Meetings at India Habitat Centre",
    summary: "Regular monthly academic meetings continue at India Habitat Centre featuring CME programs, case presentations, and expert discussions.",
    date: "2024-01-01",
    author: "Academic Council",
    category: "Academic",
    views: 678
  }];


  const achievements = [
  {
    name: "Dr. Prashant Saxena",
    title: "Notable Personalities of India 2024",
    description: "Recognized for outstanding contributions to critical care medicine"
  },
  {
    name: "Dr. Amit Goel",
    title: "Inspiring Intensivist 2024 by Times Network",
    description: "Honored for excellence in intensive care medicine"
  },
  {
    name: "Dr. Rajat Agarwal",
    title: "ET Now Inspiring Intensivist Award",
    description: "Recognized for innovative approaches in critical care"
  }];


  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Achievement': 'bg-green-100 text-green-800',
      'Conference': 'bg-blue-100 text-blue-800',
      'Publication': 'bg-purple-100 text-purple-800',
      'Announcement': 'bg-yellow-100 text-yellow-800',
      'Membership': 'bg-orange-100 text-orange-800',
      'Academic': 'bg-red-100 text-red-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const handleViewMoreClick = () => {
    // Open the PDF in a new tab
    window.open('https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/0403572b-c8b8-4700-90d7-51e189f1cba0.pdf', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <PageBanner
        title="ISCCM Delhi-Noida News & Updates"
        subtitle="Stay informed about the latest developments in critical care medicine, our society's achievements, and upcoming events."
        badgeText="News & Updates"
        showContactButton={false} />


      {/* Organization Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Best Metro Branch</h3>
              <p className="text-gray-600">Winner for 2 consecutive years (2023-2024)</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Growing Community</h3>
              <p className="text-gray-600">11 new members welcomed recently</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tarang Newsletter</h3>
              <p className="text-gray-600">Quarterly publication - Volume 2, Issue 1</p>
            </div>
          </div>
        </div>

        {/* Featured News */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured News
          </h2>
          
          {featuredNews.slice(0, 1).map((news) =>
          <Card key={news.id} className="mb-8 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-64 md:h-full object-cover" />

                </div>
                <div className="md:w-1/2 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className={getCategoryColor(news.category)}>
                      {news.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Eye size={16} />
                      {news.views} views
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {news.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {news.summary}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {formatDate(news.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      {news.author}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button
                    onClick={handleViewMoreClick}
                    className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] hover:from-[#035D8E] hover:to-[#BA0A1E] text-white">

                      View More
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                   
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>

       

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredNews.slice(1).map((news) =>
          <Card key={news.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative">
                <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover" />

                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(news.category)}>
                    {news.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {news.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {news.summary}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {formatDate(news.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye size={14} />
                    {news.views}
                  </div>
                </div>
                
                <Button
                size="sm"
                onClick={handleViewMoreClick}
                className="w-full bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] hover:from-[#035D8E] hover:to-[#BA0A1E] text-white">

                  View More
                  <ArrowRight size={14} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Recent News */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Recent Updates
          </h2>
          
          <div className="space-y-6">
            {recentNews.map((news) =>
            <div key={news.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className={getCategoryColor(news.category)}>
                        {news.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Eye size={14} />
                        {news.views} views
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {news.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-3 text-sm">
                      {news.summary}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {formatDate(news.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        {news.author}
                      </div>
                    </div>
                  </div>
                  
                  <Button
                  size="sm"
                  variant="outline"
                  onClick={handleViewMoreClick}
                  className="ml-4 hover:bg-gradient-to-r hover:from-[#BA0A1E] hover:to-[#035D8E] hover:text-white">

                    View More
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          <div className="text-center mt-8">
            <Button
              size="lg"
              onClick={handleViewMoreClick}
              className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] hover:from-[#035D8E] hover:to-[#BA0A1E] text-white">

              View Complete Newsletter
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Contact Information
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Official Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-blue-600" />
                  <span className="text-gray-600">India Habitat Centre, New Delhi</span>
                </div>
                <div className="flex items-center gap-3">
                  <User size={18} className="text-blue-600" />
                  <span className="text-gray-600">Secretary: isccmdelhichapter@gmail.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Academic Council</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div><strong>Patron:</strong> Dr. Anil Gurnani</div>
                <div><strong>Guide & Mentor:</strong> Dr. Ashutosh Bhardwaj</div>
                <div><strong>Editorial Board:</strong> Dr. Amit Goel, Dr. Ashutosh Kumar Garg</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>);

};

export default NewsPage;