import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, CheckCircle2 } from "lucide-react";

const Certifications = () => {
  const achievements = [
    { title: "£500M+ Contract Risk Model & 50+ Hrs Saved Weekly", issuer: "Accenture", year: "2022 – 2026", icon: <Award className="w-8 h-8" />, gradient: "from-blue-500 to-cyan-500" },
    { title: "1M+ Daily Records Evaluated for Fraud Anomalies", issuer: "Accenture", year: "2022 – 2026", icon: <Award className="w-8 h-8" />, gradient: "from-green-500 to-emerald-500" },
    { title: "15-20% Precision Lift in ML Detection (Isolation Forest)", issuer: "ViwSecurity", year: "2019 – 2021", icon: <Award className="w-8 h-8" />, gradient: "from-purple-500 to-pink-500" },
    { title: "Automated Detection Across 10K+ Transactions & 50+ Breaches", issuer: "Accenture", year: "2022 – 2026", icon: <Award className="w-8 h-8" />, gradient: "from-orange-500 to-red-500" }
  ];

  const certificationsList = [
    "Microsoft PL-300 (Power BI)",
    "Google Cloud ML Engineer",
    "AWS AI Practitioner",
    "IBM RAG & Agentic AI",
    "Alteryx Designer Core",
    "HackerRank Advanced SQL",
    "ISACA CISA"
  ];

  return (
    <section id="certifications" className="py-24 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Key Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Measurable impact and quantifiable outcomes delivered across risk analytics and internal audit.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievements.map((item, index) => (
            <Card key={index} className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all group overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-lg group-hover:scale-110 transition-transform`}>{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">{item.issuer}</Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="w-3 h-3" />{item.year}</div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-colors">{item.title}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Professional <span className="text-gradient">Certifications</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {certificationsList.map((cert, index) => (
              <Badge key={index} variant="secondary" className="text-sm px-4 py-2 border border-primary/20 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
