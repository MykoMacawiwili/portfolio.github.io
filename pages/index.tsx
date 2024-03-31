import CommonFooter from "../components/CommonFooter";
import { useEffect, useState } from "react";
import Home from "components/home/Home";
import Expertise from "components/home/Expertise";
import Navigation from "components/Navigation";
import Experience from "components/home/Experience";
import Contact from "components/home/Contact";
import Work from "components/work/Work";
import { BrowserView, MobileView } from "react-device-detect";
import Projects from "components/home/Projects";
import Head from "next/head";
import parse from "html-react-parser";

export default function Index() {
  const [texts] = useState({
    title: `Digital Portfolio`,
    description: ``,
    head: ``,
  });

  /// To use the animation for expertise section.
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        } else {
          entry.target.classList.remove("fade-in");
        }
      });
    });
    observer.observe(document.querySelector("#section2"));
    setTimeout(function () {
      document.querySelector(".vl-leaderboard") &&
        (document.querySelector<HTMLElement>(".vl-leaderboard").style.display =
          "none");
    }, 50);
  });

  const parseHead = parse(texts.head);
  return (
    <>
      <Head>
        <script src="https://www.googleoptimize.com/optimize.js?id=OPT-KMD99G5"></script>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>{texts.title}</title>
        <meta name="description" content={texts.description} />
        <link rel="icon" href="/icon.png" />
        {parseHead}
      </Head>
      <Navigation />
      <main>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <section id="home">
              <Home />
            </section>
            <section id="expertise">
              <Expertise />
            </section>
            <section id="work">
              <BrowserView>
                <Work />
              </BrowserView>
              <MobileView>
                <Projects />
              </MobileView>
            </section>
            <section id="experience">
              <Experience />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </div>
        </div>
      </main>
      <CommonFooter />
      <div
        id="popup-trigger"
        data-vl-widget="popupTrigger"
        style={{ opacity: 0 }}
      ></div>
    </>
  );
}
