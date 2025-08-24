import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDown, Code, Database, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-95" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Salesforce Developer
            <span className="block text-primary-glow">& ML Engineer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting powerful CRM solutions and intelligent data insights that transform businesses
          </p>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Code className="w-8 h-8 text-primary-glow mx-auto mb-4" />
              <h3 className="font-semibold text-primary-foreground mb-2">Salesforce Development</h3>
              <p className="text-sm text-primary-foreground/80">Apex, Lightning Components, Flow Builder</p>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Database className="w-8 h-8 text-primary-glow mx-auto mb-4" />
              <h3 className="font-semibold text-primary-foreground mb-2">Data Integration</h3>
              <p className="text-sm text-primary-foreground/80">APIs, ETL Processes, Data Modeling</p>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <BarChart3 className="w-8 h-8 text-primary-glow mx-auto mb-4" />
              <h3 className="font-semibold text-primary-foreground mb-2">Machine Learning</h3>
              <p className="text-sm text-primary-foreground/80">Python, Analytics, Predictive Models</p>
            </Card>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="bg-white text-primary hover:bg-primary-glow hover:text-white shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-primary-foreground hover:bg-white/20"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-primary-foreground/60 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;