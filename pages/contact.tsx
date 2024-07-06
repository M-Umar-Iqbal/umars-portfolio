import React from 'react'
import ParticlesComponent from '../components/Particle';
function Contact() {
  return (
    <div style={{ display: "relative" }}>
      <div style={{ display: "absolute" }}>
        <ParticlesComponent />
      </div>
      <div >Contact</div>
    </div>
  )
}

export default Contact