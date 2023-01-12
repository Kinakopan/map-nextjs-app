import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="/" className={[styles.logowrapper, styles.navLink]}>
              <Image width={216} height={95} src="/logo.jpg" />
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/" className={styles.navLink}>Trip Planner</Link>
          </li>
          <li className={styles.li}>
            <Link href="/" className={styles.navLink}>Next Bus</Link>
          </li>
          <li className={styles.li}>
            <Link href="/" className={styles.navLink}>Fares</Link>
          </li>
          <li className={styles.li}>
            <Link href="/" className={styles.navLink}>Schedules and Maps</Link>
          </li>
          <li className={styles.li}>
            <Link href="/" className={styles.navLink}>Rider Guide</Link>
          </li>
          <li className={styles.li}>
            <Link href="/" className={styles.navLink}>More</Link>
          </li>
          <li className={styles.li}>
            <Link href="/" className={styles.navLink}>Alerts</Link>
          </li>
          <li className={styles.li}>
            <Link href="/" className={styles.navLink}>Search</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
