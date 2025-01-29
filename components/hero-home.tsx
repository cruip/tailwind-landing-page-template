'use client';

import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import TeamMember1 from "@/public/images/avatar-01.jpg";
import TeamMember2 from "@/public/images/avatar-02.jpg";
import TeamMember3 from "@/public/images/avatar-03.jpg";
import TeamMember4 from "@/public/images/avatar-04.jpg";
import WaveLogo from "./ui/wave-logo";
import React from "react";

export default function HeroHome() {
  const [activeFeature, setActiveFeature] = React.useState<string | null>('voice');
  const [isDescriptionVisible, setIsDescriptionVisible] = React.useState(true);
  const [isDemoVisible, setIsDemoVisible] = React.useState(true);

  // Auto-cycle features
  React.useEffect(() => {
    const features = ['voice', 'insights', 'recommendations'];
    let currentIndex = features.indexOf(activeFeature || 'voice');
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % features.length;
      handleFeatureClick(features[currentIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeFeature]);

  // Refs for scrolling
  const conversationRef = React.useRef<HTMLDivElement>(null);
  const analysisRef = React.useRef<HTMLDivElement>(null);
  const recommendationsRef = React.useRef<HTMLDivElement>(null);

  // Handle feature selection with animation timing
  const handleFeatureClick = (feature: string | null) => {
    if (activeFeature === feature) {
      setIsDescriptionVisible(false);
      setTimeout(() => {
        setActiveFeature(null);
        setIsDescriptionVisible(true);
      }, 300);
    } else {
      setIsDescriptionVisible(false);
      setTimeout(() => {
        setActiveFeature(feature);
        setIsDescriptionVisible(true);
      }, 300);
    }
  };

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-20">
      <PageIllustration />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white/80"></div>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-blue-500/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero Section */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="relative pb-12 text-center md:pb-16">
            {/* Logo and Title */}
            <div
              className="relative mb-8 flex justify-center"
              data-aos="zoom-y-out"
            >
              <WaveLogo size="lg" className="scale-150" />
            </div>
            
            <h1
              className="mb-6 text-5xl font-bold md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Your AI Voice Agent for <br className="max-lg:hidden" />
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Workplace Feedback</span>
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Transform how your company collects and acts on employee feedback with Endly's 
                AI-powered voice conversations. Get deeper insights, foster engagement, and drive 
                meaningful change.
              </p>

              <div
                className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center mb-12"
                data-aos="zoom-y-out"
                data-aos-delay={450}
              >
                <a
                  className="group relative mb-4 w-full overflow-hidden rounded-full bg-gradient-to-t from-blue-700 to-blue-600 px-8 py-3 text-white shadow transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25 sm:mb-0 sm:w-auto"
                  href="#demo"
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transition-transform duration-500 group-hover:translate-x-full"></div>
                  <span className="relative inline-flex items-center font-medium">
                    Schedule a Call{" "}
                    <span className="ml-1 tracking-normal text-blue-200 transition-transform duration-150 group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
                <a
                  className="group relative ml-0 w-full overflow-hidden rounded-full border-2 border-blue-600 bg-transparent px-8 py-3 text-blue-600 shadow transition-all duration-300 hover:bg-blue-50 hover:shadow-lg sm:ml-4 sm:w-auto"
                  href="#0"
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-50/0 via-blue-50/40 to-blue-50/0 transition-transform duration-500 group-hover:translate-x-full"></div>
                  <span className="relative inline-flex items-center font-medium">
                    Try the Demo
                    <svg className="ml-1 h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </a>
              </div>

              {/* Feature Navigation and Demo Section */}
              <div className="space-y-8">
                {/* Feature Navigation */}
                <div className="flex justify-center gap-4">
                  <button
                    className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-all duration-300 ${
                      activeFeature === 'voice'
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => handleFeatureClick(activeFeature === 'voice' ? null : 'voice')}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                    Smart Conversations
                  </button>
                  <button
                    className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-all duration-300 ${
                      activeFeature === 'insights'
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => handleFeatureClick(activeFeature === 'insights' ? null : 'insights')}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Actionable Insights
                  </button>
                  <button
                    className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-all duration-300 ${
                      activeFeature === 'recommendations'
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => handleFeatureClick(activeFeature === 'recommendations' ? null : 'recommendations')}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    AI Recommendations
                  </button>
                </div>

                {/* Interactive Demo */}
                <div className={`transform transition-all duration-500 ${
                  isDemoVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <div id="demo" className="relative mx-auto max-w-3xl scroll-mt-20">
                    {/* AI Processing Badge */}
                    <div className="absolute -right-2 -top-2 z-20 flex items-center space-x-2 rounded-full bg-blue-600 px-3 py-1 text-sm text-white shadow-lg">
                      <div className="flex space-x-1">
                        <div className="h-2 w-2 animate-[pulse_1s_ease-in-out_infinite] rounded-full bg-white"></div>
                        <div className="h-2 w-2 animate-[pulse_1s_ease-in-out_infinite_0.2s] rounded-full bg-white"></div>
                        <div className="h-2 w-2 animate-[pulse_1s_ease-in-out_infinite_0.4s] rounded-full bg-white"></div>
                      </div>
                      <span className="text-xs font-medium">AI Processing</span>
                    </div>

                    {/* Demo Container */}
                    <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all duration-300">
                      {/* Conversation Content */}
                      <div className="relative z-20 space-y-4">
                        {/* Conversation Section */}
                        <div 
                          ref={conversationRef}
                          className={`transition-all duration-500 ${
                            activeFeature === 'voice' 
                              ? 'relative z-10 rounded-xl ring-4 ring-blue-500/20 ring-offset-4'
                              : ''
                          }`}
                        >
                          {activeFeature === 'voice' && (
                            <div className="absolute inset-0 -z-10 animate-pulse bg-blue-50/30 rounded-xl"></div>
                          )}
                          <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <div className="mb-1 text-sm font-medium text-gray-500">Endly AI</div>
                              <div className="rounded-lg bg-blue-50 p-3">
                                <p className="text-sm text-gray-700">Hi Sarah! How was your experience with the new project management tool this week?</p>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="h-10 w-10 overflow-hidden rounded-full">
                              <Image
                                src={TeamMember1}
                                alt="Team member"
                                width={40}
                                height={40}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="mb-1 text-sm font-medium text-gray-500">Sarah</div>
                              <div className="rounded-lg bg-gray-100 p-3">
                                <p className="text-sm text-gray-700">The new tool has improved our team coordination, but the learning curve was a bit steep...</p>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <div className="mb-1 text-sm font-medium text-gray-500">Endly AI</div>
                              <div className="rounded-lg bg-blue-50 p-3">
                                <p className="text-sm text-gray-700">I understand. Would additional training sessions help your team adapt more quickly?</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Enhanced Real-time Analysis */}
                        <div 
                          ref={analysisRef}
                          className={`mt-6 rounded-lg border border-blue-100 bg-blue-50 p-4 transition-all duration-500 ${
                            activeFeature === 'insights'
                              ? 'relative z-10 ring-4 ring-blue-500/20 ring-offset-4'
                              : ''
                          }`}
                        >
                          {activeFeature === 'insights' && (
                            <div className="absolute inset-0 -z-10 animate-pulse bg-blue-100/30 rounded-lg"></div>
                          )}
                          <div className="mb-4 flex items-center justify-between">
                            <h4 className="text-sm font-semibold text-blue-800">Real-time Insight</h4>
                            <div className="flex items-center text-xs text-blue-600">
                              <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                              Live Analysis
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <div>
                              <div className="mb-1 flex items-center justify-between">
                                <span className="text-xs text-gray-600">Tool Adoption</span>
                                <span className="text-xs font-medium text-blue-600">75%</span>
                              </div>
                              <div className="h-2 overflow-hidden rounded-full bg-blue-200">
                                <div className="h-full w-3/4 animate-[progress_2s_ease-in-out] bg-blue-600"></div>
                              </div>
                            </div>
                            
                            <div>
                              <div className="mb-1 flex items-center justify-between">
                                <span className="text-xs text-gray-600">Training Need</span>
                                <span className="text-xs font-medium text-blue-600">80%</span>
                              </div>
                              <div className="h-2 overflow-hidden rounded-full bg-blue-200">
                                <div className="h-full w-4/5 animate-[progress_2s_ease-in-out] bg-blue-600"></div>
                              </div>
                            </div>

                            <div>
                              <div className="mb-1 flex items-center justify-between">
                                <span className="text-xs text-gray-600">Sentiment Analysis</span>
                                <span className="text-xs font-medium text-blue-600">Positive</span>
                              </div>
                              <div className="flex space-x-1">
                                <div className="h-2 w-1/3 rounded-full bg-green-200">
                                  <div className="h-full w-4/5 animate-[progress_2s_ease-in-out] rounded-full bg-green-500"></div>
                                </div>
                                <div className="h-2 w-1/3 rounded-full bg-yellow-200">
                                  <div className="h-full w-1/3 animate-[progress_2s_ease-in-out] rounded-full bg-yellow-500"></div>
                                </div>
                                <div className="h-2 w-1/3 rounded-full bg-red-200">
                                  <div className="h-full w-1/5 animate-[progress_2s_ease-in-out] rounded-full bg-red-500"></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Key Topics */}
                          <div className="mt-4">
                            <h5 className="mb-2 text-xs font-medium text-gray-600">Key Topics Identified</h5>
                            <div className="flex flex-wrap gap-2">
                              <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-600">Training</span>
                              <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-600">Tool Adoption</span>
                              <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-600">Team Coordination</span>
                            </div>
                          </div>
                        </div>

                        {/* AI Recommendations */}
                        <div 
                          ref={recommendationsRef}
                          className={`rounded-lg border border-green-100 bg-green-50 p-4 transition-all duration-500 ${
                            activeFeature === 'recommendations'
                              ? 'relative z-10 ring-4 ring-blue-500/20 ring-offset-4'
                              : ''
                          }`}
                        >
                          {activeFeature === 'recommendations' && (
                            <div className="absolute inset-0 -z-10 animate-pulse bg-blue-50/30 rounded-lg"></div>
                          )}
                          <div className="mb-3 flex items-center text-green-800">
                            <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h4 className="text-sm font-semibold">AI Recommendations</h4>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-center">
                              <svg className="mr-2 h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Schedule additional training sessions
                            </li>
                            <li className="flex items-center">
                              <svg className="mr-2 h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Create quick-reference guides
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works - Simple 3-Step Process */}
        <div className="mx-auto mb-20 max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="relative">
              <div className="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">1</div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-semibold">Schedule Check-ins</h3>
                <p className="text-sm text-gray-600">Set up regular voice check-ins with your team at intervals that work for you.</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">2</div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-semibold">AI Conversations</h3>
                <p className="text-sm text-gray-600">Endly conducts natural voice conversations, adapting to each team member's style.</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">3</div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-semibold">Get Insights</h3>
                <p className="text-sm text-gray-600">Receive actionable insights and recommendations based on AI-analyzed feedback.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Partners - Social Proof */}
        {/* <div className="mx-auto mb-20 max-w-5xl">
          <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-gray-500">Trusted By Teams At</h2>
          <div className="grid grid-cols-3 gap-8 md:grid-cols-6">
            <div className="flex h-12 items-center justify-center grayscale transition hover:grayscale-0">
              <svg className="h-8 w-8 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
              </svg>
            </div>
            <div className="flex h-12 items-center justify-center grayscale transition hover:grayscale-0">
              <svg className="h-8 w-8 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div className="flex h-12 items-center justify-center grayscale transition hover:grayscale-0">
              <svg className="h-8 w-8 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
              </svg>
            </div>
            <div className="flex h-12 items-center justify-center grayscale transition hover:grayscale-0">
              <svg className="h-8 w-8 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
            <div className="flex h-12 items-center justify-center grayscale transition hover:grayscale-0">
              <svg className="h-8 w-8 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-14.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v14.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z" />
              </svg>
            </div>
            <div className="flex h-12 items-center justify-center grayscale transition hover:grayscale-0">
              <svg className="h-8 w-8 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
          </div>
        </div> */}

        {/* Final CTA Section */}
        {/* <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Transform Your Workplace Feedback?</h2>
          <p className="mb-8 text-lg text-gray-600">
            Join forward-thinking companies using Endly to build better workplaces.
          </p>
          <div className="flex justify-center gap-4">
            <a
              className="group relative overflow-hidden rounded-full bg-gradient-to-t from-blue-700 to-blue-600 px-8 py-3 text-white shadow transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25"
              href="#0"
            >
              Start Free Trial
            </a>
            <a
              className="group relative overflow-hidden rounded-full border-2 border-blue-600 bg-transparent px-8 py-3 text-blue-600 shadow transition-all duration-300 hover:bg-blue-50"
              href="#0"
            >
              Schedule Demo
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  isActive?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

function FeatureCard({ icon, title, isActive, onClick, children }: FeatureCardProps) {
  return (
    <div className="overflow-hidden rounded-lg transition-all duration-300">
      <div
        className={`group flex cursor-pointer items-center gap-3 rounded-lg bg-white p-3 shadow-sm transition-all duration-300 hover:bg-blue-50 ${
          isActive ? 'bg-blue-50 ring-1 ring-blue-500' : ''
        }`}
        onClick={onClick}
      >
        <div className="relative text-blue-600">
          <div className="absolute -inset-2 -z-10 animate-[pulse_2s_ease-in-out_infinite] rounded-full bg-blue-100/50 opacity-0 group-hover:opacity-100"></div>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {icon}
          </svg>
        </div>
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
      {children && (
        <div className="overflow-hidden transition-all duration-300">
          <div className="rounded-b-lg border-x border-b border-blue-100 bg-white p-3">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
