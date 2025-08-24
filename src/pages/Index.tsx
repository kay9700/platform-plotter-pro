import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <Hero />
        
        <section id="about" className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              About Me
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                I'm a passionate Salesforce Developer and Machine Learning Engineer with over 5 years of experience 
                building scalable CRM solutions and intelligent data-driven applications. My expertise spans the entire 
                Salesforce ecosystem, from custom Apex development to Lightning Components, combined with advanced 
                machine learning capabilities in Python.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I thrive on solving complex business challenges through innovative technology solutions, whether it's 
                automating sales processes, integrating disparate systems, or building predictive models that drive 
                business insights. My goal is to help organizations leverage the full power of their data and CRM 
                investments to achieve exceptional results.
              </p>
            </div>
          </div>
        </section>

        <section id="skills">
          <Skills />
        </section>

        <Projects />
        
        <Contact />
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary-foreground/80">
            © 2024 Salesforce Developer Portfolio. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
