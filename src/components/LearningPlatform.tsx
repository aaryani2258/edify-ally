import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, Users, Star, Play, CheckCircle, Lock } from "lucide-react";

const LearningPlatform = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([
    { id: 1, title: "Quantum Physics Fundamentals", progress: 75, instructor: "Dr. Sarah Chen" },
    { id: 2, title: "Advanced Mathematics", progress: 60, instructor: "Prof. Michael Roberts" },
    { id: 3, title: "Organic Chemistry", progress: 90, instructor: "Dr. Emma Johnson" },
  ]);

  const featuredCourses = [
    {
      id: 4,
      title: "Machine Learning for Beginners",
      description: "Learn the fundamentals of AI and machine learning with hands-on projects",
      instructor: "Dr. Alex Kim",
      duration: "8 weeks",
      students: 1250,
      rating: 4.8,
      level: "Beginner",
      price: "Free",
      modules: 12,
      thumbnail: "🤖"
    },
    {
      id: 5,
      title: "Advanced Biochemistry",
      description: "Deep dive into molecular mechanisms and cellular processes",
      instructor: "Prof. Lisa Wang",
      duration: "12 weeks",
      students: 890,
      rating: 4.9,
      level: "Advanced",
      price: "$99",
      modules: 18,
      thumbnail: "🧬"
    },
    {
      id: 6,
      title: "Statistics & Data Analysis",
      description: "Master statistical concepts and data visualization techniques",
      instructor: "Dr. John Martinez",
      duration: "6 weeks",
      students: 2100,
      rating: 4.7,
      level: "Intermediate",
      price: "$49",
      modules: 10,
      thumbnail: "📊"
    }
  ];

  const courseModules = [
    { id: 1, title: "Introduction to Quantum Mechanics", duration: "45 min", completed: true },
    { id: 2, title: "Wave-Particle Duality", duration: "38 min", completed: true },
    { id: 3, title: "Quantum Entanglement", duration: "52 min", completed: true },
    { id: 4, title: "The Uncertainty Principle", duration: "41 min", completed: false, current: true },
    { id: 5, title: "Schrödinger's Equation", duration: "65 min", completed: false },
    { id: 6, title: "Quantum Computing Applications", duration: "55 min", completed: false },
  ];

  const learningPaths = [
    {
      title: "Data Science Track",
      description: "From beginner to data scientist in 6 months",
      courses: ["Statistics Fundamentals", "Python Programming", "Machine Learning", "Data Visualization"],
      duration: "24 weeks",
      level: "Beginner to Advanced"
    },
    {
      title: "Physics Mastery",
      description: "Complete physics curriculum for academic excellence",
      courses: ["Classical Mechanics", "Thermodynamics", "Quantum Physics", "Relativity"],
      duration: "32 weeks",
      level: "Intermediate to Advanced"
    },
    {
      title: "Chemistry Explorer",
      description: "Comprehensive chemistry education pathway",
      courses: ["General Chemistry", "Organic Chemistry", "Physical Chemistry", "Biochemistry"],
      duration: "28 weeks",
      level: "Beginner to Advanced"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-primary mb-4">Learning Platform</h1>
        <p className="text-xl text-muted-foreground">
          Discover courses, track progress, and advance your knowledge with structured learning paths
        </p>
      </div>

      <Tabs defaultValue="dashboard" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="dashboard">My Dashboard</TabsTrigger>
          <TabsTrigger value="courses">Browse Courses</TabsTrigger>
          <TabsTrigger value="paths">Learning Paths</TabsTrigger>
          <TabsTrigger value="modules">Current Module</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="shadow-card animate-fade-in">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-primary">3</p>
                <p className="text-sm text-muted-foreground">Active Courses</p>
              </CardContent>
            </Card>
            <Card className="shadow-card animate-fade-in" style={{ animationDelay: "100ms" }}>
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-secondary mx-auto mb-2" />
                <p className="text-2xl font-bold text-secondary">48h</p>
                <p className="text-sm text-muted-foreground">Study Time</p>
              </CardContent>
            </Card>
            <Card className="shadow-card animate-fade-in" style={{ animationDelay: "200ms" }}>
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="text-2xl font-bold text-accent">75%</p>
                <p className="text-sm text-muted-foreground">Avg. Progress</p>
              </CardContent>
            </Card>
            <Card className="shadow-card animate-fade-in" style={{ animationDelay: "300ms" }}>
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-yellow-600">12</p>
                <p className="text-sm text-muted-foreground">Certificates</p>
              </CardContent>
            </Card>
          </div>

          {/* Enrolled Courses */}
          <Card className="shadow-glow animate-scale-in" style={{ animationDelay: "400ms" }}>
            <CardHeader>
              <CardTitle>Your Current Courses</CardTitle>
              <CardDescription>Continue learning where you left off</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {enrolledCourses.map((course, index) => (
                <div key={course.id} className="flex items-center justify-between p-4 bg-muted rounded-lg hover:shadow-soft transition-all duration-300">
                  <div className="flex-1">
                    <h4 className="font-medium">{course.title}</h4>
                    <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Progress value={course.progress} className="flex-1 h-2" />
                      <span className="text-sm font-medium">{course.progress}%</span>
                    </div>
                  </div>
                  <Button className="ml-4">
                    <Play className="h-4 w-4 mr-2" />
                    Continue
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="courses" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course, index) => (
              <Card key={course.id} className="shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in hover-scale" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="text-4xl">{course.thumbnail}</div>
                    <Badge variant={course.price === "Free" ? "default" : "secondary"}>
                      {course.price}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {course.students}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      {course.rating}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{course.instructor}</p>
                      <p className="text-xs text-muted-foreground">{course.modules} modules • {course.level}</p>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-learning border-0">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="paths" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {learningPaths.map((path, index) => (
              <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader>
                  <CardTitle className="text-lg">{path.title}</CardTitle>
                  <CardDescription>{path.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {path.duration}
                    </div>
                    <Badge variant="outline">{path.level}</Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Included Courses:</p>
                    {path.courses.map((course, courseIndex) => (
                      <div key={courseIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-accent" />
                        {course}
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    Start Learning Path
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="modules" className="space-y-6">
          <Card className="shadow-glow animate-scale-in">
            <CardHeader>
              <CardTitle>Quantum Physics Fundamentals - Module Overview</CardTitle>
              <CardDescription>Track your progress through the course modules</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {courseModules.map((module, index) => (
                <div 
                  key={module.id} 
                  className={`flex items-center justify-between p-4 rounded-lg transition-all duration-300 ${
                    module.completed 
                      ? "bg-accent/10 border border-accent/20" 
                      : module.current 
                        ? "bg-primary/10 border border-primary/20 shadow-soft" 
                        : "bg-muted"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-full ${
                      module.completed 
                        ? "bg-accent text-white" 
                        : module.current 
                          ? "bg-primary text-white" 
                          : "bg-muted-foreground/20"
                    }`}>
                      {module.completed ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : module.current ? (
                        <Play className="h-4 w-4" />
                      ) : (
                        <Lock className="h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium">{module.title}</h4>
                      <p className="text-sm text-muted-foreground">Duration: {module.duration}</p>
                    </div>
                  </div>
                  
                  <Button 
                    variant={module.current ? "default" : module.completed ? "outline" : "ghost"} 
                    disabled={!module.completed && !module.current}
                    className={module.current ? "bg-gradient-learning border-0" : ""}
                  >
                    {module.completed ? "Review" : module.current ? "Continue" : "Locked"}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LearningPlatform;