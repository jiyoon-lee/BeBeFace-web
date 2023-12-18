import React from "react";
import styles from "./page.module.css";
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>;

export default function Page() {
  return (
    <div className={styles.page1}>
      <div className={styles.heroContainer}>
        <video
          className={styles.heroContainerVideo}
          autoPlay={true}
          muted={true}
          loop={true}
          src="/videos/baby.mp4"
        />
        <h1 className={styles.heroTitle}>BeBeFace</h1>
        <p className={styles.heroSubtitle}>
          맘편히 맡겨, 엄마의 눈과 마음을 대신하다
        </p>
      </div>
      <div className={styles.midContainer}>
        <h1 className={styles.midTitle}>BeBe Service </h1>
        <p className={styles.midSubtitle}>BebeFace&apos;s Four Key Services </p>
      </div>

      <div className={styles.Page2}>
        <div className={styles.page2Section}>
          <div className={styles.page2Article}>
            <div className={styles.page2Inner}>
              <div className={styles.page2Txt}>
                <h2 className={styles.page2H2}>Detecting</h2>
                <p className={styles.page2P}>표정감지서비스</p>
              </div>
              <div className={styles.page2Figure}>
                <img src="/images/baby-2.jpg" />
              </div>
            </div>
          </div>
          <div className={styles.page2Article}>
            <div className={styles.page2Inner}>
              <div className={styles.page2Txt}>
                <h2 className={styles.page2H2}>Timeline </h2>
                <p className={styles.page2P}>베베타임라인</p>
              </div>
              <div className={styles.page2Figure}>
                <img src="/images/baby-4.jpg" />
              </div>
            </div>
          </div>
          <div className={styles.page2Article}>
            <div className={styles.page2Inner}>
              <div className={styles.page2Txt}>
                <h2 className={styles.page2H2}>Calender </h2>
                <p className={styles.page2P}>베베캘린더</p>
              </div>
              <div className={styles.page2Figure}>
                <img src="/images/baby-3.jpg" />
              </div>
            </div>
          </div>
          <div className={styles.page2Article}>
            <div className={styles.page2Inner}>
              <div className={styles.page2Txt}>
                <h2 className={styles.page2H2}>Photo</h2>
                <p className={styles.page2P}>베베앨범</p>
              </div>
              <div className={styles.page2Figure}>
                <img src="/images/baby-8.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.Page3}>
        <div className={styles.bebeContainer}>
          <h1 className={styles.beTitle}>#BEBE AI</h1>
          <h1 className={styles.beTitle2}>babyface Detection💝</h1>
          <p className={styles.beSubtitle}>
            &quot;BeBeFace, 🤗<br></br>
            AI를 활용한 우리아이 돌보미 서비스로 <br></br>더 안전하고<br></br>더
            편안한 일상을 경험하세요.&quot;
          </p>
          <video
            className={styles.cameraVideo}
            autoPlay={true}
            muted={true}
            loop={true}
            src="/videos/camera1.mp4"
          />
        </div>
      </div>

      <div className={styles.Page4}>
        <h1 className={styles.page4Title}>#BEBE SERVICE</h1>

        <video
          className={styles.oneVideo}
          autoPlay={true}
          muted={true}
          loop={true}
          src="/videos/one.mp4"
        />
        <h1 className={styles.page3Title1}>OneTouch </h1>

        <p className={styles.page3Subtitle1}>
          돌보미와 부모 간의 연결,🌈 <br></br>
          원터치 간편 알림! <br></br>
          돌보미와 부모간의 소통을 원터치로 <br></br>더 효율적으로, 더 가깝게
          만들어보세요.🌱😉
        </p>
        <img className={styles.page3Img1} src="/images/mother1.png" />
      </div>

      <div className={styles.Page5}>
        <video
          className={styles.oneVideo1}
          autoPlay={true}
          muted={true}
          loop={true}
          src="/videos/calendar.mp4"
        />
        <h1 className={styles.page3Title2}>Calender💚</h1>

        <p className={styles.page3Subtitle2}>
          일상을 담은 베베캘린더!🧭<br></br>
          우리아이의 사랑스러운모습 <br></br>
          행복한 순간들을 기록하세요.<br></br>
          아이의 성장과 행복을 언제나 함께하세요.😀<br></br>
        </p>
        <img className={styles.page3Img2} src="./images/phone2.png" />
      </div>

      <div className={styles.Page6}>
        <video
          className={styles.oneVideo2}
          autoPlay={true}
          muted={true}
          loop={true}
          src="/videos/album2.mp4"
        />
        <h1 className={styles.page3Title3}>Photo🎈</h1>

        <p className={styles.page3Subtitle3}>
          순간을 담은 베베앨범🥰<br></br>
          우리아이의 하루, 순간<br></br>
          사랑스러운 모습, 귀여운모습,😌<br></br>
          우는모습까지 아이와의 모든순간을 남겨보세요.🍃
        </p>
        <img className={styles.page3Img3} src="/images/album.png" />
      </div>

      <div className={styles.Page7}>
        <video
          className={styles.oneVideo3}
          autoPlay={true}
          muted={true}
          loop={true}
          src="/videos/mother3.mp4"
        />
      </div>
    </div>
  );
}
