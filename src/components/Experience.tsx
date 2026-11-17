import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Building2, MapPin, Calendar, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Accenture",
      position: "Data Analyst, AI & Analytics (Internal Audit)",
      location: "India",
      duration: "Dec 2022 – Oct 2026",
      logo: "A",
      logoImage: "/accenture-logo.svg",
      achievements: [
        { impact: "Anomaly Detection at Scale", description: "Automated anomaly detection across 10K+ employee recognition transactions, identifying 50+ conflicts of interest and policy breaches to strengthen compliance monitoring." },
        { impact: "£500M+ Contract Portfolio", description: "Re-engineered a financial risk model using multi-source Power BI data across a £500M+ contract portfolio, reducing audit selection from days to minutes and saving 50+ hours weekly." },
        { impact: "IT Risk Scoring Across 20+ BUs", description: "Managed SQL-based IT risk scoring across 20+ business units and platforms, identifying operational vulnerabilities to support risk-based annual audit planning." },
        { impact: "1M+ Transaction Pipeline", description: "Deployed full-population testing pipelines across 1M+ procurement, vendor, and HR transactions spanning 10+ operational systems, eliminating sampling risk and strengthening audit coverage." },
        { impact: "Risk Assessment Modeling", description: "Developed Python and SQL analytical models during time-sensitive audits, identifying non-compliance trends and supporting risk assessments and audit findings." },
      ],
      technologies: ["Python", "SQL", "Power BI", "Anomaly Detection", "Risk Analytics", "Data Governance"]
    },
    {
      company: "ViwSecurity",
      position: "Data Analytics & ML Consultant",
      location: "India",
      duration: "Dec 2019 – Dec 2021",
      logo: "V",
      logoImage: "/viwsecurity-logo.svg",
      achievements: [
        { impact: "15-20% Precision Lift", description: "Analyzed 50K+ security and operational logs using SQL and Python; developed Isolation Forest and Random Forest models, improving detection precision by 15-20% and reducing false-positive reviews." },
        { impact: "40% Manual Effort Reduction", description: "Developed 5+ Power BI dashboards tracking security metrics, service KPIs, and operational trends, reducing manual reporting effort by 40% while managing 5+ concurrent analytics workstreams." },
        { impact: "ISACA-Aligned Governance", description: "Implemented data quality and validation checks to ensure reliable, ISACA-aligned reporting, collaborating with the cybersecurity lead to translate analytical findings into actionable recommendations." },
        { impact: "Cross-Stream Analytics", description: "Managed analytics delivery across 5+ concurrent workstreams, collaborating with the cybersecurity lead to translate technical findings into actionable recommendations aligned with service priorities." },
      ],
      technologies: ["Python", "SQL", "Random Forest", "Isolation Forest", "Power BI", "Cybersecurity Analytics"]
    },
    {
      company: "WNS Global Services",
      position: "Business Associate",
      location: "India",
      duration: "Dec 2017 – Oct 2019",
      logo: "W",
      logoImage: "/wns-logo.svg",
      achievements: [
        { impact: "AML/KYC Regulatory Risk", description: "Analyzed 10K+ customer records for AML/KYC compliance, identifying regulatory risks across a £1M+ client onboarding portfolio." },
        { impact: "500+ Fleet Safety Compliance", description: "Validated 25+ federal safety compliance categories for a US transport client operating 500+ fleet vehicles, supporting regulatory compliance and operational readiness." },
        { impact: "Multi-Account Audit Reporting", description: "Executed audit compliance reporting across 5+ financial and logistics accounts, supporting consistent documentation and operational governance." },
        { impact: "Workload Sampling Protocols", description: "Applied workload sampling protocols to assess compliance processes and standardise reporting practices across client engagements." },
      ],
      technologies: ["AML/KYC", "Regulatory Compliance", "Audit Reporting", "Process Sampling", "Risk Assessment"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            7 years of proven progression in predictive modelling, anomaly detection, and risk analytics across global firms.
          </p>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg overflow-hidden border border-primary/20 bg-gray-900 flex-shrink-0">
                      <img src={exp.logoImage} alt={`${exp.company} logo`} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-primary font-semibold text-lg"><Building2 className="w-4 h-4" />{exp.company}</div>
                    </div>
                  </div>
                  <div className="flex flex-col lg:items-end gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />{exp.duration}</div>
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4" />{exp.location}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative">
                  <div className="hidden md:block space-y-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex gap-4 p-4 bg-background/50 rounded-lg border border-primary/10">
                        <div className="flex-shrink-0 mt-1"><div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center"><TrendingUp className="w-4 h-4 text-primary" /></div></div>
                        <div className="space-y-2">
                          <div className="text-primary font-semibold text-lg">{achievement.impact}</div>
                          <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="md:hidden">
                    <Carousel opts={{ align: "start", loop: true }} className="w-full">
                      <CarouselContent className="-ml-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <CarouselItem key={achIndex} className="pl-2 basis-full">
                            <div className="flex gap-4 p-4 bg-background/50 rounded-lg border border-primary/10">
                              <div className="flex-shrink-0 mt-1"><div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center"><TrendingUp className="w-4 h-4 text-primary" /></div></div>
                              <div className="space-y-2">
                                <div className="text-primary font-semibold text-lg">{achievement.impact}</div>
                                <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">Skills Used</h4>
                  <div className="flex flex-wrap gap-2">{exp.technologies.map((tech, techIndex) => <Badge key={techIndex} variant="secondary" className="text-xs">{tech}</Badge>)}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
