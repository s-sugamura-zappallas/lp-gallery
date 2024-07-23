import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    content: "This product has revolutionized our workflow. The AI-powered features have saved us countless hours, and the intuitive interface makes it a joy to use. It's not just a tool; it's a game-changer for our entire organization.",
    avatar: "JD",
    rating: 5,
    date: "2023-12-15"
  },
  {
    name: "Jane Smith",
    position: "CTO, InnovateCo",
    content: "The customer support is outstanding. They're always there when you need them, and their technical expertise is top-notch. We've had complex integration requests, and they've handled each one with professionalism and skill.",
    avatar: "JS",
    rating: 5,
    date: "2024-01-03"
  },
  {
    name: "Mike Johnson",
    position: "Founder, StartUpX",
    content: "We've seen a 200% increase in productivity since implementing this solution. The customizable workflows and detailed analytics have given us insights we never had before. It's been crucial to our rapid growth.",
    avatar: "MJ",
    rating: 4,
    date: "2024-02-20"
  },
  {
    name: "Sarah Lee",
    position: "Marketing Director, BrandBoost",
    content: "Intuitive interface and powerful features. It's a game-changer for our team. The collaboration tools have transformed how we work on campaigns, and the real-time data has made our decision-making so much more agile.",
    avatar: "SL",
    rating: 5,
    date: "2024-03-10"
  }
];

const TestimonialCarousel = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Voices of Success</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-4/5 lg:basis-2/3">
                <div className="p-1">
                  <Card className="bg-white/10 backdrop-blur-lg shadow-xl border-none">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row items-center mb-4">
                        <Avatar className="w-20 h-20 md:w-24 md:h-24 mr-4 mb-4 md:mb-0">
                          <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${testimonial.avatar}`} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="text-center md:text-left">
                          <h3 className="font-semibold text-xl">{testimonial.name}</h3>
                          <p className="text-sm text-gray-300">{testimonial.position}</p>
                          <div className="flex items-center justify-center md:justify-start mt-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`} />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-100 italic text-lg leading-relaxed mb-4">"{testimonial.content}"</p>
                      <p className="text-right text-sm text-gray-300">{new Date(testimonial.date).toLocaleDateString()}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:left-4" />
          <CarouselNext className="right-2 md:right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialCarousel;