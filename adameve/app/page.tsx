
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";




// This is the main page component that uses the Navbar.
export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 font-inter">


    {/* Hero Section - now full width */}
    <section className="relative text-center py-12 md:py-20 overflow-hidden">
      {/* Background Image and Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("/images/adamEveSpa.jpg")` }}
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
    <main className="flex-1 px-4 py-8 md:px-6 md:py-12">
      <div className="max-w-4xl mx-auto space-y-8">
          
      
          {/* Owner's Information Section */}
          <section id="owner-info">
            <Card>
              <CardHeader>
                <CardTitle>Meet Our Founder, Karen Cooke Franqui</CardTitle>
                <CardDescription>
                  Nurse Practitioner at Adam Eve Medispa, LLC
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
                <div className="flex-1 order-2 md:order-1 mt-4 md:mt-0">
                  <p className="text-gray-700 dark:text-gray-300">
                  I am a Nurse Practitioner. I am passionate about preventative health care and educating patients to be their own health care advocate. 
                  My goal is to create a trusting relationship with all my patients and to provide the the anti-aging tools to promote a healthy weight, diet, appearance, and lifestyle choices. Providing identical hormone replacement therapy allows patients to enjoy a better quality of life and it&apos;s a privilege to be part of that process.
                  </p>
                </div>
                <div className="w-full md:w-1/2 flex-shrink-0 order-1 md:order-2  ">
                  <img 
                    src="images/founder.jpeg" 
                    alt="Karen Cooke Franqui" 
                    className="rounded-full w-full h-auto object-cover" 
                  />
                </div>
              </CardContent>
            </Card>
          </section>
          
          <Separator />
          
          {/* General Information Section */}
          <section id="general-info">
            <Card>
              <CardHeader>
                <CardTitle>What We Do</CardTitle>
                <CardDescription>
                  Providing personalized care to help you feel your best.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We specialize in a range of treatments
                  designed to enhance natural beauty and promote wellness. From
                  advanced box injections to comprehensive weight loss
                  management plans, our services are tailored to meet the unique
                  needs of each client. We believe in a holistic approach that
                  combines cutting-edge treatments with personalized support.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Our state-of-the-art facility provides a serene and private
                  environment where you can relax and feel confident in your
                  care. We are committed to using the highest quality products
                  and the latest techniques to ensure safe and effective results.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      
    </div>
  );
}
