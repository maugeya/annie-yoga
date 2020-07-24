import React from "react"

import Layout from "../layout/Layout"
import styles from "./CorporateSection.module.css"
import SectionHeader from "../common/sectionHeader/SectionHeader"
import SectionText from "../common/sectionText/SectionText"

export default function CorporateSection() {
  return (
    <Layout>
      <section className="sectionContainer">
        <SectionHeader title="Yoga classes at work" />
        <SectionText>
          <p>
            Bringing yoga to the workplace is my goal as a yoga teacher. Since
            the beginning of my teaching career I have offered classes to
            companies at lunchtimes or before and after work and have witnessed
            the profound effect it has. The companies I teach at include
            Spotify, Google and Hearst.
          </p>
          <p>
            I offer accessible open yoga classes so all can feel welcome and
            able to join in. The sessions are fun but designed to relieve
            stress, help people feel good in their bodies in a way that counters
            office life and to improve overall strength and mobility for better
            quality of life. We focus on practicing mindfully and slowing down
            to find much needed headspace. But there is also space to relax and
            connect with colleagues in a different setting.
          </p>
          <h3 className="inlineHeader">
            Interested in having yoga at your work?
          </h3>
          <p>I have a number of options for getting started.</p>
          <ul className={styles.classTypeList}>
            <li>One-off class, taster, trial or event</li>
            <li>Weekly classes booked in blocks of 6-12 weeks</li>
            <li>Twice weekly classes booked in blocks of 6-12 weeks</li>
          </ul>
          <p>
            I am keen to make this suit your workplace as a wonderful benefit
            for employees and ultimately lead to a happier and more connected
            working environment for everyone.
          </p>
          <p>
            You can get in touch with any questions or enquiries that you may
            have on{" "}
            <a
              className="inlineLink"
              href="mailto:anniemayrice@gmail.com?subject=Message from website"
            >
              anniemayrice@gmail.com
            </a>
          </p>
        </SectionText>
      </section>
    </Layout>
  )
}
