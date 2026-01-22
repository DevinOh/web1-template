import styles from "./Footer.module.scss";

export default function Footer({
  left,
  rightTop,
  rightBottom,
}: {
  left: string;
  rightTop: string;
  rightBottom: string;
}) {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.left}>{left}</div>
          <div className={styles.right}>
            <div>{rightTop}</div>
            <div>{rightBottom}</div>
          </div>
        </div>

        <div className={styles.bottom}>
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
