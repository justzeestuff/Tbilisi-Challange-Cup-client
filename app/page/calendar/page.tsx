'use client'
import { useState, useEffect } from 'react'
import Dropdown from '@/app/assets/components/dropdown/dropdown'
import style from './style.module.css'

type Match = {
  tour: number,
  team1: string,
  team1Points: number,
  team2: string,
  team2Points: number,
}
type Structure = {
  [year: string]: Match[]
}

const Calendar = () => {
  const [years, setYears] = useState<string[]>([])
  const [data, setData] = useState<Structure>({})
  const [selected, setSelected] = useState<string>('')

  async function FetchData() {
    try {
      const res = await fetch('https://raw.githubusercontent.com/TbilisiChallangeCup/database/main/Calendar.json')
      const json = JSON.parse(await res.text());
      return json
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const res: Structure = await FetchData();
        const yearsArr = Object.keys(res).map(key => key)

        setYears(yearsArr)
        setData(res) 
        setSelected(yearsArr[0])
      } 
      catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <>
      <main className={style.main}>
        <section className={`${style.header} default`}>
          <h1>კალენდარი</h1>
          <p>ტურნირის ოფიციალური მატჩები მიმდინარე ეტაპისთვის.</p>
        </section>

        <div className={`${style.calendar} default`}>
          <section className={style.title}>
            <div className={style.date}>
              <p>ტური</p>
              <Dropdown className={style.dropdown} contents={years} currentSelection={setSelected} />
            </div>
            <div>
              <p>გუნდი</p>
              <p>შედეგი</p>
              <p>გუნდი</p>
            </div>
          </section>

          {data[selected]?.map((match, i) => (
            <section key={i} className={`${style.title} ${style.match}`}>
              <div className={style.column}>
                <p>{match.tour}</p>
              </div>
              <div className={style.column} >
                <img src={match.team1} alt="team icon soccer football" />
                <p>{match.team1Points} - {match.team2Points}</p>
                <img src={match.team1} alt="team icon soccer football" />
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  )
}

export default Calendar