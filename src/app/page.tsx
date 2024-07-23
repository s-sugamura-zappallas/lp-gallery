import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import TestimonialCarousel from '@/components/TestimonialCarousel';

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Features />
      <TestimonialCarousel />
      {/* その他のコンポーネント */}
    </div>
  );
}

export default Home;