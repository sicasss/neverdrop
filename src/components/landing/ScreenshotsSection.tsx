import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Placeholder screenshots - replace with actual images
const screenshots = [
  {
    id: 1,
    title: 'Main Interface',
    description: 'Clean and intuitive mod settings panel',
    placeholder: true
  },
  {
    id: 2,
    title: 'Performance Overlay',
    description: 'Real-time FPS and performance metrics',
    placeholder: true
  },
  {
    id: 3,
    title: 'Visual Settings',
    description: 'Extensive visual customization options',
    placeholder: true
  },
  {
    id: 4,
    title: 'Control Configuration',
    description: 'Advanced keybinding and control tweaks',
    placeholder: true
  }
];

export const ScreenshotsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section id="screenshots" className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-xs uppercase tracking-wider text-primary font-medium">Preview</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              See It in <span className="text-primary">Action</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take a look at NeverDrop's interface and features.
            </p>
          </div>

          {/* Carousel */}
          <div ref={ref} className={`relative max-w-5xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Main display */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-card border border-border/50">
              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-secondary to-card">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Expand className="w-10 h-10 text-primary/50" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {screenshots[currentIndex].title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {screenshots[currentIndex].description}
                  </p>
                  <p className="text-sm text-muted-foreground/50">
                    Upload your screenshot to replace this placeholder
                  </p>
                </div>
              </div>

              {/* Expand button */}
              <button
                onClick={() => openLightbox(currentIndex)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-foreground hover:bg-background transition-all"
              >
                <Expand className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full border-border hover:border-primary/50 hover:bg-primary/5"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-primary w-8' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full border-border hover:border-primary/50 hover:bg-primary/5"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4 mt-6">
              {screenshots.map((screenshot, index) => (
                <button
                  key={screenshot.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`aspect-video rounded-lg overflow-hidden bg-card border transition-all duration-300 ${
                    index === currentIndex 
                      ? 'border-primary ring-2 ring-primary/20' 
                      : 'border-border/50 hover:border-primary/30'
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-card">
                    <span className="text-xs text-muted-foreground/50">{index + 1}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-lg bg-card border border-border text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-6xl w-full aspect-video rounded-2xl overflow-hidden bg-card border border-border">
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-secondary to-card">
              <div className="text-center p-8">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  {screenshots[lightboxIndex].title}
                </h3>
                <p className="text-muted-foreground">
                  {screenshots[lightboxIndex].description}
                </p>
              </div>
            </div>
          </div>

          {/* Lightbox navigation */}
          <Button
            variant="outline"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
            }}
            className="absolute left-4 rounded-full border-border hover:border-primary/50"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev + 1) % screenshots.length);
            }}
            className="absolute right-4 rounded-full border-border hover:border-primary/50"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      )}
    </>
  );
};
