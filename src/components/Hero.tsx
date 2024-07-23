import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <div className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col items-start">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to Our Amazing Product
          </h1>
          <p className="text-xl mb-8">
            Discover how our innovative solution can transform your business and boost your productivity.
          </p>
          <div className="flex space-x-4">
            <Button className="bg-white text-purple-600 hover:bg-gray-100">
              Get Started
            </Button>
            <Button variant="outline" className="bg-white text-purple-600 hover:bg-gray-100">
              Learn More
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <img 
            src="https://via.placeholder.com/600x400" 
            alt="Product showcase" 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;