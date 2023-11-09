import Link from 'next/link'
import styles from '../src/styles/footer.module.scss'

let Footer = (props) => {

    return(
        <footer className={styles.footer}>

            <div  className={styles.bar}>
                <div className={styles.optionsList}>
                    <img src='/LOGO.png'></img>
                    <ul className={styles.optionsNavList}>
                    <li>
                        <Link href="/#">
                        Главная
                        </Link>
                    </li>
                    <li className={styles.pt40}>
                        <Link href="/#">
                        Советы
                        </Link>
                    </li>
                    <li className={styles.pt40}>
                        <Link href="/#">
                        Зарплаты
                        </Link>
                    </li>
                    <li className={styles.pt40}>
                        <Link href="/#">
                        Вмешательства
                        </Link>
                    </li>
                    <li className={styles.pt40}>
                        <Link href="/#">
                        Контакты
                        </Link>
                    </li>
                    </ul>
                </div>

                <div className={styles.info1}>

                    <p>
                    Почтовый адрес<br></br>
                    (Штаб-Квартира Вроцлава):
                    <br></br><br></br>
                    Транспортная Контора<br></br>
                    JJJJ<br></br>
                    ул. Женева, 10<br></br>
                    52-315 Врослав, Польский<br></br>
                    почта: офис@и т.д.-Пип.p
                    </p>
                    <p>
                    <br></br>Регистрационные данные:
                    <br></br><br></br>
                    Kancelaria Transportowa <br></br>
                    JJJJ Sp. z o.o. S.K.<br></br>
                    ul. Khcfjsihsc 10 (II piętro)<br></br>
                    52-900 Wrocław, Polska
                    </p>
                    <p>
                    <br></br>KRS: 000000000<br></br>
                    NIP: 00000000000<br></br>
                    REGON: 000000000000
                    </p>

                </div>

                <div>

                    <section className={styles.social}>
                    <img className={styles.socialItem} src='/facebook.svg'></img>
                    <img className={styles.socialItem} src='/email.svg'></img>
                    <img src='/linkedin.svg'></img>
                    </section>

                    <p>
                    Филиал Гданьск:
                    <br></br><br></br>
                    Транспортная контора JJJJ<br></br>
                    Ahjhjkhjhjhjkn 9 (карта<br></br>доступа)<br></br>
                    80-299 Гданьск, Польский<br></br>
                    E-mail: gdansk@jjjj.pl
                    </p>

                    <p className={styles.pt40}>
                    Отряд Тарнов:
                    <br></br><br></br>
                    Транспортная контора JJJJ<br></br>
                    ул. Jnknjknllkkkk 10/8 (подъездная<br></br> карта)<br></br>
                    33-477 Тарнув, Польский<br></br>
                    E-mail: tarnow@jjjj.pl
                    </p>

                </div>

            </div>

            <p className={styles.copyright}>@2023 - Все права защищены - мы выставляем счет водителям со страстью юридическая фирма JJJJ</p>

        </footer>
    )
}

export default Footer;