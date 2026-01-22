import styles from "./CtaSection.module.scss";

export default function CtaSection({
  id,
  title,
  subtitle,
  button,
}: {
  id?: string;
  title: string;
  subtitle: string;
  button: { label: string; href: string };
}) {
  return (
    <section id={id} className={styles.section}>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>

      <a className={styles.button} href={button.href}>
        {button.label}
      </a>
    </section>
  );
}
