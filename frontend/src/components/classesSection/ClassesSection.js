import React from "react"

import styles from "./ClassesSection.module.css"
import Layout from "../layout/Layout"
import SectionHeader from "../common/sectionHeader/SectionHeader"
import SectionText from "../common/sectionText/SectionText"

export default function ClassesSection({ yogaClasses }) {
  const renderYogaClasses = (yogaClasses, day) => {
    const classesByDay = yogaClasses.filter(
      (yogaClass) => yogaClass.day_of_week === day
    )

    return classesByDay.map((yogaClass, i) => (
      <p key={i}>{`${yogaClass.where}, ${yogaClass.time}`}</p>
    ))
  }

  const weekdaysWithClasses = [
    ...new Set(yogaClasses.map((yogaClass) => yogaClass.day_of_week)),
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

          {weekdaysWithClasses.map((day, i) => (
            <div key={i}>
              <h2 className={styles.dayHeader}>{day}</h2>
              {renderYogaClasses(yogaClasses, day)}
            </div>
          ))}
        </SectionText>
      </section>
    </Layout>
  )
}
