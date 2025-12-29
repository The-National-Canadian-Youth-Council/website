import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Instagram, MapPin } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the National Canadian Youth Council. Email us at theNCYCouncil@gmail.com or follow us on Instagram @ncycouncil. Led by Chair Adil Mukhi.",
  keywords:
    "contact NCYC, National Canadian Youth Council contact, youth rights Canada contact, theNCYCouncil@gmail.com, Adil Mukhi contact",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1a2c4e] to-[#2a4a6f] text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Contact Us</h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Get in touch with the National Canadian Youth Council
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto">
              <Card className="border-2">
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-center">Reach Out</h2>
                    <p className="text-center text-muted-foreground mb-8">
                      Whether you're interested in joining, collaborating, or learning more about our work, we'd love to
                      hear from you.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-[#f5f7fa]">
                      <Mail className="h-6 w-6 text-[#d32f2f] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a href="mailto:theNCYCouncil@gmail.com" className="text-[#1a2c4e] hover:underline break-all">
                          theNCYCouncil@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-[#f5f7fa]">
                      <Instagram className="h-6 w-6 text-[#d32f2f] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Instagram</h3>
                        <a
                          href="https://www.instagram.com/ncycouncil/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#1a2c4e] hover:underline"
                        >
                          @ncycouncil
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-[#f5f7fa]">
                      <MapPin className="h-6 w-6 text-[#d32f2f] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Location</h3>
                        <p className="text-muted-foreground">Canada</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button asChild size="lg" className="w-full bg-[#d32f2f] hover:bg-[#b71c1c]">
                      <a href="mailto:theNCYCouncil@gmail.com">
                        <Mail className="mr-2 h-5 w-5" />
                        Send us an email
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
