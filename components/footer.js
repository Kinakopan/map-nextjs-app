import React from "react";
import Image from "next/image";
import a from "next/link";

import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerWrapper}>
          <ul className={styles.ulColumn1}>
            <li className={styles.footerLi}>
              <ul className={styles.ulColumn2}>
                <li className={styles.li}>
                  <a href="/" className={styles.navLink}>
                    <Image width={216} height={95} src="/logo.jpg" />
                  </a>
                </li>
                <li className={styles.li}>
                  Metro Vancouver's transportation network, serving residents and visitors with public transit, major roads, bridges and Trip Planning.
                </li>
              </ul>
            </li>

            <li className={styles.footerLi}>
              <h3 className={styles.h3}>Getting Around</h3>
              <ul className={styles.ulColumn2}>
                <li className={styles.li}>
                  <a href="https://www.translink.ca/transit-fares">
                      Transit Fares
                  </a>
                </li>
                <li className={styles.li}>
                  <a href="https://www.translink.ca/schedules-and-maps?page=1">
                      Schedules
                  </a>
                </li>
                <li className={styles.li}>
                  <a href="https://www.translink.ca/rider-guide">
                    Rider Info
                  </a>
                </li>
                <li className={styles.li}>
                  <a href="https://www.translink.ca/alerts">
                    Transit Alerts
                  </a>
                </li>
              </ul>
            </li>

            <li className={styles.footerLi}>
              <h3 className={styles.h3}>Resources</h3>
              <ul className={styles.ulColumn2}>
                <li className={styles.li}>
                  <a
                    href="https://www.translink.ca/about-us/customer-service/contact-information">
                      Contact Us
                  </a>
                </li>
                <li className={styles.li}>
                  <a
                    href="https://www.translink.ca/about-us/careers">
                      Careers
                  </a>
                </li>
              </ul>
            </li>

            <li className={styles.footerLi}>
              <p>Contact Us</p>
              <p>Call us at 604.953.3333</p><br />
              <a
                href="https://www.google.com/maps/place/TransLink/@49.2247324,-122.8939064,17z/data=!3m1!4b1!4m5!3m4!1s0x5486765906294161:0x8be44a756edffc2f!8m2!3d49.2247289!4d-122.8917178">
                  400-287 Nelson's Ct.,<br />
                  New Westminster,<br />
                  BC V3L0E7
              </a>
            </li>
          </ul>

        </div>

      </div>
      <div className={styles.copyrightBox}>
        <p className={styles.copyright}>
          2023 Mio Takagi
        </p>
      </div>
    </>
  );
}
