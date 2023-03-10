import project1 from "../assets/projects_images/project-1.png";
import project2 from "../assets/projects_images/project-2.png";
import project3 from "../assets/projects_images/project-3.png";
import project4 from "../assets/projects_images/project-4.png";
import project5 from "../assets/projects_images/project-5.png";
import project6 from "../assets/projects_images/project-6.png";

export default function () {
  return (
    <section id="Projects" className="projects">
      <h2>My Recents Projects</h2>
      <div className="content">
        <div data-aos='flip-left'>
          <div className="project-img">
            <img src={project1} alt="" srcset="" />
          </div>
          <hr />
          <div className="description">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              atque, provident .
            </p>
            <button>View more</button>
          </div>
        </div>
        <div data-aos='flip-left'>
          <div className="project-img">
            <img src={project2} alt="" srcset="" />
          </div>
          <hr />
          <div className="description">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              atque, provident .
            </p>
            <button>View more</button>
          </div>
        </div>
        <div data-aos='flip-left'>
          <div className="project-img">
            <img src={project3} alt="" srcset="" />
          </div>
          <hr />
          <div className="description">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              atque, provident .
            </p>
            <button>View more</button>
          </div>
        </div>
        <div data-aos='flip-left'>
          <div className="project-img">
            <img src={project4} alt="" srcset="" />
          </div>
          <hr />
          <div className="description">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              atque, provident .
            </p>
            <button>View more</button>
          </div>
        </div>
        <div data-aos='flip-left'>
          <div className="project-img">
            <img src={project5} alt="" srcset="" />
          </div>
          <hr />
          <div className="description">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              atque, provident .
            </p>
            <button>View more</button>
          </div>
        </div>
        <div data-aos='flip-left'>
          <div className="project-img">
            <img src={project6} alt="" srcset="" />
          </div>
          <hr />
          <div className="description">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              atque, provident .
            </p>
            <button>View more</button>
          </div>
        </div>
      </div>
    </section>
  );
}
