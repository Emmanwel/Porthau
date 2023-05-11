import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
    <div>
      <footer
        className="w-full border-t-2 border-solid border-dark font-medium text-lg 
      dark:text-light dark:border-light sm:text-base"
      >
        <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 ">
          <span> {new Date().getFullYear()} &copy; All Rights Reserved. </span>
          <div className="flex items-center lg:py-2">
            <Link
              href=""
              className="underline underline-offset-2 dark:text-primaryDark "
            >
              Emmanuel Mukhebi
            </Link>
          </div>

          <Link
            href=""
            target={'_blank'}
            className="underline underline-offset-2"
          >
            Get In Touch
          </Link>
        </Layout>
      </footer>
    </div>
  )
}

export default Footer
