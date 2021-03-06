import { GatsbySeo } from 'gatsby-plugin-next-seo'
import React from 'react'

import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <GatsbySeo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
