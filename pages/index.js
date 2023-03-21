import Layout from '@components/Layout'
import { API_URL } from '@config/index'

export default function HomePage({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
    </Layout>
  )
}

export async function getStaticSideProps() {
  const events = await (await fetch(`${API_URL}/api/events`)).json()
  return {
    props: { events },
    revalidate: 1
  }
}
