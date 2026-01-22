export type Theme = {
  name: string;
  colors: {
    bg: string;
    card: string;
    text: string;
    muted: string;
    accent: string;
  };
  layout: {
    container: string; // ex: "1200px"
    pad: string;       // ex: "16px"
  };
};

export const themeA: Theme = {
  name: "themeA",
  colors: {
    bg: "#0b0d12",
    card: "#121625",
    text: "#e9ecf1",
    muted: "#aab2c5",
    accent: "#4da3ff",
  },
  layout: {
    container: "1200px",
    pad: "16px",
  },
};
export const themeB: Theme = {
  name: "themeB",
  colors: {
    bg: "#f6f7fb",
    card: "#ffffff",
    text: "#0c1220",
    muted: "#4b5563",
    accent: "#22c55e",
  },
  layout: {
    container: "1100px",
    pad: "16px",
  },
};
