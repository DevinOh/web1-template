import { useState } from "react";
import styles from "./ContactSection.module.scss";

export default function ContactSection({
  id,
  title,
  subtitle,
  fields,
  submitLabel,
  successMessage,
}: {
  id?: string;
  title: string;
  subtitle: string;
  fields: { name: string; email: string; message: string };
  submitLabel: string;
  successMessage: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function onSubmit(e: React.FormEvent) {
  e.preventDefault();

  const form = new FormData();
  form.append("form-name", "contact");
  form.append("name", name);
  form.append("email", email);
  form.append("message", message);

  try {
    await fetch("/", {
      method: "POST",
      body: form,
    });

    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  } catch {
    setSubmitted(true); // 최소 UX 유지
  }
}

  //function onSubmit(e: React.FormEvent) {
   // e.preventDefault();

    // ✅ 서버 없이 “동작하는 느낌” 먼저 만들기
    // 나중에 EmailJS / Netlify Forms / API로 연결하면 됨.
   // setSubmitted(true);

    // 폼을 비우고 싶으면 아래 주석 해제
    // setName("");
    // setEmail("");
    // setMessage("");
 // }

  return (
    <section id={id} className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <form
  className={styles.form}
  onSubmit={onSubmit}
  name="contact"
  method="POST"
  data-netlify="true"
>
  <input type="hidden" name="form-name" value="contact" />

  <div className={styles.grid}>
    <label className={styles.field}>
      <span className={styles.label}>{fields.name}</span>
      <input
        className={styles.input}
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="John Doe"
        autoComplete="name"
        required
      />
    </label>

    <label className={styles.field}>
      <span className={styles.label}>{fields.email}</span>
      <input
        className={styles.input}
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="john@email.com"
        autoComplete="email"
        required
      />
    </label>
  </div>

  <label className={styles.field}>
    <span className={styles.label}>{fields.message}</span>
    <textarea
      className={styles.textarea}
      name="message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Tell us what you need..."
      rows={5}
      required
    />
  </label>

  <div className={styles.actions}>
    <button className={styles.button} type="submit">
      {submitLabel}
    </button>

    {submitted && (
      <div className={styles.success} role="status" aria-live="polite">
        {successMessage}
      </div>
    )}
  </div>
</form>

    </section>
  );
}
