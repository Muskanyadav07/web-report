import React from 'react'

function Card4() {
  return (
            <section class="mb-12">
                <div class="card p-8 rounded-xl shadow-2xl relative overflow-hidden">
                        
                    <div class="absolute inset-0 z-0 opacity-10" ></div>
                    
                    <div class="relative z-10">
                        <div class="flex items-center mb-8">
                            <i data-lucide="file-text" class="h-9 w-9 text-blue-400 mr-4 stroke-[2px]"></i>
                            <h3 class="text-3xl font-extrabold text-white tracking-wide">Page Level Metrics</h3>
                        </div>

                        <div class="rounded-lg border border-gray-600 overflow-hidden">
                            <div class="metric-grid-header grid grid-cols-1 sm:grid-cols-[1fr_1fr_2fr]">
                                <span>Field Name</span>
                                <span>Audit Result</span>
                                <span>Description</span>
                            </div>

                                      
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Page Not Found Status Code</span>
                                <span class="text-yellow-400 flex items-center">
                                    <i data-lucide="alert-triangle" class="h-4 w-4 mr-2"></i>
                                    200
                                </span>
                                <span class="text-gray-400">OK, Confuses crawlers (soft 404)</span>
                            </div>

                                 
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Canonicalization Status Code</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    403
                                </span>
                                <span class="text-gray-400">Server refusing to authorize resource (Access Denied)</span>
                            </div>
                            
                                      
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Directory Browsing Status Code</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    200
                                </span>
                                <span class="text-gray-400">Directory browsing is enabled (potential security risk)</span>
                            </div>

                                  
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">www Redirect Status Code</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    200
                                </span>
                                <span class="text-gray-400">No www to non-www redirection implemented</span>
                            </div>

                            
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">High Waiting Time</span>
                                <span class="text-yellow-400 flex items-center">
                                    <i data-lucide="alert-triangle" class="h-4 w-4 mr-2"></i>
                                    500ms
                                </span>
                                <span class="text-gray-400">Pages where overall loading time exceeds 1.5 seconds.</span>
                            </div>

                           
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">High Loading Time</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    4s
                                </span>
                                <span class="text-gray-400">Pages where overall loading time exceeds 3 seconds.</span>
                            </div>

                            
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Size Greater than 3MB</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    5 pages
                                </span>
                                <span class="text-gray-400">Number of pages exceeding 3 MB.</span>
                            </div>
                        </div>

                        <p class="text-sm text-gray-500 mt-6 pt-4 border-t border-gray-700">
                            *This section provides a detailed breakdown of individual page-level metrics and their audit results.
                        </p>
                    </div>
                </div>
            </section>
  )
}

export default Card4