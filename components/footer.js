import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.wrapper}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <ul className={styles.ul}>
                <li className={styles.li}>
                  <Image width={100} height={45} src="/logo.jpg" />
                </li>
                <li className={styles.li}>
                  <p className={styles.p}>
                  Metro Vancouver's transportation network, serving residents and visitors with public transit, major roads, bridges and Trip Planning.
                  </p>
                </li>
              </ul>
            </li>

            <li className={styles.li}>
              <h3 className={styles.h3}>Getting Around</h3>
              <ul className={styles.ul}>
                <Link href="/" className={[styles.logowrapper, styles.navLink]}>
                  <Image width={216} height={95} src="/logo.jpg" />
                </Link>
                <li className={styles.li}>
                  <a href="https://www.translink.ca/schedules-and-maps"
                    className={styles.a}>
                      Schedules
                  </a>
                </li>
                <li className={styles.li}>
                  <a href="https://www.translink.ca/rider-guide" className={styles.a}>
                    Rider Info
                  </a>
                </li>
                <li className={styles.li}>
                  <a href="https://www.translink.ca/alerts" className={styles.a}>
                    Transit Alerts
                  </a>
                </li>
              </ul>
            </li>

            <li className={styles.li}>
              <h3 className={styles.h3}>Resources</h3>
              <ul className={styles.ul}>
                <li className={styles.li}>
                  <a
                    href="https://www.translink.ca/about-us/customer-service/contact-information"
                    className={styles.a}>
                      Contact Us
                  </a>
                </li>
                <li className={styles.li}>
                  <a
                    href="https://www.translink.ca/about-us/careers"
                    className={styles.a}>
                      Careers
                  </a>
                </li>
              </ul>
            </li>

            <li className={styles.li}>
              <p className={styles.p}>Contact Us</p>
              <p className={styles.p}>Call us at 604.953.3333</p><br />
              <a
                href="/"
                className={styles.a}>
                  400-287 Nelson's Ct.,<br />
                  New Westminster,<br />
                  BC V3L0E7
              </a>
            </li>
          </ul>

          <div className={styles.wrapper}>
            <p className={styles.copyright}>
              2023 Mio Takagi
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
