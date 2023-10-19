import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { stocktrader, passwordgenerator, hyperadar, javaquiz, ublog, workdayscheduler, notetaker, weatherforecast, github } from "../assets";

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


const Project = ({ title, link, image}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-neutral z-30 flex flex-col justify-center items-center text-center p-16 text-base-100`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative max-w-[400px] max-h-[400px]">
      <div className={overlayStyles}>
        <p className="text-xl font-playfair">{title}</p>
        <a 
          href={link}
          target="_blank" 
          rel="noreferrer"
         >
          <button className="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded m-auto">
            Visit the App
          </button>
        </a>
      </div>
      <img src={image} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-36 pb-36">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.75 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-accent">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Please check out my projects below! Through all of these projects I have learned so many new skills and I have built my confidence in software development. 
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <Project title="Stock Trader" link="https://floating-wildwood-52719-0a69bbab7cea.herokuapp.com/login" image={stocktrader}/>
          <Project title="Ublog" link="https://ublog-50a16cea80fc.herokuapp.com/" image={ublog}/>
          <Project title="Hype Radar" link="https://github.com/fabioesilveira/hype-radar" image={hyperadar}/>


          {/* ROW 2 */}
          <Project title="Work Day Scheduler" link="https://kthames.github.io/WorkDayScheduler/" image={workdayscheduler}/>
          <Project title="Weather Forecast" link="https://kthames.github.io/WeatherForecast/" image={weatherforecast}/>
          <Project title="Java Quiz" link="https://kthames.github.io/JavaScriptQuiz/" image={javaquiz}/>

          {/* ROW 3 */}
          <Project title="Password Generator" link ="https://kthames.github.io/PasswordGenerator/" image={passwordgenerator}/>
          <Project title="Note Taker" link="https://kthames.github.io/NoteTaker/" image={notetaker}/>
          <div
            className="flex justify-center text-center items-center p-10 bg-primary
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            <p>VISIT MY GITHUB </p>
            <a
          className="hover:opacity-50 transition duration-500 mt-3 relative pr-5 pl-5"
          href="https://github.com/kthames"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="github-link" src={github} />
          </a>
            

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;