import React, { useState } from "react";

/**
 *
 * Projects Column from the Work section. Only for mobile
 *
 * @param {Array} projects - All the projects person has done. It has 6 attributes: backgroundColor for background color of the bubble. Type for type of the projects. Title and subtitle of the project. Techs the technologies projects has used. Links is a json with 2 attributes github and website.
 *
 *
 */
function ProjectsColumn() {
  const [texts] = useState({
    projects: [
      {
        backgroundColor: `#dfe6e940`,
        type: `Web App`,
        title: `<strong>GiveMore</strong>`,
        subtitle:
          "Developed aplatform-as-a-service (PaaS) “GiveMore” that connects donors withcharitable organizations, facilitating seamless contributions and fostering positive change in communities. Incorporated responsive design principles such as HTML, CSS, and JavaScript to create an intuitive and visually appealing interface.",
        techs: "React, NoSQL, Node",
        links: {
          github: "https://github.com/MykoMacawiwili/GiveMore-Thesis-Capstone",
          website: "https://isproj2.vercel.app/",
        },
      },
      {
        backgroundColor: `#E4FAFE`,
        type: `Android App`,
        title: `<strong>Tic Tac Toe</strong>`,
        subtitle:
          "Developed a Tic Tac Toe game through the use of android studio and kotlin. This was our finals for our mobile development subject, we decided to create a 2 player tic tac toe application. To showcase our learnings throughout the subject.",
        techs: "Kotlin",
        links: {
          github: "https://github.com/MykoMacawiwili/MOBDEVTFINALS",
          website: "",
        },
      },
      {
        backgroundColor: `#CCFAED`,
        type: `Web App`,
        title: `<strong>Back up to the front</strong>`,
        subtitle:
          "Created my first web application through the use of C#. I learned and made it during our class of Enterprise Programming, with two of my other colleagues. An application of what we havelearned throughout the term.",
        techs: "C#",
        links: {
          github: "https://github.com/MykoMacawiwili/ENTPROG-FINALS",
          website: "",
        },
      },
      {
        backgroundColor: `#D5EAFF`,
        type: `Web App`,
        title: `<strong>Fast-Med</strong>`,
        subtitle:
          "Created a web application through the use of java. Similar to my previous web application project, we made a web application with CRUD and login. By leveraging Java's robust frameworks, we were able to efficiently build a web application that meets the subject's requirements.",
        techs: "Java",
        links: {
          github: "https://github.com/umutyesildal/mercedes-assistify",
          website: "",
        },
      },
    ],
  });

  /// Returns the items from the projects array.
  return (
    <>
      <div className="column">
        {texts.projects.map((item, i) => {
          return (
            <div
              className="item"
              style={{ backgroundColor: item.backgroundColor }}
            >
              <h1
                dangerouslySetInnerHTML={{
                  __html: item.type,
                }}
              ></h1>
              <h2
                dangerouslySetInnerHTML={{
                  __html: item.title,
                }}
              ></h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: item.subtitle,
                }}
              ></p>
              <span
                dangerouslySetInnerHTML={{
                  __html: item.techs,
                }}
              ></span>
              <div className="row-of-logos">
                {item.links.github != "" ? (
                  <a href="">
                    <img src="/logos/github-mark.png" alt="" />
                  </a>
                ) : null}
                {item.links.website != "" ? (
                  <a href="">
                    <img src="/logos/website.png" alt="" />
                  </a>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .column {
          display: flex;
          flex-direction: column;
          margin-top: 16px;
        }
        h1 {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 20px;
          margin-bottom: 5px;
        }
        h2 {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 20px;
          margin-bottom: 25px;
        }

        p {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 15px;
          line-height: 20px;
          color: #61616a;
          margin-bottom: 25px;
        }
        .item {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 4vw;
          border-radius: 2vw;
          margin-bottom: 25px;
        }
        .item .row-of-logos {
          display: flex;
          flex-direction: row;
          margin-top: 25px;
        }
        .item .row-of-logos img {
          width: 40px;
          height: 25px;
          object-fit: contain;
        }
      `}</style>
    </>
  );
}

export default ProjectsColumn;
