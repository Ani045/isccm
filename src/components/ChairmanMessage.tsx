import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Mail, ChevronDown, ChevronUp } from 'lucide-react';

const ChairmanMessage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-6 sm:py-8 bg-gray-50" id="chairman">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#035D8E] mb-4">
            Leadership Message
          </h2>
          <div className="w-20 h-1 bg-[#BA0A1E] mx-auto"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Card className="shadow-lg border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
                {/* Left side - Leadership info */}
                <div className="lg:col-span-1 p-4 sm:p-6 bg-gradient-to-br from-[#035D8E] to-[#0B7AAA] text-white">
                  {/* Chairman */}
                  <div className="flex flex-col items-center mb-4">
                    <img
                      src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/5de63466-81ba-49b2-b2d0-5e2de694a069.png"
                      alt="Dr. Prashant Saxena"
                      className="w-20 h-20 rounded-full mb-3 object-cover border-3 border-white shadow-lg" />

                    <div className="text-center">
                      <h3 className="text-base sm:text-lg font-bold mb-1">Dr. Prashant Saxena</h3>
                      <p className="text-yellow-200 font-semibold text-sm">Chairman</p>
                      <p className="text-gray-200 text-xs">ISCCM Delhi-Noida</p>
                    </div>
                  </div>

                  {/* Secretary */}
                  <div className="flex flex-col items-center mb-4">
                    <img
                      src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/105d4daf-44cb-4f47-b39f-b42ece6ed840.jpg"
                      alt="Dr. Akhil Taneja"
                      className="w-20 h-20 rounded-full mb-3 object-cover border-3 border-white shadow-lg" />

                    <div className="text-center">
                      <h3 className="text-base sm:text-lg font-bold mb-1">Dr. Akhil Taneja</h3>
                      <p className="text-yellow-200 font-semibold text-sm">Secretary</p>
                      <p className="text-gray-200 text-xs">ISCCM Delhi-Noida</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Button
                      className="bg-[#BA0A1E] hover:bg-red-700 text-white px-3 py-2 text-sm flex items-center gap-2 shadow-md"
                      onClick={() => window.open('mailto:isccmdelhichapter@gmail.com', '_blank')}>
                      <Mail className="h-4 w-4" />
                      Contact Us
                    </Button>
                  </div>
                </div>
                
                {/* Right side - Message */}
                <div className="lg:col-span-3 p-4 sm:p-6 bg-white">
                  <div className="mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-[#035D8E] mb-2">Welcome Message</h3>
                    <div className="w-16 h-1 bg-[#BA0A1E]"></div>
                  </div>
                  
                  <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                    <p>
                      <strong>Dear Colleagues and Friends,</strong>
                    </p>
                    
                    <p>
                      Welcome to the official website of the SCCM Delhi-Noida branch. It is a matter of great honour and pride to serve this esteemed organization which stands at the forefront of advancing critical care medicine.
                    </p>
                    
                    <p>
                      In the rapidly evolving field of critical care, our society remains committed to fostering excellence in patient care, education, and research. The challenges we face in the intensive care units are immense, and it is through our collective dedication and expertise that we can improve outcomes for the critically ill.
                    </p>
                    
                    {isExpanded &&
                    <div className="space-y-4 animate-in slide-in-from-top-4 duration-300">
                        <p>
                          Our society serves as a platform for collaboration among healthcare professionals, researchers, and policymakers. By sharing knowledge, best practices, and innovations, we aim to drive advancements in critical care that make a tangible difference in the lives of patients and their families.
                        </p>
                        
                        <p>
                          This website is designed to be a resource for all members, providing access to the latest research, guidelines, and educational opportunities. I encourage you to explore the content, participate in our events, and contribute to the ongoing dialogue within our community.
                        </p>
                        
                        <p>
                          As we look to the future, we are confident that together, we will continue to push the boundaries of what is possible in critical care medicine. Thank you for your unwavering commitment and passion. Together, we are making a difference.
                        </p>
                        
                        <p>
                          Our society's strength lies in its members. Together, we represent a diverse and talented group united by a common goal. Inclusivity is vital to our society's character. We hope that every member feels appreciated, heard, and empowered, and that they have equitable opportunities to actively participate in and contribute to the society's efforts.
                        </p>
                        
                        <p>
                          We invite comments and feedback at <a href="mailto:isccmdelhichapter@gmail.com" className="text-[#BA0A1E] hover:text-[#035D8E] font-semibold">isccmdelhichapter@gmail.com</a> to improve upon ourselves and society.
                        </p>
                        
                        <div className="mt-6 pt-4 border-t border-gray-200">
                          <p><strong>Warm regards,</strong></p>
                          <p><strong>Long Live SCCM (Delhi-Noida)</strong></p>
                        </div>
                        
                        <div className="mt-6 flex flex-col sm:flex-row gap-6">
                          <div className="flex-1">
                            <p className="font-semibold text-[#035D8E]">Dr Prashant Saxena</p>
                            <p className="text-sm text-gray-600">Chairman</p>
                            <p className="text-sm text-gray-600">SCCM, Delhi-Noida</p>
                          </div>
                          
                          <div className="flex-1">
                            <p className="font-semibold text-[#035D8E]">Dr. Akhil Taneja</p>
                            <p className="text-sm text-gray-600">Secretary</p>
                            <p className="text-sm text-gray-600">SCCM, Delhi-Noida</p>
                          </div>
                        </div>
                      </div>
                    }
                    
                    <div className="flex justify-center mt-4">
                      <Button
                        onClick={() => setIsExpanded(!isExpanded)}
                        variant="outline"
                        className="text-[#035D8E] border-[#035D8E] hover:bg-[#035D8E] hover:text-white flex items-center gap-2">
                        {isExpanded ? 'Show Less' : 'Read More'}
                        {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>);

};

export default ChairmanMessage;