import React from "react"

import Layout from "../layout/Layout"
import SectionHeader from "../common/sectionHeader/SectionHeader"
import SectionText from "../common/sectionText/SectionText"

export default function YogaBackground() {
  return (
    <Layout>
      <section id="#background" className="sectionContainer">
        <SectionHeader title="My Background" />
        <SectionText>
          <p>
            A love of running and being active drew me to yoga. I used the
            physical practice of yoga to bring my body back to life after hard
            training, but it wasn’t until I connected with a wonderful teacher
            that I realised there was more to yoga than hamstring stretches.
          </p>
          <p>
            A fractured femur following a marathon left me battling many mental
            and physical demons and this is where yoga saved me. Over time I
            realised I could practice yoga forever and always be learning. I am
            passionate about teaching accessible yoga classes for everyone to
            benefit from. It is my mission to try to bring yoga to more people
            and to help people heal and free themselves with this practice.
          </p>
        </SectionText>
      </section>
    </Layout>
  )
}
