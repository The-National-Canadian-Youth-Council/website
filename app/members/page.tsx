import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Globe, Instagram, Linkedin } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Members and Leadership | National Canadian Youth Council",
  description:
    "Meet the leadership and member organizations of the National Canadian Youth Council. Chair Adil Mukhi leads youth advocacy across Canada alongside Dr. Interested.",
  keywords:
    "Adil Mukhi, National Canadian Youth Council members, youth leadership Canada, Dr. Interested, youth organizations Canada, NCYC leadership, Adil Mukhi TEDx, Dr. Interested health",
}

export default function MembersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1a2c4e] to-[#2a4a6f] text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Members and Leadership</h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Meet the dedicated youth leaders and member organizations driving change across Canada.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Leadership</h2>
            <div className="max-w-3xl mx-auto">
              <Card className="overflow-hidden border-2">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src="/images/adilmukhi.jpeg"
                      alt="Adil Mukhi, Chair of National Canadian Youth Council"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="mb-4">
                      <h3 className="text-3xl font-bold mb-2">Adil Mukhi</h3>
                      <p className="text-xl text-[#d32f2f] font-semibold">Chair</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Adil Mukhi is the Chair of the National Canadian Youth Council, bringing passion and dedication to
                      advancing youth rights across Canada. As a youth leader and advocate, Adil works to ensure young
                      voices are heard in policy development and decision-making processes.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button asChild size="sm" variant="outline">
                        <a href="https://adilmukhi.vercel.app/" target="_blank" rel="noopener noreferrer">
                          <Globe className="h-4 w-4 mr-2" />
                          Website
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="outline">
                        <a href="https://www.instagram.com/adilm.0" target="_blank" rel="noopener noreferrer">
                          <Instagram className="h-4 w-4 mr-2" />
                          Instagram
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="outline">
                        <a href="https://www.linkedin.com/in/adil-mukhi" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Member Organizations */}
        <section className="py-16 md:py-20 bg-[#f5f7fa]">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Member Organizations</h2>
            <div className="max-w-5xl mx-auto grid gap-8">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <Image
                        src="/images/drinterested-logo.jpeg"
                        alt="Dr. Interested logo"
                        width={120}
                        height={120}
                        className="h-24 w-auto"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">Dr. Interested</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Dr. Interested is a member organization of the National Canadian Youth Council, contributing to
                        youth-led initiatives and advocacy work. Together, we work towards ensuring all Canadian youth
                        understand and can exercise their rights under the UN Convention on the Rights of the Child.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Button asChild size="sm" variant="outline">
                          <a href="https://www.drinterested.org/" target="_blank" rel="noopener noreferrer">
                            <Globe className="h-4 w-4 mr-2" />
                            Website
                          </a>
                        </Button>
                        <Button asChild size="sm" variant="outline">
                          <a href="https://www.instagram.com/dr.interested/" target="_blank" rel="noopener noreferrer">
                            <Instagram className="h-4 w-4 mr-2" />
                            Instagram
                          </a>
                        </Button>
                        <Button asChild size="sm" variant="outline">
                          <a
                            href="https://www.linkedin.com/company/dr-interested"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin className="h-4 w-4 mr-2" />
                            LinkedIn
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Placeholder for additional members */}
              <Card className="border-2 border-dashed bg-white/50">
                <CardContent className="p-8 text-center">
                  <p className="text-muted-foreground">
                    Additional member organizations will be listed here as they join the council.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-16 md:py-20 bg-[#1a2c4e] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Become a Member Organization</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Youth-led organizations across Canada are invited to join the National Canadian Youth Council and
                collaborate on advancing youth rights.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
