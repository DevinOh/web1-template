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
  brand: "Service 3 Electric",
  nav: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    kicker: "Residential • Commercial • Emergency",
    title: "Service 3 Electric",
    subtitle:
      "Licensed electricians delivering clean installs, safe upgrades, and fast troubleshooting. Request a quote today.",
    primaryCta: { label: "Request a Quote", href: "#contact" },
    secondaryCta: { label: "View Services", href: "#services" },
  },

  services: {
    title: "Services",
    items: [
      {
        title: "Panel Upgrades",
        desc: "Main panel upgrades, breaker replacements, and labeling for safer power.",
        icon: "⚡",
      },
      {
        title: "Basement Rough-In",
        desc: "New construction wiring, circuits, and clean finishing for basements.",
        icon: "🧰",
      },
      {
        title: "Lighting & Fixtures",
        desc: "Pot lights, outdoor lighting, switches/dimmers, and fixture installs.",
        icon: "💡",
      },
      {
        title: "EV Charger Installation",
        desc: "Home EV charger installs with load checks and code-compliant wiring.",
        icon: "🚗",
      },
      {
        title: "Troubleshooting",
        desc: "Fast diagnosis for outages, tripping breakers, and faulty circuits.",
        icon: "🛠️",
      },
      {
        title: "Commercial Service",
        desc: "Tenant improvements, maintenance calls, and small commercial projects.",
        icon: "🏢",
      },
    ],
  },

  work: {
    title: "Recent Work",
    items: [
      {
        title: "Basement Wiring & Finishing",
        desc: "Rough-in circuits, outlets, lighting layout, and clean final installation.",
        image: "/work/work-1.jpg",
      },
      {
        title: "Panel Replacement",
        desc: "Upgraded service panel with clear labeling and safer distribution.",
        image: "/work/work-2.jpg",
      },
      {
        title: "Commercial Lighting Retrofit",
        desc: "Efficient lighting upgrades for better brightness and lower energy cost.",
        image: "/work/work-3.jpg",
      },
    ],
  },

  cta: {
    title: "Need electrical help today?",
    subtitle:
      "Tell us about your job and we’ll reply with next steps and a quick estimate.",
    button: { label: "Contact Service 3", href: "#contact" },
  },

  contact: {
    title: "Contact",
    subtitle:
      "Send a quick message. We usually respond within 1 business day.",
    fields: {
      name: "Name",
      email: "Email",
      message: "Message",
    },
    submitLabel: "Send message",
    successMessage: "Thanks! We received your message and will reply soon.",
  },

  footer: {
    left: "Service 3 Electric • Licensed • Insured • Reliable",
    rightTop: "Calgary, AB",
    rightBottom: "service3@example.com",
  },
};

export const contentB: Content = {
  brand: "Service 3 Electric",
  nav: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    kicker: "Fast response • Clear pricing • Clean work",
    title: "Electricians you can trust",
    subtitle:
      "A lead-focused layout for small electrical businesses. Simple, professional, and ready for inquiries.",
    primaryCta: { label: "Get an Estimate", href: "#contact" },
    secondaryCta: { label: "See Our Work", href: "#work" },
  },

  services: {
    title: "What we do",
    items: [
      {
        title: "Install & Upgrade",
        desc: "New circuits, panels, EV chargers, and clean upgrades.",
        icon: "⚡",
      },
      {
        title: "Repair & Troubleshoot",
        desc: "Fix outages, breaker trips, and wiring issues safely.",
        icon: "🛠️",
      },
      {
        title: "Lighting",
        desc: "Indoor/outdoor lighting, pot lights, fixtures, and switches.",
        icon: "💡",
      },
    ],
  },

  work: {
    title: "Work Highlights",
    items: [
      {
        title: "Basement Rough-In",
        desc: "Circuit planning + clean wiring for new basement builds.",
        image: "/work/work-1.jpg",
      },
      {
        title: "Service Panel Upgrade",
        desc: "Modern panel replacement with labeling and safety checks.",
        image: "/work/work-2.jpg",
      },
      {
        title: "Commercial Service Call",
        desc: "Fast fixes for lighting, outlets, and small tenant improvements.",
        image: "/work/work-3.jpg",
      },
    ],
  },

  cta: {
    title: "Get a quick estimate",
    subtitle:
      "Share a short description and photos (if available). We’ll respond with next steps.",
    button: { label: "Start Inquiry", href: "#contact" },
  },

  contact: {
    title: "Contact",
    subtitle:
      "We typically respond within 1 business day. Emergency work may be available.",
    fields: {
      name: "Name",
      email: "Email",
      message: "Message",
    },
    submitLabel: "Send",
    successMessage: "Thanks! Your inquiry was sent. We’ll get back to you soon.",
  },

  footer: {
    left: "Service 3 Electric • Inquiry-first template",
    rightTop: "Calgary, AB",
    rightBottom: "service3@example.com",
  },
};
