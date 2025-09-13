import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from "recharts";
import { TrendingUp, Calendar, Target, Award, Brain, BookOpen, Clock, Users } from "lucide-react";

const AnalyticsDashboard = () => {
  // Sample analytics data
  const weeklyProgress = [
    { day: "Mon", hours: 2.5, completed: 85 },
    { day: "Tue", hours: 3.2, completed: 92 },
    { day: "Wed", hours: 1.8, completed: 76 },
    { day: "Thu", hours: 4.1, completed: 95 },
    { day: "Fri", hours: 2.9, completed: 88 },
    { day: "Sat", hours: 3.5, completed: 91 },
    { day: "Sun", hours: 2.1, completed: 82 },
  ];

  const subjectPerformance = [
    { subject: "Physics", score: 85, total: 100 },
    { subject: "Chemistry", score: 92, total: 100 },
    { subject: "Biology", score: 78, total: 100 },
    { subject: "Mathematics", score: 96, total: 100 },
    { subject: "Computer Science", score: 89, total: 100 },
  ];

  const learningTrends = [
    { month: "Jan", retention: 78, engagement: 85, performance: 82 },
    { month: "Feb", retention: 82, engagement: 88, performance: 85 },
    { month: "Mar", retention: 85, engagement: 91, performance: 88 },
    { month: "Apr", retention: 88, engagement: 89, performance: 91 },
    { month: "May", retention: 91, engagement: 93, performance: 94 },
    { month: "Jun", retention: 94, engagement: 95, performance: 96 },
  ];

  const studyMethodsData = [
    { name: "Reading", value: 35, color: "hsl(220, 90%, 56%)" },
    { name: "Video Learning", value: 25, color: "hsl(260, 60%, 65%)" },
    { name: "Practice Tests", value: 20, color: "hsl(150, 70%, 50%)" },
    { name: "AI Chat", value: 15, color: "hsl(30, 90%, 60%)" },
    { name: "Flashcards", value: 5, color: "hsl(0, 70%, 60%)" },
  ];

  const recentAchievements = [
    { title: "Physics Master", description: "Completed quantum mechanics module", date: "2 days ago", icon: Award },
    { title: "Study Streak", description: "7 consecutive days of learning", date: "5 hours ago", icon: Calendar },
    { title: "Quick Learner", description: "Fastest completion of chemistry unit", date: "1 week ago", icon: TrendingUp },
    { title: "AI Collaborator", description: "Used AI chat for 50+ questions", date: "3 days ago", icon: Brain },
  ];

  const insights = [
    {
      title: "Peak Learning Hours",
      value: "2-4 PM",
      change: "+15%",
      trend: "up",
      description: "Best focus during afternoon sessions"
    },
    {
      title: "Weekly Goal Progress",
      value: "18.5/20 hrs",
      change: "92.5%",
      trend: "up",
      description: "Almost reached your weekly target"
    },
    {
      title: "Retention Rate",
      value: "94%",
      change: "+8%",
      trend: "up",
      description: "Improved knowledge retention this month"
    },
    {
      title: "Areas for Focus",
      value: "Biology",
      change: "-5%",
      trend: "down",
      description: "Consider more practice in this subject"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-primary mb-4">Learning Analytics</h1>
        <p className="text-xl text-muted-foreground">
          Track your progress, identify patterns, and optimize your learning journey
        </p>
      </div>

      {/* Key Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {insights.map((insight, index) => (
          <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">{insight.title}</p>
                <Badge variant={insight.trend === "up" ? "default" : "destructive"} className="text-xs">
                  {insight.change}
                </Badge>
              </div>
              <p className="text-2xl font-bold text-primary mb-1">{insight.value}</p>
              <p className="text-xs text-muted-foreground">{insight.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Weekly Progress Chart */}
        <Card className="shadow-card animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Weekly Study Progress
            </CardTitle>
            <CardDescription>Hours studied and completion rates</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={weeklyProgress}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Area 
                  type="monotone" 
                  dataKey="hours" 
                  stroke="hsl(var(--primary))" 
                  fill="url(#gradientHours)" 
                  strokeWidth={2}
                />
                <defs>
                  <linearGradient id="gradientHours" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Subject Performance */}
        <Card className="shadow-card animate-scale-in" style={{ animationDelay: "200ms" }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-secondary" />
              Subject Performance
            </CardTitle>
            <CardDescription>Current scores across all subjects</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={subjectPerformance} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" domain={[0, 100]} stroke="hsl(var(--muted-foreground))" />
                <YAxis type="category" dataKey="subject" stroke="hsl(var(--muted-foreground))" />
                <Bar dataKey="score" fill="hsl(var(--secondary))" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Learning Trends */}
        <Card className="shadow-card animate-scale-in" style={{ animationDelay: "400ms" }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-accent" />
              Learning Trends
            </CardTitle>
            <CardDescription>6-month performance overview</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={learningTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Line 
                  type="monotone" 
                  dataKey="retention" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--primary))" }}
                />
                <Line 
                  type="monotone" 
                  dataKey="engagement" 
                  stroke="hsl(var(--secondary))" 
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--secondary))" }}
                />
                <Line 
                  type="monotone" 
                  dataKey="performance" 
                  stroke="hsl(var(--accent))" 
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--accent))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Study Methods Distribution */}
        <Card className="shadow-card animate-scale-in" style={{ animationDelay: "600ms" }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              Study Methods
            </CardTitle>
            <CardDescription>How you spend your learning time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={studyMethodsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {studyMethodsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {studyMethodsData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm">{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Achievements */}
      <Card className="shadow-glow animate-fade-in" style={{ animationDelay: "800ms" }}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-accent" />
            Recent Achievements
          </CardTitle>
          <CardDescription>Your latest learning milestones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentAchievements.map((achievement, index) => (
              <div 
                key={index} 
                className="p-4 bg-gradient-to-br from-muted to-muted/50 rounded-lg hover:shadow-soft transition-all duration-300 hover-scale"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-ai rounded-lg">
                    <achievement.icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{achievement.title}</h4>
                    <p className="text-xs text-muted-foreground mb-1">{achievement.description}</p>
                    <p className="text-xs text-primary">{achievement.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: "1000ms" }}>
          <CardContent className="p-6 text-center">
            <Target className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Set New Goals</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Define your next learning objectives
            </p>
            <Button className="w-full">Create Goal</Button>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: "1100ms" }}>
          <CardContent className="p-6 text-center">
            <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Compare Progress</h3>
            <p className="text-sm text-muted-foreground mb-4">
              See how you rank among peers
            </p>
            <Button variant="outline" className="w-full">View Leaderboard</Button>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: "1200ms" }}>
          <CardContent className="p-6 text-center">
            <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Schedule Study</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Optimize your study sessions
            </p>
            <Button variant="outline" className="w-full">Plan Schedule</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;