import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="flex flex-col justify-center items-center p-20 text-5xl">
      Site en construction
    </div>
  </Layout>
)

export default IndexPage
