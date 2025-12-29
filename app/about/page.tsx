import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the National Canadian Youth Council (NCYC), a youth-led platform advancing children's and youth rights across Canada. Discover our mission, vision, and commitment to the UN Convention on the Rights of the Child.",
  keywords:
    "about NCYC, National Canadian Youth Council mission, youth rights advocacy, UNCRC Canada, Adil Mukhi, Dr. Interested, youth leadership",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1a2c4e] to-[#2a4a6f] text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">About NCYC</h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                A youth-led national platform advancing children's and youth rights across Canada
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Mission</h2>
              <Card className="border-2">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-center">
                    The National Canadian Youth Council (NCYC) brings together young founders, organizers, and social
                    innovators to advance children's and youth rights across Canada through the UN Convention on the
                    Rights of the Child. We ensure youth voices are heard in policy development and decision-making at
                    all levels of government.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16 md:py-20 bg-[#f5f7fa]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What We Do</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Youth Consultations</h3>
                    <p className="text-muted-foreground">
                      We conduct consultations with Canadian youth to gather perspectives on policies and issues
                      affecting young people nationwide.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Policy Advocacy</h3>
                    <p className="text-muted-foreground">
                      We submit evidence-based policy recommendations to municipal, provincial, and federal governments.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Rights Education</h3>
                    <p className="text-muted-foreground">
                      We work to ensure all Canadian youth understand their rights under the UN Convention on the Rights
                      of the Child.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">National Collaboration</h3>
                    <p className="text-muted-foreground">
                      We bring together youth-led and youth-serving organizations to collaborate on advancing youth
                      rights across Canada.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <Image
                src="/images/colored-logo.png"
                alt="National Canadian Youth Council - Youth voices shaping youth rights"
                width={400}
                height={400}
                className="mx-auto mb-6"
              />
              <p className="text-lg text-muted-foreground">Youth voices shaping youth rights</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
