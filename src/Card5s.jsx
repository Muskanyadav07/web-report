import React from 'react'

function Card5s() {
  return (
                <section class="mb-12">
                <div class="card p-8 rounded-xl shadow-2xl relative overflow-hidden">
                    {/* <!-- Background Grid/Pattern --> */}
                    <div class="absolute inset-0 z-0 opacity-10" ></div>
                    
                    <div class="relative z-10">
                        <div class="flex items-center mb-8">
                            <i data-lucide="link" class="h-9 w-9 text-blue-400 mr-4 stroke-[2px]"></i>
                            <h3 class="text-3xl font-extrabold text-white tracking-wide">Protocol, Redirect & Status Code</h3>
                        </div>

                        <div class="rounded-lg border border-gray-600 overflow-hidden">
                            <div class="metric-grid-header grid grid-cols-1 sm:grid-cols-[1fr_1fr_2fr]">
                                <span>Field Name</span>
                                <span>Audit Result</span>
                                <span>Description</span>
                            </div>

                            {/* <!-- Is HTTPS --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Is HTTPS</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    FALSE
                                </span>
                                <span class="text-gray-400">Number of Pages with HTTP Protocol (If the Value is less than the Total Pages it is an Error)</span>
                            </div>

                            {/* <!-- Is Redirect --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Is Redirect</span>
                                <span class="text-yellow-400 flex items-center">
                                    <i data-lucide="alert-triangle" class="h-4 w-4 mr-2"></i>
                                    302
                                </span>
                                <span class="text-gray-400">Found - Moved Temporary - The resource is temporarily located at a different URL</span>
                            </div>
                            
                            {/* <!-- Is Broken --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Is Broken</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    404
                                </span>
                                <span class="text-gray-400">Not Found - Page missing or incorrect URL</span>
                            </div>

                            {/* <!-- Is 4xx Code --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Is 4xx Code</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    403
                                </span>
                                <span class="text-gray-400">Forbidden - Access denied (unfulfilled, is a problem)</span>
                            </div>

                            {/* <!-- Is 5xx Code --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Is 5xx Code</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    500
                                </span>
                                <span class="text-gray-400">Internal Server Error - Server misconfiguration</span>
                            </div>

                            {/* <!-- Is www --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Is www</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    FALSE
                                </span>
                                <span class="text-gray-400">If the Value is more than Zero AND Not Equal to the Total Pages it is an error</span>
                            </div>

                            {/* <!-- Has Meta Refresh Redirect --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Has Meta Refresh Redirect</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    10 pages
                                </span>
                                <span class="text-gray-400">The number of pages with a meta http-equiv="refresh" tag that instructs a browser to load another page after a specified period.</span>
                            </div>

                            {/* <!-- Has Render Blocking resources --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Has Render Blocking resources</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    10 pages
                                </span>
                                <span class="text-gray-400">Pages with render-blocking resources.</span>
                            </div>

                            {/* <!-- Redirect chain --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Redirect chain</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    1 page
                                </span>
                                <span class="text-gray-400">A redirect chain occurs when a website encounters multiple redirects between the initial and final URLs.</span>
                            </div>

                            {/* <!-- Canonical chain --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Canonical chain</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    0
                                </span>
                                <span class="text-gray-400">Pages canonical tag points to another page, which in turn also points to another page, and so on, creating a chain of redirects.</span>
                            </div>

                            {/* <!-- Canonical To Broken --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Canonical To Broken</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    0
                                </span>
                                <span class="text-gray-400">A broken link or a canonical tag pointing to a non-working URL.</span>
                            </div>

                            {/* <!-- Canonical To Redirect --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Canonical To Redirect</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    0
                                </span>
                                <span class="text-gray-400">A canonical tag on a page points to a URL that redirects to another page.</span>
                            </div>

                            {/* <!-- Has Links To Redirects --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Has Links To Redirects</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    0
                                </span>
                                <span class="text-gray-400">A page that has links to redirects that indicate a page on your website is either being redirected to another URL or links to external or internal URLs that return a 3xx redirect status code.</span>
                            </div>

                            {/* <!-- Recursive Canonical --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Recursive Canonical</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    0
                                </span>
                                <span class="text-gray-400">A canonical tag on a page points to a URL that redirects to another page, eventually redirecting the user back to the original page, forming a loop.</span>
                            </div>
                        </div>

                        <p class="text-sm text-gray-500 mt-6 pt-4 border-t border-gray-700">
                            *This section provides an audit of various protocol, redirection, and status code related metrics.
                        </p>
                    </div>
                </div>
            </section>
  )
}

export default Card5s