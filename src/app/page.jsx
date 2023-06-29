import styles from "./home.module.css";
import Image from "next/image";
import coffee_photo from "./images/bannerone.jpg";
import treat_banner_two from "./images/bannertwo.webp";
import Button from "@/components/Button/Button";

export default function Page() {
  return (
    <>
      <main className={styles.seciton_wrapper_grid}>
        <section className={styles.section_container}>
          <div className={styles.section_content_wrapper}>
            <h1>Talk about refreshing</h1>
            <p>
              Introducing our vibrant new Frozen Lemonade Starbucks Refreshers®
              beverages: Strawberry Açaí, Pineapple Passionfruit and Mango
              Dragonfruit.
            </p>
            <Button text="Join now" />
          </div>
          <Image
            src={coffee_photo}
            width={600}
            height={600}
            loading="lazy"
            draggable={false}
            className={styles.wrapper_image}
          />
        </section>
      </main>
    </>
  );
}
