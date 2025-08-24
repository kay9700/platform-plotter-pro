import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Code2, 
  Database, 
  Brain, 
  BarChart3, 
  GitBranch,
  Settings,
  Zap
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Salesforce Platform",
      icon: <Cloud className="w-8 h-8 text-primary" />,
      skills: ["Apex", "Lightning Components", "Flow Builder", "Process Builder", "SOQL/SOSL", "Triggers", "Test Classes"],
      description: "Expert in Salesforce development with 5+ years of experience building scalable CRM solutions."
    },
    {
      title: "Development & Integration",
      icon: <Code2 className="w-8 h-8 text-primary" />,
      skills: ["REST/SOAP APIs", "JavaScript", "LWC", "Visualforce", "Integration Patterns", "OAuth", "JWT"],
      description: "Full-stack development skills with focus on seamless system integrations."
    },
    {
      title: "Data & Analytics",
      icon: <Database className="w-8 h-8 text-primary" />,
      skills: ["Data Modeling", "ETL Processes", "Salesforce Reports", "Dashboards", "Data Loader", "Workbench"],
      description: "Advanced data management and visualization capabilities across multiple platforms."
    },
    {
      title: "Machine Learning",
      icon: <Brain className="w-8 h-8 text-primary" />,
      skills: ["Python", "Scikit-learn", "Pandas", "NumPy", "TensorFlow", "Predictive Analytics"],
      description: "Building intelligent models for business insights and automation."
    },
    {
      title: "Tools & DevOps",
      icon: <Settings className="w-8 h-8 text-primary" />,
      skills: ["VS Code", "Salesforce CLI", "Git", "Jenkins", "Docker", "Postman", "Workbench"],
      description: "Modern development tools and DevOps practices for efficient delivery."
    },
    {
      title: "Certifications",
      icon: <Zap className="w-8 h-8 text-primary" />,
      skills: ["Platform Developer I", "Admin", "App Builder", "Integration Architecture", "Data Architecture"],
      description: "Multiple Salesforce certifications demonstrating platform expertise."
    }
  ];

  return (
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skills across Salesforce ecosystem, data science, and modern development practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card-gradient border-0 shadow-soft hover:shadow-strong transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-accent rounded-xl mr-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  {category.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {category.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary" 
                    className="bg-secondary/50 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;