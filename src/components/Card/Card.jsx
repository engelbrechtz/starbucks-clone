import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import coffee_photo from "@/app/images/bannerone.jpg";
import Button from "../Button/Button";

const Card = () => {
  return (
    <>
      <div className={styles.card_container}>
        <div className={styles.card_content}>
          <div className={styles.card_content_info}>
            <h1>Talk about refreshing</h1>
            <p>
              Introducing our vibrant new Frozen Lemonade Starbucks Refreshers®
              beverages: Strawberry Açaí, Pineapple Passionfruit and Mango
              Dragonfruit.
            </p>
            <Button text="Order now" value={100} />
          </div>
          <div className={styles.banner_image}>
            <Image
              src={coffee_photo}
              width={500}
              height={500}
              loading="lazy"
              draggable={false}
              className={styles.wrapper_image}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
