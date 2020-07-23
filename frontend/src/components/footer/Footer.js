import React from "react"

import styles from "./Footer.module.css"
import FacebookIcon from "../svgIcons/FacebookIcon"
import TwitterIcon from "../svgIcons/TwitterIcon"
import InstagramIcon from "../svgIcons/InstagramIcon"

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.contributers}>
        <p>
          Photography by{" "}
          <a
            className="inlineLink"
            href="http://www.cindyparthonnaud.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cindy Parthonnaud
          </a>
        </p>
        <p>
          Logo by{" "}
          <a
            className="inlineLink"
            href="http://www.elspethillustration.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Elspeth Illustration
          </a>
        </p>
      </div>
      <div className={styles.websiteContributer}>
        <p>
          Website by{" "}
          <a
            className="inlineLink"
            href="http://www.angelamaugey.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Angela Rice
          </a>
        </p>
      </div>
      <div className={styles.socialMedias}>
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </div>
    </div>
  )
}
