import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, Brain, CheckCircle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DocumentUploader = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([
    { name: "Linear Algebra Textbook.pdf", status: "processed", insights: 42 },
    { name: "Biology Notes - Chapter 5.docx", status: "processing", insights: 0 },
    { name: "Chemistry Lab Report.pdf", status: "processed", insights: 18 },
  ]);
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFileUpload(files);
  };

  const handleFileUpload = (files: File[]) => {
    files.forEach(file => {
      if (file.type === "application/pdf" || file.type.includes("document")) {
        toast({
          title: "Document uploaded successfully!",
          description: `${file.name} is being processed by our AI engine.`,
        });
        
        // Simulate adding to uploaded files
        setUploadedFiles(prev => [
          { name: file.name, status: "processing", insights: 0 },
          ...prev
        ]);
      } else {
        toast({
          title: "Unsupported file type",
          description: "Please upload PDF or document files only.",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">Upload Your Study Materials</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Transform your documents into personalized learning experiences with AI-powered insights
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload Area */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5 text-primary" />
              Document Upload
            </CardTitle>
            <CardDescription>
              Support for PDFs, Word documents, PowerPoint, and text files
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
                isDragging 
                  ? "border-primary bg-primary/5 shadow-glow" 
                  : "border-border hover:border-primary/50"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="p-4 bg-gradient-ai rounded-full">
                  <Upload className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="text-lg font-medium">Drop your documents here</p>
                  <p className="text-muted-foreground">or click to browse files</p>
                </div>
                <Button 
                  className="bg-gradient-learning border-0"
                  onClick={() => document.getElementById('file-input')?.click()}
                >
                  Choose Files
                </Button>
                <input
                  id="file-input"
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.ppt,.pptx,.txt"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files) {
                      handleFileUpload(Array.from(e.target.files));
                    }
                  }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Uploaded Files */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Your Documents
            </CardTitle>
            <CardDescription>
              AI processing status and generated insights
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-sm">{file.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    {file.status === "processed" ? (
                      <>
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-sm text-accent">Processed</span>
                        <Badge variant="secondary" className="text-xs">
                          <Brain className="h-3 w-3 mr-1" />
                          {file.insights} insights
                        </Badge>
                      </>
                    ) : (
                      <>
                        <Clock className="h-4 w-4 text-secondary animate-pulse" />
                        <span className="text-sm text-secondary">Processing...</span>
                      </>
                    )}
                  </div>
                </div>
                {file.status === "processed" && (
                  <Button size="sm" variant="outline">
                    View Insights
                  </Button>
                )}
              </div>
            ))}
            
            {uploadedFiles.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No documents uploaded yet</p>
                <p className="text-sm">Upload your first document to get started</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DocumentUploader;