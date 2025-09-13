import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Brain, TrendingUp, Upload, MessageSquare, CheckCircle } from "lucide-react";

const StudyDashboard = () => {
  const studyStats = [
    { label: "Documents Processed", value: 24, icon: BookOpen },
    { label: "AI Insights Generated", value: 87, icon: Brain },
    { label: "Study Sessions", value: 16, icon: TrendingUp },
    { label: "Concepts Mastered", value: 142, icon: CheckCircle },
  ];

  const recentDocuments = [
    { title: "Quantum Physics Notes", progress: 85, type: "Physics" },
    { title: "Machine Learning Fundamentals", progress: 72, type: "Computer Science" },
    { title: "Organic Chemistry Reactions", progress: 93, type: "Chemistry" },
  ];

  const aiSuggestions = [
    "Review quantum entanglement concepts - you struggled with this yesterday",
    "Practice more neural network problems based on your recent uploads",
    "Schedule a review session for organic chemistry mechanisms",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero text-white">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold mb-2">Study Dashboard</h1>
          <p className="text-xl opacity-90">Your personalized learning journey awaits</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {studyStats.map((stat, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  </div>
                  <stat.icon className="h-8 w-8 text-secondary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Documents */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Recent Study Materials
              </CardTitle>
              <CardDescription>Continue where you left off</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentDocuments.map((doc, index) => (
                <div key={index} className="space-y-2 p-4 bg-muted rounded-lg">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{doc.title}</h4>
                    <Badge variant="secondary">{doc.type}</Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{doc.progress}%</span>
                    </div>
                    <Progress value={doc.progress} className="h-2" />
                  </div>
                </div>
              ))}
              <Button className="w-full" variant="outline">
                <Upload className="h-4 w-4 mr-2" />
                Upload New Document
              </Button>
            </CardContent>
          </Card>

          {/* AI Suggestions */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-secondary" />
                AI Study Recommendations
              </CardTitle>
              <CardDescription>Personalized insights for better learning</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {aiSuggestions.map((suggestion, index) => (
                <div key={index} className="p-4 bg-gradient-learning rounded-lg text-white">
                  <p className="text-sm">{suggestion}</p>
                </div>
              ))}
              <Button className="w-full bg-gradient-ai border-0">
                <MessageSquare className="h-4 w-4 mr-2" />
                Chat with AI Tutor
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudyDashboard;