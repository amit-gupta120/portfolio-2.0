import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, liveLink, repoLink, projectDesc }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-100 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7 text-black font-bold text-3xl">
          {projectDesc}
          {/* Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt. */}
        </p>
        <div className="flex gap-3">
          <button className="bg-red w-[120px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            <a href={liveLink} target="_blank" rel="noreferrer">
              Live
            </a>
          </button>
          <button className="bg-yellow w-[120px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            <a href={repoLink} target="_blank" rel="noreferrer">
              Repo
            </a>
          </button>
        </div>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="project" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          "Crafting stunning user interfaces with seamless experiences. Explore
          my projects—beautifully designed, technically sound, and user-focused.
          Innovation at its best."
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-2 grid-rows-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="Project 1"
            liveLink="https://social-media-app-ten-kohl.vercel.app/"
            repoLink="https://github.com/amit-gupta120/social-media-app"
            projectDesc="FaceApp"
          />
          <Project
            title="Project 2"
            liveLink="https://ecommerce-website-seven-rho.vercel.app/"
            repoLink="https://github.com/amit-gupta120/ecommerce-website"
            projectDesc="Artosphere"
          />

          {/* ROW 2 */}
          <Project
            title="Project 3"
            liveLink="https://cryptocurrency-application.vercel.app/"
            repoLink="https://github.com/amit-gupta120/Cryptocurrency-Application"
            projectDesc="CryptoCurrency App"
          />

          <Project
            title="Project 4"
            liveLink=" https://admin-dashboard-sage-tau.vercel.app/"
            repoLink="https://github.com/amit-gupta120/AdminDashboard"
            projectDesc="Admin Dashboard"
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>

          {/* ROW 3
          <Project title="Project 6" />
          <Project title="Project 7" />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
