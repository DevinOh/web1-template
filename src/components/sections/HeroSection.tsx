import styles from "./HeroSection.module.scss";

type Props = {
  kicker: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export default function HeroSection(props: Props) {
  return (
    <section className={styles.hero}>
      <p className={styles.kicker}>{props.kicker}</p>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.subtitle}>{props.subtitle}</p>

      <div className={styles.actions}>
        <a className={styles.primary} href={props.primaryCta.href}>
          {props.primaryCta.label}
        </a>
        <a className={styles.secondary} href={props.secondaryCta.href}>
          {props.secondaryCta.label}
        </a>
      </div>
    </section>
  );
}
