import Link from "next/link"
import Image from "next/image"
import StayConnected from "@/components/ui/landing_page/stay_connected";
export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Village n Life</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Properties
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Experiences
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Discover the Luxury of Village n Life
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Immerse yourself in the natural beauty and unparalleled hospitality of our luxury properties and
                  experiences.
                </p>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
              height="300"
              src="/villagenlife.png"
              width="1270"
            />
          </div>
        </section>
        {/* Featured Properties Section */}
        <section className="flex flex-col items-center justify-center w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:text-gray-200 dark:bg-gray-800">
                Featured Properties
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover Our Luxury Retreats</h2>
              <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore our collection of exclusive properties, each offering unparalleled luxury and breathtaking
                natural surroundings.
              </p>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <img
                  alt="Property"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height={310}
                  src="/pezula.svg"
                  width={550}
                />
                <h3 className="text-lg font-bold">Pezula Nature Retreat</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Luxurious villa nestled among the vineyards, offering breathtaking views and world-class amenities.
                </p>
              </div>
              <div className="grid gap-1">
                <img
                  alt="Property"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="550"
                  src="/thebay.svg"
                  width="550"
                />
                <h3 className="text-lg font-bold">The Bay Hotel</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Beachfront property with private access to the pristine shores, perfect for a relaxing getaway.
                </p>
              </div>
              <div className="grid gap-1">
                <img
                  alt="Property"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="550"
                  src="/campsbay.svg"
                  width="550"
                />
                <h3 className="text-lg font-bold">Camps Bay Retreat</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Rustic yet luxurious mountain retreat, offering stunning views and a range of outdoor activities.
                </p>
              </div>
            </div>
            <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Explore Properties
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Discover Experiences
              </Link>
            </div>
          </div>
        </section>
        {/* Amenities Section */}
        <section className="flex flex-col items-center w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 dark:bg-white">
                Unique Amenities
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight dark:text-gray-200">
                Elevate Your Stay with Our Signature Offerings
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                From private chefs to on-site spas, our luxury properties provide unparalleled experiences to make your
                stay truly unforgettable.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                alt="Amenities"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/amenities.jpg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold dark:text-gray-200">Private Chefs</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Indulge in custom-crafted meals prepared by our world-renowned chefs.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold dark:text-gray-200">Luxury Spa</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Rejuvenate with our on-site spa, offering a range of pampering treatments.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold dark:text-gray-200">Concierge Services</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Let our dedicated concierge team handle all your travel needs.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Book Now Section */}
        <section className="flex flex-col items-center w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Experience the Luxury of Village n Life
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover our collection of exclusive properties and curated experiences that will elevate your next
                getaway.
              </p>
            </div>
            <div className="flex space-x-4 lg:justify-end">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Book Now
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:text-white dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
        {/* Stay Connected Section */}
        <StayConnected />
      </main>
      <footer className="flex flex-col dark:bg-gray-800 gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Village n Life. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 dark:text-gray-400" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 dark:text-gray-400" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}


import React from 'react';

interface MountainIconProps extends React.SVGProps<SVGSVGElement> { }

export function MountainIcon(props: MountainIconProps) {
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
      <path d="M100.159 220.091L186.523 464.977H189.932L276.295 220.091H313.227L206.409 511H170.045L63.2273 220.091H100.159Z" />
      <path d="M521.909 220.091V511H487.818L329.295 282.591H326.455V511H291.227V220.091H325.318L484.409 449.068H487.25V220.091H521.909Z" />
      <path d="M489.227 511V220.091H524.455V479.75H659.682V511H489.227Z" />
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

// interface VnlLogoIcon extends React.SVGProps<SVGSVGElement> { }

// export function VnlLogo(props: VnlLogoIcon) {
//   return (
//     <svg width="733" height="732" viewBox="0 0 733 732" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <ellipse cx="366.5" cy="366" rx="366.5" ry="366" fill="black" />
//       <path d="M100.159 220.091L186.523 464.977H189.932L276.295 220.091H313.227L206.409 511H170.045L63.2273 220.091H100.159Z" fill="white" />
//       <path d="M521.909 220.091V511H487.818L329.295 282.591H326.455V511H291.227V220.091H325.318L484.409 449.068H487.25V220.091H521.909Z" fill="white" />
//       <path d="M489.227 511V220.091H524.455V479.75H659.682V511H489.227Z" fill="white" />
//     </svg>

//   );
// }