"use client"

import Slider from "react-slick"
import { Typewriter } from "react-simple-typewriter"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <Slider {...settings} className="h-full">

        {/* Slide 1 */}
        <div className="relative h-[80vh]">
          <Image src="/images/banner-1.jpeg" alt="Hero 1" fill className="object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              <Typewriter
                words={['Discover Amazing Products', 'Shop Smart with NextShop', 'Your Needs, Our Priority']}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h1>
            <p className="mt-4 text-lg md:text-xl">Find everything you need in one place</p>
            <Link href="/products" className="mt-6 px-6 py-3 bg-[#F07F13] rounded-md font-semibold hover:bg-orange-600">
              Explore
            </Link>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative h-[80vh]">
          <Image src="/images/banner-2.jpeg" alt="Hero 2" fill className="object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              <Typewriter
                words={['Exclusive Deals', 'Unbeatable Discounts', 'Save More, Shop More']}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h1>
            <p className="mt-4 text-lg md:text-xl">Get the best offers on your favorite items</p>
            <Link href="/products" className="mt-6 px-6 py-3 bg-[#F07F13] rounded-md font-semibold hover:bg-orange-600">
              Explore
            </Link>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative h-[80vh]">
          <Image src="/images/banner-3.jpg" alt="Hero 3" fill className="object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              <Typewriter
                words={['Quality You Can Trust', 'Reliable & Affordable', 'NextShop Always With You']}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h1>
            <p className="mt-4 text-lg md:text-xl">Shop confidently with NextShop</p>
            <Link href="/products" className="mt-6 px-6 py-3 bg-[#F07F13] rounded-md font-semibold hover:bg-orange-600">
              Explore
            </Link>
          </div>
        </div>

      </Slider>
    </section>
  )
}

