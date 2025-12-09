import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { EyeOff, Gauge, Wand2, Target } from 'lucide-react';

const reasons = [
  {
    icon: EyeOff,
    title: 'Never Get Detected',
    description: 'Partnered with WhisperWind, we have advanced bypass methods that ensure you will never get caught. Optional bypass package available for extra security.',
    features: ['WhisperWind integration', 'Anti-detection system', 'Screenshare safe']
  },
  {
    icon: Gauge,
    title: 'Improved Performance',
    description: 'Play with minimal lag and less strain on your system. NeverDrop is optimized to squeeze every last frame from your hardware.',
    features: ['Higher FPS', 'Lower latency', 'Reduced stuttering']
  },
  {
    icon: Wand2,
    title: 'Total Customization',
    description: 'Adjust settings to fit your unique style and needs for a more personalized experience. Every module is fully configurable.',
    features: ['Custom themes', 'Adjustable modules', 'Personal presets']
  },
  {
    icon: Target,
    title: 'Built for Competitive Players',
    description: 'Access optimization tools that enhance gameplay with advanced combat, movement, and overall performance improvements.',
    features: ['Combat modules', 'Movement enhancements', 'PvP optimization']
  }
];

export const WhyChooseSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="why" className="py-24 md:py-32 relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-xs uppercase tracking-wider text-primary font-medium">Why Choose Us</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">NeverDrop</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four core pillars that make NeverDrop the choice of competitive players.
          </p>
        </div>

        {/* Reasons */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon container */}
                <div className="relative w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="relative font-display text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="relative text-muted-foreground leading-relaxed mb-6">
                  {reason.description}
                </p>

                {/* Feature list */}
                <ul className="relative space-y-3">
                  {reason.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};