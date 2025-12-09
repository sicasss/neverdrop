import { Download, ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">For Minecraft 1.8.9 • Lunar Client</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up stagger-1">
            <span className="text-foreground">Never</span>
            <span className="text-primary glow-text">Drop</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-4 animate-fade-up stagger-2">
            Lightweight Performance & Customization Mod
          </p>

          {/* Description */}
          <p className="text-sm md:text-base text-muted-foreground/70 max-w-2xl mb-10 animate-fade-up stagger-3">
            Elevate your Minecraft experience with optimized performance, visual enhancements, 
            and seamless Lunar Client integration.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('#pricing')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold glow-border animate-pulse-glow"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#features')}
              className="border-border hover:border-primary/50 hover:bg-primary/5 px-8 py-6 text-lg"
            >
              View Features
            </Button>
          </div>

          {/* Stats preview */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 animate-fade-up stagger-5">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">25K+</div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">4.9</div>
              <div className="text-sm text-muted-foreground">User Rating</div>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">99%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('#about')}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};
