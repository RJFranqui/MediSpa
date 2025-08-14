
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";


export default function ServicesPage() {
    const services = [
        {
          name: "Weight Loss",
          subtitle: "Shots, medically supervised weight loss",
          description: "Our medically supervised weight loss programs are tailored to your unique needs, combining advanced therapies like weight loss shots with personalized diet and exercise plans. We focus on sustainable, long-term results to help you achieve your wellness goals safely and effectively.",
          pricing: "Consultation required",
          imageUrl: "images/weightLoss.jpg"
        },
        {
          name: "Botox",
          subtitle: "Smooth away fine lines and wrinkles",
          description: "Botox treatments are a popular, non-surgical way to reduce the appearance of fine lines and wrinkles. Our skilled practitioners use a meticulous approach to provide natural-looking results that leave you with a refreshed and youthful appearance.",
          pricing: "Starting from $XX per unit",
          imageUrl: "images/botox.png"
        },
        {
          name: "Dermal Filler",
          subtitle: "Restore volume and youthful contours",
          description: "Dermal fillers are used to restore lost volume, smooth out deep wrinkles, and enhance facial contours. We offer a variety of FDA-approved fillers to create a customized treatment plan that beautifully complements your natural features.",
          pricing: "Starting from $XXX per syringe",
          imageUrl: "images/dermal.png"
        },
        {
          name: "PDO Thread Lift",
          subtitle: "Non-surgical facelift for a lifted look",
          description: "A PDO thread lift is a minimally invasive procedure that provides an immediate lifting and tightening effect. The threads stimulate collagen production, improving skin texture and elasticity over time for a firmer, more rejuvenated look.",
          pricing: "Starting from $XXXX per area",
          imageUrl: "images/PDO.png"
        },
        {
          name: "Bio-identical Hormone Replacement Therapy",
          subtitle: "Rebalance your hormones naturally",
          description: "Our bio-identical hormone replacement therapy (BHRT) uses hormones that are identical in molecular structure to the ones your body naturally produces. This personalized approach helps to alleviate symptoms of hormonal imbalance and improve overall well-being.",
          pricing: "Custom pricing based on treatment plan",
          imageUrl: "images/Hormone.jpg"
        },
      ];
    
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
                  Our Services
                </h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  Discover the treatments that will help you look and feel your best.
                </p>
              </div>
    
              <div className="space-y-8">
                {services.map((service, index) => (
                  <Card key={index}>
                    <CardContent className="flex flex-col md:flex-row items-center md:items-start p-6 space-y-4 md:space-y-0 md:space-x-6">
                      {/* Image on the left on desktop, top on mobile */}
                      <div className="w-full md:w-1/3 flex-shrink-0">
                        <img 
                          src={service.imageUrl} 
                          alt={service.name} 
                          className="w-full h-auto object-cover rounded-lg" 
                        />
                      </div>
    
                      {/* Text content on the right on desktop, bottom on mobile */}
                      <div className="flex-1 space-y-4">
                        <div>
                          <CardTitle className="text-2xl font-bold">
                            {service.name}
                          </CardTitle>
                          <CardDescription className="mt-2 text-md text-gray-600 dark:text-gray-400">
                            {service.subtitle}
                          </CardDescription>
                        </div>
                        
                        <p className="text-gray-700 dark:text-gray-300">
                          {service.description}
                        </p>
    
                        <Separator />
                        
                        <div className="mt-4">
                          <p className="text-lg font-semibold text-indigo-600">
                            Pricing: {service.pricing}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </main>
          {/* Footer can be in the layout file */}
        </div>
      );
  }