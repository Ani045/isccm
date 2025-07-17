import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Building, Award, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutISCCM = () => {
  const navigate = useNavigate();

  const stats = [
  {
    icon: Users,
    number: "17,137",
    label: "Total Members",
    color: "text-[#BA0A1E]"
  },
  {
    icon: Building,
    number: "98",
    label: "City Branches",
    color: "text-[#035D8E]"
  },
  {
    icon: Globe,
    number: "2",
    label: "State Branches",
    color: "text-[#BA0A1E]"
  },
  {
    icon: Award,
    number: "30+",
    label: "Years of Excellence",
    color: "text-[#035D8E]"
  }];

  const handleAboutUs = () => {
    navigate('/about');
  };

  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#035D8E] mb-4">
            About ISCCM
          </h2>
          <div className="w-20 h-1 bg-[#BA0A1E] mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#035D8E] mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The Indian Society of Critical Care Medicine was established on 9th October, 1993, in Mumbai, India. 
                  It is the largest non-profit association of Indian Physicians, Nurses, Physiotherapists and other 
                  allied health care professionals involved in the care of the critically ill.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Our society is dedicated to advancing the art and science of critical care medicine through education, 
                  research, and advocacy. We strive to improve patient outcomes and promote excellence in critical care 
                  practices across India.
                </p>
                <Button className="bg-[#BA0A1E] hover:bg-[#035D8E] text-white px-6 py-3" onClick={handleAboutUs}>
                  Read More
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) =>
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <stat.icon className={`h-10 w-10 ${stat.color} mx-auto mb-4`} />
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
            
            <Card className="shadow-lg border-0 bg-[#035D8E]">
              <CardContent className="p-6 text-center text-white">
                <h4 className="text-xl font-bold mb-2">Join Our Community</h4>
                <p className="text-blue-100 mb-4">
                  Be part of India's leading critical care medical society
                </p>
                <div className="mb-4 p-3 bg-white/10 rounded-lg border border-white/20">
                  <div className="text-xs text-amber-200 font-medium mb-1">⚠️ Important Notice</div>
                  <div className="text-xs text-blue-100">Please enter Delhi/Noida as your city or provide your Delhi/Noida address when applying.</div>
                </div>
                <Button
                  className="bg-[#BA0A1E] hover:bg-white hover:text-[#035D8E] text-white px-6 py-2"
                  onClick={() => window.open('https://isccm.org/Membership/ApplyOnline/', '_blank')}>

                  Become a Member
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>);

};

export default AboutISCCM;