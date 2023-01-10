import SocialMediaIcons from '../components/SocialMediaIcons'

const Footer = () => {
  return (
    <footer className="h-60 bg-deep-blue pt-5 w-full ">
      <div className="w-11/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            EMMANUEL MUKHEBI
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2022 MUKHEBI. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
