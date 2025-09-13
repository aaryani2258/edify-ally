import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Brain, TrendingUp, Upload } from "lucide-react";

const HeroSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Intelligent insights that adapt to your learning style and pace"
    },
    {
      icon: Upload,
      title: "Document Processing",
      description: "Upload PDFs, notes, and textbooks for personalized study plans"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Visual analytics to monitor your learning journey and achievements"
    },
    {
      icon: BookOpen,
      title: "Smart Study Plans",
      description: "Customized learning paths based on your goals and performance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Your Intelligent
            <br />
            <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Study Companion
            </span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Transform your learning experience with AI-powered insights, personalized study plans, 
            and intelligent document processing that adapts to your unique learning style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow">
              Start Learning Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Upload className="h-5 w-5 mr-2" />
              Upload Your First Document
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 shadow-card hover:shadow-glow transition-all duration-300 hover:bg-white/15">
              <CardContent className="p-6 text-center">
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-white/80 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;