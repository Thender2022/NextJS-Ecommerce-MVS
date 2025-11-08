"use client"

import Image from "next/image";
import Link from "next/link";
import bird from "@/public/bird.png"
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useCartStore } from "@/store/cart-store";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";


export default function Nav() {
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const { items } = useCartStore();
    const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileOpen(false)
            }
        }

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize);

    }, [])

    return (
        <nav className="">
            <div id="nav-items" className="flex justify-content items-center justify-between bg-linear-to-b from-indigo-700 to-white pr-[50px] pl-[50px] h-[175px]">
                <div>
                    <Link href="/home">
                        <Image
                            src={bird}
                            alt="Enter Website"
                            width={120}
                        />
                    </Link>
                </div>
                <div className="flex gap-10 font-bold text-2xl transition-colors duration-300">
                    <Link href="/home" className="outlined-text">Home</Link>
                    <Link href="/services" className="outlined-text">Services</Link>
                    <Link href="/vision" className="outlined-text"> Vision</Link>
                </div>
                <div className="block hover:text-blue-600">
                    <Link href="/checkout" className="relative">
                        <ShoppingCartIcon className="h-6 w-6" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white"> 
                                {cartCount} 
                            </span>
                        )}
                    </Link>
                    <Button
                        variant="ghost"
                        className="md:hidden" 
                        onClick={() => setMobileOpen((prev) => !prev)}>
                            {mobileOpen ? (
                                <XMarkIcon className="h-6 w-6" />
                            ) : (
                                <Bars3Icon className="h-6 w-6" /> 
                            )}
                        
                    </Button>


                </div>
            </div>
            {mobileOpen && (
                <nav className="md:hidden bg-white shadow-md">
                    <ul className="flex flex-col p-4 space-y-2">
                        <li>
                            <Link href="/" className="block hover:text-blue-600">Home</Link>
                        </li>
                        <li>
                            <Link href="/services" className="block hover:text-blue-600">Services</Link>
                        </li>
                        <li>
                            <Link href="/checkout" className="block hover:text-blue-600">Checkout</Link>
                        </li>
                    </ul>
                </nav> 
            )}
        </nav>
    )
}