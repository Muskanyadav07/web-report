import React from 'react'

function Card2() {
  return (
         <section class="mb-12">
                <div class="card p-8 rounded-xl shadow-2xl relative overflow-hidden">
                        
                    <div class="absolute inset-0 z-0 opacity-10" ></div>
                    
                    <div class="relative z-10">
                        <div class="flex items-center mb-8">
                            <i data-lucide="globe" class="h-9 w-9 text-blue-400 mr-4 stroke-[2px]"></i>
                            <h3 class="text-3xl font-extrabold text-white tracking-wide">Domain, Server & SSL Audit</h3>
                        </div>

                               
                        <div class="mb-8 pb-6 border-b border-gray-700">
                            <h4 class="text-xl font-bold text-gray-100 mb-4 flex items-center">
                                <i data-lucide="server" class="h-5 w-5 text-blue-400 mr-2"></i>
                                
                            </h4>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                       
                                <div class="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600">
                                    <p class="text-xs uppercase text-gray-400 mb-1 tracking-wider">Target Domain</p>
                                    <p class="text-lg font-semibold text-gray-100">deplidigital.com</p>
                                </div>
                                      
                                <div class="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600">
                                    <p class="text-xs uppercase text-gray-400 mb-1 tracking-wider">On Page Score</p>
                                    <p id="on-page-score-result" class="text-lg font-semibold text-green-400">91.03</p>
                                </div>
                            </div>
                                 
                            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                         
                                <div class="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600">
                                    <p class="text-xs uppercase text-gray-400 mb-1 tracking-wider">CMS System</p>
                                    <p class="text-lg font-semibold text-gray-100">Wordpress</p>
                                </div>
                                        
                                <div class="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600">
                                    <p class="text-xs uppercase text-gray-400 mb-1 tracking-wider">IP Address</p>
                                    <p class="text-lg font-semibold text-gray-100">147.93.99.93</p>
                                </div>
                                          
                                <div class="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600">
                                    <p class="text-xs uppercase text-gray-400 mb-1 tracking-wider">Web Server</p>
                                    <p class="text-lg font-semibold text-gray-100">LiteSpeed</p>
                                </div>
                            </div>
                        </div>

                              
                        <div class="mt-8">
                            <h4 class="text-xl font-bold text-gray-100 mb-4 flex items-center">
                                <i data-lucide="lock" class="h-5 w-5 text-blue-400 mr-2"></i>
                                SSL & Security Audit
                            </h4>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                        
                                <div id="ssl-certification-status-container" class="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex items-center justify-between">
                                    <div>
                                        <p class="text-xs uppercase text-gray-400 mb-1 tracking-wider">SSL Status</p>
                                        <p id="ssl-status-text" class="text-lg font-semibold text-green-400">TRUE</p>
                                    </div>
                                    <i id="ssl-status-icon" data-lucide="check-circle-2" class="h-8 w-8 text-green-400 stroke-[2px]"></i>
                                </div>
                                         
                                <div id="ssl-expiration-container" class="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex items-center justify-between">
                                    <div>
                                        <p class="text-xs uppercase text-gray-400 mb-1 tracking-wider">Expiration Date</p>
                                        <p id="ssl-expiration-text" class="text-lg font-semibold text-yellow-400">2025-06-19 02:59:00 +00:00</p>
                                    </div>
                                    <i data-lucide="calendar" class="h-8 w-8 text-yellow-400 stroke-[2px]"></i>
                                </div>
                            </div>

                                   
                            <div class="bg-[#3f4a5a] p-6 rounded-lg border border-gray-600">
                                <h5 class="text-sm uppercase text-gray-400 mb-4 tracking-wider">Certificate Details</h5>
                                <div class="space-y-3 text-sm">
                                    <div class="flex flex-col sm:flex-row sm:items-center">
                                        <span class="font-medium text-gray-300 sm:w-1/4">Authority:</span>
                                        <span class="text-gray-200 break-words sm:w-3/4">CN=ZeroSSL RSA Domain Secure Site CA, O=ZeroSSL, C=AT</span>
                                    </div>
                                    <div class="flex flex-col sm:flex-row sm:items-center">
                                        <span class="font-medium text-gray-300 sm:w-1/4">Subject:</span>
                                        <span class="text-gray-200 break-words sm:w-3/4">CN=deplidigital.com</span>
                                    </div>
                                    <div class="flex flex-col sm:flex-row sm:items-center">
                                        <span class="font-medium text-gray-300 sm:w-1/4">Version:</span>
                                        <span class="text-gray-200 break-words sm:w-3/4">3</span>
                                    </div>
                                    <div class="flex flex-col sm:flex-row sm:items-center">
                                        <span class="font-medium text-gray-300 sm:w-1/4">Hash:</span>
                                        <span class="text-gray-200 break-words sm:w-3/4">sha384RSA</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="text-sm text-gray-500 mt-4">
                            *Comprehensive audit of your domain, server configuration, and SSL certificate for optimal security and performance.
                        </p>
                    </div>
                </div>
            </section>
  )
}

export default Card2