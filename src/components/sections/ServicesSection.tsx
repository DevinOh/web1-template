import styles from "./ServicesSection.module.scss";

type Item = { title: string; desc: string; icon: string };

export default function ServicesSection({
  id,
  title,
  items,
}: {
  id?: string;
  title: string;
  items: Item[];
}) {
  return (
    <section id={id} className={styles.section}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.grid}>
        {items.map((it) => (
          <div key={it.title} className={styles.card}>
            <div className={styles.icon}>{it.icon}</div>
            <div className={styles.cardTitle}>{it.title}</div>
            <div className={styles.cardDesc}>{it.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
