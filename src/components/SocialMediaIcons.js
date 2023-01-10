import Twitter from '../assets/twitter.png'
import Linkedin from '../assets/linkedin.png'

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/emmanuel-mukhebi-4a154314b/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={Linkedin} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/emmanwelmukhebi"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src={Twitter} />
      </a>
    </div>
  )
}

export default SocialMediaIcons
