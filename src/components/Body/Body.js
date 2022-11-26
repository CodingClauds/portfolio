import "./Body.scss";
import Me from "../../assets/images/BSTN-May-2022-Toront-CT-Headshot-31.jpg";
import Techstack from "../Techstack/Techstack";
import Projects from "../Projects/Projects";

export default function Body({ myRefAbout, myRefProjects }) {
  return (
    <>
      <main>
        <section className="banner">
          <div className="container wrapper">
            <h1>
              Websites you're <br />
              <span>not afraid</span> to share
            </h1>

            <div className="infinite typewriter">
              <h3 className="infinite__title">Let's Develop.</h3>
            </div>
          </div>
        </section>

        <section className="about wrapper" id="about-me" ref={myRefAbout}>
          <div className="about__container">
            <div className="about__content">
              <div className="about__profile">
                <img
                  className="about__headshot"
                  src={Me}
                  alt="profile headshot"
                />
              </div>
              <div className="about__content--text">
                <div className="about__description">
                  <p className="about__inner-text">
                    Hello, my name is Claudio! I decided to pivot into tech and
                    take the plunge after 7 years in the automotive industry.
                    Initially working as a registered tool-maker, further
                    narrowed down into robotics and automation.
                  </p>
                  <p className="about__inner-text">
                    This was where I got my first taste for programming and
                    seeing it's true potential. I love new challenges and this
                    is what sparked my interest into Web Development. An
                    industry that is constantly evolving, keeping me on my toes
                    and allowing to explore the unknown.
                  </p>
                  <p className="about__inner-text">
                    I was born in Canada but my background is Portuguese, I have
                    dual citizenship and I speak fluently. I guess you could say
                    I have a love for languages.. learning to understand both
                    human and machine. When I am not at my desk you can catch me
                    biking around in the sun, rock climbing or cooking away for
                    friends while listening for the next local eats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <Techstack />
        </section>

        <section id="projects" ref={myRefProjects}>
          <Projects />
        </section>
      </main>
    </>
  );
}
