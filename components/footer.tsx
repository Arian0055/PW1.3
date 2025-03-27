import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-right">
          <p className="text-sm text-muted-foreground">
            تمامی حقوق محفوظ است &copy; {new Date().getFullYear()} راهنمای ایتالیا
          </p>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link href="/about" className="hover:text-primary transition-colors">
            درباره ما
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            تماس با ما
          </Link>
          <Link href="/privacy" className="hover:text-primary transition-colors">
            حریم خصوصی
          </Link>
        </div>
      </div>
    </footer>
  )
}

