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
            <Link href="https://www.translink.ca/" className={[styles.logowrapper, styles.navLink]}>
              <Image width={216} height={95} src="/logo.jpg" />
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="https://www.translink.ca/trip-planner" className={styles.navLink}>Trip Planner</Link>
          </li>
          <li className={styles.li}>
            <Link href="https://www.translink.ca/next-bus" className={styles.navLink}>Next Bus</Link>
          </li>
          <li className={styles.li}>
            <Link href="https://www.translink.ca/transit-fares" className={styles.navLink}>Fares</Link>
          </li>
          <li className={styles.li}>
            <Link href="https://www.translink.ca/schedules-and-maps?page=1" className={styles.navLink}>Schedules and Maps</Link>
          </li>
          <li className={styles.li}>
            <Link href="https://www.translink.ca/rider-guide" className={styles.navLink}>Rider Guide</Link>
          </li>
          <li className={styles.li}>
            <Link href="https://www.translink.ca/more-information" className={styles.navLink}>More</Link>
          </li>
          <li className={styles.li}>
            <Link href="https://www.translink.ca/alerts" className={styles.navLink}>Alerts</Link>
          </li>
          <li className={styles.li}>
            <Link href="https://www.translink.ca/search?page=1&pageSize=10&sort=Relevance" className={styles.navLink}>Search</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
