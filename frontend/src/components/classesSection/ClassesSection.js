import React from "react"

import styles from "./ClassesSection.module.css"
import Layout from "../layout/Layout"
import SectionHeader from "../common/sectionHeader/SectionHeader"
import SectionText from "../common/sectionText/SectionText"
import Testimonial from "../common/testimonial/Testimonial"

export default function ClassesSection({ yogaClasses }) {
  const renderYogaClasses = (yogaClasses, day) => {
    const classesByDay = yogaClasses.filter(
      (yogaClass) => yogaClass.dayOfWeek === day
    )

    return classesByDay.map((yogaClass, i) => (
      <p key={i}>{`${yogaClass.time}, ${yogaClass.where}`}</p>
    ))
  }

  const weekdaysWithClasses = [
    ...new Set(yogaClasses.map((yogaClass) => yogaClass.dayOfWeek)),
  ]
  return (
    <Layout>
      <section className="sectionContainer">
        <SectionHeader title="Public Classes" />
        <SectionText>
          <div className={styles.aboutClasses}>
            <h2 className={styles.sectionHeader}>About my classes</h2>
            <p>
              All public classes are vinyasa flow. I teach an accessible class
              and welcome everyone to adapt the practice to suit their needs and
              energy levels on any particular day. My intention is to allow
              people to move their bodies in a way that feels nurturing and
              beneficial and to gain strength, confidence and space in doing so.
            </p>
          </div>
          <Testimonial>
            <p>
              “Annie May Rice is a rare yoga teaching talent. A beautiful,
              gentle soul who knows that yoga, taught well and practiced with
              authenticity, is a moving meditation. One breath and one movement
              in harmony, brought together to achieve focus, concentration and
              peace. Annie’s Yoga classes are about self-discovery, kindness and
              generosity, truth and connection with others in class and in the
              world. It’s categorically not an athletic competition!” – Paul
            </p>
          </Testimonial>
          <ul className={styles.yogaClassesList}>
            {weekdaysWithClasses.map((day, i) => (
              <li key={i}>
                <h3 className={styles.dayHeader}>{day}</h3>
                {renderYogaClasses(yogaClasses, day)}
              </li>
            ))}
          </ul>
        </SectionText>
      </section>
    </Layout>
  )
}
