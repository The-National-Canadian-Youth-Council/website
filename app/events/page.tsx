import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Mail } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events and Consultations | National Canadian Youth Council",
  description:
    "Join youth consultations, policy discussions, and collaborative sessions hosted by the National Canadian Youth Council. Youth advocacy events across Canada.",
  keywords:
    "youth consultations Canada, youth events Canada, UNCRC consultations, youth policy discussions, National Canadian Youth Council events",
}

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "National Youth Consultation on Education Rights",
      date: "March 2025",
      description:
        "A comprehensive consultation bringing together youth from across Canada to discuss education rights under the UN Convention on the Rights of the Child.",
      status: "upcoming",
    },
    {
      title: "Policy Roundtable: Mental Health Access for Youth",
      date: "April 2025",
      description: "Youth-led discussion on improving mental health services accessibility for young Canadians.",
      status: "upcoming",
    },
  ]

  const pastEvents = [
    {
      title: "Youth Rights Awareness Workshop Series",
      date: "December 2024",
      description:
        "A series of workshops educating youth about their rights under the UNCRC and empowering them to advocate for change.",
      status: "completed",
    },
    {
      title: "Federal Government Consultation on Youth Policy",
      date: "November 2024",
      description:
        "Collaborative session with federal officials to provide youth perspectives on national policy development.",
      status: "completed",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1a2c4e] to-[#2a4a6f] text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Events and Consultations</h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Join us at youth consultations, policy discussions, and collaborative sessions where young voices shape
                the future of youth rights in Canada.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Upcoming Events</h2>
            <div className="grid gap-6 max-w-4xl">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                      <CardTitle className="text-2xl">{event.title}</CardTitle>
                      <Badge className="bg-[#d32f2f] hover:bg-[#b71c1c] w-fit">Upcoming</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-16 md:py-20 bg-[#f5f7fa]">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Past Events</h2>
            <div className="grid gap-6 max-w-4xl">
              {pastEvents.map((event, index) => (
                <Card key={index} className="border hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                      <CardTitle className="text-2xl">{event.title}</CardTitle>
                      <Badge variant="outline" className="w-fit">
                        Completed
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#1a2c4e] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Want to Participate?</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                We encourage youth from across Canada to attend our consultations and events. Get involved and make your
                voice heard.
              </p>
              <Button asChild size="lg" className="bg-[#d32f2f] hover:bg-[#b71c1c]">
                <a href="mailto:thencycouncil@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us to Attend
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
