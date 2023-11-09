import Image from 'next/image'
import styles from '../styles/page.module.scss'
import Link from 'next/link'

import LeftGalleryPanel from '../../components/leftGalleryPanel'
import RightGalleryPanel from '../../components/rightGalleryPanel'
import Footer from '../../components/footer'

export default function Home() {
  return (
    <>
      <header className={styles.headerSocial}>
        <nav className={styles.nav}>
          <section>
            <img src='/LOGO.png'></img>
          </section>

          <section className={styles.navSocial}>
          <img src='/facebook.svg'></img>
          <img src='/email.svg'></img>
          <img src='/linkedin.svg'></img>
          </section>
        </nav>
      </header>
        {/* ----------------------------x */}
        
      <header className={styles.headerNavigation}>
        <nav className={styles.navOptions}>
          <ul className={styles.navOptionsList}>
          <li>
            <Link href="/#">
              Главная
            </Link>
          </li>
          <li>
            <Link href="/#">
              Советы
            </Link>
          </li>
          <li>
            <Link href="/#">
              Зарплаты
            </Link>
          </li>
          <li>
            <Link href="/#">
              Вмешательства
            </Link>
          </li>
          <li>
            <Link href="/#">
              Контакты
            </Link>
          </li>
          </ul>

          <button className={styles.navOptionsBtn}>Беcплатная консультация</button>
        </nav>
      </header>
      

      <main className={styles.main}>
        
        <div className={styles.description}>
          <section className={styles.descriptionWrapper}>

            <h1 className={styles.descriptionTextFirst}>
              Крупнейший блог о
            </h1>
            <h1 className={styles.descriptionTextSecond}>
              транспортной отрасли
            </h1>
            <input placeholder='Введите поисковую фразу здесь...' className={styles.descriptioniSearch}></input>

          </section>
        </div>

        <div className={styles.serviceList}>
          <section className={styles.serviceListWrapper}>
            <section className={styles.serviceRow}>

              <section className={styles.serviceItem}>
                <img className={styles.serviceItemImg} src='/service_1.png'></img>
                <p className={styles.serviceItemDescription}>
                  Учет рабочего времени <br></br>водителя-быстрый учет <br></br>рабочего времени водителя
                </p>
                <button className={styles.serviceItemBtn}>
                  Подробнее
                </button>
              </section>

              <section className={styles.serviceItem}>
                <img className={styles.serviceItemImg} src='/service_2.png'></img>
                <p className={styles.serviceItemDescription}>
                  Учет рабочего времени <br></br>водителя-быстрый учет <br></br>рабочего времени водителя
                </p>
                <button className={styles.serviceItemBtn}>
                  Подробнее
                </button>
              </section>

              <section className={styles.serviceItem}>
                <img className={styles.serviceItemImg} src='/service_3.png'></img>
                <p className={styles.serviceItemDescription}>
                  Учет рабочего времени <br></br>водителя-быстрый учет <br></br>рабочего времени водителя
                </p>
                <button className={styles.serviceItemBtn}>
                  Подробнее
                </button>
              </section>

            </section>

            <section className={styles.serviceRow}>

              <section className={styles.serviceItem}>
                <img className={styles.serviceItemImg} src='/service_3.png'></img>
                <p className={styles.serviceItemDescription}>
                  Учет рабочего времени <br></br>водителя-быстрый учет <br></br>рабочего времени водителя
                </p>
                <button className={styles.serviceItemBtn}>
                  Подробнее
                </button>
              </section>

              <section className={styles.serviceItem}>
                <img className={styles.serviceItemImg} src='/service_4.png'></img>
                <p className={styles.serviceItemDescription}>
                  Учет рабочего времени <br></br>водителя-быстрый учет <br></br>рабочего времени водителя
                </p>
                <button className={styles.serviceItemBtn}>
                  Подробнее
                </button>
              </section>

              <section className={styles.serviceItem}>
                <img className={styles.serviceItemImg} src='/service_5.png'></img>
                <p className={styles.serviceItemDescription}>
                  Учет рабочего времени <br></br>водителя-быстрый учет <br></br>рабочего времени водителя
                </p>
                <button className={styles.serviceItemBtn}>
                  Подробнее
                </button>
              </section>

            </section>

            <section>
              
            </section>

            

          </section>
        </div>

        <div className={styles.news}>
          <div className={styles.newsTitle}>Новости</div>

          <div className={styles.newsList}>

            <section className={styles.newsItem}>
              <section className={styles.newsItemImgWrapper}>
                <div className={styles.newsItemDate}>11 Марта 2021</div>
                <img className={styles.newsItemImg} src='/news_1.png'></img>
              </section>
                <section className={styles.newsItemDescription}>
                  Подготовка и расчет водителя за февраль 2022 года<br></br>(см. Запись вебинаров)
                </section>
            </section>

            <section className={styles.newsItem}>
              <section className={styles.newsItemImgWrapper}>
                <div className={styles.newsItemDate}>21 Декабря 2021</div>
                <img className={styles.newsItemImg} src='/news_2.png'></img>
              </section>
                <section className={styles.newsItemDescription}>
                  Учет рабочего времени без диет и ночевок-получить <br></br>запись вебинара от 19.01.2022
                </section>
            </section>

            <section className={styles.newsItem}>
              <section className={styles.newsItemImgWrapper}>
                <div className={styles.newsItemDate}>11 Марта 2021</div>
                <img className={styles.newsItemImg} src='/news_1.png'></img>
              </section>
                <section className={styles.newsItemDescription}>
                  Подготовка и расчет водителя за февраль 2022 года<br></br>(см. Запись вебинаров)
                </section>
            </section>

          </div>

          <img className={styles.newsArrow} src='/arrow.svg'></img>
        </div>


        <LeftGalleryPanel 
          title='Советы'
          news={[
            {'img':'/rec_1.png', 'desription':'Подготовка и расчет водителя за февраль<br>2022 года (см. Запись вебинаров)'},
            {'img':'/rec_2.png', 'desription':'Учет рабочего времени водителя-<br>быстрый учет рабочего<br>времени водителя'},
            {'img':'/rec_3.png', 'desription':'Учет рабочего времени водителя-<br>быстрый учет рабочего<br>времени водителя'},
            {'img':'/rec_4.png', 'desription':'Учет рабочего времени водителя-<br>быстрый учет рабочего<br>времени водителя'},
            {'img':'/rec_5.png', 'desription':'Учет рабочего времени водителя-<br>быстрый учет рабочего<br>времени водителя'}
          ]} 
        />

        <RightGalleryPanel

          title='Время вождения и <br>отдыха'
          news={[
            {'img':'/section4_1.png', 'desription':'Подготовка и расчет водителя за февраль<br>2022 года (см. Запись вебинаров)'},
            {'img':'/section4_2.png', 'desription':'Учет рабочего времени водителя-<br>быстрый учет рабочего<br>времени водителя'},
            {'img':'/section4_3.png', 'desription':'Учет рабочего времени водителя-<br>быстрый учет рабочего<br>времени водителя'},
            {'img':'/section4_4.png', 'desription':'Учет рабочего времени водителя-<br>быстрый учет рабочего<br>времени водителя'},
            {'img':'/section4_5.png', 'desription':'Учет рабочего времени водителя-<br>быстрый учет рабочего<br>времени водителя'}
          ]} 
        />

        <LeftGalleryPanel 
          title='Учёт'
          news={[
            {'img':'/acc_1.png', 'desription':'Подготовка и расчет водителя за февраль<br>2022 года (см. Запись вебинаров)'},
            {'img':'/acc_2.png', 'desription':'Учет рабочего времени водителя-<br>быстрый учет рабочего<br>времени водителя'},
            {'img':'/acc_3.png', 'desription':'Учет рабочего времени водителя-<br>быстрый учет рабочего<br>времени водителя'},
            {'img':'/acc_4.png', 'desription':'Учет рабочего времени водителя-<br>быстрый учет рабочего<br>времени водителя'},
            {'img':'/acc_5.png', 'desription':'Учет рабочего времени водителя-<br>быстрый учет рабочего<br>времени водителя'}
          ]} 
        />

      </main>

      <Footer/>
    </>
  )
}
