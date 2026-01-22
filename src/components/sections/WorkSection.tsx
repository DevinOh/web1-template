import styles from "./WorkSection.module.scss";

type Item = { title: string; desc: string; image: string };

export default function WorkSection({
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
          <article key={it.title} className={styles.card}>
            <div className={styles.thumb}>
              <img className={styles.img} src={it.image} alt={it.title} loading="lazy" />
            </div>

            <div className={styles.body}>
              <div className={styles.cardTitle}>{it.title}</div>
              <div className={styles.cardDesc}>{it.desc}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
