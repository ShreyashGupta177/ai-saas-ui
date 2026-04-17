import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { ArrowRight, Zap, BarChart3, Brain } from 'lucide-react';
import { useLenis } from '../hooks/useLenis';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useLenis();
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll('.hero-item'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg">
      <section ref={heroRef} className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-4xl">
          <div className="hero-item mb-8">
            <h1 className="text-6xl font-bold text-dark-text mb-4">
              AI-Powered Job Search
            </h1>
            <p className="text-xl text-dark-text-secondary mb-8">
              Get smarter job matches with AI insights
            </p>
          </div>
          <div className="hero-item flex gap-4">
            <Link to="/dashboard">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
