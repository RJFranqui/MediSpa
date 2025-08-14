
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Smartphone, Facebook, Instagram } from "lucide-react";

// This is the Contact Page component.
// It is designed to be used as a standalone page in your app/contact/page.tsx file.
export default function ContactPage() {
  const contactInfo = {
    address: "135 W End Ave, Knoxville, 37934",
    serviceArea: "Knoxville, TN",
    phone: "(865) 671-2342",
    email: "karen_franqui@msn.com",
    socialMedia: {
      facebook: "https://www.facebook.com/adamevemedispa/",
      instagram: "https://www.instagram.com/adameve_medispa/",
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 font-inter">
      {/* Assuming Navbar is in the layout file */}
      <section className="relative text-center py-12 md:py-20 overflow-hidden">
      {/* Background Image and Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/adamEveSpa.jpg')` }}
      ></div>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
          Welcome to Adam & Eve Medispa
        </h1>
        <p className="mt-4 text-lg text-white">
          Your journey to a more radiant you starts here.
        </p>
      </div>
    </section>
      <main className="flex-1 px-4 py-8 md:px-6 md:py-12 mt-16">
        
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Page Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              We look forward to hearing from you.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Information Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Get in Touch
                </CardTitle>
                <CardDescription>
                  Find us and connect with us using the information below.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Address & Service Area</p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {contactInfo.address}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {contactInfo.serviceArea}
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-center space-x-4">
                  <Smartphone className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-gray-700 dark:text-gray-300 hover:underline">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <Separator />

                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-gray-700 dark:text-gray-300 hover:underline">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media and Widget Card */}
            <Card className="hidden md:block">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Connect with Us
                </CardTitle>
                <CardDescription>
                  Follow us on social media for our latest updates.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-6">
                  {/* Social Media Links */}
                  <a href={contactInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
                  <Facebook className="h-8 w-8" />
                  </a>

                  <a href={contactInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition-colors">
                    <Instagram className="h-8 w-8" />
                  </a>
                </div>

                <Separator />

                {/* Placeholder for social media widget */}
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%2F%3Ffbid%3D418814873749484%26set%3Da.418814833749488&width=500&show_text=true&height=609&appId" 
                    
                    className="bg-gray-200 dark:bg-gray-800 rounded-lg h-64 flex items-center justify-center text-center"
                    scrolling="no" frameBorder="0" allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      {/* Footer can be in the layout file */}
    </div>
  );
}
