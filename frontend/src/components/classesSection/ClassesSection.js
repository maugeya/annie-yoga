import React from "react"
import Layout from "../layout/Layout"
import SectionHeader from "../common/sectionHeader/SectionHeader"
import SectionText from "../common/sectionText/SectionText"

export default function ClassesSection({ yogaClasses }) {
  return (
    <Layout>
      <section className="sectionContainer">
        <SectionHeader title="Public Classes" />
        <SectionText>
          {yogaClasses.map((yogaClass, i) => (
            <p key={i}>
              {yogaClass.where},{yogaClass.day_of_week}, {yogaClass.time}
            </p>
          ))}
        </SectionText>
      </section>
    </Layout>
  )
}
