import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeroSection from "@/components/HeroSection";
import StudyDashboard from "@/components/StudyDashboard";
import DocumentUploader from "@/components/DocumentUploader";
import AIChatInterface from "@/components/AIChatInterface";
import LearningPlatform from "@/components/LearningPlatform";
import AssessmentPlatform from "@/components/AssessmentPlatform";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import { Home, Upload, MessageSquare, BarChart3, BookOpen, ClipboardList, TrendingUp } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-soft">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-ai rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-primary">StudyAI</span>
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="home" className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  <span className="hidden sm:inline">Home</span>
                </TabsTrigger>
                <TabsTrigger value="dashboard" className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  <span className="hidden sm:inline">Dashboard</span>
                </TabsTrigger>
                <TabsTrigger value="platform" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span className="hidden sm:inline">Courses</span>
                </TabsTrigger>
                <TabsTrigger value="upload" className="flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  <span className="hidden sm:inline">Upload</span>
                </TabsTrigger>
                <TabsTrigger value="assessment" className="flex items-center gap-2">
                  <ClipboardList className="h-4 w-4" />
                  <span className="hidden sm:inline">Tests</span>
                </TabsTrigger>
                <TabsTrigger value="analytics" className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  <span className="hidden sm:inline">Analytics</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <Button className="bg-gradient-learning border-0">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsContent value="home" className="mt-0">
          <HeroSection />
        </TabsContent>
        
        <TabsContent value="dashboard" className="mt-0">
          <StudyDashboard />
        </TabsContent>
        
        <TabsContent value="platform" className="mt-0">
          <LearningPlatform />
        </TabsContent>
        
        <TabsContent value="upload" className="mt-0">
          <DocumentUploader />
        </TabsContent>
        
        <TabsContent value="assessment" className="mt-0">
          <AssessmentPlatform />
        </TabsContent>
        
        <TabsContent value="analytics" className="mt-0">
          <AnalyticsDashboard />
        </TabsContent>
        
        <TabsContent value="chat" className="mt-0">
          <AIChatInterface />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
