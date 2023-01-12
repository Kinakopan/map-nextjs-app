import React from "react";
import Image from "next/image";

import styles from "../styles/Home.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        <ul className={styles.headerUl1}>
          <li className={styles.headerLi}>
            <ul className={styles.headerUl2}>
              <li className={styles.li}>
                <a href="https://www.translink.ca/">
                  RIDER INFO
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://www.translink.ca/plans-and-projects?page=1&pageSize=10&sort=Date">
                  PLANS & PROJECTS
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://www.translink.ca/about-us">
                  ABOUT
                </a>
              </li>
            </ul>
          </li>
          <li className={styles.headerLi}>
            <ul className={styles.headerUl2}>
              <li className={styles.li}>
                <a href="https://www.translink.ca/news?page=1&pageSize=12&sort=Date">
                  News
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://www.translink.ca/about-us/careers">
                  Jobs
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://www.translink.ca/about-us/customer-service/contact-information">
                  Contact
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://www.translink.ca/signin">
                  Sign in to Transit Alerts
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <ul className={styles.ul}>
          <li className={styles.li}>
            <a href="https://www.translink.ca/" className={styles.logowrapper}>
              <Image width={216} height={95} src="/logo.jpg" />
            </a>
          </li>
          <li className={styles.li}>
            <a href="https://www.translink.ca/trip-planner">Trip Planner</a>
          </li>
          <li className={styles.li}>
            <a href="https://www.translink.ca/next-bus">Next Bus</a>
          </li>
          <li className={styles.li}>
            <a href="https://www.translink.ca/transit-fares">Fares</a>
          </li>
          <li className={styles.li}>
            <a href="https://www.translink.ca/schedules-and-maps?page=1">Schedules and Maps</a>
          </li>
          <li className={styles.li}>
            <a href="https://www.translink.ca/rider-guide">Rider Guide</a>
          </li>
          <li className={styles.li}>
            <a href="https://www.translink.ca/more-information">More</a>
          </li>
          <li className={styles.li}>
            <a href="https://www.translink.ca/alerts">Alerts</a>
          </li>
          <li className={styles.li}>
            <a href="https://www.translink.ca/search?page=1&pageSize=10&sort=Relevance">Search</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
