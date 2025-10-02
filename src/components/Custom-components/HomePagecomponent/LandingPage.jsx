import React, { useEffect, useState } from "react";

import { FileText, Download, Share2, Sparkles, Zap, Star, Github, GithubIcon, GitBranchPlus, ArrowRightCircle, Monitor, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigate, useNavigate , Link } from "react-router-dom";

export default function LandingPage() {

  

  const [isMobile,setisMobile]=useState(false)

  useEffect(()=>{
    setisMobile(window.innerWidth<=768)

  },[])



  const navigate=useNavigate()
  return (
    <>
    
   <div>
   {isMobile && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full border border-gray-200 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Monitor className="w-5 h-5 text-teal-500" />
                <h3 className="font-semibold">Better Experience</h3>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setisMobile(false)} className="h-8 w-8 p-0">
                <X className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-gray-600 mb-4 text-sm">
              For the best resume building experience, please use Resumind on a desktop or PC.
            </p>
            <Button
              onClick={() => setisMobile(false)}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white"
            >
              Continue Anyway
            </Button>
          </div>
        </div>
      )}   </div>

    

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
          <Button size="lg" onClick={()=>navigate('/dashboard')} className="bg-teal-600 hover:bg-teal-700 cursor-pointer text-white hover:scale-104 transition-all duration-100"  >
            Get Started <ArrowRightCircle/>
          </Button>
         <Link to="https://github.com/Kushalkush-dev/Resumind-Ai-based-Resume-Builder..git" target="_blank" >
         <Button size="lg" variant="outline"  className={"bg-black text-white transition-all cursor-pointer hover:bg-white hover:text-black duration-100 hover:scale-102"}>
          <Github/> Support with a Star <Star className="fill-amber-400 text-orange-400"/>
          </Button>
         
         </Link>
         
         
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Resumind?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="shadow-md rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <FileText className="mx-auto h-10 w-10 text-teal-600 mb-4" />
              <h3 className="font-semibold text-lg">Full Customization</h3>
              <p className="text-gray-600 text-sm mt-2">
                Tailor your resume layout, colors, and sections exactly how you want.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Download className="mx-auto h-10 w-10 text-teal-600 mb-4" />
              <h3 className="font-semibold text-lg">Easy Download</h3>
              <p className="text-gray-600 text-sm mt-2">
                Export your resume in high-quality PDF with a single click.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Share2 className="mx-auto h-10 w-10 text-teal-600 mb-4" />
              <h3 className="font-semibold text-lg">Instant Sharing</h3>
              <p className="text-gray-600 text-sm mt-2">
                Share your resume link online with recruiters instantly.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-300">
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
          <div className="p-6 bg-white rounded-xl shadow hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <Zap className="mx-auto h-10 w-10 text-teal-600 mb-4" />
            <h3 className="font-semibold text-lg">Create Resume Based on Job</h3>
            <p className="text-gray-600 text-sm mt-2">
              Choose the job role and Resumind suggests a tailored resume template.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <FileText className="mx-auto h-10 w-10 text-teal-600 mb-4" />
            <h3 className="font-semibold text-lg">Fill the Fields</h3>
            <p className="text-gray-600 text-sm mt-2">
              Enter your details and experience to populate your resume effortlessly.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <FileText className="mx-auto h-10 w-10 text-teal-600 mb-4" />
            <h3 className="font-semibold text-lg">Customize It</h3>
            <p className="text-gray-600 text-sm mt-2">
              Adjust layouts, colors, fonts, and sections to suit your style.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:scale-105 transition-all duration-300 hover:shadow-xl">
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
        <Button onClick={()=>navigate('/dashboard')} size="lg" className="bg-white text-teal-700 hover:bg-gray-100">
          Get Started for Free
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>© {new Date().getFullYear()} Resumind. All rights reserved.</p>
      </footer>
    </div>

     </>
  );
}
