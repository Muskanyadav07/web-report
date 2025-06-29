import React from 'react'

function Card6() {
  return (
               <section class="mb-12">
                <div class="card p-8 rounded-xl shadow-2xl relative overflow-hidden">
                    {/* <!-- Background Grid/Pattern --> */}
                    <div class="absolute inset-0 z-0 opacity-10" ></div>
                    
                    <div class="relative z-10">
                        <div class="flex items-center mb-8">
                            <i data-lucide="fingerprint" class="h-9 w-9 text-blue-400 mr-4 stroke-[2px]"></i>
                            <h3 class="text-3xl font-extrabold text-white tracking-wide">Indexing, Accessibility & Encoding</h3>
                        </div>

                        <div class="rounded-lg border border-gray-600 overflow-hidden">
                            <div class="metric-grid-header grid grid-cols-1 sm:grid-cols-[1fr_1fr_2fr]">
                                <span>Field Name</span>
                                <span>Audit Result</span>
                                <span>Description</span>
                            </div>

                            {/* <!-- Is Orphan Page --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Is Orphan Page</span>
                                <span class="text-green-400 flex items-center">
                                    <i data-lucide="check-circle-2" class="h-4 w-4 mr-2"></i>
                                    0
                                </span>
                                <span class="text-gray-400">Web pages that are not linked to any other pages on a website.</span>
                            </div>

                            {/* <!-- No Doctype --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">No Doctype</span>
                                <span class="text-green-400 flex items-center">
                                    <i data-lucide="check-circle-2" class="h-4 w-4 mr-2"></i>
                                    0
                                </span>
                                <span class="text-gray-400">No doctype declaration in an HTML document.</span>
                            </div>
                            
                            {/* <!-- No Encoding Meta Tag --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">No Encoding Meta Tag</span>
                                <span class="text-green-400 flex items-center">
                                    <i data-lucide="check-circle-2" class="h-4 w-4 mr-2"></i>
                                    0
                                </span>
                                <span class="text-gray-400">A "No Encoding" meta tag doesn't exist in standard HTML, Tag &lt;meta charset=?&gt;.</span>
                            </div>

                            {/* <!-- Meta Charset --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Meta Charset</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    10
                                </span>
                                <span class="text-gray-400">A website should use &lt;meta charset="utf-8"&gt; in its HTML to specify that the document is encoded in UTF-8.</span>
                            </div>

                            {/* <!-- No Content Encoding --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">No Content Encoding</span>
                                <span class="text-green-400 flex items-center">
                                    <i data-lucide="check-circle-2" class="h-4 w-4 mr-2"></i>
                                    0
                                </span>
                                <span class="text-gray-400">Web pages or data are compressed and transmitted, often due to incompatibility between the server and the browser.</span>
                            </div>

                            {/* <!-- Has HTML doctype --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">Has HTML doctype</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    10
                                </span>
                                <span class="text-gray-400">Web Pages with HTML doctype declaration</span>
                            </div>
                        </div>

                        <p class="text-sm text-gray-500 mt-6 pt-4 border-t border-gray-700">
                            *This section evaluates your website's indexing, accessibility, and content encoding practices.
                        </p>
                    </div>
                </div>
            </section>
  )
}

export default Card6
