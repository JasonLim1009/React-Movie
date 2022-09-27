import React from 'react'
import { QrCodeIcon, MagnifyingGlassPlusIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import BasicMenu from './BasicMenu'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header>
            <div className="flex items-center space-x-2 md:space-x-10">
                <img
                    src="https://rb.gy/ulxxee"
                    width={100}
                    height={100}
                    className="cursor-pointer object-contain"
                />

                <BasicMenu />
                
                <ul className="hidden space-x-4 md:flex">
                    <li className="headerLink cursor-default font-semibold text-white hover:text-white">
                        Home
                    </li>
                    <li className="headerLink">TV Shows</li>
                    <li className="headerLink">Movies</li>
                    <li className="headerLink">New & Popular</li>
                    <li className="headerLink">My List</li>
                </ul>
            </div>
            <div className="flex items-center space-x-4 text-sm font-light">
                <MagnifyingGlassPlusIcon className="sm hidden h-6 w-6 sm:inline" />
                <p className="hidden lg:inline">Wallets</p>
                <QrCodeIcon className="h-6 w-6" />
                <Link href="/account">
                    <img
                        src="https://vercel.com/api/www/avatar/?u=jasonlim1009&s=64"
                        alt=""
                        className="cursor-pointer rounded rounded-full"
                    />
                </Link>
            </div>
        </header>
    )
}

export default Header