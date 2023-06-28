import styles from "./home.module.css";
import Image from "next/image";
import coffee_photo from "./images/bannerone.jpg";
import treat_banner_two from "./images/bannertwo.webp";

export default function Page() {
  return (
    <>
      <main className={styles.seciton_wrapper_grid}>
        <section className={styles.section_container}>
          <Image
            src={coffee_photo}
            width={100}
            height={100}
            loading="lazy"
            draggable={false}
          />
          <div className={styles.section_content_wrapper}>
            <h1>Talk about refreshing</h1>
            <p>
              Introducing our vibrant new Frozen Lemonade Starbucks Refreshers®
              beverages: Strawberry Açaí, Pineapple Passionfruit and Mango
              Dragonfruit.
            </p>
          </div>
        </section>
        <section className={styles.section_container}>
          <Image
            src={treat_banner_two}
            width={100}
            height={100}
            loading="lazy"
            draggable={false}
          />
        </section>
      </main>
    </>
  );
}
