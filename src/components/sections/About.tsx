"use client";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-autumn-primary to-spring-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-autumn-primary/20 via-spring-primary/20 to-summer-primary/20 rounded-2xl blur-xl" />
              <div className="relative bg-card rounded-2xl p-6 border border-border shadow-lg">
                <div className="aspect-square rounded-xl bg-muted flex items-center justify-center text-8xl">
                  👤
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            {/* Headline */}
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Crafting Digital Experiences with Passion
            </h3>

            {/* Origin Story */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-autumn-bg flex items-center justify-center text-xl">
                  🚀
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">The Origin Story</h4>
                  <p className="text-muted-foreground">
                    My journey into software development began with a simple curiosity about how things work. 
                    What started as tinkering with HTML pages evolved into a full-blown passion for creating 
                    impactful digital solutions.
                  </p>
                </div>
              </div>

              {/* Journey & Growth */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-winter-bg flex items-center justify-center text-xl">
                  📈
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Continuous Growth</h4>
                  <p className="text-muted-foreground">
                    Over the years, I&apos;ve embraced the ever-evolving nature of technology. From mastering 
                    modern frameworks to exploring cloud architectures, I thrive on learning and adapting 
                    to new challenges.
                  </p>
                </div>
              </div>

              {/* Core Philosophy */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-spring-bg flex items-center justify-center text-xl">
                  💡
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">My Philosophy</h4>
                  <p className="text-muted-foreground">
                    I believe in writing clean, maintainable code that stands the test of time. Every line 
                    of code should serve a purpose, and every feature should enhance the user experience.
                  </p>
                </div>
              </div>

              {/* Beyond the Code */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-summer-bg flex items-center justify-center text-xl">
                  🎯
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Beyond the Code</h4>
                  <p className="text-muted-foreground">
                    When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to 
                    open-source projects, or enjoying outdoor adventures. I believe a well-rounded 
                    perspective makes for better solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Future Aspirations */}
            <div className="pt-4 border-t border-border">
              <p className="text-lg text-foreground font-medium">
                <span className="text-spring-primary">Looking ahead:</span> I&apos;m excited about opportunities 
                to work on innovative projects that push the boundaries of what&apos;s possible in web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
