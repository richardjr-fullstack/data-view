import React from 'react'
import HomepageBanner from '@/view/homepage'
import { PlayersTable } from '@/components/players'
import Contact from '@/components/contact'

const page = () => {
  return (
    <div>
      <HomepageBanner />
      <PlayersTable />
      <Contact />
    </div>
  )
}

export default page
