import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { api, bootstrap, css, expressjs, github, githubS, handlebars, heroku, html, javascript, matlab, mongoDb, mySQL, nodeJs, react, tailwind } from "../assets";




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
            <img alt="api-link" src={api} />
          </a>
          <a
          className={hoverClass}
          href="https://getbootstrap.com/"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="bootstrap-link" src={bootstrap} />
          </a>
          <a
          className={hoverClass}
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="css-link" src={css} />
          </a>
  
          {/* ROW 2 */}
          <a
          className = {hoverClass}
          href="https://expressjs.com/"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="express-link" src={expressjs} />
          </a>
          <a
          className={hoverClass}
          href="https://github.com/kthames"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="github-link" src={githubS} />
          </a>
          <a
          className={hoverClass}
          href="https://handlebarsjs.com/guide/#what-is-handlebars"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="handlebars-link" src={handlebars} />
          </a>
       
          {/* ROW 3 */}
          <a
          className = {hoverClass}
          href="https://devcenter.heroku.com/"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="heroku-link" src={heroku} />
          </a>
          <a
          className={hoverClass}
          href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="html-link" src={html} />
          </a>
          <a
          className={hoverClass}
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="javascript-link" src={javascript} />
          </a>
          {/* ROW 3 */}
          <a
          className = {hoverClass}
          href="https://www.mathworks.com/products/matlab.html"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="matlab-link" src={matlab} />
          </a>
          <a
          className={hoverClass}
          href="https://www.mongodb.com/"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="mongodb-link" src={mongoDb} />
          </a>
          <a
          className={hoverClass}
          href="https://www.mysql.com/"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="mysql-link" src={mySQL} />
          </a>
          {/* ROW 3 */}
          <a
          className = {hoverClass}
          href="https://nodejs.org/en"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="nodejs-link" src={nodeJs} />
          </a>
          <a
          className={hoverClass}
          href="https://react.dev/"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="react-link" src={react} />
          </a>
          <a
          className={hoverClass}
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noreferrer"
          >
            <img alt="tailwind-link" src={tailwind} />
          </a>
        </motion.div>
        
      </div>
    </section>
  );
};

export default MySkills;

