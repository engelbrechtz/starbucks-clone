import styles from "./home.module.css";
import Card from "@/components/Card/Card";

export default function Page() {
  return (
    <>
      <main className={styles.seciton_wrapper_grid}>
        <section className={styles.section_container}>
          <div className={styles.section_content_wrapper}>
            <Card />
          </div>
        </section>
      </main>
    </>
  );
}
