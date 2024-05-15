import Link from "next/link";
import { Button } from "../button";
import { Input } from "../input";

export default function StayConnected(){
  return(
    <section className="flex flex-col items-center bg-gray-100 py-12 md:py-16 lg:py-20 dark:bg-gray-800">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl dark:text-gray-200">Stay Connected</h2>
          <div className="mx-auto max-w-md space-y-4">
            <form className="flex space-x-2">
              <Input className="flex-1 rounded-lg px-3 py-1" placeholder="Enter your email" type="email" />
              <Button type="submit" className="dark:text-gray-200 px-3 dark:bg-gray-200 rounded-lg dark:text-gray-800 hover:bg-gray-300">Subscribe</Button>
            </form>
            <div className="flex justify-center space-x-4">
              <Link className="text-gray-500 hover:text-gray-700 dark:text-gray-200" href="#">
                <FacebookIcon className="h-6 w-6" />
              </Link>
            <Link className="text-gray-500 hover:text-gray-700 dark:text-gray-200" href="#">
                <TwitterIcon className="h-6 w-6" />
              </Link>
            <Link className="text-gray-500 hover:text-gray-700 dark:text-gray-200" href="#">
                <InstagramIcon className="h-6 w-6" />
              </Link>
            <Link className="text-gray-500 hover:text-gray-700 dark:text-gray-200" href="#">
                <LinkedinIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
  )
}

interface FacebookIconProps extends React.SVGProps<SVGSVGElement> {}

function FacebookIcon(props: FacebookIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

interface InstagramIconProps extends React.SVGProps<SVGSVGElement> {}

function InstagramIcon(props: InstagramIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

interface LinkedinIconProps extends React.SVGProps<SVGSVGElement> {}

function LinkedinIcon(props: LinkedinIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


interface TwitterIconProps extends React.SVGProps<SVGSVGElement> {}

export function TwitterIcon(props: TwitterIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
