import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation';
import { Download, Users, Star, Clock } from 'lucide-react';

const stats = [
  {
    icon: Download,
    value: 25000,
    suffix: '+',
    label: 'Total Downloads',
    description: 'Trusted by thousands of players worldwide'
  },
  {
    icon: Users,
    value: 8500,
    suffix: '+',
    label: 'Active Users',
    description: 'Growing community every day'
  },
  {
    icon: Star,
    value: 4.9,
    suffix: '',
    label: 'User Rating',
    description: 'Based on community feedback',
    isDecimal: true
  },
  {
    icon: Clock,
    value: 99,
    suffix: '%',
    label: 'Uptime',
    description: 'Reliable and stable performance'
  }
];

const StatCard = ({ 
  stat, 
  index, 
  isVisible 
}: { 
  stat: typeof stats[0]; 
  index: number; 
  isVisible: boolean;
}) => {
  const count = useCountUp(stat.isDecimal ? stat.value * 10 : stat.value, 2000, isVisible);
  const displayValue = stat.isDecimal ? (count / 10).toFixed(1) : count.toLocaleString();

  return (
    <div
      className={`group relative p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon */}
      <div className="relative w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <stat.icon className="w-6 h-6 text-primary" />
      </div>

      {/* Value */}
      <div className="relative mb-2">
        <span className="font-display text-4xl md:text-5xl font-bold text-foreground">
          {displayValue}
        </span>
        <span className="font-display text-3xl md:text-4xl font-bold text-primary">
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <h3 className="relative font-display text-lg font-semibold text-foreground mb-1">
        {stat.label}
      </h3>
      <p className="relative text-sm text-muted-foreground">
        {stat.description}
      </p>
    </div>
  );
};

export const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[400px] h-[200px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-xs uppercase tracking-wider text-primary font-medium">Statistics</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="text-primary">Thousands</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our growing community of competitive players who trust NeverDrop.
          </p>
        </div>

        {/* Stats grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};
