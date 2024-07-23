import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored solutions to meet your specific business needs.",
    icon: "💻"
  },
  {
    title: "Cloud Services",
    description: "Scalable and secure cloud infrastructure for your applications.",
    icon: "☁️"
  },
  {
    title: "Data Analytics",
    description: "Turn your data into actionable insights for informed decision-making.",
    icon: "📊"
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with our advanced security solutions.",
    icon: "🔒"
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;