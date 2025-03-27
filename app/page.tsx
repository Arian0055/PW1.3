import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, MapPin, TrendingUp } from "lucide-react"

export default function Home() {
  // Mock news data
  const news = [
    {
      id: 1,
      title: "راهنمای سفر به رم در تابستان",
      description: "بهترین مکان‌ها برای بازدید در رم در فصل تابستان",
      date: "۱۰ خرداد ۱۴۰۳",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "بهترین رستوران‌های ایتالیایی در میلان",
      description: "معرفی ۱۰ رستوران برتر ایتالیایی در شهر میلان",
      date: "۵ خرداد ۱۴۰۳",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "تغییرات قوانین ویزای ایتالیا",
      description: "آخرین تغییرات در قوانین ویزای توریستی ایتالیا",
      date: "۱ خرداد ۱۴۰۳",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <div className="flex flex-col gap-10 py-8">
      {/* Hero Section */}
      <section className="container px-4 md:px-6">
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 p-4 md:p-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  راهنمای سفر به ایتالیا به زبان فارسی
                </h1>
                <p className="text-muted-foreground md:text-xl">همه چیز درباره سفر، اقامت، کار و زندگی در ایتالیا</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/rentals">
                  <Button size="lg">جستجوی خانه</Button>
                </Link>
                <Link href="/exchange">
                  <Button size="lg" variant="outline">
                    نرخ ارز
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative flex items-center justify-center p-4 md:p-6">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="تصویر ایتالیا"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">آخرین اخبار</h2>
            <Link href="/news">
              <Button variant="link">مشاهده همه</Button>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    {item.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/news/${item.id}`}>
                    <Button variant="outline">ادامه مطلب</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tight">خدمات ما</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  اجاره خانه
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>جستجو و رزرو آپارتمان و خانه در شهرهای مختلف ایتالیا</p>
              </CardContent>
              <CardFooter>
                <Link href="/rentals">
                  <Button>جستجوی خانه</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  تبدیل ارز
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>نرخ لحظه‌ای یورو و دلار به ریال ایران</p>
              </CardContent>
              <CardFooter>
                <Link href="/exchange">
                  <Button>مشاهده نرخ ارز</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  خدمات کسب و کار
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>راهنمای ثبت شرکت و خدمات تجاری در ایتالیا</p>
              </CardContent>
              <CardFooter>
                <Link href="/business">
                  <Button>اطلاعات بیشتر</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

