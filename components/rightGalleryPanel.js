import styles from '../src/styles/rightGalleryPanel.module.scss'


let RightGalleryPanel = (props) => {

    return(
        <div className={styles.main}>

            <div className={styles.mainWrapper}>

                <p className={styles.title} dangerouslySetInnerHTML={{__html: props.title}}></p>

                <div className={styles.wrapper}>
                    <div className={styles.BigItem}>

                    <img className={styles.ItemBigImg} src={props.news[0].img}></img>
                    <p className={styles.ItemBigDiscription} dangerouslySetInnerHTML={{__html: props.news[0].desription}}></p>
                    <p className={styles.ItemBigDate}>13 Марта 2021</p>

                    </div>

                    <div className={styles.list}>

                    <div className={styles.Item}>
                        <img className={styles.ItemImg} src={props.news[1].img}></img>
                        <div className={styles.ItemDiscriptionWrapper}>
                        <p className={styles.ItemDiscription} dangerouslySetInnerHTML={{__html: props.news[1].desription}}></p>
                        <p className={styles.ItemDate} >10 Марта 2021</p>
                        </div>
                    </div>

                    <div className={styles.Item}>
                        <img className={styles.ItemImg} src={props.news[2].img}></img>
                        <div className={styles.ItemDiscriptionWrapper}>
                        <p className={styles.ItemDiscription} dangerouslySetInnerHTML={{__html: props.news[2].desription}}></p>
                        <p className={styles.ItemDate} >8 Марта 2021</p>
                        </div>
                    </div>

                    <div className={styles.Item}>
                        <img className={styles.ItemImg} src={props.news[3].img}></img>
                        <div className={styles.ItemDiscriptionWrapper}>
                        <p className={styles.ItemDiscription} dangerouslySetInnerHTML={{__html: props.news[3].desription}}></p>
                        <p className={styles.ItemDate} >11 Января 2021</p>
                        </div>
                    </div>

                    <div className={styles.Item}>
                        <img className={styles.ItemImg} src={props.news[4].img}></img>
                        <div className={styles.ItemDiscriptionWrapper}>
                        <p className={styles.ItemDiscription} dangerouslySetInnerHTML={{__html: props.news[4].desription}}></p>
                        <p className={styles.ItemDate} >11 Октября 2021</p>
                        </div>
                    </div>

                    </div>
                </div>
            </div>

          <button className={styles.Btn}>Узнать больше</button>
        </div>
    )
}

export default RightGalleryPanel;