import Image from "next/image";
import bird from '@/public/bird.png'
import Link from "next/link";

export default function LandingPage() {
  return (
    <section className="w-screen h-screen flex justify-center items-center bg-gradient-to-b from-indigo-700 to-yellow-400">
      <Link href="/home">
        <Image 
          src={bird}
          alt="Enter Website"
          width={500}
          height={500}
          className="cursor-pointer transition-transform duration-300 hover:scale-105"
          priority
        />
      </Link>
    </section>
  )
}