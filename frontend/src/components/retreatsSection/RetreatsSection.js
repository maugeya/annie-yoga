import React from "react"

import Layout from "../layout/Layout"
import SectionHeader from "../common/sectionHeader/SectionHeader"
import SectionText from "../common/sectionText/SectionText"

export default function RetreatsSection({ retreats }) {
  return (
    <Layout>
      <section className="sectionContainer">
        <SectionHeader title="Upcoming retreats 2020" />
        <SectionText>
          <div>
            <h3>Reset in Tuscany</h3>
          </div>
          <div>
            <h3>Fire and Water</h3>
          </div>
        </SectionText>
      </section>
    </Layout>
  )
}
