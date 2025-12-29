import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Heart, Users, FileText, Calendar } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sponsor or Support Us | National Canadian Youth Council",
  description:
    "Support the National Canadian Youth Council. Your sponsorship helps fund youth consultations, advocacy, and policy development for youth rights in Canada.",
  keywords:
    "sponsor youth council, donate to youth advocacy, support UNCRC Canada, fund youth consultations, National Canadian Youth Council donations",
}

export default function SponsorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1a2c4e] to-[#2a4a6f] text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Sponsor or Support Us</h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Your support enables youth-led advocacy and policy development for a better future for all Canadian
                youth.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How Your Support Makes a Difference</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <Users className="h-10 w-10 text-[#d32f2f]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Youth Consultations</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Fund nation-wide consultations that gather youth perspectives on critical issues affecting their
                      rights and wellbeing.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <FileText className="h-10 w-10 text-[#1a2c4e]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Policy Development</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Support research and policy submissions to municipal, provincial, and federal governments.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <Heart className="h-10 w-10 text-[#d32f2f]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Youth Advocacy</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Enable advocacy initiatives that raise awareness about youth rights under the UN Convention on the
                      Rights of the Child.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <Calendar className="h-10 w-10 text-[#1a2c4e]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Events & Programs</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Help organize workshops, roundtables, and collaborative sessions bringing youth leaders together.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Sponsor */}
        <section className="py-16 md:py-20 bg-[#f5f7fa]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Support the National Canadian Youth Council?
              </h2>
              <div className="prose prose-lg max-w-none">
                <Card className="border-2 mb-6">
                  <CardContent className="p-8">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The National Canadian Youth Council is a youth-led platform dedicated to advancing children's and
                      youth rights across Canada. With nearly 4 million youth aged 10-19 in Canada, ensuring they
                      understand and can exercise their rights is critical.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      As a registered Civil Society Organization with UN ECOSOC and a member of Imagine Canada, we work
                      at national and international levels to ensure youth voices are heard in policy development and
                      decision-making.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Your sponsorship or donation directly supports youth consultations, policy research, advocacy
                      campaigns, and collaborative initiatives that create lasting change for Canadian youth.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#1a2c4e] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Make an Impact?</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Whether you're an individual, organization, or corporation, your support can help advance youth rights
                across Canada. Contact us to discuss sponsorship opportunities or make a donation.
              </p>
              <Button asChild size="lg" className="bg-[#d32f2f] hover:bg-[#b71c1c] text-lg px-8">
                <a href="mailto:thencycouncil@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us to Sponsor
                </a>
              </Button>
              <p className="text-sm text-white/70">thencycouncil@gmail.com</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
