import { instagram } from "../assets";
import { linkedIn } from "../assets";
import { github } from "../assets";


const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start gap-7">
        <a
          className="hover:opacity-50 transition duration-500 mt-3"
          href="https://www.linkedin.com/in/katherinemthames/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src={linkedIn} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" src={instagram} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500 mt-4"
          href="https://github.com/kthames"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="github-link" src={github} />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;