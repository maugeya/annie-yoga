import React from "react"

import Layout from "../layout/Layout"
import SectionHeader from "../common/sectionHeader/SectionHeader"
import SectionText from "../common/sectionText/SectionText"

export default function AboutSection() {
  return (
    <Layout>
      <section id="#about" className="sectionContainer">
        <SectionHeader title="About me" />
        <SectionText>
          <p>
            I believe that nearly everyone would be a bit better off with some
            yoga in their lives in whatever form works for them. It doesn’t
            matter what it looks like and it doesn’t matter where you do it, how
            you do it or what brand of yoga mat you have, I think it’s just
            about giving yourself some precious time to practice some yoga. I
            believe everyone should have some access to yoga and hope that I can
            help spread it to more people in more ways.
          </p>
          <p>
            I teach all around London in public group classes as well as in
            people’s work spaces and homes.
          </p>
          <p>
            If you’d like to get in touch about anything, please do. You can
            email me at{" "}
            <a
              className="inlineLink"
              href="mailto:anniemayrice@gmail.com?subject=Message from website"
            >
              anniemayrice@gmail.com
            </a>
          </p>
          <p>PEACE.</p>
        </SectionText>
      </section>
    </Layout>
  )
}
