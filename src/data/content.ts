export type NavItem = { label: string; href: string };

export type Content = {
  brand: string;
  nav: NavItem[];
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  services: {
    title: string;
    items: { title: string; desc: string; icon: string }[];
  };
  cta: {
    title: string;
    subtitle: string;
    button: { label: string; href: string };
  };
    work: {
    title: string;
    items: { title: string; desc: string; image: string }[];
  };

    contact: {
    title: string;
    subtitle: string;
    fields: {
      name: string;
      email: string;
      message: string;
    };
    submitLabel: string;
    successMessage: string;
  };
  footer: {
    left: string;
    rightTop: string;
    rightBottom: string;
  };
};

export const contentA: Content = {
  brand: "WEB1",
  nav: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    kicker: "Commercial • Industrial • Service",
    title: "A clean starter template for your company website",
    subtitle:
      "Build fast by reusing sections. Swap theme + content to create new templates.",
    primaryCta: { label: "Get a Quote", href: "#contact" },
    secondaryCta: { label: "View services", href: "#services" },
  },
  services: {
  title: "Services",
  items: [
    { title: "Electrical Install", desc: "New builds, tenant improvements, upgrades.", icon: "⚡" },
    { title: "Maintenance", desc: "Troubleshooting, service calls, preventative checks.", icon: "🛠️" },
    { title: "Design Build", desc: "Plan + execute with predictable delivery.", icon: "📐" },
  ],
},
  cta: {
    title: "Ready to start?",
    subtitle: "Send a quick inquiry and we’ll get back to you.",
    button: { label: "Contact us", href: "#contact" },
  },
    work: {
    title: "Work",
    items: [
      {
        title: "Retail Tenant Improvement",
        desc: "Panel upgrades, lighting, rough-in & finishing.",
        image: "/work/work-1.jpg",
      },
      {
        title: "Service Call Package",
        desc: "Fast troubleshooting workflow for common faults.",
        image: "/work/work-2.jpg",
      },
      {
        title: "Small Commercial Build",
        desc: "Clean conduit runs and labeled circuits.",
        image: "/work/work-3.jpg",
      },
    ],
  },

  
    contact: {
    title: "Contact",
    subtitle: "Send a quick message. We'll reply as soon as possible.",
    fields: {
      name: "Name",
      email: "Email",
      message: "Message",
    },
    submitLabel: "Send message",
    successMessage: "Thanks! Your message has been prepared.",
  },
  footer: {
    left: "Simple React + Vite + TS + SCSS template",
    rightTop: "Calgary, AB",
    rightBottom: "hello@example.com",
  },
};

export const contentB: Content = {
  brand: "WEB1 Lite",
  nav: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    kicker: "Fast • Simple • Reliable",
    title: "A clean inquiry-first template",
    subtitle:
      "Perfect for small businesses that want leads. Clean layout, strong CTA, quick contact form.",
    primaryCta: { label: "Request a Quote", href: "#contact" },
    secondaryCta: { label: "See work", href: "#work" },
  },
  services: {
    title: "What we do",
    items: [
      { title: "Install", desc: "Simple installs done right.", icon: "⚡"  },
      { title: "Repair", desc: "Fix issues quickly and safely.", icon: "🛠️"  },
      { title: "Consult", desc: "Make the right plan before you spend.", icon: "📐"  },
    ],
  },
    work: {
    title: "Work",
    items: [
      {
        title: "Retail Tenant Improvement",
        desc: "Panel upgrades, lighting, rough-in & finishing.",
        image: "/work/work-1.jpg",
      },
      {
        title: "Service Call Package",
        desc: "Fast troubleshooting workflow for common faults.",
        image: "/work/work-2.jpg",
      },
      {
        title: "Small Commercial Build",
        desc: "Clean conduit runs and labeled circuits.",
        image: "/work/work-3.jpg",
      },
    ],
  },

  cta: {
    title: "Get a quick estimate",
    subtitle: "Tell us what you need. We’ll reply with next steps.",
    button: { label: "Start inquiry", href: "#contact" },
  },
  contact: {
    title: "Contact",
    subtitle: "We usually respond within 1 business day.",
    fields: {
      name: "Name",
      email: "Email",
      message: "Message",
    },
    submitLabel: "Send",
    successMessage: "Thanks! We received your message.",
  },
  footer: {
    left: "Template B • Inquiry-first layout",
    rightTop: "Calgary, AB",
    rightBottom: "hello@example.com",
  },
};
