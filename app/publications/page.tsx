import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Calendar, Download } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Publications and Policy Submissions | National Canadian Youth Council",
  description:
    "Access policy documents, consultation reports, and government submissions by the National Canadian Youth Council on youth rights and children's rights in Canada.",
  keywords:
    "youth policy Canada, UNCRC submissions, children's rights policy, youth advocacy documents, National Canadian Youth Council publications",
}

export default function PublicationsPage() {
  const publications = [
    {
      title: "Submission to Federal Government on Youth Mental Health Services",
      date: "January 2025",
      summary:
        "Comprehensive policy brief outlining recommendations for improving mental health service accessibility for Canadian youth, based on consultation findings.",
      status: "published",
      category: "Federal Submission",
    },
    {
      title: "Youth Rights Awareness Report 2024",
      date: "December 2024",
      summary:
        "Annual report examining awareness levels of the UN Convention on the Rights of the Child among Canadian youth aged 10-19.",
      status: "published",
      category: "Research Report",
    },
    {
      title: "Provincial Education Policy Consultation Report",
      date: "November 2024",
      summary: "Summary of youth-led consultations on education rights and recommendations for provincial governments.",
      status: "published",
      category: "Provincial Submission",
    },
    {
      title: "Municipal Youth Engagement Best Practices Guide",
      date: "October 2024",
      summary:
        "Resource document for municipal governments on engaging youth in policy development and decision-making processes.",
      status: "published",
      category: "Policy Guide",
    },
    {
      title: "UNCRC Implementation Progress Review",
      date: "In Progress",
      summary:
        "Comprehensive review of Canada's progress in implementing the UN Convention on the Rights of the Child, with youth perspectives.",
      status: "in-progress",
      category: "Research Report",
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Publications and Policy Submissions
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Explore our policy documents, consultation reports, and submissions to municipal, provincial, and
                federal governments.
              </p>
            </div>
          </div>
        </section>

        {/* Publications List */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 max-w-5xl mx-auto">
              {publications.map((pub, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <CardTitle className="text-2xl flex-1">{pub.title}</CardTitle>
                        <Badge
                          className={
                            pub.status === "published"
                              ? "bg-[#1a2c4e] hover:bg-[#1a2c4e]/90"
                              : "bg-[#d32f2f] hover:bg-[#b71c1c]"
                          }
                        >
                          {pub.status === "published" ? "Published" : "In Progress"}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{pub.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          <span>{pub.category}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">{pub.summary}</p>
                    {pub.status === "published" && (
                      <Button asChild className="bg-[#1a2c4e] hover:bg-[#2a4a6f]">
                        <a href={`mailto:theNCYCouncil@gmail.com?subject=Request for ${pub.title}`}>
                          <Download className="h-4 w-4 mr-2" />
                          Request Document
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 md:py-20 bg-[#f5f7fa]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Access to Publications</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our publications are developed through youth-led consultations and research. For access to full
                documents or to discuss our policy work, please contact us at{" "}
                <a href="mailto:theNCYCouncil@gmail.com" className="text-[#d32f2f] hover:underline">
                  theNCYCouncil@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
