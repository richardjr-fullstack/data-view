'use client'

import Link from 'next/link'

import { useState } from 'react'
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import SignUpModal from './signUp'

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-transparent relative z-40">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5"> 
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/services" className="hover:text-white transition">Services</Link>
          <Link href="/projects" className="hover:text-white transition">Projects</Link>
          <Link href="/experience" className="hover:text-white transition">Experience</Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-8">
          <Link href="/login" className="text-sm/6 font-semibold text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
          <SignUpModal/>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                <Link href="/about" className="hover:text-white transition">About</Link>
                <Link href="/services" className="hover:text-white transition">Services</Link>
                <Link href="/projects" className="hover:text-white transition">Projects</Link>
                <Link href="/experience" className="hover:text-white transition">Experience</Link>
              </div>
              <div className="py-6">
                <Link href="/login" className="text-sm/6 font-semibold text-white">
                  Log in <span aria-hidden="true">&rarr;</span>
                </Link>
                <SignUpModal />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
