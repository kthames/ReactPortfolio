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

const hoverClass = "hover:opacity-50 transition duration-500 mt-3 relative pr-5 pl-5";

const MySkills = () => {

  return (
    <section id="skills" className="pt-24 pb-36">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center pb-12"
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
            MY <span className="text-accent">SKILLS</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <a
          className = {hoverClass}
          href="https://en.wikipedia.org/wiki/API"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="api-link" src="../assets/api.png" />
          </a>
          <a
          className={hoverClass}
          href="https://getbootstrap.com/"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="bootstrap-link" src="../assets/bootstrap.png" />
          </a>
          <a
          className={hoverClass}
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="css-link" src="../assets/css.png" />
          </a>
  
          {/* ROW 2 */}
          <a
          className = {hoverClass}
          href="https://expressjs.com/"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="express-link" src="../assets/expressjs.png" />
          </a>
          <a
          className={hoverClass}
          href="https://github.com/kthames"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="github-link" src="../assets/githubS.png" />
          </a>
          <a
          className={hoverClass}
          href="https://handlebarsjs.com/guide/#what-is-handlebars"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="handlebars-link" src="../assets/handlebars.png" />
          </a>
       
          {/* ROW 3 */}
          <a
          className = {hoverClass}
          href="https://devcenter.heroku.com/"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="heroku-link" src="../assets/heroku.png" />
          </a>
          <a
          className={hoverClass}
          href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="html-link" src="../assets/html.png" />
          </a>
          <a
          className={hoverClass}
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="javascript-link" src="../assets/javascript.png" />
          </a>
          {/* ROW 3 */}
          <a
          className = {hoverClass}
          href="https://www.mathworks.com/products/matlab.html"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="matlab-link" src="../assets/matlab.png" />
          </a>
          <a
          className={hoverClass}
          href="https://www.mongodb.com/"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="mongodb-link" src="../assets/mongodb.png" />
          </a>
          <a
          className={hoverClass}
          href="https://www.mysql.com/"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="mysql-link" src="../assets/mysql.png" />
          </a>
          {/* ROW 3 */}
          <a
          className = {hoverClass}
          href="https://nodejs.org/en"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="nodejs-link" src="../assets/nodejs.png" />
          </a>
          <a
          className={hoverClass}
          href="https://react.dev/"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="react-link" src="../assets/react.png" />
          </a>
          <a
          className={hoverClass}
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="tailwind-link" src="../assets/tailwind.png" />
          </a>
        </motion.div>
        
      </div>
    </section>
  );
};

export default MySkills;

// still missing heroku, git, bootstrap, tailwind, node, express, react and mysql could be found in a different sie 