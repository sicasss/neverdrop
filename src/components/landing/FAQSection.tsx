import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronDown, HelpCircle } from 'lucide-react';

const DISCORD_LINK = 'https://discord.gg/KMCbAgGM78';

const faqs = [
  {
    question: 'What is NeverDrop?',
    answer: 'NeverDrop is a ghost client specifically optimized for Minecraft 1.8.9, designed exclusively to work with Lunar Client. It includes advanced modules for combat, movement, and visual customization while remaining lightweight and undetectable.'
  },
  {
    question: 'Is NeverDrop safe to use with Lunar Client?',
    answer: 'Yes! NeverDrop is specifically designed for full compatibility with Lunar Client. It has been thoroughly tested to ensure smooth, optimized performance without causing any conflicts or issues.'
  },
  {
    question: 'Will I get detected using NeverDrop?',
    answer: 'NeverDrop is partnered with WhisperWind and features advanced bypass methods to ensure you stay undetected. For extra security, we offer bypass packages that provide additional protection during screenshares.'
  },
  {
    question: 'Does NeverDrop work with other Minecraft versions?',
    answer: 'Currently, NeverDrop is optimized specifically for Minecraft 1.8.9, which is the most popular version for competitive PvP. We focus on this version to provide the best possible experience.'
  },
  {
    question: 'How do I purchase and install NeverDrop?',
    answer: 'All purchases are made through our Discord server. After buying, you will receive download instructions and access to the mod files. Our community is available to help with any installation questions.'
  },
  {
    question: "What's included in my purchase?",
    answer: 'All plans include full access to NeverDrop features, performance optimizations, visual customization, and Discord support. Longer plans include priority support, exclusive presets, and early access to new features.'
  },
  {
    question: 'Do plans auto-renew?',
    answer: 'No! All our plans are one-time purchases. There are no subscriptions or auto-renewals. You pay once and enjoy access for the duration of your chosen plan.'
  },
  {
    question: 'Are updates included after purchase?',
    answer: 'Yes! All updates during your plan duration are included. The Permanent plan includes lifetime updates, so you will always have access to the latest version of NeverDrop.'
  },
  {
    question: 'How can I get support if I have issues?',
    answer: 'Join our Discord server for community support. Premium and Permanent plan users get access to priority support channels with faster response times from our team.'
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
            href={DISCORD_LINK}
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