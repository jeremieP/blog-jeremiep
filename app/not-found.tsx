'use client' // Use it to avoid being ServerComponent by design (because we need useEffect)

import Link from 'next/link'
import { VT323 } from 'next/font/google'

import { DeadLink } from '../components/DeadLink'
import { useEffect } from 'react'

const VT323Font = VT323({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function NotFound() {
  useEffect(() => {
    const audioRef = new Audio('/static/404/deadlink-sound.mp3')
    setTimeout(async () => {
      try {
        await audioRef.play()
      } catch (e) {
        console.error('Promise : Bad timing for Audio')
      }
    }, 900)
  }, [])

  return (
    <div className="flex items-center flex-col mx-auto w-full px-8">
      <DeadLink />
      <h1 className={`${VT323Font.className} font-bold mt-2 mb-2 text-3xl text-center text-white`}>
        Oops ! You found a dead Link !
      </h1>
      <Link
        href="/"
        className={`animate-pulse ${VT323Font.className} font-bold mb-4 text-3xl text-center text-white`}
      >
        Continue ?
      </Link>
    </div>
  )
}