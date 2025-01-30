import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: React.ReactNode;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Branding Section */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800" />
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl" />
          <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-primary-400/20 rounded-full blur-3xl" />
        </div>
        
        {/* Content */}
        <div className="relative w-full flex flex-col justify-between p-12">
          <div>
            <div className="flex items-center space-x-3 mb-12">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-primary-600" viewBox="0 0 24 24" fill="none">
                  <path d="M13 6v12h4a2 2 0 002-2V8a2 2 0 00-2-2h-4zm-2 0H7a2 2 0 00-2 2v8a2 2 0 002 2h4V6z" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-white">RentEase</div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
                  Rent Anything, <br />Anytime
                </h2>
                <div className="text-lg text-primary-100">
                  Your one-stop platform for renting electronics, furniture, appliances, and more.
                </div>
              </div>
              
              <div className="grid gap-8">
                <Card className="bg-white/10 border-white/20 backdrop-blur-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" 
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-white">Wide Selection</h3>
                        <div className="text-primary-100">From electronics to furniture, find everything you need</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 backdrop-blur-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" 
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-white">Flexible Rentals</h3>
                        <div className="text-primary-100">Daily, weekly, or monthly rental options available</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 backdrop-blur-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" 
                            d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-white">Instant Delivery</h3>
                        <div className="text-primary-100">Quick delivery and setup at your doorstep</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-8">
            <Card className="bg-white/10 border-white/20 backdrop-blur-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-3">
                    <img className="w-8 h-8 rounded-full ring-2 ring-white" src="https://ui-avatars.com/api/?name=John+Doe&background=random" alt="" />
                    <img className="w-8 h-8 rounded-full ring-2 ring-white" src="https://ui-avatars.com/api/?name=Jane+Smith&background=random" alt="" />
                    <img className="w-8 h-8 rounded-full ring-2 ring-white" src="https://ui-avatars.com/api/?name=Bob+Johnson&background=random" alt="" />
                  </div>
                  <div className="text-sm text-primary-100">
                    Join thousands of satisfied customers
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <Card className="backdrop-blur-xl bg-white/80 dark:bg-gray-800/80">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">{title}</CardTitle>
              {subtitle && (
                <CardDescription className="text-center">
                  {subtitle}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              {children}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
