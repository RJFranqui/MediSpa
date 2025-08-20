"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Home, Clock, Phone, Mail } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
// This is the reusable Navbar component.
// You can import this into any page to have consistent navigation.
const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home'); // State to track the active tab

  const navItems = [
    { name: 'Home', icon: <Home className="h-4 w-4" />, link: '#home' },
    { name: 'Services', icon: <Clock className="h-4 w-4" />, link: '#services' },
    { name: 'Contact', icon: <Phone className="h-4 w-4" />, link: '#contact' },
    { name: 'Book', icon: <Mail className="h-4 w-4" />, link: '#book' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-4 bg-white/80 backdrop-blur-md border-b-2 border-gray-200 dark:bg-gray-900/80 dark:border-gray-800">
      {/* Clinic Logo/Name */}
      <a href="#" className="flex items-center gap-2 font-bold text-lg">
        {/*
        <img src="data:image/png;base64,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" alt="triquetra" className="h-6 w-6 text-indigo-600"></img>
        <span className="hidden sm:inline">Adam & Eve Medispa</span>
        */}
        <Image src="images/logoNotxt.svg" alt="Logo" 
          width={100}
          height={38}
          priority
          className="hidden sm:inline"/>
        <span className="hidden sm:inline">Adam & Eve Medispa</span>
      </a>

      {/* Navigation Links */}
      <div className="flex items-center gap-4 md:gap-6">
      <div className="flex items-center gap-4 md:gap-6">
        <Link href="/" className="...">Home</ Link>
        <Link href="/services" className="...">Services</Link>
        <Link href="/contact" className="...">Contact</Link>
        {/* Book Appointment Button */}
        </div>
      </div>
      
      {/* Call to Action Button sm:inline-flex add this back when implementing */}
      <Button className="hidden bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition-all">
        Book an Appointment
      </Button>
    </nav>
  );
};


export default Navbar;