import React from 'react'

function Card5() {
  return (
               <section class="mb-12">
                <div class="card p-8 rounded-xl shadow-2xl relative overflow-hidden">
                    {/* <!-- Background Grid/Pattern --> */}
                    <div class="absolute inset-0 z-0 opacity-10" ></div>
                    
                    <div class="relative z-10">
                        <div class="flex items-center mb-8">
                            <i data-lucide="list" class="h-9 w-9 text-blue-400 mr-4 stroke-[2px]"></i>
                            <h3 class="text-3xl font-extrabold text-white tracking-wide">Link & Content Metrics</h3>
                        </div>

                        <div class="rounded-lg border border-gray-600 overflow-hidden">
                            <div class="metric-grid-header grid grid-cols-1 sm:grid-cols-[1fr_1fr_2fr]">
                                <span>Field Name</span>
                                <span>Audit Result</span>
                                <span>Description</span>
                            </div>

                            {/* <!-- External Links --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">External Links</span>
                                <span class="text-green-400 flex items-center">
                                    <i data-lucide="check-circle-2" class="h-4 w-4 mr-2"></i>
                                    46
                                </span>
                                <span class="text-gray-400">External links, also known as outbound links, are hyperlinks on a website that direct users to another website or domain.</span>
                            </div>

                            {/* <!-- Internal Links --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Internal Links</span>
                                <span class="text-green-400 flex items-center">
                                    <i data-lucide="check-circle-2" class="h-4 w-4 mr-2"></i>
                                    202
                                </span>
                                <span class="text-gray-400">Internal links are hyperlinks that point to another page or resource within the same website or domain.</span>
                            </div>
                            
                            {/* <!-- Duplicate Title --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Duplicate Title</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    3
                                </span>
                                <span class="text-gray-400">Duplicate titles occur when multiple web pages on a website share the same title tag.</span>
                            </div>

                            {/* <!-- Duplicate Description --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Duplicate Description</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    0
                                </span>
                                <span class="text-gray-400">Duplicate descriptions on a website, specifically duplicate meta descriptions, refer to the same text appearing as the meta description on multiple pages.</span>
                            </div>

                            {/* <!-- Duplicate Content --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Duplicate Content</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    3
                                </span>
                                <span class="text-gray-400">The same or almost similar content appears on multiple URLs, either on the same website or across different websites.</span>
                            </div>

                            {/* <!-- Broken Links --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Broken Links</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    0
                                </span>
                                <span class="text-gray-400">A broken link is a hyperlink that points to a page or resource that does not exist.</span>
                            </div>

                            {/* <!-- Broken Resources --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Broken Resources</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    0
                                </span>
                                <span class="text-gray-400">A "Broken Resources" error identifies files like images, stylesheets, or scripts that the website cannot load.</span>
                            </div>

                            {/* <!-- Links Relation Conflict --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Links Relation Conflict</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    0
                                </span>
                                <span class="text-gray-400">A "Link relation conflicts" error indicates inconsistencies in how a website is instructing search engines about which pages should be considered primary or preferred for indexing.</span>
                            </div>

                            {/* <!-- Redirect Loop --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Redirect Loop</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    0
                                </span>
                                <span class="text-gray-400">A "Redirect loop" error occurs when a page redirects to another page, and that second page then redirects back to the original page, creating an endless loop.</span>
                            </div>

                            {/* <!-- Non Indexable --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Non Indexable</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    0
                                </span>
                                <span class="text-gray-400">A non-indexable URL indicates that a search engine won't index a specific page or URL.</span>
                            </div>

                            {/* <!-- On Page Score -->
                            <!-- REMOVED: <div class="metric-grid">
                                <span class="font-medium text-gray-300">On Page Score</span>
                                <span class="text-green-400 flex items-center">
                                    <i data-lucide="check-circle-2" class="h-4 w-4 mr-2"></i>
                                    91.03
                                </span>
                                <span class="text-gray-400">The website is Optimized on On Page with a Score of 0 - 100.</span>
                            </div> --> */}

                             {/* <!-- Is Link Relation Conflicts --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Is Link Relation Conflicts</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    0
                                </span>
                                <span class="text-gray-400">When a page receives both nofollow and dofollow links from internal pages.</span>
                            </div>

                            {/* <!-- HTTPS to HTTP Links --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">HTTPS to HTTP Links</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    0
                                </span>
                                <span class="text-gray-400">Web links that redirect the user from a secure (HTTPS) website to an insecure (HTTP) website.</span>
                            </div>
                        </div>

                        <p class="text-sm text-gray-500 mt-6 pt-4 border-t border-gray-700">
                            *This section provides insights into the link profile and content quality of your website.
                        </p>
                    </div>
                </div>
            </section>

            
  )
}

export default Card5