import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check, Download, Crown, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Lite',
    description: 'Perfect for trying out NeverDrop',
    price: 'Free',
    features: [
      'Basic performance optimizations',
      'Core visual customizations',
      'Lunar Client compatibility',
      'Community support',
      'Regular updates'
    ],
    cta: 'Download Free',
    icon: Download,
    featured: false
  },
  {
    name: 'Premium',
    description: 'The complete NeverDrop experience',
    price: '$9.99',
    priceNote: 'one-time',
    features: [
      'All Lite features included',
      'Advanced performance tools',
      'Full visual customization suite',
      'Priority Discord support',
      'Exclusive presets & themes',
      'Early access to new features',
      'Lifetime updates'
    ],
    cta: 'Get Premium',
    icon: Crown,
    featured: true
  }
];

export const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const handleDownload = (plan: string) => {
    // Replace with your Discord invite link
    const discordLink = 'https://discord.gg/your-server';
    window.open(discordLink, '_blank');
  };

  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden bg-secondary/30">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-xs uppercase tracking-wider text-primary font-medium">Pricing</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Choose Your <span className="text-primary">Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start for free or unlock the full potential of NeverDrop with Premium.
          </p>
        </div>

        {/* Pricing cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${plan.featured ? 'md:-mt-4 md:mb-4' : ''}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className={`h-full p-8 rounded-2xl border transition-all duration-500 ${
                plan.featured 
                  ? 'bg-card border-primary/50 glow-border' 
                  : 'bg-card/50 border-border/50 hover:border-primary/30'
              }`}>
                {/* Plan header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    plan.featured ? 'bg-primary/20' : 'bg-primary/10'
                  }`}>
                    <plan.icon className={`w-6 h-6 ${plan.featured ? 'text-primary' : 'text-primary/70'}`} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.priceNote && (
                    <span className="text-muted-foreground ml-2">/ {plan.priceNote}</span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.featured ? 'bg-primary/20' : 'bg-primary/10'
                      }`}>
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  onClick={() => handleDownload(plan.name)}
                  className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
                    plan.featured 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground glow-border-hover' 
                      : 'bg-secondary hover:bg-secondary/80 text-foreground'
                  }`}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {plan.cta}
                </Button>

                {/* Discord note */}
                <p className="text-xs text-center text-muted-foreground mt-4">
                  Redirects to our Discord server
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
