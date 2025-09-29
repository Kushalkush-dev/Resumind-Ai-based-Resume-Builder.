import React from "react";

import { FileText, Download, Share2, Sparkles, Zap, Star, Github, GithubIcon, GitBranchPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">

        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Build Smarter Resumes with <span className="text-teal-600">Resumind</span>
        </h1>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Create professional resumes effortlessly with AI-powered suggestions, full customization, and easy sharing options.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
            Get Started
          </Button>
          <Button size="lg" variant="outline">
          <Github/> Support with a Star <Star className="fill-amber-400 text-orange-400"/>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Resumind?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6 text-center">
              <FileText className="mx-auto h-10 w-10 text-teal-600 mb-4" />
              <h3 className="font-semibold text-lg">Full Customization</h3>
              <p className="text-gray-600 text-sm mt-2">
                Tailor your resume layout, colors, and sections exactly how you want.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6 text-center">
              <Download className="mx-auto h-10 w-10 text-teal-600 mb-4" />
              <h3 className="font-semibold text-lg">Easy Download</h3>
              <p className="text-gray-600 text-sm mt-2">
                Export your resume in high-quality PDF with a single click.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6 text-center">
              <Share2 className="mx-auto h-10 w-10 text-teal-600 mb-4" />
              <h3 className="font-semibold text-lg">Instant Sharing</h3>
              <p className="text-gray-600 text-sm mt-2">
                Share your resume link online with recruiters instantly.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6 text-center">
              <Sparkles className="mx-auto h-10 w-10 text-teal-600 mb-4" />
              <h3 className="font-semibold text-lg">AI Suggestions</h3>
              <p className="text-gray-600 text-sm mt-2">
                Get personalized tips and AI-driven improvements for better impact.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-6 py-16 bg-gray-100 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow">
            <Zap className="mx-auto h-10 w-10 text-teal-600 mb-4" />
            <h3 className="font-semibold text-lg">Create Resume Based on Job</h3>
            <p className="text-gray-600 text-sm mt-2">
              Choose the job role and Resumind suggests a tailored resume template.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <FileText className="mx-auto h-10 w-10 text-teal-600 mb-4" />
            <h3 className="font-semibold text-lg">Fill the Fields</h3>
            <p className="text-gray-600 text-sm mt-2">
              Enter your details and experience to populate your resume effortlessly.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <FileText className="mx-auto h-10 w-10 text-teal-600 mb-4" />
            <h3 className="font-semibold text-lg">Customize It</h3>
            <p className="text-gray-600 text-sm mt-2">
              Adjust layouts, colors, fonts, and sections to suit your style.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <Download className="mx-auto h-10 w-10 text-teal-600 mb-4" />
            <h3 className="font-semibold text-lg">Download or Share</h3>
            <p className="text-gray-600 text-sm mt-2">
              Download your resume or share it instantly with recruiters.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Start Building Your Resume Today</h2>
        <p className="mb-8 max-w-xl mx-auto text-teal-100">
          Save time and land your dream job faster with Resumind’s AI-powered resume builder.
        </p>
        <Button size="lg" className="bg-white text-teal-700 hover:bg-gray-100">
          Get Started for Free
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>© {new Date().getFullYear()} Resumind. All rights reserved.</p>
      </footer>
    </div>
  );
}
