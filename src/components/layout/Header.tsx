import { useState } from "react";
import type { NavItem } from "../../data/content";
import styles from "./Header.module.scss";

export default function Header({
  brand,
  nav,
  cta,
}: {
  brand: string;
  nav: NavItem[];
  cta: { label: string; href: string };
}) {
  const [open, setOpen] = useState(false);

  function onNavClick() {
    setOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.row}`}>
        <div className={styles.brand}>{brand}</div>

        {/* Desktop nav */}
        <nav className={styles.navDesktop}>
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.right}>
          <a className={styles.cta} href={cta.href}>
            {cta.label}
          </a>

          {/* Mobile menu button */}
          <button
            className={styles.menuBtn}
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className={styles.mobilePanel}>
          <div className={`container ${styles.mobileInner}`}>
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={onNavClick} className={styles.mobileLink}>
                {item.label}
              </a>
            ))}
            <a href={cta.href} onClick={onNavClick} className={styles.mobileCta}>
              {cta.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
