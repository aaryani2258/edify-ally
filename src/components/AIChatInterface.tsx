import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Send, Brain, User, BookOpen, Lightbulb } from "lucide-react";

interface Message {
  id: number;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
  context?: string;
}

const AIChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "ai",
      content: "Hello! I'm your AI study companion. I've analyzed your uploaded documents and I'm ready to help you learn more effectively. What would you like to study today?",
      timestamp: new Date(),
      context: "Initial greeting"
    },
    {
      id: 2,
      type: "user",
      content: "Can you explain quantum entanglement in simple terms?",
      timestamp: new Date(),
    },
    {
      id: 3,
      type: "ai",
      content: "Based on your Quantum Physics notes, quantum entanglement is like having two particles that are mysteriously connected - when you change one, the other instantly responds, no matter how far apart they are. Think of it as 'spooky action at a distance' as Einstein called it. Would you like me to create a practice quiz on this topic?",
      timestamp: new Date(),
      context: "From: Quantum Physics Notes.pdf"
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const quickActions = [
    { label: "Explain this concept", icon: Lightbulb },
    { label: "Create practice quiz", icon: BookOpen },
    { label: "Summarize chapter", icon: MessageSquare },
    { label: "Study plan suggestions", icon: Brain },
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content: inputMessage,
      timestamp: new Date(),
    };

    const aiResponse: Message = {
      id: messages.length + 2,
      type: "ai",
      content: "I'm analyzing your question and cross-referencing it with your study materials. Let me provide you with a personalized explanation based on your learning progress...",
      timestamp: new Date(),
      context: "AI Analysis"
    };

    setMessages(prev => [...prev, newUserMessage, aiResponse]);
    setInputMessage("");
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <Card className="max-w-4xl mx-auto shadow-glow">
        <CardHeader className="bg-gradient-ai text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Brain className="h-6 w-6" />
            AI Study Assistant
          </CardTitle>
          <CardDescription className="text-white/80">
            Get personalized help based on your uploaded documents and learning progress
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-0">
          {/* Quick Actions */}
          <div className="p-6 border-b bg-muted/30">
            <p className="text-sm font-medium mb-3 text-muted-foreground">Quick Actions:</p>
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action, index) => (
                <Button 
                  key={index} 
                  variant="outline" 
                  size="sm" 
                  className="text-xs"
                  onClick={() => setInputMessage(action.label)}
                >
                  <action.icon className="h-3 w-3 mr-1" />
                  {action.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    message.type === "user"
                      ? "bg-primary text-white"
                      : "bg-muted"
                  }`}
                >
                  <div className="flex items-start gap-2 mb-2">
                    {message.type === "ai" ? (
                      <Brain className="h-4 w-4 text-secondary mt-0.5" />
                    ) : (
                      <User className="h-4 w-4 text-white mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      {message.context && (
                        <Badge variant="secondary" className="mt-2 text-xs">
                          {message.context}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <p className="text-xs opacity-70 text-right">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-6 border-t bg-background">
            <div className="flex gap-2">
              <Input
                placeholder="Ask me anything about your study materials..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
              />
              <Button 
                onClick={handleSendMessage}
                className="bg-gradient-learning border-0"
                disabled={!inputMessage.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              AI responses are based on your uploaded documents and learning progress
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIChatInterface;