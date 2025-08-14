import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram } from "lucide-react";


const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border-t-2 border-gray-200 dark:border-gray-800">
      <div className="flex space-x-6 mb-4">
        {/* Social Media Links */}
        <a href="https://www.facebook.com/adamevemedispa/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
          <Facebook className="h-6 w-6" />
        </a>
        <a href="https://www.instagram.com/adameve_medispa/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors">
          <Instagram className="h-6 w-6" />
        </a>
      </div>
      <Separator className="w-1/4" />
      <div className="mt-4 text-sm">
        © 2024 Adam & Eve Medispa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
