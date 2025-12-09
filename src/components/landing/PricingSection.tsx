import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check, Clock, Calendar, Crown, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DISCORD_LINK = 'https://discord.gg/KMCbAgGM78';

const plans = [
  {
    name: '1 Month',
    description: 'Try NeverDrop for a month',
    price: '$7',
    duration: '1 month access',
    features: [
      'Full NeverDrop features',
      'Performance optimizations',
      'Visual customization suite',
      'Discord support',
      'All updates included'
    ],
    cta: 'Get 1 Month',
    icon: Clock,
    featured: false
  },
  {
    name: '3 Months',
    description: 'Best value for regular players',
    price: '$15',
    duration: '3 months access',
    savings: 'Save $6',
    features: [
      'Full NeverDrop features',
      'Performance optimizations',
      'Visual customization suite',
      'Priority Discord support',
      'All updates included',
      'Exclusive presets'
    ],
    cta: 'Get 3 Months',
    icon: Calendar,
    featured: true
  },
  {
    name: 'Permanent',
    description: 'Lifetime access to NeverDrop',
    price: '$20',
    duration: 'Forever',
    savings: 'Best Deal',
    features: [
      'Full NeverDrop features',
      'Performance optimizations',
      'Visual customization suite',
      'Priority Discord support',
      'Lifetime updates',
      'Exclusive presets & themes',
      'Early access to new features'
    ],
    cta: 'Get Permanent',
    icon: Crown,
    featured: false
  }
];

export const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const handlePurchase = () => {
    window.open(DISCORD_LINK, '_blank');
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Select the plan that fits your needs. All purchases are one-time payments.
          </p>
          <p className="text-sm text-primary font-medium">
            ⚡ No auto-renewal • No subscriptions • One-time purchase only
          </p>
        </div>

        {/* Pricing cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${plan.featured ? 'md:-mt-4 md:mb-4' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium z-10">
                  Most Popular
                </div>
              )}

              {/* Savings badge */}
              {plan.savings && !plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-green-500 text-white text-sm font-medium z-10">
                  {plan.savings}
                </div>
              )}

              <div className={`h-full p-6 rounded-2xl border transition-all duration-500 ${
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
                <div className="mb-2">
                  <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
                </div>
                <p className="text-sm text-primary mb-6">{plan.duration}</p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.featured ? 'bg-primary/20' : 'bg-primary/10'
                      }`}>
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  onClick={handlePurchase}
                  className={`w-full py-5 font-semibold transition-all duration-300 ${
                    plan.featured 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground glow-border-hover' 
                      : 'bg-secondary hover:bg-secondary/80 text-foreground'
                  }`}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {plan.cta}
                </Button>

                {/* One-time note */}
                <p className="text-xs text-center text-muted-foreground mt-3">
                  One-time payment • No auto-renewal
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Discord CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Purchase through our Discord server for instant access
          </p>
          <Button
            onClick={handlePurchase}
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Join our Discord
          </Button>
        </div>
      </div>
    </section>
  );
};
