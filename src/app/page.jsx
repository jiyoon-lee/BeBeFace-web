import Image from "next/image";
import circle from "../../public/mainPageStyle/img/circle.png";
import cloud1 from "../../public/mainPageStyle/img/cloud1.png";
import cloud2 from "../../public/mainPageStyle/img/cloud2.png";
import family from "../../public/mainPageStyle/img/family.png";
import man from "../../public/mainPageStyle/img/man.png";
import sun from "../../public/mainPageStyle/img/sun.png";
import town_day from "../../public/mainPageStyle/img/town_day.png";
import town_night from "../../public/mainPageStyle/img/town_night.png";
export default function HomePage() {
  return (
    <>
      <h1>Have a Good Day!!</h1>

      <section>
        <article className="sky">
          <Image src={sun} className="sun" alt="" />
          <Image src={cloud1} className="cloud1" alt="" />
          <Image src={cloud2} className="cloud2" alt="" />
        </article>
        <article className="town">
          <Image src={circle} className="circle" alt="" />
          <Image src={town_night} className="night" alt="" />
          <Image src={town_day} className="day" alt="" />
        </article>

        <article className="people">
          <Image src={man} className="man" alt="" />
          <Image src={family} className="family" alt="" />
        </article>
      </section>
    </>
  );
}
