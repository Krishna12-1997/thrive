import React from 'react'
import Home from '../component/Home'
import Thrive from '../component/Thrive'
import AskAny from '../component/AskAny'
import Capabilities from '../component/Capabilities'

const LandingPage = () => {
  return (
    <div>
      <Home />
      <Capabilities/>
      <Thrive/>
      <AskAny/>
    </div>
  )
}

export default LandingPage