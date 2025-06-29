import React from 'react'

function Card3() {
  return (
       <section class="mb-12">
                <div class="card p-8 rounded-xl shadow-2xl relative overflow-hidden">
                               
                    <div class="absolute inset-0 z-0 opacity-10" ></div>
                    
                    <div class="relative z-10">
                        <div class="flex items-center mb-8">
                            <i data-lucide="settings-2" class="h-9 w-9 text-blue-400 mr-4 stroke-[2px]"></i>
                            <h3 class="text-3xl font-extrabold text-white tracking-wide">Technical Site-Level Checks</h3>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                     
                            <div class="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col justify-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                <h5 class="text-xs uppercase text-gray-400 mb-2 tracking-wider">Sitemap</h5>
                                <div class="flex items-start">
                                    <i data-lucide="check-circle-2" class="h-5 w-5 text-green-400 mr-3 shrink-0 mt-1"></i>
                                    <div>
                                        <span class="font-medium text-green-400">TRUE</span>
                                        <p class="text-xs text-gray-400">A Valid Sitemap has been detected.</p>
                                    </div>
                                </div>
                            </div>
                                      
                            <div class="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col justify-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                <h5 class="text-xs uppercase text-gray-400 mb-2 tracking-wider">Robots.txt</h5>
                                <div class="flex items-start">
                                    <i data-lucide="check-circle-2" class="h-5 w-5 text-green-400 mr-3 shrink-0 mt-1"></i>
                                    <div>
                                        <span class="font-medium text-green-400">TRUE</span>
                                        <p class="text-xs text-gray-400">A valid robots.txt file has been detected.</p>
                                    </div>
                                </div>
                            </div>
                                  
                            <div class="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col justify-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                <h5 class="text-xs uppercase text-gray-400 mb-2 tracking-wider">Start page Deny Flag</h5>
                                <div class="flex items-start">
                                    <i data-lucide="x-circle" class="h-5 w-5 text-red-300 mr-3 shrink-0 mt-1"></i>
                                    <div>
                                        <span class="font-medium text-red-300">FALSE</span>
                                        <p class="text-xs text-gray-400">The start page is accessible to search engines.</p>
                                    </div>
                                </div>
                            </div>
                                  
                            <div class="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col justify-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                <h5 class="text-xs uppercase text-gray-400 mb-2 tracking-wider">HTTP/2 Status</h5>
                                <div class="flex items-start">
                                    <i data-lucide="check-circle-2" class="h-5 w-5 text-green-400 mr-3 shrink-0 mt-1"></i>
                                    <div>
                                        <span class="font-medium text-green-400">TRUE</span>
                                        <p class="text-xs text-gray-400">HTTP/2 is enabled.</p>
                                    </div>
                                </div>
                            </div>
                                  
                            <div class="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col justify-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                <h5 class="text-xs uppercase text-gray-400 mb-2 tracking-wider">Test Canonicalization</h5>
                                <div class="flex items-start">
                                    <i data-lucide="check-circle-2" class="h-5 w-5 text-green-400 mr-3 shrink-0 mt-1"></i>
                                    <div>
                                        <span class="font-medium text-green-400">TRUE</span>
                                        <p class="text-xs text-gray-400">Canonical tags are correctly implemented.</p>
                                    </div>
                                </div>
                            </div>
                                  
                            <div class="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col justify-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                <h5 class="text-xs uppercase text-gray-400 mb-2 tracking-wider">Test www Redirection</h5>
                                <div class="flex items-start">
                                    <i data-lucide="check-circle-2" class="h-5 w-5 text-green-400 mr-3 shrink-0 mt-1"></i>
                                    <div>
                                        <span class="font-medium text-green-400">TRUE</span>
                                        <p class="text-xs text-gray-400">Implemented www to non-www redirection on (Domain Name)</p>
                                    </div>
                                </div>
                            </div>
                                  
                            <div class="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col justify-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                <h5 class="text-xs uppercase text-gray-400 mb-2 tracking-wider">Test Hidden Server Signature</h5>
                                <div class="flex items-start">
                                    <i data-lucide="check-circle-2" class="h-5 w-5 text-green-400 mr-3 shrink-0 mt-1"></i>
                                    <div>
                                        <span class="font-medium text-green-400">TRUE</span>
                                        <p class="text-xs text-gray-400">Hidden Server Signature is hidden from the web crawlers</p>
                                    </div>
                                </div>
                            </div>
                                   
                            <div class="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col justify-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                <h5 class="text-xs uppercase text-gray-400 mb-2 tracking-wider">Test Page Not Found</h5>
                                <div class="flex items-start">
                                    <i data-lucide="check-circle-2" class="h-5 w-5 text-green-400 mr-3 shrink-0 mt-1"></i>
                                    <div>
                                        <span class="font-medium text-green-400">TRUE</span>
                                        <p class="text-xs text-gray-400">website correctly returns a 404 HTTP status code for pages that don't exist.</p>
                                    </div>
                                </div>
                            </div>
                                     
                            <div class="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col justify-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                <h5 class="text-xs uppercase text-gray-400 mb-2 tracking-wider">Test Directory Browsing</h5>
                                <div class="flex items-start">
                                    <i data-lucide="check-circle-2" class="h-5 w-5 text-green-400 mr-3 shrink-0 mt-1"></i>
                                    <div>
                                        <span class="font-medium text-green-400">TRUE</span>
                                        <p class="text-xs text-gray-400">Directory browsing is disabled.</p>
                                    </div>
                                </div>
                            </div>
                                     
                            <div class="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col justify-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                <h5 class="text-xs uppercase text-gray-400 mb-2 tracking-wider">Test HTTPS Redirect</h5>
                                <div class="flex items-start">
                                    <i data-lucide="check-circle-2" class="h-5 w-5 text-green-400 mr-3 shrink-0 mt-1"></i>
                                    <div>
                                        <span class="font-medium text-green-400">TRUE</span>
                                        <p class="text-xs text-gray-400">Home page is redirected from HTTP request to HTTPS request</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="text-sm text-gray-500 mt-6 pt-4 border-t border-gray-700">
                            *This section provides a comprehensive audit of technical aspects critical for SEO and website security.
                        </p>
                    </div>
                </div>
            </section>
  )
}

export default Card3