import { Routes, Route, Navigate } from "react-router-dom";
import ThemeProvider from "./providers/ThemeProvider";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import { contentA, contentB } from "./data/content";
import { themeA, themeB } from "./styles/theme";

function TemplatePage({ variant }: { variant: "A" | "B" }) {
  const content = variant === "B" ? contentB : contentA;
  const theme = variant === "B" ? themeB : themeA;

  return (
    <ThemeProvider theme={theme}>
      <Header brand={content.brand} nav={content.nav} cta={content.hero.primaryCta} />
      <Home content={content} />
      <Footer {...content.footer} />
    </ThemeProvider>
  );
}

function DemoHub() {
  return (
    <div className="container" style={{ paddingTop: 48 }}>
      <h1 style={{ marginTop: 0 }}>Template Demo Hub</h1>
      <p style={{ color: "var(--muted)" }}>
        Choose a template variant. (In a real product, this becomes your demo landing page.)
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
        <a
          href="/a"
          style={{
            padding: "10px 14px",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.18)",
            fontWeight: 800,
          }}
        >
          Template A
        </a>
        <a
          href="/b"
          style={{
            padding: "10px 14px",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.18)",
            fontWeight: 800,
          }}
        >
          Template B
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DemoHub />} />
      <Route path="/a" element={<TemplatePage variant="A" />} />
      <Route path="/b" element={<TemplatePage variant="B" />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
