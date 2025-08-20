
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
                <div className="flex-1 order-2 md:order-1 mt-4 md:mt-0 text-center">
                  <div className="text-gray-700 dark:text-gray-300">
                  <ul >
                    <li>As a dedicated Nurse Practitioner, my journey into the world of aesthetic and preventative health was born from a deep-seated passion for wellness and patient empowerment. I believe that true health extends beyond simply treating symptoms; it&apos;s about proactively nurturing the body and mind. My core philosophy is centered on preventative healthcare, and I am driven by the belief that every patient should be their own fiercest health advocate. That&apos;s why a key part of my practice is devoted to educating and empowering individuals with the knowledge they need to make informed decisions about their well-being.
                    </li>
                    <li>
                    My goal is to build a foundation of trust with every patient who walks through our doors. By creating a warm, confidential, and judgment-free environment, I can truly understand your personal health goals. I am committed to providing you with the most effective anti-aging tools available to promote a healthy weight, balanced diet, radiant appearance, and positive lifestyle choices. From comprehensive consultations to personalized treatment plans, I focus on helping you feel revitalized from the inside out.
                    </li>
                 </ul>
                  </div>
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
