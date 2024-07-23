import React from 'react';
import { CheckCircle } from 'lucide-react';

const features = [
  {
    title: "Easy Integration",
    description: "Seamlessly integrate with your existing systems and workflows."
  },
  {
    title: "Real-time Analytics",
    description: "Get instant insights with our powerful real-time analytics."
  },
  {
    title: "Scalable Solution",
    description: "Our platform grows with your business, from startup to enterprise."
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock support to ensure your operations run smoothly."
  },
  {
    title: "Customizable Dashboard",
    description: "Tailor your dashboard to focus on the metrics that matter most to you."
  },
  {
    title: "Secure Data Handling",
    description: "Your data is protected with state-of-the-art security measures."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;