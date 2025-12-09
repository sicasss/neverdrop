import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Is NeverDrop safe to use with Lunar Client?',
    answer: 'Yes! NeverDrop is specifically designed for Lunar Client compatibility. It has been thoroughly tested to ensure it works seamlessly without causing any conflicts or issues with the client.'
  },
  {
    question: 'Will NeverDrop get me banned on servers?',
    answer: 'NeverDrop focuses purely on performance optimization and visual customization. It does not provide any unfair gameplay advantages and is designed to be anti-cheat safe. However, always check individual server rules.'
  },
  {
    question: 'Does NeverDrop work with Minecraft 1.8.9 only?',
    answer: 'Currently, NeverDrop is optimized specifically for Minecraft 1.8.9, which is the most popular version for competitive PvP. We focus on this version to provide the best possible experience.'
  },
  {
    question: 'How do I install NeverDrop?',
    answer: 'After downloading from our Discord server, simply place the mod file in your Lunar Client mods folder. Detailed installation instructions are provided in our Discord community.'
  },
  {
    question: 'What\'s the difference between Lite and Premium?',
    answer: 'The Lite version includes core performance optimizations and basic customizations. Premium unlocks advanced tools, exclusive themes, priority support, and lifetime updates with early access to new features.'
  },
  {
    question: 'How can I get support if I have issues?',
    answer: 'Join our Discord server for community support. Premium users get access to priority support channels with faster response times from our team.'
  },
  {
    question: 'Are updates included after purchase?',
    answer: 'Premium is a one-time purchase that includes lifetime updates. You\'ll always have access to the latest version of NeverDrop.'
  },
  {
    question: 'Can I request new features?',
    answer: 'Absolutely! We actively listen to our community. Join our Discord and share your suggestions in the feature request channel. Many of our features came from user feedback.'
  }
];

export const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-xs uppercase tracking-wider text-primary font-medium">FAQ</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about NeverDrop.
          </p>
        </div>

        {/* FAQ items */}
        <div ref={ref} className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full p-6 rounded-xl border text-left transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-card border-primary/30'
                    : 'bg-card/50 border-border/50 hover:border-primary/20 hover:bg-card/80'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a
            href="https://discord.gg/your-server"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors"
          >
            Ask in our Discord
          </a>
        </div>
      </div>
    </section>
  );
};
