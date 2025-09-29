import React from 'react'


import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Sparkles, Download, Share2, Zap, Users, Star, ArrowRight, X, Monitor, Github } from "lucide-react"
import { useState, useEffect } from "react"


const LandingPage = () => {
const [showMobilePopup, setShowMobilePopup] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth < 768
      if (isMobile) {
        setShowMobilePopup(true)
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
   <div className="min-h-screen bg-white text-gray-900">
      {showMobilePopup && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full border border-gray-200 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Monitor className="w-5 h-5 text-teal-500" />
                <h3 className="font-semibold">Better Experience</h3>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setShowMobilePopup(false)} className="h-8 w-8 p-0">
                <X className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-gray-600 mb-4 text-sm">
              For the best resume building experience, please use ResumInd on a desktop or PC.
            </p>
            <Button
              onClick={() => setShowMobilePopup(false)}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white"
            >
              Continue Anyway
            </Button>
          </div>
        </div>
      )}

      {/* Navigation */}
   

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-teal-500/10 text-teal-600 border-teal-500/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Smart Resume Builder
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
              Build stunning resumes with <span className="text-teal-500">smart suggestions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
              Create professional resumes in minutes with intelligent suggestions, customizable templates, and seamless
              sharing capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8">
                Start Building Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 bg-transparent border-gray-200 text-gray-900 hover:bg-gray-50"
              >
                <Github/> Support with a Star <Star className='text-orange-400 fill-amber-300'/>
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-4">{"✨ 3 free resumes • No credit card required"}</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Everything you need to land your dream job
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Powerful features designed to make resume building effortless and effective
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-white border-gray-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Suggestions</h3>
              <p className="text-gray-600 text-pretty">
                Get intelligent content recommendations and formatting suggestions tailored to your industry and role.
              </p>
            </Card>

            <Card className="p-6 bg-white border-gray-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600 text-pretty">
                Create professional resumes in minutes, not hours. Our streamlined interface gets you results quickly.
              </p>
            </Card>

            <Card className="p-6 bg-white border-gray-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                <Download className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Download</h3>
              <p className="text-gray-600 text-pretty">
                Export your resume in multiple formats including PDF, Word, and plain text with one click.
              </p>
            </Card>

            <Card className="p-6 bg-white border-gray-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Seamless Sharing</h3>
              <p className="text-gray-600 text-pretty">
                Share your resume with a unique link or send directly to employers with built-in tracking.
              </p>
            </Card>

            <Card className="p-6 bg-white border-gray-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Templates</h3>
              <p className="text-gray-600 text-pretty">
                Choose from dozens of ATS-friendly templates designed by hiring experts and career coaches.
              </p>
            </Card>

            <Card className="p-6 bg-white border-gray-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted by Thousands</h3>
              <p className="text-gray-600 text-pretty">
                Join over 50,000 job seekers who have successfully landed interviews using ResumInd.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 border-y border-gray-200/40 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600 mb-8">Trusted by professionals at</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold">Google</div>
              <div className="text-2xl font-bold">Microsoft</div>
              <div className="text-2xl font-bold">Amazon</div>
              <div className="text-2xl font-bold">Meta</div>
              <div className="text-2xl font-bold">Apple</div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 text-teal-500">
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <span className="ml-2 text-gray-900">4.9/5 from 2,847 reviews</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-500/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to build your perfect resume?</h2>
          <p className="text-xl text-gray-600 mb-8 text-pretty">
            Join thousands of professionals who have landed their dream jobs with ResumInd
          </p>
          <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8">
            Start Building Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-sm text-gray-600 mt-4">{"✨ No credit card required • 3 free resumes"}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200/40 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ResumInd</span>
              </div>
              <p className="text-gray-600 text-pretty">
                Build professional resumes with smart assistance and land your dream job.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Examples
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200/40 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2025 ResumInd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage