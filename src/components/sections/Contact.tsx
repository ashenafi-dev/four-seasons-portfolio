"use client";

const contactMethods = [
  {
    name: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "emerald",
    description: "Drop me a line anytime",
  },
  {
    name: "Phone",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    color: "red",
    description: "Available during business hours",
  },
  {
    name: "Telegram",
    value: "@username",
    href: "https://t.me/username",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
    color: "amber",
    description: "Quick responses guaranteed",
  },
  {
    name: "Location",
    value: "San Francisco, CA",
    href: null,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "emerald",
    description: "Open to remote opportunities",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "emerald":
      return {
        bg: "bg-emerald-400",
        bgLight: "bg-emerald-400/10",
        text: "text-emerald-400",
        border: "border-emerald-400",
        hover: "hover:bg-emerald-400",
      };
    case "red":
      return {
        bg: "bg-red-400",
        bgLight: "bg-red-400/10",
        text: "text-red-400",
        border: "border-red-400",
        hover: "hover:bg-red-400",
      };
    case "amber":
      return {
        bg: "bg-amber-400",
        bgLight: "bg-amber-400/10",
        text: "text-amber-400",
        border: "border-amber-400",
        hover: "hover:bg-amber-400",
      };
    default:
      return {
        bg: "bg-primary",
        bgLight: "bg-primary/10",
        text: "text-primary",
        border: "border-primary",
        hover: "hover:bg-primary",
      };
  }
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-base-100 to-base-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="badge badge-lg badge-outline gap-2 mb-4">
            <span className="text-emerald-400">●</span> Available for work
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-base-content mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can bring your ideas to life.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 via-red-400 to-amber-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method) => {
            const colors = getColorClasses(method.color);
            const CardWrapper = method.href ? "a" : "div";
            const cardProps = method.href ? {
              href: method.href,
              target: method.href.startsWith("http") ? "_blank" : undefined,
              rel: method.href.startsWith("http") ? "noopener noreferrer" : undefined,
            } : {};

            return (
              <CardWrapper
                key={method.name}
                {...cardProps}
                className={`card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 border border-base-300 ${method.href ? `${colors.hover} hover:text-white cursor-pointer group` : ""}`}
              >
                <div className="card-body flex-row items-center gap-6">
                  <div className={`w-16 h-16 rounded-2xl ${colors.bgLight} ${colors.text} flex items-center justify-center group-hover:bg-white/20 group-hover:text-white transition-colors`}>
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg group-hover:text-white transition-colors">{method.name}</h3>
                    <p className="text-base-content/70 group-hover:text-white/80 transition-colors">{method.value}</p>
                    <p className="text-sm text-base-content/50 group-hover:text-white/60 transition-colors">{method.description}</p>
                  </div>
                  {method.href && (
                    <div className={`${colors.text} group-hover:text-white transition-colors`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </CardWrapper>
            );
          })}
        </div>

        {/* Social Links */}
        <div className="card bg-base-100 shadow-lg border border-base-300">
          <div className="card-body items-center text-center">
            <h3 className="card-title text-xl mb-2">Connect on Social Media</h3>
            <p className="text-base-content/70 mb-6">Follow me for updates, insights, and more</p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-circle btn-lg ${
                    index === 0 ? "btn-outline border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:border-emerald-400" :
                    index === 1 ? "btn-outline border-red-400 text-red-400 hover:bg-red-400 hover:border-red-400" :
                    "btn-outline border-amber-400 text-amber-400 hover:bg-amber-400 hover:border-amber-400"
                  } hover:text-white transition-all duration-300`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-base-content/60">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
            </span>
            Looking forward to hearing from you!
          </div>
        </div>
      </div>
    </section>
  );
}
