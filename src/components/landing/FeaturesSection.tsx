import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Moon, 
  Gauge, 
  Feather, 
  Palette, 
  Settings2, 
  Sparkles 
} from 'lucide-react';

const features = [
  {
    icon: Moon,
    title: 'Full Lunar Client Compatibility',
    description: 'Seamlessly integrates with Lunar Client without conflicts or performance issues.'
  },
  {
    icon: Gauge,
    title: 'Performance Boosting Tools',
    description: 'Advanced optimization techniques to maximize your FPS and reduce lag spikes.'
  },
  {
    icon: Feather,
    title: 'Lightweight Architecture',
    description: 'Minimal memory footprint designed to run smoothly on any system.'
  },
  {
    icon: Palette,
    title: 'Visual Customization Modules',
    description: 'Extensive visual options to personalize your Minecraft experience.'
  },
  {
    icon: Settings2,
    title: 'Control Tweaks',
    description: 'Fine-tune your controls and keybindings for optimal gameplay.'
  },
  {
    icon: Sparkles,
    title: 'Smooth & Stable Experience',
    description: 'Rock-solid stability with smooth animations and transitions.'
  }
];

export const FeaturesSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden bg-secondary/30">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-xs uppercase tracking-wider text-primary font-medium">Key Features</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You <span className="text-primary">Need</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Packed with powerful features designed to enhance your gameplay without compromising integrity.
          </p>
        </div>

        {/* Features grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative p-6 md:p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 transition-all duration-500 hover:border-primary/50 hover:bg-card ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="relative font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="relative text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
