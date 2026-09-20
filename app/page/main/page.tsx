import style from './style.module.css'

// --client
import Team from './components/client/team/team'
import Points from './components/client/points'
import Description from './components/client/description/description'
import ShortData from './components/client/shortData/shortData'
import Button from './components/client/button/button'

// --server
import AboutNav from './components/server/description/aboutNav'

const Page = () => {
  return (
    <>
      <main className={style.main} >
        <div className={style.pageIntro} >
          <article className={style.aboutPage} >
            <section>
              <p>ახალგაზრდული საფეხბურთო ტურნირი • თბილისი</p>
              <div>
                <h1>Tbilisi</h1>
                <h1>Challenge</h1>
                <h1>Cup</h1>
              </div>
              <p>
                კეთილი იყოს თქვენი მობრძანება Tbilisi Challenge Cup-ის ოფიციალურ ვებსაიტზე. აქ შეგიძლიათ იხილოთ ტურნირის ცხრილები, მატჩების განრიგი, სიახლეები და საკონტაქტო ინფორმაცია.
              </p>
            </section>
            <nav>
              <ul>
                <li>
                  <Button inlineCss={{ background: 'linear-gradient(135deg,#ff8c2a,#ff3d3d)' }}
                    href={"/page/table"}
                    text={"ცხრილების ნახვა"}
                    className='' />
                </li>
                <li>
                  <Button inlineCss={{ backgroundColor: 'rgba(255, 255, 255, 0.151)' }}
                    href={"/page/calendar"}
                    text={"მატჩების კალენდარი"}
                    className='' />
                </li>
              </ul>
            </nav>
          </article>
          <article className={style.data}>
            <div className={style.bestMatch} >
              <section>
                <p>გამორჩეული მატჩი</p>
                <p>2009 წლიანები</p>
              </section>
              <div>
                <Team />
                <Points style={style.teamPoints} />
                <Team />
              </div>
              <Description style='' />
            </div>
            <div className={style.secondaryData} >
              <div>
                <ShortData />
                <ShortData />
              </div>
              <div>
                <ShortData />
                <ShortData />
              </div>
            </div>
          </article>
        </div>
        <section className={style.outro} >
          <h1> ტურნირის მიმოხილვა </h1>
          <p> ტურნირისთვის საჭირო ძირითადი ინფორმაცია წარმოდგენილია საიტის მთავარ სექციებში. </p>
          <div>
            <AboutNav
              title='ცხრილები'
              text='გაეცანით ლიგის პულსს — ყოველი ბრძოლის კვალი აისახება ცხრილებში: გუნდების პოზიციები, მოპოვებული ქულები და გატანილი გოლები, თითოეული ასაკობრივი კატეგორიისთვის ცალ-ცალკე.'
            />
            <AboutNav
              title='კალენდარი'
              text='თვალი ადევნეთ ტურნირის მსვლელობას დასაწყისიდან დღემდე — გათამაშებული შეხვედრები, მიღწეული შედეგები და მოახლოებული ბრძოლები, ერთად შეკრებილი.'
            />
            <AboutNav
              title='სიახლეები'
              text='იყავით ყოველთვის საქმის კურსში — ჩვენი სამყაროს უახლესი ამბები, მოვლენები და საინტერესო ისტორიები, ერთ სივრცეში თქვენთვის.'
            />
          </div>
        </section>
      </main>
    </>

  )
}

export default Page