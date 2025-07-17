import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Mail, Phone, MapPin, Award, Target } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

const ExecutiveCommitteePage = () => {
  const executiveMembers = [
  {
    id: 1,
    name: 'Dr. Prashant Saxena',
    position: 'Chairman',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/5de63466-81ba-49b2-b2d0-5e2de694a069.png',
    bio: 'Leading critical care specialist with over 20 years of experience in intensive care medicine and chairman of ISCCM Delhi-Noida branch.',

    phone: '+91-98765-43210',
    location: 'New Delhi'
  },
  {
    id: 2,
    name: 'Dr. Akhil Taneja',
    position: 'Secretary',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/105d4daf-44cb-4f47-b39f-b42ece6ed840.jpg',
    bio: 'Renowned intensivist and researcher in critical care protocols and patient safety with extensive administrative experience.',

    phone: '+91-98765-43211',
    location: 'New Delhi'
  },
  {
    id: 3,
    name: 'Dr. Amit Goel',
    position: 'Treasurer',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/81786931-bfbd-4e91-a9c0-615ea68f75eb.jpg',
    bio: 'Financial management expert with strong background in healthcare economics and critical care administration.',

    phone: '+91-98765-43212',
    location: 'New Delhi'
  },
  {
    id: 4,
    name: 'Dr. Anup Agarwal',
    position: 'EC Member',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/7df6b9da-a0af-4eda-9a78-e16f6a7f50b6.jpg',
    bio: 'Expert in emergency medicine and critical care with extensive research background in intensive care protocols.',

    phone: '+91-98765-43213',
    location: 'New Delhi'
  },
  {
    id: 5,
    name: 'Dr. Ashutosh Kumar Garg',
    position: 'EC Member',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/fe6b3341-9b57-4f9d-b721-48a9389f7e15.jpg',
    bio: 'Leading researcher in critical care innovations and evidence-based medicine practices with focus on patient outcomes.',

    phone: '+91-98765-43214',
    location: 'New Delhi'
  },
  {
    id: 6,
    name: 'Dr. Rajat Agrawal',
    position: 'EC Member',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/bd416fc9-d17c-4f97-91a2-de770cfb6ae5.jpg',
    bio: 'Passionate educator in critical care training and continuing medical education programs with expertise in ventilator management.',

    phone: '+91-98765-43215',
    location: 'New Delhi'
  },
  {
    id: 7,
    name: 'Dr. Prashant Singh',
    position: 'EC Member',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/71868fb7-816e-44d8-b906-5595dc0ed1fe.jpg',
    bio: 'Experienced intensivist specializing in hemodynamic monitoring and critical care technology implementation.',

    phone: '+91-98765-43216',
    location: 'New Delhi'
  },
  {
    id: 8,
    name: 'Dr. Gaurav Pratap Singh',
    position: 'EC Member',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/dccc5ad0-6b0c-49c4-aada-eb7946fd2d1e.jpg',
    bio: 'Critical care physician with expertise in sepsis management and organ support systems in intensive care units.',

    phone: '+91-98765-43217',
    location: 'New Delhi'
  },
  {
    id: 9,
    name: 'Dr. Rishabh Kumar',
    position: 'EC Member',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/6f8bf38b-e7b9-4693-8154-24e464e915db.jpg',
    bio: 'Young and dynamic critical care specialist focused on modern ICU practices and quality improvement initiatives.',

    phone: '+91-98765-43218',
    location: 'New Delhi'
  }];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <PageBanner
        title="Executive Committee"
        subtitle="Meet the distinguished leaders driving excellence in critical care medicine"
        badgeText="Executive Committee"
        showContactButton={false} />


      {/* Our Team Section */}
      <section className="py-8 sm:py-12 bg-white/30">
        <div className="container mx-auto px-4">
          <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-center text-gray-900 flex items-center justify-center gap-3">
                <Users className="text-[#BA0A1E]" size={24} />
                Our Team
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-w-6xl mx-auto">
                <p className="text-gray-700 text-center mb-6 sm:mb-8 text-sm sm:text-base">
                  Our executive committee comprises distinguished professionals committed to advancing critical care medicine through leadership, innovation, and excellence.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
                  {executiveMembers.map((member) =>
                  <Card key={member.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="relative mb-4">
                          <img
                          src={member.image}
                          alt={member.name}
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto object-cover shadow-lg group-hover:scale-110 transition-transform duration-300" />

                          <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E]/20 to-[#035D8E]/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">{member.name}</h3>
                        <p className="text-[#BA0A1E] font-semibold text-xs mb-3">{member.position}</p>
                        <p className="text-gray-600 text-xs mb-4 line-clamp-3 leading-relaxed">{member.bio}</p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-center text-xs text-gray-500">
                            <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                            <span className="truncate">{member.location}</span>
                          </div>
                       
                          <div className="flex items-center justify-center text-xs text-gray-500">
                            <Phone className="w-3 h-3 mr-1 flex-shrink-0" />
                            <span className="truncate">{member.phone}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Past Members Section */}
      <section className="py-8 sm:py-12 bg-gray-50/30">
        <div className="container mx-auto px-4">
          <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-center text-gray-900 flex items-center justify-center gap-3">
                <Award className="text-[#BA0A1E]" size={24} />
                Past Members
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-w-6xl mx-auto">
                <p className="text-gray-700 text-center mb-6 sm:mb-8 text-sm sm:text-base">
                  Honoring the distinguished professionals who have contributed to the growth and excellence of our organization.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div className="relative mb-4">
                        <img
                          src="https://newoaks.s3.us-west-1.amazonaws.com/NewOaks/5500/897ade8b-7832-4402-b1b4-cc1a50c41491.jpeg"
                          alt="Dr. Anil Gurnani"
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto object-cover shadow-lg group-hover:scale-110 transition-transform duration-300" />

                        <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E]/20 to-[#035D8E]/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Anil Gurnani</h3>
                      <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Past Chairman</p>
                     
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div className="relative mb-4">
                        <img
                          src="https://newoaks.s3.us-west-1.amazonaws.com/NewOaks/5500/588cacb5-2b2c-43f8-8be2-88bd33bd9efd.jpeg"
                          alt="Dr. Prashant Saxena"
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto object-cover shadow-lg group-hover:scale-110 transition-transform duration-300" />

                        <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E]/20 to-[#035D8E]/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Prashant Saxena</h3>
                      <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Past Treasurer</p>
                     
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div className="relative mb-4">
                        <img
                          src="https://newoaks.s3.us-west-1.amazonaws.com/NewOaks/5500/de79f0d1-5885-4c2c-88db-015fcbfde066.jpeg"
                          alt="Dr. Ashutosh Bhardwaj"
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto object-cover shadow-lg group-hover:scale-110 transition-transform duration-300" />

                        <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E]/20 to-[#035D8E]/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Ashutosh Bhardwaj</h3>
                      <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Past Secretary</p>
                      
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Committee Structure Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Leadership Structure */}
            <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center text-gray-900 flex items-center justify-center gap-3">
                  <Award className="text-[#BA0A1E]" size={24} />
                  Leadership Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-[#BA0A1E]/10 to-[#035D8E]/10 p-4 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-3">Executive Hierarchy</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="font-medium">Chairman:</span>
                        <span className="text-gray-700">Dr. Prashant Saxena</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Secretary:</span>
                        <span className="text-gray-700">Dr. Akhil Taneja</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Treasurer:</span>
                        <span className="text-gray-700">Dr. Amit Goel</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">EC Members:</span>
                        <span className="text-gray-700">6 Members</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <p className="text-gray-700 text-sm">
                      Our executive committee works collaboratively to ensure the highest standards of critical care medicine and professional development across the Delhi-Noida region.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Committee Mission */}
            <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center text-gray-900 flex items-center justify-center gap-3">
                  <Target className="text-[#035D8E]" size={24} />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 text-center text-sm md:text-base">
                    Our executive committee is dedicated to advancing critical care medicine through:
                  </p>
                  <div className="space-y-3">
                    {[
                    'Enhance patient care standards in intensive care units',
                    'Promote continuous medical education and research',
                    'Enable knowledge-sharing among healthcare professionals',
                    'Serve as a collaborative platform for clinical innovation',
                    'Foster professional development and networking',
                    'Advocate for best practices in critical care medicine'].
                    map((mission, index) =>
                    <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-sm">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] rounded-full flex items-center justify-center text-white font-bold text-xs">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 text-sm md:text-base font-medium">{mission}</p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
       <section className="py-12  bg-gradient-to-r from-[#BA0A1E] to-[#035D8E]">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Join Our Mission</h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Be part of India's largest critical care community and help us advance the standards of patient care.
          </p>
          <div className="mb-6 p-4 bg-white/10 rounded-lg border border-white/20 max-w-md mx-auto">
                  <div className="text-sm text-amber-200 font-medium mb-2">⚠️ Important Notice</div>
                  <div className="text-sm text-blue-100">Please enter Delhi/Noida as your city or provide your Delhi/Noida address when applying.</div>
                </div>
          <Button
            size="lg"
            className="bg-white text-[#BA0A1E] hover:bg-gray-100 font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open('https://isccm.org/Membership/ApplyOnline/', '_blank')}>

            Become a Member
          </Button>
        </div>
      </section>
      <Footer />
    </div>);

};

export default ExecutiveCommitteePage;