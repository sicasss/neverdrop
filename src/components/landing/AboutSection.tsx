import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Zap, Shield, Cpu } from 'lucide-react';

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-xs uppercase tracking-wider text-primary font-medium">About the Mod</span>
          </div>

          {/* Main heading */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Performance Meets <span className="text-primary">Customization</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
            NeverDrop es un mod centrado en la eficiencia, rendimiento y personalización visual. 
            Está optimizado para integrarse perfectamente con <span className="text-foreground font-medium">Lunar Client</span> sin 
            añadir peso innecesario al sistema. Diseñado por jugadores, para jugadores.
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: 'Lightweight',
                description: 'Minimal resource usage for maximum FPS'
              },
              {
                icon: Shield,
                title: 'Safe & Secure',
                description: 'No game-breaking modifications'
              },
              {
                icon: Cpu,
                title: 'Optimized',
                description: 'Built for competitive gameplay'
              }
            ].map((item, index) => (
              <div
                key={item.title}
                className={`group p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
