"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeftRight, TrendingUp, TrendingDown } from "lucide-react"

export default function ExchangePage() {
  // Mock exchange rates
  const rates = {
    EUR: {
      IRR: 58000,
      USD: 1.08,
    },
    USD: {
      IRR: 53500,
      EUR: 0.93,
    },
  }

  const [amount, setAmount] = useState<number>(1)
  const [fromCurrency, setFromCurrency] = useState<string>("EUR")
  const [toCurrency, setToCurrency] = useState<string>("IRR")
  const [result, setResult] = useState<number>(0)

  // Calculate exchange rate
  useEffect(() => {
    if (fromCurrency === toCurrency) {
      setResult(amount)
    } else if (fromCurrency === "EUR" && toCurrency === "IRR") {
      setResult(amount * rates.EUR.IRR)
    } else if (fromCurrency === "USD" && toCurrency === "IRR") {
      setResult(amount * rates.USD.IRR)
    } else if (fromCurrency === "EUR" && toCurrency === "USD") {
      setResult(amount * rates.EUR.USD)
    } else if (fromCurrency === "USD" && toCurrency === "EUR") {
      setResult(amount * rates.USD.EUR)
    } else if (fromCurrency === "IRR" && toCurrency === "EUR") {
      setResult(amount / rates.EUR.IRR)
    } else if (fromCurrency === "IRR" && toCurrency === "USD") {
      setResult(amount / rates.USD.IRR)
    }
  }, [amount, fromCurrency, toCurrency])

  // Handle currency swap
  const handleSwap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">تبدیل ارز</h1>
          <p className="text-muted-foreground">نرخ لحظه‌ای یورو و دلار به ریال ایران</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <Card>
              <CardHeader>
                <CardTitle>تبدیل ارز</CardTitle>
                <CardDescription>مقدار و نوع ارز را وارد کنید</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">مقدار</label>
                  <Input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number.parseFloat(e.target.value) || 0)}
                    min={0}
                  />
                </div>
                <div className="grid grid-cols-[1fr,auto,1fr] gap-2 items-end">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">از</label>
                    <Select value={fromCurrency} onValueChange={setFromCurrency}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="EUR">یورو (EUR)</SelectItem>
                        <SelectItem value="USD">دلار (USD)</SelectItem>
                        <SelectItem value="IRR">ریال (IRR)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button variant="ghost" size="icon" onClick={handleSwap} className="mb-0.5">
                    <ArrowLeftRight className="h-4 w-4" />
                  </Button>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">به</label>
                    <Select value={toCurrency} onValueChange={setToCurrency}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="EUR">یورو (EUR)</SelectItem>
                        <SelectItem value="USD">دلار (USD)</SelectItem>
                        <SelectItem value="IRR">ریال (IRR)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">نتیجه تبدیل</div>
                    <div className="text-3xl font-bold mt-2">
                      {result.toLocaleString()} {toCurrency}
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">
                      1 {fromCurrency} ={" "}
                      {fromCurrency === "EUR" && toCurrency === "IRR"
                        ? rates.EUR.IRR.toLocaleString()
                        : fromCurrency === "USD" && toCurrency === "IRR"
                          ? rates.USD.IRR.toLocaleString()
                          : fromCurrency === "EUR" && toCurrency === "USD"
                            ? rates.EUR.USD.toLocaleString()
                            : fromCurrency === "USD" && toCurrency === "EUR"
                              ? rates.USD.EUR.toLocaleString()
                              : fromCurrency === "IRR" && toCurrency === "EUR"
                                ? (1 / rates.EUR.IRR).toFixed(8)
                                : fromCurrency === "IRR" && toCurrency === "USD"
                                  ? (1 / rates.USD.IRR).toFixed(8)
                                  : "1"}{" "}
                      {toCurrency}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-6">
            <Card>
              <CardHeader>
                <CardTitle>نرخ لحظه‌ای ارز</CardTitle>
                <CardDescription>آخرین به‌روزرسانی: امروز {new Date().toLocaleDateString("fa-IR")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Tabs defaultValue="buy">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="buy">نرخ خرید</TabsTrigger>
                    <TabsTrigger value="sell">نرخ فروش</TabsTrigger>
                  </TabsList>
                  <TabsContent value="buy" className="space-y-4 pt-4">
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div className="font-medium">یورو (EUR)</div>
                      <div className="flex items-center gap-1 text-green-600">
                        <TrendingUp className="h-4 w-4" />
                        <span>{(rates.EUR.IRR * 0.97).toLocaleString()} ریال</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div className="font-medium">دلار (USD)</div>
                      <div className="flex items-center gap-1 text-red-600">
                        <TrendingDown className="h-4 w-4" />
                        <span>{(rates.USD.IRR * 0.97).toLocaleString()} ریال</span>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="sell" className="space-y-4 pt-4">
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div className="font-medium">یورو (EUR)</div>
                      <div className="flex items-center gap-1 text-green-600">
                        <TrendingUp className="h-4 w-4" />
                        <span>{rates.EUR.IRR.toLocaleString()} ریال</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div className="font-medium">دلار (USD)</div>
                      <div className="flex items-center gap-1 text-red-600">
                        <TrendingDown className="h-4 w-4" />
                        <span>{rates.USD.IRR.toLocaleString()} ریال</span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="pt-4">
                  <h3 className="font-medium mb-3">تغییرات اخیر</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">یورو (هفته گذشته)</span>
                      <span className="text-green-600">+۲.۵٪</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">دلار (هفته گذشته)</span>
                      <span className="text-red-600">-۱.۲٪</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">یورو (ماه گذشته)</span>
                      <span className="text-green-600">+۵.۸٪</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">دلار (ماه گذشته)</span>
                      <span className="text-green-600">+۳.۱٪</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

