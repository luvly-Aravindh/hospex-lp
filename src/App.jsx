import { useState } from 'react'
import './App.css'
import HospexHero from './Components/HospexHero'
import AboutHospex from './Components/AboutHospex'
import WhyHospex from './Components/WhyHospex'
import HospexParticipants from './Components/HospexParticipants'
import WhatYouCanExpectSlider from './Components/WhatYouCanExpectSlider'
import PartnershipComparison from './Components/PartnershipComparison'
import GlobalCollaborationTeam from './Components/GlobalCollaborationTeam'
import HealthcareHero from './Components/HealthcareHero'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <HospexHero />
      <AboutHospex />
      <WhyHospex />
      <HospexParticipants />
      <WhatYouCanExpectSlider />
      <PartnershipComparison />
      <GlobalCollaborationTeam />
      <HealthcareHero />
    </>
  )
}

export default App
