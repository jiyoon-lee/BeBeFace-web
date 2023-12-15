import React from "react";
import styles from "./page.module.css";

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
                <p className={styles.page2P}>아기얼굴감지서비스</p>
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
                <img src="/images/baby-1.jpg" />
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
                <img src="/images/baby-5.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.Page3}>
        <div className={styles.bebeContainer}>
          <h1 className={styles.beTitle}>AI</h1>
          <h1 className={styles.beTitle2}>babyface Detection </h1>
          <p className={styles.beSubtitle}>
            &quot;BeBeFace, AI를 활용한 우리아이 돌보미 서비스로 더 안전하고 더
            편안한 일상을 경험하세요.&quot;
          </p>

          <img className={styles.beImg} src="/images/Camera.png" />
          <div className={styles.beLine}></div>
        </div>
      </div>

      <div className={styles.Page4}>
        <h1 className={styles.page4Title}>Other services</h1>
        <div className={styles.page3Container}>
          <div className={styles.page3Card}>
            <h1 className={styles.page3Title}>OneTouch </h1>
            <p className={styles.page3Subtitle}> 원터치 알림서비스 </p>
            <p className={styles.page3Subtitle1}>
              돌보미와 부모 간의 연결, 원터치 간편 알림! 베베페이스는 돌보미와
              부모 간의 소통을 원터치로 간편하게 활용할수있습니다. 부모와 돌보미
              간의 소통을 더 효율적으로, 더 가깝게 만들어보세요.
            </p>
            <img className={styles.page3Img} src="/images/mother1.png" />
          </div>
          <div className={styles.page3Card}>
            <h1 className={styles.page3Title}>Calender</h1>
            <p className={styles.page3Subtitle}> 베베캘린더 </p>
            <p className={styles.page3Subtitle1}>
              우리아이의 사랑스러운모습 베베페이스와 함께, 아이의 소중한 순간을
              바라보고, 그 순간들을 영원히 간직하세요. 아이의 성장과 행복을
              함께할 수 있습니다.
            </p>
            <img className={styles.page3Img} src="./images/phone2.png" />
          </div>
          <div className={styles.page3Card}>
            <h1 className={styles.page3Title}>Photo</h1>
            <p className={styles.page3Subtitle}> 베베앨범 </p>
            <p className={styles.page3Subtitle1}>
              돌보미와 부모 간의 연결, 원터치 간편 알림! 베베페이스는 돌보미와
              부모 간의 소통을 원터치로 간편하게 활용할수있습니다. 부모와 돌보미
              간의 소통을 더 효율적으로, 더 가깝게 만들어보세요.
            </p>
            <img className={styles.page3Img} src="/images/album.png" />
          </div>
        </div>
      </div>

      <div className={styles.Page5}>
        <div className={styles.page5Container}>
          <h2 className={styles.page5Title}>Anything for your baby </h2>
          <img className={styles.page5Img} src="/images/baby-main.png" />
        </div>
      </div>
    </div>
  );
}
