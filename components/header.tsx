"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { UserCircle, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-6">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">منو</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-6">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">
                  صفحه اصلی
                </Link>
                <Link href="/rentals" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">
                  اجاره خانه
                </Link>
                <Link
                  href="/business"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-primary transition-colors"
                >
                  خدمات کسب و کار
                </Link>
                <Link
                  href="/exchange"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-primary transition-colors"
                >
                  تبدیل ارز
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="font-bold text-xl">
            راهنمای ایتالیا
          </Link>
          <nav className="hidden md:flex gap-6 text-sm">
            <Link href="/" className="hover:text-primary transition-colors">
              صفحه اصلی
            </Link>
            <Link href="/rentals" className="hover:text-primary transition-colors">
              اجاره خانه
            </Link>
            <Link href="/business" className="hover:text-primary transition-colors">
              خدمات کسب و کار
            </Link>
            <Link href="/exchange" className="hover:text-primary transition-colors">
              تبدیل ارز
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/login">
            <Button variant="ghost" size="sm" className="gap-1">
              <UserCircle className="h-5 w-5" />
              <span className="hidden md:inline">ورود / ثبت نام</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

