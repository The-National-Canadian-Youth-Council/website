import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Users, Heart, Briefcase, HandHeart } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Join the National Canadian Youth Council",
  description:
    "Join the National Canadian Youth Council as a member organization or individual volunteer. Youth-led and youth-serving organizations welcome, along with board members and volunteers.",
  keywords:
    "join youth council Canada, youth advocacy Canada, youth organizations Canada, become a member NCYC, youth volunteers Canada, youth board members",
}

export default function JoinPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1a2c4e] to-[#2a4a6f] text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Join the National Canadian Youth Council
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Be part of a youth-led movement shaping the future of youth rights across Canada.
              </p>
            </div>
          </div>
        </section>

        {/* Member Organizations Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">For Organizations</h2>
                <p className="text-lg text-muted-foreground">
                  Youth-led and youth-serving organizations are invited to become member organizations
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <Users className="h-10 w-10 text-[#d32f2f]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Youth-Led Organizations</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Organizations founded and run by young people, working on youth rights, advocacy, or social
                      innovation across Canada.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <Heart className="h-10 w-10 text-[#1a2c4e]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Youth-Serving Organizations</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Organizations that work with youth, providing services, support, or advocacy for children's and
                      youth rights in Canada.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 text-center">
                <Button asChild size="lg" className="bg-[#1a2c4e] hover:bg-[#2a4a6f]">
                  <a href="mailto:theNCYCouncil@gmail.com?subject=Organization Membership Inquiry">
                    <Mail className="mr-2 h-5 w-5" />
                    Apply as an Organization
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Individual Participation Section */}
        <section className="py-16 md:py-20 bg-[#f5f7fa]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">For Individuals</h2>
                <p className="text-lg text-muted-foreground">Join us as a board member or volunteer</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <Briefcase className="h-10 w-10 text-[#d32f2f]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Board Members</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Join our board to help guide the strategic direction of the National Canadian Youth Council and
                      advance youth rights at the national level.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <HandHeart className="h-10 w-10 text-[#1a2c4e]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Volunteers</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Contribute your skills and passion to our consultations, research, policy work, and youth
                      engagement initiatives across Canada.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 text-center">
                <Button asChild size="lg" className="bg-[#d32f2f] hover:bg-[#b71c1c]">
                  <a href="mailto:theNCYCouncil@gmail.com?subject=Individual Participation Inquiry">
                    <Mail className="mr-2 h-5 w-5" />
                    Join as an Individual
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Join?</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Collaborate on National Initiatives</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Work with youth leaders and organizations across Canada on projects advancing children's and youth
                      rights.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Influence Policy Development</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Participate in consultations and contribute to policy submissions at municipal, provincial, and
                      federal levels.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Build Your Network</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Connect with passionate youth advocates, organizations, and leaders from across the country.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Advance Youth Rights</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Contribute to ensuring Canadian youth understand and can exercise their rights under the UN
                      Convention on the Rights of the Child.
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
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Involved?</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                To join the National Canadian Youth Council or learn more about membership, reach out to us. We welcome
                organizations and individuals from all provinces and territories.
              </p>
              <p className="text-sm text-white/70">theNCYCouncil@gmail.com</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
