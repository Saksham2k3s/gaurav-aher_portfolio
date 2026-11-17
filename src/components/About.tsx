import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Brain, Database, ShieldCheck, Wrench } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning",
      skills: ["Anomaly Detection", "Feature Engineering", "SARIMA", "Time Series", "scikit-learn", "Isolation Forest", "Random Forest"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Programming & Data",
      skills: ["Python", "PySpark", "R", "SQL", "DAX", "pandas"]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Cloud & Platforms",
      skills: ["Google BigQuery", "GCP", "Snowflake", "Databricks", "Azure DevOps", "AWS AI"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Reporting & BI",
      skills: ["Power BI", "Tableau Server", "QlikView", "Streamlit", "Advanced Excel"]
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Data Analyst with 7 years of experience delivering predictive modelling, anomaly detection,
            and governance pipelines within internal audit and financial compliance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="card-gradient border-primary/20 shadow-elevated">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Professional Summary</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Data Analyst with 7 years of experience delivering predictive modelling, anomaly detection, and governance pipelines within internal audit and financial compliance. Proficient in Python, SQL, and Power BI for machine learning workflows and automated risk analytics.
                </p>
                <p>
                  Built an end-to-end financial transaction pipeline evaluating over 1 million daily records to isolate fraud anomalies. Re-engineered risk models across £500M+ contract portfolios, saving 50+ hours weekly. Holds an MSc in Business Analytics from the University of Galway.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center">
            Technical <span className="text-gradient">Skills</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary group-hover:text-accent transition-colors">{category.icon}</div>
                    <h4 className="font-bold text-lg">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <h4 className="text-xl font-semibold mb-4 text-muted-foreground">Process & Delivery</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {["Agile & Scrum", "UAT", "Git", "Data Governance", "Root-Cause Analysis", "AML/KYC Compliance", "Internal Audit", "Risk Intelligence"].map((concept, index) => (
              <Badge key={index} variant="outline" className="text-sm px-4 py-2">{concept}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
