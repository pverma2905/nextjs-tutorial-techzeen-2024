'use client'
import EventsFunctionState from "@/components/EventsFunctionState";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Pranav Verma</h1>
      <EventsFunctionState/>
    </main>
  );
}
