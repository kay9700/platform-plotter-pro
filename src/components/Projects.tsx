import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BarChart3, Database, Cloud, Brain } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Enterprise Sales Automation",
      description: "Complete Salesforce solution with custom objects, automated workflows, and integration with external ERP system. Increased sales team productivity by 40%.",
      image: "🏢",
      technologies: ["Apex", "Lightning Components", "Flow Builder", "REST API", "Integration"],
      category: "Salesforce",
      icon: <Cloud className="w-6 h-6" />,
      features: ["Custom Objects & Fields", "Automated Workflows", "ERP Integration", "Real-time Dashboards"],
      demo: "#",
      github: "#"
    },
    {
      title: "Customer Churn Prediction Model",
      description: "Machine learning model to predict customer churn using Python and scikit-learn. Integrated with Salesforce for real-time scoring and automated retention campaigns.",
      image: "🤖",
      technologies: ["Python", "Scikit-learn", "Pandas", "Salesforce API", "Heroku"],
      category: "Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      features: ["Predictive Analytics", "Real-time Scoring", "Automated Campaigns", "Performance Metrics"],
      demo: "#",
      github: "#"
    },
    {
      title: "Interactive Sales Dashboard",
      description: "Comprehensive analytics dashboard built with Lightning Components and Chart.js. Provides real-time insights into sales performance and team metrics.",
      image: "📊",
      technologies: ["Lightning Web Components", "Chart.js", "SOQL", "Apex", "CSS3"],
      category: "Analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      features: ["Real-time Analytics", "Interactive Charts", "Mobile Responsive", "Custom Metrics"],
      demo: "#",
      github: "#"
    },
    {
      title: "Data Migration Tool",
      description: "Custom ETL solution for migrating legacy CRM data to Salesforce. Handles complex data transformations and maintains data integrity throughout the process.",
      image: "🔄",
      technologies: ["Python", "Pandas", "Salesforce Bulk API", "Data Loader", "CSV Processing"],
      category: "Data Engineering",
      icon: <Database className="w-6 h-6" />,
      features: ["Bulk Data Processing", "Data Validation", "Error Handling", "Progress Tracking"],
      demo: "#",
      github: "#"
    },
    {
      title: "AI-Powered Lead Scoring",
      description: "Intelligent lead scoring system using machine learning algorithms. Analyzes multiple data points to prioritize leads and improve conversion rates.",
      image: "🎯",
      technologies: ["TensorFlow", "Python", "Apex", "Einstein Analytics", "REST API"],
      category: "AI/ML",
      icon: <Brain className="w-6 h-6" />,
      features: ["ML Algorithms", "Real-time Scoring", "A/B Testing", "Performance Analytics"],
      demo: "#",
      github: "#"
    },
    {
      title: "Multi-Org Integration Platform",
      description: "Seamless data synchronization between multiple Salesforce orgs and external systems. Built with scalable architecture and robust error handling.",
      image: "🔗",
      technologies: ["Apex", "Platform Events", "Mulesoft", "REST API", "OAuth 2.0"],
      category: "Integration",
      icon: <Cloud className="w-6 h-6" />,
      features: ["Multi-Org Sync", "Event-Driven Architecture", "Error Recovery", "Monitoring Dashboard"],
      demo: "#",
      github: "#"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Salesforce": "bg-primary text-primary-foreground",
      "Machine Learning": "bg-purple-500 text-white",
      "Analytics": "bg-green-500 text-white",
      "Data Engineering": "bg-blue-500 text-white",
      "AI/ML": "bg-pink-500 text-white",
      "Integration": "bg-orange-500 text-white"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500 text-white";
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of Salesforce solutions and machine learning projects that drive business impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-strong transition-all duration-300 hover:scale-105 bg-card-gradient border-0">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{project.image}</div>
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                </div>
                
                <CardTitle className="flex items-center gap-2 text-card-foreground group-hover:text-primary transition-colors">
                  {project.icon}
                  {project.title}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;