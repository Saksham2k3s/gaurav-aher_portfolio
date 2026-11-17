import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Brain, Target, Database, BarChart3, X } from "lucide-react";
import { useState } from "react";

type Project = {
  title: string;
  subtitle?: string;
  period?: string;
  description: string;
  icon: JSX.Element;
  technologies: string[];
  category: string;
  gradient: string;
  linkUrl: string;
  hideExternalButton?: boolean;
  imageUrl?: string;
  actionLabel?: string;
  overview?: string;
  problem?: string;
  role?: string;
  solution?: string;
  impact?: string[];
  learnings?: string[];
  media: { images: string[]; videos: string[] };
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Financial Transaction Risk & Anomaly Pipeline",
      subtitle: "Full-Population Transaction Analytics",
      period: "2023 – 2026",
      description: "Built an end-to-end financial transaction pipeline evaluating over 1 million daily records across 10+ operational systems to isolate fraud anomalies and eliminate sampling risk.",
      icon: <Database className="w-8 h-8" />,
      technologies: ["Python", "PySpark", "SQL", "Google BigQuery", "Snowflake", "Anomaly Detection", "Risk Analytics"],
      category: "Featured Work",
      gradient: "from-blue-600 to-cyan-500",
      linkUrl: "https://github.com/gauravyuvrajaher",
      imageUrl: "/Gaurav-Aher_Preview.png",
      actionLabel: "View Pipeline",
      overview: "An automated financial transaction data pipeline evaluating 1M+ daily records spanning procurement, vendor, and HR transactions across 10+ enterprise systems.",
      problem: "Traditional internal audit methodologies relied on sample testing, introducing sampling risk and delayed anomaly detection in high-volume compliance environments.",
      role: "Architected and deployed full-population data pipelines in Python and SQL, engineered automated anomaly detection models, and managed IT risk scoring across 20+ business units.",
      solution: "Leveraged BigQuery, Snowflake, and Python to ingest full transaction populations, applying machine learning algorithms to isolate fraud anomalies and conflicts of interest.",
      impact: [
        "Evaluated 1,000,000+ daily transactions across 10+ operational systems with zero sampling risk",
        "Automated anomaly detection across 10K+ recognition transactions, identifying 50+ policy breaches",
        "Strengthened audit coverage and eliminated manual reconciliation delays"
      ],
      learnings: [
        "Full-population testing provides 100% audit coverage compared to traditional sampling.",
        "Integrating automated anomaly detection upfront prevents compliance breaches before regulatory review."
      ],
      media: { images: ["/Gaurav-Aher_Preview.png"], videos: [] },
    },
    {
      title: "£500M+ Contract Portfolio Risk Modeling",
      subtitle: "Accenture | Internal Audit & Automation",
      period: "2022 – 2026",
      description: "Re-engineered a financial risk model using multi-source Power BI data across a £500M+ contract portfolio, reducing audit selection from days to minutes and saving 50+ hours weekly.",
      icon: <BarChart3 className="w-8 h-8" />,
      technologies: ["Power BI", "DAX", "SQL", "Risk Scoring", "Data Governance", "Process Automation"],
      category: "Case Study",
      gradient: "from-purple-500 to-indigo-600",
      linkUrl: "https://github.com/gauravyuvrajaher",
      hideExternalButton: false,
      actionLabel: "View Case Study",
      imageUrl: "/Gaurav-Aher_Preview.png",
      overview: "A transformative risk intelligence initiative across a £500M+ corporate contract portfolio to automate risk-based audit selection and executive reporting.",
      problem: "Audit selection for high-value contract portfolios was historically a manual, days-long effort prone to human oversight and delayed risk mitigation.",
      role: "Led the re-engineering of the financial risk model using multi-source Power BI data feeds and complex DAX/SQL business logic.",
      solution: "Created interactive risk scoring dashboards with automated data validation, enabling instantaneous identification of high-risk operational entities.",
      impact: [
        "Saved 50+ hours of manual analysis weekly across the analytics team",
        "Reduced audit selection turnaround from days to minutes across £500M+ portfolio",
        "Managed SQL-based risk scoring across 20+ business units and platforms"
      ],
      learnings: [
        "Automated validation rules significantly enhance audit confidence and compliance velocity.",
        "Interactive Power BI dashboards bridge technical risk data with executive decision-making."
      ],
      media: { images: ["/Gaurav-Aher_Preview.png"], videos: [] },
    },
    {
      title: "Cybersecurity Log Anomaly Detection Framework",
      subtitle: "ViwSecurity | ML & Anomaly Detection",
      period: "2019 – 2021",
      description: "Analyzed 50K+ security and operational logs using SQL and Python; developed Isolation Forest and Random Forest models, improving detection precision by 15-20% and reducing false-positive reviews.",
      icon: <Brain className="w-8 h-8" />,
      technologies: ["Python", "scikit-learn", "Isolation Forest", "Random Forest", "SQL", "Log Analytics"],
      category: "Machine Learning",
      gradient: "from-emerald-500 to-teal-500",
      linkUrl: "https://github.com/gauravyuvrajaher",
      actionLabel: "View on GitHub",
      overview: "Applied machine learning algorithms on 50K+ system and operational logs to detect anomalies and policy violations.",
      problem: "High volume of operational logs resulted in alert fatigue and delayed identification of genuine security risks.",
      solution: "Implemented Isolation Forest and Random Forest classification to filter noise and surface critical events.",
      impact: [
        "Improved detection precision by 15-20% and slashed false-positive reviews",
        "Developed 5+ Power BI dashboards tracking security metrics, reducing manual reporting by 40%"
      ],
      media: { images: [], videos: [] },
    },
    {
      title: "AML/KYC Regulatory Risk & Fleet Compliance Engine",
      subtitle: "WNS Global Services | Compliance & Operations",
      period: "2017 – 2019",
      description: "Analyzed 10K+ customer records for AML/KYC compliance across £1M+ onboarding portfolio and validated 25+ federal safety compliance categories for 500+ fleet vehicles.",
      icon: <Target className="w-8 h-8" />,
      technologies: ["AML/KYC", "Regulatory Compliance", "Audit Reporting", "Process Sampling", "Root-Cause Analysis"],
      category: "Compliance & Governance",
      gradient: "from-amber-500 to-orange-500",
      linkUrl: "https://github.com/gauravyuvrajaher",
      actionLabel: "View Details",
      overview: "Comprehensive regulatory risk and audit compliance engine supporting institutional clients.",
      problem: "Manual AML/KYC validation caused onboarding delays and regulatory compliance exposure.",
      solution: "Standardized workload sampling protocols and structured audit reporting across 5+ accounts.",
      impact: [
        "Evaluated 10K+ customer records across £1M+ onboarding portfolio",
        "Validated 25+ federal safety compliance categories for 500+ fleet vehicles"
      ],
      media: { images: [], videos: [] },
    }
  ];

  const getGradientClasses = (gradient: string) => `bg-gradient-to-br ${gradient}`;

  return (
    <section id="projects" className="py-24 px-4 bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Featured projects in predictive modelling, anomaly detection, and enterprise risk analytics pipelines.
          </p>
        </div>

        <div className="relative">
          <Carousel opts={{ align: "start", loop: false, startIndex: 0 }} className="w-full md:px-12">
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => {
                const hasCaseStudy = Boolean(
                  project.overview || project.imageUrl ||
                  project.media.images.length > 0 || project.media.videos.length > 0
                );
                return (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/2">
                  <div className="h-full min-h-[600px]">
                    <Card className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all group overflow-hidden h-full flex flex-col">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${getGradientClasses(project.gradient)} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                          {project.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                            {project.period && <span className="text-xs text-muted-foreground">{project.period}</span>}
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-gradient transition-colors">{project.title}</h3>
                          {project.subtitle && <p className="text-xs md:text-sm text-muted-foreground mt-1">{project.subtitle}</p>}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4 md:space-y-6 flex-grow flex flex-col px-4 md:px-6">
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{project.description}</p>
                      <div className="flex-grow">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Skills Used</h4>
                        <div className="flex flex-wrap gap-2 min-h-[60px]">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3 pt-4 mt-auto">
                        {hasCaseStudy && (
                          <Button variant="secondary" size="sm" className="w-full" onClick={() => setActiveProject(project)}>
                            View Full Case Study
                          </Button>
                        )}
                        {!project.hideExternalButton && (
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <a href={project.linkUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                              <ExternalLink className="w-4 h-4" />
                              {project.actionLabel || "View Project"}
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )})}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-2 lg:-left-4 top-1/2 -translate-y-1/2 h-12 w-12 [&_svg]:h-8 [&_svg]:w-8" />
            <CarouselNext className="hidden md:flex -right-2 lg:-right-4 top-1/2 -translate-y-1/2 h-12 w-12 [&_svg]:h-8 [&_svg]:w-8" />
          </Carousel>
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {projects.map((_, index) => <div key={index} className="w-2 h-2 rounded-full bg-muted-foreground/30" />)}
          </div>
        </div>

        <div className="text-center mt-16">
          <Card className="card-gradient border-primary/20 shadow-elevated max-w-2xl mx-auto">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">
                Interested in <span className="text-gradient">Connecting?</span>
              </h3>
              <p className="text-muted-foreground mb-6 text-center">
                Open to discussions around Data Analytics, Risk Intelligence, Machine Learning pipelines, and Internal Audit roles.
              </p>
              <div className="flex justify-center">
                <Button variant="gradient" size="lg" asChild>
                  <a href="mailto:gauravyuvrajaher@gmail.com">Get In Touch</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {activeProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setActiveProject(null)}>
          <div className="relative w-full max-w-4xl rounded-xl border border-primary/20 bg-background p-4 md:p-6 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="absolute right-2 top-2 md:right-3 md:top-3 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setActiveProject(null)} aria-label="Close">
              <X className="w-5 h-5" />
            </button>
            <div className="space-y-5">
              <div className="pr-10">
                <Badge variant="secondary" className="mb-2 text-xs">{activeProject.category}</Badge>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">{activeProject.title}</h3>
                {activeProject.subtitle && <p className="text-sm text-muted-foreground mt-1">{activeProject.subtitle}</p>}
                {activeProject.period && <p className="text-sm text-muted-foreground mt-1">{activeProject.period}</p>}
              </div>

              {(() => {
                const slides = [
                  ...activeProject.media.images.map((src) => ({ type: "image" as const, src })),
                  ...activeProject.media.videos.map((src) => ({ type: "video" as const, src })),
                  ...(activeProject.imageUrl ? [{ type: "image" as const, src: activeProject.imageUrl }] : []),
                ];
                if (slides.length === 0) return null;
                return (
                  <div className="px-8">
                    <Carousel opts={{ align: "start", loop: slides.length > 1 }} className="w-full">
                      <CarouselContent>
                        {slides.map((slide, index) => (
                          <CarouselItem key={index}>
                            <div className="h-[55vh] max-h-[55vh] flex items-center justify-center">
                              {slide.type === "image" ? (
                                <img src={slide.src} alt={`${activeProject.title} preview ${index + 1}`} className="w-full h-full object-contain rounded-lg" />
                              ) : (
                                <video controls className="w-full h-full object-contain rounded-lg border border-primary/20">
                                  <source src={slide.src} />
                                </video>
                              )}
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {slides.length > 1 && (<><CarouselPrevious className="left-0" /><CarouselNext className="right-0" /></>)}
                    </Carousel>
                  </div>
                );
              })()}

              <p className="text-sm md:text-base text-muted-foreground">{activeProject.description}</p>
              {activeProject.overview && (
                <div className="space-y-3 rounded-lg border border-primary/20 bg-background/60 p-4">
                  {[
                    ["Overview", activeProject.overview],
                    ["The Problem", activeProject.problem],
                    ["My Role", activeProject.role],
                    ["The Solution", activeProject.solution],
                  ].map(([label, text]) => text ? (
                    <div key={label as string}>
                      <h4 className="text-sm font-semibold text-foreground mb-1">{label}</h4>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">{text}</p>
                    </div>
                  ) : null)}
                  {activeProject.impact?.length ? (
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Impact</h4>
                      <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                        {activeProject.impact.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                  ) : null}
                  {activeProject.learnings?.length ? (
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Key Learnings</h4>
                      <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                        {activeProject.learnings.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
