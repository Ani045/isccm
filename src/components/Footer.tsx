import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'About SCCM Delhi/Noida', href: '#about' },
  { name: 'Executive Committee', href: '#committee' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'DCCS 2024', href: '#dccs' },
  { name: 'Members Forum', href: '#forum' },
  { name: 'News & Publications', href: '#news' },
  { name: 'Branch Election2024', href: '#election' }];


  return (
    <footer className="bg-[#232B31] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/5a981f19-b048-431c-8acf-c36bed19445d.png"
                alt="ISCCM Logo"
                className="h-16 w-auto" />
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Advancing the art and science of critical care medicine through education, 
              research, and advocacy to improve patient outcomes.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-blue-200 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-blue-200 hover:text-white cursor-pointer" />
              <Linkedin className="h-5 w-5 text-blue-200 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-blue-200 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {menuItems.slice(0, 4).map((item) =>
              <li key={item.name}>
                  <a
                  href={item.href}
                  className="text-blue-200 hover:text-white transition-colors text-sm">

                    {item.name}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">More Links</h4>
            <ul className="space-y-2">
              {menuItems.slice(4).map((item) =>
              <li key={item.name}>
                  <a
                  href={item.href}
                  className="text-blue-200 hover:text-white transition-colors text-sm">

                    {item.name}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-[#BA0A1E] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-blue-200">+91 96674 12295</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-[#BA0A1E] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-blue-200">isccmdelhichapter@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-[#BA0A1E] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-blue-200">
                    805, 8th Floor, Shakuntla Building<br />
                    59, Nehru Place, New Delhi-110019
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white-700 text-center">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} ISCCM Delhi-Noida Branch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>);

};

export default Footer;