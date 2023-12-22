import { FunctionComponent } from "react";
import SubletrContainer from "./SubletrContainer";
import styles from "./ProjectCard.module.css";

const ProjectCard: FunctionComponent = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.header}>
        <i className={styles.projectsAndProducts}>Projects and Products</i>
      </div>
      <div className={styles.project1}>
        <img
          className={styles.project1Child}
          alt=""
          src="/rectangle-2@2x.png"
        />
        <i className={styles.ilioMirror}>Ilio Mirror</i>
        <i className={styles.whileThisWasntContainer}>
          <p className={styles.whileThisWasnt}>
            While this wasn’t the advent of my startup career, I like to think
            of it as one of the coolest products and teams I could have possibly
            worked on.
          </p>
          <p className={styles.whileThisWasnt}>&nbsp;</p>
          <p className={styles.whileThisWasnt}>
            {`Alongside some UCLA students and founders Paul Anton (currently @ `}
            <a
              className={styles.huupe}
              href="https://huupe.com"
              target="_blank"
            >
              <span className={styles.huupe1}>Huupe</span>
            </a>
            ) and Apollo Limberatos, I built a prototype for a smart mirror
            concept to educate and inspire individuals to dance through
            personalized instruction.
          </p>
          <p className={styles.whileThisWasnt}>&nbsp;</p>
          <p className={styles.whileThisWasnt}>
            It kick started my love for hardware, and continue to tinker on the
            side whenever I can.
          </p>
        </i>
      </div>
      <SubletrContainer
        imageId="/rectangle-2@2x.png"
        projectImageUrls="Subletr"
        sublettingSolutionDescrip="Alongside some of my UCLA colleagues, we built a subletting solution that empowered students to find other students to sublet apartments during international study or summers. "
        technologyStack="Built with Mongo.js, React.js, Express, integrated GPT for listing generation, Stripe for payments, and Passport/Firebase for Google Authentication. "
        problemSolutionDescriptio="Like all products I make, it aimed to solve a problem, one we all as students faced."
        propWidth="789px"
      />
      <div className={styles.project1}>
        <img
          className={styles.project1Child}
          alt=""
          src="/rectangle-2@2x.png"
        />
        <i className={styles.ilioMirror}>QueueCLA</i>
        <i className={styles.builtARestaurantContainer}>
          <p className={styles.whileThisWasnt}>
            Built a restaurant queue system prototype due to rising UCLA
            queue-times alongside a few UCLA students. Post Covid-19 dining
            meant waiting nearly an hour to get food at your favorite dining
            hall, so we create a notify system to avoid waiting in queues
            outside and get accurate estimates on timing with on the ground
            collected data.
          </p>
          <p className={styles.whileThisWasnt}>&nbsp;</p>
          <p className={styles.whileThisWasnt}>
            Again, the problem was simple. Eventually UCLA dining adopted a very
            similar solution to ours for online checkout (which still stinks.
            probably because they addressed it wrong.)
          </p>
        </i>
      </div>
      <SubletrContainer
        imageId="/rectangle-2@2x.png"
        projectImageUrls="Procedural Generation in Unity Engine"
        sublettingSolutionDescrip="I enjoy tinkering with the Unity Game Engine in my free time (as well as 3D modeling in Maya/ZBrush/Substance Painter). I worked on a small project to create a procedural generation scheme similar to over-world Minecraft generation. "
        technologyStack="Using Perlin noise and color mapping, I created a script that could generate mountains, beaches, snow, and lakes. "
        problemSolutionDescriptio="Looking forward to making similar creations in the future :)"
        propWidth="774px"
      />
      <div className={styles.frame1}>
        <img className={styles.socialsIcon} alt="" src="/socials@2x.png" />
        <div className={styles.projectsAndProducts}>© Jakub Hojsan 2023</div>
      </div>
    </div>
  );
};

export default ProjectCard;
