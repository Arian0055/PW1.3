import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, FileText, Briefcase, Users, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BusinessPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">خدمات کسب و کار در ایتالیا</h1>
          <p className="text-muted-foreground">راهنمای جامع برای راه‌اندازی و مدیریت کسب و کار در ایتالیا</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                ثبت شرکت
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>راهنمای کامل ثبت انواع شرکت در ایتالیا و مراحل قانونی آن</p>
            </CardContent>
            <CardFooter>
              <Link href="/business/register" className="w-full">
                <Button variant="outline" className="w-full">
                  اطلاعات بیشتر
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                مالیات و حسابداری
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>اطلاعات مربوط به سیستم مالیاتی ایتالیا و نحوه حسابداری کسب و کارها</p>
            </CardContent>
            <CardFooter>
              <Link href="/business/tax" className="w-full">
                <Button variant="outline" className="w-full">
                  اطلاعات بیشتر
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                فرصت‌های سرمایه‌گذاری
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>معرفی بهترین فرصت‌های سرمایه‌گذاری در بازار ایتالیا</p>
            </CardContent>
            <CardFooter>
              <Link href="/business/investment" className="w-full">
                <Button variant="outline" className="w-full">
                  اطلاعات بیشتر
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <Tabs defaultValue="register">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="register">ثبت شرکت</TabsTrigger>
            <TabsTrigger value="visa">ویزای کار</TabsTrigger>
            <TabsTrigger value="market">بازار ایتالیا</TabsTrigger>
          </TabsList>
          <TabsContent value="register" className="space-y-6 mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold mb-4">انواع شرکت در ایتالیا</h2>
                <div className="space-y-4">
                  <div className="border p-4 rounded-lg">
                    <h3 className="font-bold">شرکت با مسئولیت محدود (SRL)</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      رایج‌ترین نوع شرکت در ایتالیا با حداقل سرمایه ۱۰,۰۰۰ یورو
                    </p>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <h3 className="font-bold">شرکت سهامی (SPA)</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      مناسب برای کسب و کارهای بزرگ با حداقل سرمایه ۵۰,۰۰۰ یورو
                    </p>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <h3 className="font-bold">شرکت ساده (SNC)</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      بدون نیاز به حداقل سرمایه اما با مسئولیت نامحدود شرکا
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">مراحل ثبت شرکت</h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      ۱
                    </div>
                    <div>
                      <h3 className="font-medium">تهیه اساسنامه</h3>
                      <p className="text-sm text-muted-foreground">تنظیم اساسنامه شرکت توسط وکیل یا دفتر اسناد رسمی</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      ۲
                    </div>
                    <div>
                      <h3 className="font-medium">افتتاح حساب بانکی</h3>
                      <p className="text-sm text-muted-foreground">افتتاح حساب بانکی و واریز سرمایه اولیه</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      ۳
                    </div>
                    <div>
                      <h3 className="font-medium">ثبت در اداره ثبت شرکت‌ها</h3>
                      <p className="text-sm text-muted-foreground">
                        ثبت شرکت در اداره ثبت شرکت‌های ایتالیا (Registro delle Imprese)
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      ۴
                    </div>
                    <div>
                      <h3 className="font-medium">دریافت کد مالیاتی</h3>
                      <p className="text-sm text-muted-foreground">دریافت کد مالیاتی (Codice Fiscale) و شماره VAT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="visa" className="space-y-6 mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold mb-4">ویزای کار و اقامت</h2>
                <p className="mb-4">
                  برای کار و زندگی در ایتالیا، شما به ویزای کار و سپس اقامت نیاز دارید. انواع مختلفی از ویزاهای کار وجود
                  دارد که بسته به شرایط شما متفاوت است.
                </p>
                <div className="space-y-4">
                  <div className="border p-4 rounded-lg">
                    <h3 className="font-bold">ویزای کارآفرینی</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      مناسب برای افرادی که قصد راه‌اندازی کسب و کار در ایتالیا را دارند
                    </p>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <h3 className="font-bold">ویزای کار</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      برای افرادی که پیشنهاد کار از یک شرکت ایتالیایی دارند
                    </p>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <h3 className="font-bold">ویزای خود‌اشتغالی</h3>
                    <p className="text-sm text-muted-foreground mt-2">برای متخصصان مستقل و فریلنسرها</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">مدارک مورد نیاز</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">طرح کسب و کار</h3>
                      <p className="text-sm text-muted-foreground">
                        طرح کسب و کار دقیق با جزئیات مالی و پیش‌بینی‌های آینده
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">اثبات سرمایه</h3>
                      <p className="text-sm text-muted-foreground">
                        مدارک مربوط به سرمایه کافی برای راه‌اندازی و اداره کسب و کار
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">مدارک شخصی</h3>
                      <p className="text-sm text-muted-foreground">پاسپورت، عکس، مدارک تحصیلی و سوابق کاری</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">گواهی عدم سوء پیشینه</h3>
                      <p className="text-sm text-muted-foreground">گواهی عدم سوء پیشینه از کشور مبدا</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">بیمه درمانی</h3>
                      <p className="text-sm text-muted-foreground">مدارک مربوط به بیمه درمانی معتبر</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="market" className="space-y-6 mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold mb-4">بازار ایتالیا</h2>
                <p className="mb-4">
                  ایتالیا با جمعیت بیش از ۶۰ میلیون نفر و اقتصاد قوی، یکی از بازارهای مهم اروپا محسوب می‌شود. صنایع
                  مختلفی در این کشور فعال هستند که فرصت‌های متنوعی را برای کارآفرینان فراهم می‌کند.
                </p>
                <div className="space-y-4">
                  <div className="border p-4 rounded-lg">
                    <h3 className="font-bold">صنعت مد و پوشاک</h3>
                    <p className="text-sm text-muted-foreground mt-2">ایتالیا یکی از قطب‌های اصلی مد جهان است</p>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <h3 className="font-bold">صنعت غذا و نوشیدنی</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      محصولات غذایی ایتالیایی در سراسر جهان محبوب هستند
                    </p>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <h3 className="font-bold">گردشگری</h3>
                    <p className="text-sm text-muted-foreground mt-2">ایتالیا یکی از مقاصد اصلی گردشگری در جهان است</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">آمار اقتصادی</h2>
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium">تولید ناخالص داخلی</h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-muted-foreground">۲.۱ تریلیون یورو</span>
                      <span className="text-sm text-green-600">+۳.۷٪ رشد سالانه</span>
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium">نرخ بیکاری</h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-muted-foreground">۹.۸٪</span>
                      <span className="text-sm text-green-600">-۰.۵٪ نسبت به سال قبل</span>
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium">تورم</h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-muted-foreground">۲.۱٪</span>
                      <span className="text-sm text-red-600">+۰.۳٪ نسبت به سال قبل</span>
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium">سرمایه‌گذاری خارجی</h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-muted-foreground">۲۴ میلیارد یورو</span>
                      <span className="text-sm text-green-600">+۵.۲٪ نسبت به سال قبل</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-medium mb-3">صنایع برتر</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 p-2 border rounded-lg">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">گردشگری</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 border rounded-lg">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">مد و پوشاک</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 border rounded-lg">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">خودروسازی</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 border rounded-lg">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">صنایع غذایی</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-6">مشاوره تخصصی کسب و کار</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">نیاز به مشاوره دارید؟</h3>
              <p className="mb-6">
                تیم متخصص ما آماده ارائه مشاوره در زمینه راه‌اندازی کسب و کار، امور مالیاتی، ویزا و اقامت در ایتالیا است.
              </p>
              <Button>درخواست مشاوره</Button>
            </div>
            <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=300&width=500" alt="مشاوره کسب و کار" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

