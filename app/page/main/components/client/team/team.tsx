"use client"
import { useState } from 'react'
import style from './style.module.css'

const Team = () => {
  const [team, setTeam] = useState({
    name: "გუნდის სახელი",
    icon: ""
  })

  return (
    <section className={style.teamProfile}  >
      <img src={`${team.icon}`} alt="team icon football soccer competetive" />
      <p>{team.name}</p>
    </section>
  )
}

export default Team