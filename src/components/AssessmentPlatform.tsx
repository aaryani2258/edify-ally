import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Clock, Brain, Award, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Question {
  id: number;
  type: "multiple-choice" | "multiple-select" | "essay" | "true-false";
  question: string;
  options?: string[];
  correctAnswer?: string | string[];
  points: number;
}

const AssessmentPlatform = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(1800); // 30 minutes
  const { toast } = useToast();

  const assessment = {
    title: "Quantum Physics Fundamentals",
    description: "Test your understanding of quantum mechanics principles",
    timeLimit: 30,
    totalQuestions: 5,
    questions: [
      {
        id: 1,
        type: "multiple-choice" as const,
        question: "What is quantum entanglement?",
        options: [
          "A phenomenon where particles remain connected across any distance",
          "The process of quantum particles losing energy",
          "A method of quantum computing",
          "The uncertainty principle in action"
        ],
        correctAnswer: "A phenomenon where particles remain connected across any distance",
        points: 10
      },
      {
        id: 2,
        type: "multiple-select" as const,
        question: "Which of the following are principles of quantum mechanics? (Select all that apply)",
        options: [
          "Wave-particle duality",
          "Uncertainty principle", 
          "Conservation of energy",
          "Quantum superposition"
        ],
        correctAnswer: ["Wave-particle duality", "Uncertainty principle", "Quantum superposition"],
        points: 15
      },
      {
        id: 3,
        type: "true-false" as const,
        question: "Schrödinger's cat is both alive and dead until observed.",
        options: ["True", "False"],
        correctAnswer: "True",
        points: 5
      },
      {
        id: 4,
        type: "essay" as const,
        question: "Explain the double-slit experiment and its implications for quantum mechanics.",
        points: 20
      },
      {
        id: 5,
        type: "multiple-choice" as const,
        question: "What does the wave function collapse represent?",
        options: [
          "The destruction of quantum information",
          "The transition from superposition to definite state",
          "The failure of quantum theory",
          "The end of particle motion"
        ],
        correctAnswer: "The transition from superposition to definite state",
        points: 10
      }
    ]
  };

  const currentQ = assessment.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / assessment.totalQuestions) * 100;

  const handleAnswer = (answer: any) => {
    setAnswers(prev => ({ ...prev, [currentQ.id]: answer }));
  };

  const nextQuestion = () => {
    if (currentQuestion < assessment.totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      submitAssessment();
    }
  };

  const submitAssessment = () => {
    setShowResults(true);
    toast({
      title: "Assessment Submitted!",
      description: "Your answers have been processed and results are ready.",
    });
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (showResults) {
    return (
      <div className="container mx-auto px-6 py-12">
        <Card className="max-w-4xl mx-auto shadow-glow animate-scale-in">
          <CardHeader className="bg-gradient-learning text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <Award className="h-6 w-6" />
              Assessment Results
            </CardTitle>
            <CardDescription className="text-white/80">
              {assessment.title} - Completed
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-ai rounded-full mb-4">
                <span className="text-3xl font-bold text-white">85%</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Excellent Work!</h3>
              <p className="text-muted-foreground">You scored 45 out of 60 points</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-4 text-center">
                  <CheckCircle className="h-8 w-8 text-accent mx-auto mb-2" />
                  <p className="text-2xl font-bold">4/5</p>
                  <p className="text-sm text-muted-foreground">Correct Answers</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">18:45</p>
                  <p className="text-sm text-muted-foreground">Time Taken</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Brain className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <p className="text-2xl font-bold">Advanced</p>
                  <p className="text-sm text-muted-foreground">Skill Level</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">AI-Generated Study Recommendations:</h4>
              <div className="space-y-2">
                <div className="p-4 bg-gradient-learning rounded-lg text-white">
                  <p className="text-sm">Focus on wave-particle duality concepts - review Chapter 3 of your uploaded materials</p>
                </div>
                <div className="p-4 bg-gradient-ai rounded-lg text-white">
                  <p className="text-sm">Practice more double-slit experiment problems to strengthen understanding</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <Button onClick={() => setShowResults(false)} className="flex-1">
                <RotateCcw className="h-4 w-4 mr-2" />
                Retake Assessment
              </Button>
              <Button variant="outline" className="flex-1">
                View Detailed Feedback
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Card className="mb-6 shadow-card">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{assessment.title}</CardTitle>
                <CardDescription>{assessment.description}</CardDescription>
              </div>
              <Badge variant="secondary" className="animate-pulse">
                <Clock className="h-3 w-3 mr-1" />
                {formatTime(timeRemaining)}
              </Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Question {currentQuestion + 1} of {assessment.totalQuestions}</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </CardHeader>
        </Card>

        {/* Question Card */}
        <Card className="shadow-glow animate-fade-in">
          <CardHeader>
            <CardTitle className="text-lg">
              Q{currentQuestion + 1}. {currentQ.question}
            </CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="outline">{currentQ.points} points</Badge>
              <Badge variant="secondary">{currentQ.type.replace('-', ' ')}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentQ.type === "multiple-choice" && (
              <RadioGroup 
                value={answers[currentQ.id] || ""} 
                onValueChange={(value) => handleAnswer(value)}
              >
                {currentQ.options?.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}

            {currentQ.type === "multiple-select" && (
              <div className="space-y-3">
                {currentQ.options?.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`checkbox-${index}`}
                      checked={(answers[currentQ.id] || []).includes(option)}
                      onCheckedChange={(checked) => {
                        const current = answers[currentQ.id] || [];
                        if (checked) {
                          handleAnswer([...current, option]);
                        } else {
                          handleAnswer(current.filter((a: string) => a !== option));
                        }
                      }}
                    />
                    <Label htmlFor={`checkbox-${index}`} className="flex-1 cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            )}

            {currentQ.type === "true-false" && (
              <RadioGroup 
                value={answers[currentQ.id] || ""} 
                onValueChange={(value) => handleAnswer(value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="True" id="true" />
                  <Label htmlFor="true" className="cursor-pointer">True</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="False" id="false" />
                  <Label htmlFor="false" className="cursor-pointer">False</Label>
                </div>
              </RadioGroup>
            )}

            {currentQ.type === "essay" && (
              <Textarea
                placeholder="Type your answer here..."
                value={answers[currentQ.id] || ""}
                onChange={(e) => handleAnswer(e.target.value)}
                className="min-h-32"
              />
            )}

            <div className="flex justify-between pt-6">
              <Button 
                variant="outline" 
                onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              <Button 
                onClick={nextQuestion}
                className="bg-gradient-learning border-0"
                disabled={!answers[currentQ.id]}
              >
                {currentQuestion === assessment.totalQuestions - 1 ? "Submit" : "Next"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AssessmentPlatform;