import { useState } from "react";

/**
 *
 * Expertise component. Here you can explain your expertises.
 *
 * @param {String} title - Title of the component.
 * @param {String} subtitle - Subtitle of the component.
 * @param {String} itemTitle - The title of the item.
 * @param {String} item - Content of the item.
 *
 */

export default function Expertise() {
  const [texts] = useState({
    title: `<strong>Reflection,</strong> on my college life.`,
    subtitle: `I have attended De La Salle - College of Saint Benilde and here are my personal experiences throughout the years,`,
    item1Title: `Journey`,
    item2Title: `Challenges`,
    item3Title: `Career Goals`,
    item1: `My life has changed significantly as a result of my stay at De La Salle - College of Saint Benilde; the challenges I overcame there shaped my growth and understanding of the technology industry. It took some time for me to get used to college life, especially after attending online where everything was more structured. However, going through this change provided me with the chance to pick up invaluable lessons about adaptability, tenacity, and the importance of taking opportunities.`,
    item2: `Throughout my time in college, programming and I had a constant love-hate relationship. I learned the virtues of perseverance, patience, and persistence in the face of challenges from every encounter I had, from the thrill of solving challenging puzzles to the frustrations of debugging. Despite the challenges, I remained committed to learning this essential skill.`,
    item3: `Moreover, my time at Benilde demonstrated to me the significance of Quality Assurance (QA) testers and Project Managers to the technology industry. While developers are often praised, I've found that QA and Project Managers are just as vital as developers in software development since they act as the intermediaries of reliability and quality. Understanding this link increased my motivation to work as a QA or Project Manager and increased my appreciation for the thorough tasks that they take on.`,
  });

  return (
    <>
      <section id="section2">
        <div className="content">
          <h2
            className="animation-element"
            dangerouslySetInnerHTML={{ __html: texts.title }}
          ></h2>
          <p
            className="animation-element"
            dangerouslySetInnerHTML={{ __html: texts.subtitle }}
          ></p>

          <ul>
            <li className="animation-element">
              <img src="/icon/home.png" />
              <h4>{texts.item1Title}</h4>
              <span>{texts.item1}</span>
            </li>
            <li className="animation-element">
              <img src="/icon/user.png" />
              <h4>{texts.item2Title}</h4>
              <span>{texts.item2}</span>
            </li>
            <li className="animation-element">
              <img src="/icon/sack-dollar.png" />
              <h4>{texts.item3Title}</h4>
              <span>{texts.item3}</span>
            </li>
          </ul>
        </div>
      </section>
      <style jsx>{`
        section {
          position: relative;
          display: flex;
          flex-direction: row;
          padding: 4vw 5.103vw 2vw 10.317vw;
          z-index: 10;
        }

        section .media {
          width: 49vw;
          position: absolute;
          right: 0;
          top: 0;
        }

        section .content {
          display: flex;
          flex-direction: column;
        }

        section .content .animation-element {
          opacity: 0;
        }

        section .content h2 {
          opacity: 0;
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 3.43391vw;
          line-height: 122%;
          color: #2d3436;
          margin-bottom: 2.513vw;
          animation-delay: 0s;
        }

        section .content p {
          opacity: 0;
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 1.5873vw;
          line-height: 140%;
          color: #2d3436;
          margin-bottom: 2.513vw;
          animation-delay: 0.3s;
        }

        section .content .primary-button {
          width: 11.78407vw;
          animation-delay: 0.6s;
        }

        section .content .primary-button.mobile {
          display: none;
          animation-delay: 1.8s;
        }

        section .content ul {
          display: flex;
          flex-direction: row;
          margin-top: 5.621vw;
        }

        section .content ul li {
          opacity: 0;
          display: flex;
          flex-direction: column;
          width: 19.31216vw;
          margin-right: 3.83597vw;
        }

        section .content ul li:nth-child(1) {
          animation-delay: 0.9s;
        }

        section .content ul li:nth-child(2) {
          animation-delay: 1.2s;
        }

        section .content ul li:nth-child(3) {
          animation-delay: 1.5s;
        }

        section .content ul li:last-child {
          margin-right: 0;
        }

        section .content ul li img {
          width: 1.917vw;
          margin-bottom: 1.851vw;
        }

        section .content ul span {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 1.32275vw;
          line-height: 130%;
          color: #a0a0aa;
          padding-top: 10px;
        }

        @media screen and (max-width: 992px) {
          section {
            padding: 35px 22px;
            margin-top: 2vh;
          }

          section > .media {
            display: none;
          }

          section .content {
            width: 100%;
          }

          section .content h2 {
            font-size: 29px;
            line-height: 122%;
            width: 87%;
            margin-bottom: 17px;
          }

          section .content p {
            font-size: 15px;
            line-height: 20px;
            width: 100%;
            margin-bottom: 32px;
          }

          section .content > .primary-button {
            display: none;
          }

          section .content > .primary-button.mobile {
            display: flex;
            width: 100%;
            justify-content: center;
            margin-top: 13px;
            height: 45px;
            font-size: min(5vw, 24px);
          }

          section .content > ul {
            flex-direction: column;
            margin-top: 0;
          }

          section .content > ul li {
            width: 100%;
            margin-right: 0;
            flex-direction: column;
            justify-content: space-between;
            padding: 17px 0 28px 0;
            border-top: 1px solid #eeeef2;
          }

          section .content > ul li span {
            font-size: 15px;
            line-height: 20px;
          }

          section .content > ul li img {
            display: none;
          }

          section .content > ul li h4 {
            font-size: 15px;
            line-height: 20px;
          }
        }

        @media screen AND (max-width: 526px) {
          section .content ul li img {
            width: 6vw;
            height: 4.5vw;
          }
        }

        @media screen AND (min-width: 526px) AND (max-width: 992px) {
          section .content h2 {
            font-size: 35px;
          }

          section .content p {
            font-size: 20px;
            line-height: 30px;
          }

          section .content > ul li span {
            font-size: 20px;
            line-height: 30px;
          }

          section .content ul li img {
            width: 4vw;
            height: 3.5vw;
          }
        }

        @media screen AND (min-width: 993px) AND (max-width: 1199px) {
          section .content .primary-button {
            width: 13.5vw;
          }
        }
      `}</style>
      <style jsx global>{`
        #section2 .content h2 strong {
          font-weight: 500;
        }
      `}</style>
    </>
  );
}
