import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bed, Bath, MapPin, Euro, Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RentalsPage() {
  // Mock rental listings
  const rentals = [
    {
      id: 1,
      title: "آپارتمان مدرن در رم",
      location: "رم، ایتالیا",
      price: "۱۲۰ یورو / شب",
      bedrooms: 2,
      bathrooms: 1,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "خانه سنتی در فلورانس",
      location: "فلورانس، ایتالیا",
      price: "۱۵۰ یورو / شب",
      bedrooms: 3,
      bathrooms: 2,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "استودیو در میلان",
      location: "میلان، ایتالیا",
      price: "۹۰ یورو / شب",
      bedrooms: 1,
      bathrooms: 1,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 4,
      title: "ویلا با استخر در ونیز",
      location: "ونیز، ایتالیا",
      price: "۲۵۰ یورو / شب",
      bedrooms: 4,
      bathrooms: 3,
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">اجاره خانه در ایتالیا</h1>
          <p className="text-muted-foreground">خانه‌های اجاره‌ای در شهرهای مختلف ایتالیا را جستجو کنید</p>
        </div>

        <Tabs defaultValue="search">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="search">جستجوی خانه</TabsTrigger>
            <TabsTrigger value="create">ثبت آگهی جدید</TabsTrigger>
          </TabsList>
          <TabsContent value="search" className="space-y-6">
            {/* Search Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="grid gap-4 md:grid-cols-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">شهر</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="انتخاب شهر" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rome">رم</SelectItem>
                        <SelectItem value="milan">میلان</SelectItem>
                        <SelectItem value="florence">فلورانس</SelectItem>
                        <SelectItem value="venice">ونیز</SelectItem>
                        <SelectItem value="naples">ناپل</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">تعداد اتاق خواب</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="انتخاب کنید" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">۱</SelectItem>
                        <SelectItem value="2">۲</SelectItem>
                        <SelectItem value="3">۳</SelectItem>
                        <SelectItem value="4+">۴+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">حداکثر قیمت (یورو)</label>
                    <Input type="number" placeholder="مثلا: ۲۰۰" />
                  </div>
                  <div className="flex items-end">
                    <Button className="w-full">جستجو</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rental Listings */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {rentals.map((rental) => (
                <Card key={rental.id} className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image src={rental.image || "/placeholder.svg"} alt={rental.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>{rental.title}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {rental.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Bed className="h-4 w-4" />
                        <span>{rental.bedrooms} اتاق خواب</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="h-4 w-4" />
                        <span>{rental.bathrooms} حمام</span>
                      </div>
                    </div>
                    <div className="mt-4 text-lg font-bold">
                      <div className="flex items-center gap-1">
                        <Euro className="h-5 w-5" />
                        {rental.price}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/rentals/${rental.id}`} className="w-full">
                      <Button variant="outline" className="w-full">
                        مشاهده جزئیات
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="create" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>ثبت آگهی اجاره خانه</CardTitle>
                <CardDescription>اطلاعات ملک خود را وارد کنید تا آگهی شما منتشر شود</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">عنوان آگهی</label>
                  <Input placeholder="مثال: آپارتمان دو خوابه در مرکز رم" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">شهر</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="انتخاب شهر" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rome">رم</SelectItem>
                        <SelectItem value="milan">میلان</SelectItem>
                        <SelectItem value="florence">فلورانس</SelectItem>
                        <SelectItem value="venice">ونیز</SelectItem>
                        <SelectItem value="naples">ناپل</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">آدرس دقیق</label>
                    <Input placeholder="آدرس کامل ملک" />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">تعداد اتاق خواب</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="انتخاب کنید" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">۱</SelectItem>
                        <SelectItem value="2">۲</SelectItem>
                        <SelectItem value="3">۳</SelectItem>
                        <SelectItem value="4">۴</SelectItem>
                        <SelectItem value="5+">۵+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">تعداد حمام</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="انتخاب کنید" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">۱</SelectItem>
                        <SelectItem value="2">۲</SelectItem>
                        <SelectItem value="3">۳</SelectItem>
                        <SelectItem value="4+">۴+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">متراژ (متر مربع)</label>
                    <Input type="number" placeholder="مثال: ۸۰" />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">قیمت اجاره (یورو)</label>
                    <Input type="number" placeholder="مثال: ۱۰۰" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">نوع اجاره</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="انتخاب کنید" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">روزانه</SelectItem>
                        <SelectItem value="weekly">هفتگی</SelectItem>
                        <SelectItem value="monthly">ماهانه</SelectItem>
                        <SelectItem value="yearly">سالانه</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">توضیحات</label>
                  <textarea
                    className="flex min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="توضیحات کامل در مورد ملک..."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">تصاویر</label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Plus className="w-8 h-8 mb-2 text-muted-foreground" />
                        <p className="mb-2 text-sm text-muted-foreground">
                          <span className="font-semibold">برای آپلود کلیک کنید</span> یا فایل را اینجا رها کنید
                        </p>
                        <p className="text-xs text-muted-foreground">SVG, PNG, JPG یا GIF (حداکثر 10MB)</p>
                      </div>
                      <input id="dropzone-file" type="file" className="hidden" multiple />
                    </label>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">ثبت آگهی</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

