"use client";
import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import Button from "../Button/Button";
import Image from "next/image";
import Logo from "@/app/images/starbuckslogo.png";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar_container}>
        <div className={styles.nav_logo_wrapper}>
          <Image
            src={Logo}
            width={60}
            height={60}
            loading="lazy"
            draggable={false}
          />
        </div>
        <ul className={styles.list_content}>
          <li>
            <Link href="/menu">menu</Link>
          </li>
          <li>
            <Link href="/rewards">rewards</Link>
          </li>
          <li>
            <Link href="/gift">gift cards</Link>
          </li>
        </ul>
        <div className={styles.nav_menu_button}>
          <Button text={"Sign in"} />
          <Button text={"Join now"} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
