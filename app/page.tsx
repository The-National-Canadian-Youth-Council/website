import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Users, Globe, FileText, Heart } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a2c4e] via-[#203b5f] to-[#2a4a6f] text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              Youth voices shaping youth rights
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto">
              Nearly 4 million youth aged 10 to 19 live in Canada. Many are unaware of their rights under the UN
              Convention on the Rights of the Child. We're changing that.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button asChild size="lg" className="bg-[#d32f2f] hover:bg-[#b71c1c] text-white px-8">
                <Link href="/join">
                  Join Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/events">View Events</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/publications">Publications</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-balance">
              About National Canadian Youth Council
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground text-center max-w-4xl mx-auto">
              The National Canadian Youth Council is a youth-led national platform bringing together young founders,
              organizers, and social innovators to collaborate on projects, host consultations, and support government
              action advancing children's and youth rights across Canada.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-20 bg-[#f5f7fa]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-none shadow-sm">
              <CardContent className="pt-12 pb-12">
                <div className="text-5xl md:text-6xl font-bold text-[#1a2c4e] mb-4">4M+</div>
                <p className="text-lg text-muted-foreground">Youth in Canada aged 10-19</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-sm">
              <CardContent className="pt-12 pb-12">
                <div className="text-5xl md:text-6xl font-bold text-[#d32f2f] mb-4">National</div>
                <p className="text-lg text-muted-foreground">Youth-led council</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-sm">
              <CardContent className="pt-12 pb-12">
                <div className="text-5xl md:text-6xl font-bold text-[#1a2c4e] mb-4">Canada-wide</div>
                <p className="text-lg text-muted-foreground">UNCRC focused advocacy</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Affiliations Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Affiliations</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Heart className="h-8 w-8 text-[#d32f2f] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Member of Imagine Canada</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The National Canadian Youth Council is a proud member of Imagine Canada, joining a network of
                      organizations committed to building a stronger charitable sector.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Globe className="h-8 w-8 text-[#1a2c4e] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Registered Civil Society Organization with UN ECOSOC</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We are registered as a Civil Society Organization with the United Nations Economic and Social
                      Council, enabling us to participate in international advocacy for youth rights.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Navigation */}
      <section className="py-16 md:py-24 bg-[#1a2c4e] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link href="/events" className="group">
              <Card className="h-full transition-all hover:shadow-xl hover:-translate-y-1 border-none bg-white">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-[#d32f2f]/10 rounded-full">
                      <Users className="h-8 w-8 text-[#d32f2f]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Events</h3>
                  <p className="text-muted-foreground">Join our consultations and discussions</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/members" className="group">
              <Card className="h-full transition-all hover:shadow-xl hover:-translate-y-1 border-none bg-white">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-[#1a2c4e]/10 rounded-full">
                      <Heart className="h-8 w-8 text-[#1a2c4e]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Members</h3>
                  <p className="text-muted-foreground">Meet our leadership and partners</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/publications" className="group">
              <Card className="h-full transition-all hover:shadow-xl hover:-translate-y-1 border-none bg-white">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-[#d32f2f]/10 rounded-full">
                      <FileText className="h-8 w-8 text-[#d32f2f]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Publications</h3>
                  <p className="text-muted-foreground">Read our policy work and reports</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/join" className="group">
              <Card className="h-full transition-all hover:shadow-xl hover:-translate-y-1 border-none bg-white">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-[#1a2c4e]/10 rounded-full">
                      <ArrowRight className="h-8 w-8 text-[#1a2c4e]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Join Us</h3>
                  <p className="text-muted-foreground">Become part of our network</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
