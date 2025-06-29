import React from 'react'

function Cards() {
  return (
       <section class="mb-12">
                <div class="card p-8 rounded-xl shadow-2xl relative overflow-hidden">
                         Background Grid/Pattern for tech touch 
                    <div class="absolute inset-0 z-0 opacity-10" ></div>
                    
                    <div class="relative z-10">
                        <div class="flex items-center mb-8">
                            <i data-lucide="activity" class="h-9 w-9 text-blue-400 mr-4 stroke-[2px]"></i>
                            <h3 class="text-3xl font-extrabold text-white tracking-wide">Crawling Status</h3>
                        </div>

                         
                        <div class="space-y-4 mb-8 pb-6 border-b border-gray-700">
                            <h4 class="text-xl font-bold text-gray-100 mb-4 flex items-center">
                                <i data-lucide="zap" class="h-5 w-5 text-blue-400 mr-2"></i>
                                
                            </h4>
                            <div id="crawl-session-status" class="bg-[#3f4a5a] p-5 rounded-lg border border-gray-600 flex items-center justify-between">
                                <div>
                                    <p id="session-status-text" class="text-lg font-semibold text-red-300">Session: In Progress</p>
                                    <p id="session-status-description" class="text-sm text-gray-400">The crawling session is currently active.</p>
                                </div>
                                <i id="session-status-icon" data-lucide="rotate-cw" class="h-8 w-8 text-red-300 stroke-[2px]"></i>
                            </div>
                            <p class="text-sm text-gray-500 mt-4">
                                *Real-time status of the crawling session. 'Finished' is displayed in Green upon completion.
                            </p>
                        </div>

                           
                        <div class="mt-8">
                            <h4 class="text-xl font-bold text-gray-100 mb-4 flex items-center">
                                <i data-lucide="bar-chart-2" class="h-5 w-5 text-blue-400 mr-2"></i>
                                
                            </h4>

                                
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                     
                                <div id="detailed-crawl-status-container" class="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col justify-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                    <h5 class="text-xs uppercase text-gray-400 mb-2 tracking-wider">Current Audit Detail</h5>
                                    <li class="flex items-start">
                                        <i id="detailed-status-icon" data-lucide="check-circle-2" class="h-5 w-5 text-green-400 mr-3 shrink-0 mt-1"></i>
                                        <div>
                                            <span id="detailed-status-title" class="font-medium text-green-400">No Errors</span>
                                            <p class="text-xs text-gray-400">No crawling errors were detected.</p>
                                        </div>
                                    </li>
                                </div>

                                    
                                <div id="crawl-stop-reason-container" class="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col justify-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                    <h5 class="text-xs uppercase text-gray-400 mb-2 tracking-wider">Crawl Stop Reason</h5>
                                    <li class="flex items-start">
                                        <i id="stop-reason-icon" data-lucide="info" class="h-5 w-5 text-blue-400 mr-3 shrink-0 mt-1"></i>
                                        <div>
                                            <span id="stop-reason-title" class="font-medium text-blue-400">Limited Exceeded</span>
                                            <p class="text-xs text-gray-400">Max Crawl Pages Limit was Exceeded.</p>
                                        </div>
                                    </li>
                                </div>
                            </div>

                                 
                            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                 
                                <div class="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col items-center justify-center text-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                    <p class="text-xs uppercase text-gray-400 mb-1 tracking-wider">Max Pages</p>
                                    <p class="text-3xl font-bold text-green-400 leading-none">10</p>
                                </div>

                                    
                                <div class="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col items-center justify-center text-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                    <p class="text-xs uppercase text-gray-400 mb-1 tracking-wider">In Queue</p>
                                    <p class="text-3xl font-bold text-green-400 leading-none">0</p>
                                </div>

                                     
                                <div class="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col items-center justify-center text-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                    <p class="text-xs uppercase text-gray-400 mb-1 tracking-wider">Crawled</p>
                                    <p class="text-3xl font-bold text-green-400 leading-none">10</p>
                                </div>
                            </div>
                            
                            <p class="text-sm text-gray-500 mt-4">
                                *Overview of session metrics, current detailed crawl audit finding, and the reason for the crawl cessation.
                            </p>
                        </div>

                        <p class="text-sm text-gray-500 mt-6 pt-4 border-t border-gray-700">
                            *This report provides real-time insights into your website's crawlability by search engine bots. Optimizing queue management is critical for comprehensive and efficient indexing of your web assets.
                        </p>
                    </div>
                </div>
            </section>
  )
}

export default Cards