import { Yeseva_One } from 'next/font/google';
import { Cormorant_Garamond } from 'next/font/google';
import { Manrope } from 'next/font/google';
import './style.css';

const yeseva_one = Yeseva_One({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-yeseva_one',
  weight: ['400'],
})
const cormorant_garamond = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant_garamond',
  weight: ['700'],
})
const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
  weight: ['400'],
})


import { NextPage } from 'next'
import React from 'react'



export default function Layout({ children }: {children: React.ReactNode}){
  return (
    <html lang="en">
      <body className={yeseva_one.variable + ' ' + manrope.variable}>
        {children}
      </body>
    </html>
  )
}

