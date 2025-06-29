import React from 'react'

function Card7() {
  return (
                <section class="mb-12">
                <div class="card p-8 rounded-xl shadow-2xl relative overflow-hidden">
                    {/* <!-- Background Grid/Pattern --> */}
                    <div class="absolute inset-0 z-0 opacity-10" ></div>
                    
                    <div class="relative z-10">
                        <div class="flex items-center mb-8">
                            <i data-lucide="image" class="h-9 w-9 text-blue-400 mr-4 stroke-[2px]"></i>
                            <h3 class="text-3xl font-extrabold text-white tracking-wide">Image & Media</h3>
                        </div>

                        <div class="rounded-lg border border-gray-600 overflow-hidden">
                            <div class="metric-grid-header grid grid-cols-1 sm:grid-cols-[1fr_1fr_2fr]">
                                <span>Field Name</span>
                                <span>Audit Result</span>
                                <span>Description</span>
                            </div>

                            {/* <!-- No Favicon --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">No Favicon</span>
                                <span class="text-green-400 flex items-center">
                                    <i data-lucide="check-circle-2" class="h-4 w-4 mr-2"></i>
                                    0
                                </span>
                                <span class="text-gray-400">The number of pages that do not have a favicon.</span>
                            </div>

                            {/* <!-- No Image Alt --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">No Image Alt</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    10
                                </span>
                                <span class="text-gray-400">The number of pages missing the alt attribute.</span>
                            </div>
                            
                            {/* <!-- No Image Title --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">No Image Title</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    10
                                </span>
                                <span class="text-gray-400">The number of pages without a title attribute.</span>
                            </div>
                        </div>

                        <p class="text-sm text-gray-500 mt-6 pt-4 border-t border-gray-700">
                            *This section provides an audit of image and media related aspects critical for SEO and user experience.
                        </p>
                    </div>
                </div>
            </section>
  )
}


function Card8() {
 return (
               <section class="mb-12">
                <div class="card p-8 rounded-xl shadow-2xl relative overflow-hidden">
                    {/* <!-- Background Grid/Pattern --> */}
                    <div class="absolute inset-0 z-0 opacity-10" ></div>
                    
                    <div class="relative z-10">
                        <div class="flex items-center mb-8">
                            <i data-lucide="globe-lock" class="h-9 w-9 text-blue-400 mr-4 stroke-[2px]"></i>
                            <h3 class="text-3xl font-extrabold text-white tracking-wide">URL Quality & Structure</h3>
                        </div>

                        <div class="rounded-lg border border-gray-600 overflow-hidden">
                            <div class="metric-grid-header grid grid-cols-1 sm:grid-cols-[1fr_1fr_2fr]">
                                <span>Field Name</span>
                                <span>Audit Result</span>
                                <span>Description</span>
                            </div>

                            {/* <!-- SEO Friendly URL --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">SEO Friendly URL</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    10
                                </span>
                                <span class="text-gray-400">A web address designed to be easily understood by both users and search engines.</span>
                            </div>

                            {/* <!-- SEO Friendly URL Characters Check --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">SEO Friendly URL Characters Check</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    10
                                </span>
                                <span class="text-gray-400">Check whether URLs contain only SEO-friendly characters, including lowercase letters (a-z), numbers (0-9), hyphens (-), and forward slashes (/), while avoiding spaces, special characters, and underscores.</span>
                            </div>
                            
                            {/* <!-- SEO Friendly URL Dynamic Check --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">SEO Friendly URL Dynamic Check</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    10
                                </span>
                                <span class="text-gray-400">Verifies whether the URL is static instead of dynamic, avoiding long query strings that can hinder SEO.</span>
                            </div>

                            {/* <!-- SEO Friendly URL Keyword Check --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">SEO Friendly URL Keyword Check</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    10
                                </span>
                                <span class="text-gray-400">Check if the URL includes relevant keywords that reflect the page content and improve search visibility.</span>
                            </div>

                            {/* <!-- SEO Friendly Relative Length Check --> */}
                            <div class="metric-grid">
                                <span class="font-medium text-gray-300">SEO Friendly Relative Length Check</span>
                                <span class="text-red-300 flex items-center">
                                    <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                    10
                                </span>
                                <span class="text-gray-400">This involves ensuring the URL doesn't exceed the recommended length of 50 and 60 Characters to avoid truncation.</span>
                            </div>
                        </div>

                        <p class="text-sm text-gray-500 mt-6 pt-4 border-t border-gray-700">
                            *This section provides an audit of URL quality and structure for SEO optimization.
                        </p>
                    </div>
                </div>
            </section>
 )
}


function Card9() {
    return (
                    <section class="mb-12">
                <div class="card p-8 rounded-xl shadow-2xl relative overflow-hidden">
                    {/* <!-- Background Grid/Pattern --> */}
                    <div class="absolute inset-0 z-0 opacity-10" ></div>
                    
                    <div class="relative z-10">
                        <div class="flex items-center mb-8">
                            <i data-lucide="layout" class="h-9 w-9 text-blue-400 mr-4 stroke-[2px]"></i>
                            <h3 class="text-3xl font-extrabold text-white tracking-wide">Detailed Page Check</h3>
                        </div>

                        {/* <!-- Sub Heading: Meta & Tags --> */}
                        <div class="mb-8 pb-6 border-b border-gray-700">
                            <h4 class="text-xl font-bold text-gray-100 mb-4 flex items-center">
                                <i data-lucide="tag" class="h-5 w-5 text-blue-400 mr-2"></i>
                                Meta & Tags
                            </h4>
                            <div class="rounded-lg border border-gray-600 overflow-hidden">
                                <div class="metric-grid-header grid grid-cols-1 sm:grid-cols-[1fr_1fr_2fr]">
                                    <span>Field Name</span>
                                    <span>Audit Result</span>
                                    <span>Description</span>
                                </div>

                                {/* <!-- Canonical --> */}
                                <div class="metric-grid">
                                    <span class="font-medium text-gray-300">Canonical</span>
                                    <span class="text-red-300 flex items-center">
                                        <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                        10
                                    </span>
                                    <span class="text-gray-400">Check whether canonical tags are implemented correctly to prevent duplicate content.</span>
                                </div>

                                {/* <!-- Duplicate Meta Tags --> */}
                                <div class="metric-grid">
                                    <span class="font-medium text-gray-300">Duplicate Meta Tags</span>
                                    <span class="text-red-300 flex items-center">
                                        <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                        10
                                    </span>
                                    <span class="text-gray-400">Identifies pages that have identical meta tags.</span>
                                </div>
                                
                                {/* <!-- No Description --> */}
                                <div class="metric-grid">
                                    <span class="font-medium text-gray-300">No Description</span>
                                    <span class="text-red-300 flex items-center">
                                        <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                        10
                                    </span>
                                    <span class="text-gray-400">Flags pages that are missing a meta description.</span>
                                </div>

                                {/* <!-- Title Too Long --> */}
                                <div class="metric-grid">
                                    <span class="font-medium text-gray-300">Title Too Long</span>
                                    <span class="text-green-400 flex items-center">
                                        <i data-lucide="check-circle-2" class="h-4 w-4 mr-2"></i>
                                        0
                                    </span>
                                    <span class="text-gray-400">Detects titles exceeding the recommended length (usually 60-70 characters).</span>
                                </div>

                                {/* <!-- Title Too Short --> */}
                                <div class="metric-grid">
                                    <span class="font-medium text-gray-300">Title Too Short</span>
                                    <span class="text-red-300 flex items-center">
                                        <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                        5
                                    </span>
                                    <span class="text-gray-400">Identifies titles that are too short to be meaningful or descriptive min 30 Characters.</span>
                                </div>

                                {/* <!-- No Title --> */}
                                <div class="metric-grid">
                                    <span class="font-medium text-gray-300">No Title</span>
                                    <span class="text-green-400 flex items-center">
                                        <i data-lucide="check-circle-2" class="h-4 w-4 mr-2"></i>
                                        0
                                    </span>
                                    <span class="text-gray-400">Flags pages that lack a title tag.</span>
                                </div>

                                {/* <!-- Duplicate Title Tag --> */}
                                <div class="metric-grid">
                                    <span class="font-medium text-gray-300">Duplicate Title Tag</span>
                                    <span class="text-green-400 flex items-center">
                                        <i data-lucide="check-circle-2" class="h-4 w-4 mr-2"></i>
                                        0
                                    </span>
                                    <span class="text-gray-400">Highlights pages with identical title tags.</span>
                                </div>

                                {/* <!-- Irrelevant Title --> */}
                                <div class="metric-grid">
                                    <span class="font-medium text-gray-300">Irrelevant Title</span>
                                    <span class="text-red-300 flex items-center">
                                        <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                        3
                                    </span>
                                    <span class="text-gray-400">Detects titles that don't accurately reflect the page's content.</span>
                                </div>

                                {/* <!-- Irrelevant Description --> */}
                                <div class="metric-grid">
                                    <span class="font-medium text-gray-300">Irrelevant Description</span>
                                    <span class="text-green-400 flex items-center">
                                        <i data-lucide="check-circle-2" class="h-4 w-4 mr-2"></i>
                                        0
                                    </span>
                                    <span class="text-gray-400">Flags meta descriptions that do not match the actual page content.</span>
                                </div>

                                {/* <!-- Irrelevant Meta Keywords --> */}
                                <div class="metric-grid">
                                    <span class="font-medium text-gray-300">Irrelevant Meta Keywords</span>
                                    <span class="text-green-400 flex items-center">
                                        <i data-lucide="check-circle-2" class="h-4 w-4 mr-2"></i>
                                        0
                                    </span>
                                    <span class="text-gray-400">Identifies meta keywords that are unrelated to the page's content.</span>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Sub Heading: Structure & Content --> */}
                        <div class="mt-8">
                            <h4 class="text-xl font-bold text-gray-100 mb-4 flex items-center">
                                <i data-lucide="columns-2" class="h-5 w-5 text-blue-400 mr-2"></i>
                                Structure & Content
                            </h4>
                            <div class="rounded-lg border border-gray-600 overflow-hidden">
                                <div class="metric-grid-header grid grid-cols-1 sm:grid-cols-[1fr_1fr_2fr]">
                                    <span>Field Name</span>
                                    <span>Audit Result</span>
                                    <span>Description</span>
                                </div>

                                {/* <!-- Frame --> */}
                                <div class="metric-grid">
                                    <span class="font-medium text-gray-300">Frame</span>
                                    <span class="text-green-400 flex items-center">
                                        <i data-lucide="check-circle-2" class="h-4 w-4 mr-2"></i>
                                        0
                                    </span>
                                    <span class="text-gray-400">The presence of &lt;frame&gt; or &lt;iframe&gt; tags on the page.</span>
                                </div>

                                {/* <!-- Large Page Size --> */}
                                <div class="metric-grid">
                                    <span class="font-medium text-gray-300">Large Page Size</span>
                                    <span class="text-green-400 flex items-center">
                                        <i data-lucide="check-circle-2" class="h-4 w-4 mr-2"></i>
                                        0
                                    </span>
                                    <span class="text-gray-400">Pages with excessively large file sizes (typically over 1-2 MB).</span>
                                </div>
                                
                                {/* <!-- Small Page Size --> */}
                                <div class="metric-grid">
                                    <span class="font-medium text-gray-300">Small Page Size</span>
                                    <span class="text-green-400 flex items-center">
                                        <i data-lucide="check-circle-2" class="h-4 w-4 mr-2"></i>
                                        0
                                    </span>
                                    <span class="text-gray-400">Pages with extremely small file sizes of less than 1024 bytes.</span>
                                </div>

                                {/* <!-- No H1 Tag --> */}
                                <div class="metric-grid">
                                    <span class="font-medium text-gray-300">No H1 Tag</span>
                                    <span class="text-red-300 flex items-center">
                                        <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                        5
                                    </span>
                                    <span class="text-gray-400">Pages missing an &lt;h1&gt; heading tag.</span>
                                </div>

                                {/* <!-- Low Content Rate --> */}
                                <div class="metric-grid">
                                    <span class="font-medium text-gray-300">Low Content Rate</span>
                                    <span class="text-red-300 flex items-center">
                                        <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                        10
                                    </span>
                                    <span class="text-gray-400">Low ratio of meaningful text to total page size, indicating thin content.</span>
                                </div>

                                {/* <!-- High Content Rate --> */}
                                <div class="metric-grid">
                                    <span class="font-medium text-gray-300">High Content Rate</span>
                                    <span class="text-green-400 flex items-center">
                                        <i data-lucide="check-circle-2" class="h-4 w-4 mr-2"></i>
                                        0
                                    </span>
                                    <span class="text-gray-400">High ratio of text to page size, which can be good if well-structured.</span>
                                </div>

                                {/* <!-- Low Character Count --> */}
                                <div class="metric-grid">
                                    <span class="font-medium text-gray-300">Low Character Count</span>
                                    <span class="text-red-300 flex items-center">
                                        <i data-lucide="x-circle" class="h-4 w-4 mr-2"></i>
                                        3
                                    </span>
                                    <span class="text-gray-400">The total number of characters on the page is too low Less than 1024 Characters.</span>
                                </div>

                                {/* <!-- High Character Count --> */}
                                <div class="metric-grid">
                                    <span class="font-medium text-gray-300">High Character Count</span>
                                    <span class="text-green-400 flex items-center">
                                        <i data-lucide="check-circle-2" class="h-4 w-4 mr-2"></i>
                                        0
                                    </span>
                                    <span class="text-gray-400">Indicates pages with an unusually high number of characters more than 256000 Characters.</span>
                                </div>

                                {/* <!-- Low Readability Rate --> */}
                                <div class="metric-grid">
                                    <span class="font-medium text-gray-300">Low Readability Rate</span>
                                    <span class="text-green-400 flex items-center">
                                        <i data-lucide="check-circle-2" class="h-4 w-4 mr-2"></i>
                                        0
                                    </span>
                                    <span class="text-gray-400">Less than 15 pts on Flesch-Kincaid readability test.</span>
                                </div>

                                {/* <!-- Deprecated HTML Tags --> */}
                                <div class="metric-grid">
                                    <span class="font-medium text-gray-300">Deprecated HTML Tags</span>
                                    <span class="text-green-400 flex items-center">
                                        <i data-lucide="check-circle-2" class="h-4 w-4 mr-2"></i>
                                        0
                                    </span>
                                    <span class="text-gray-400">The page contains outdated HTML tags.</span>
                                </div>

                                {/* <!-- Flash --> */}
                                <div class="metric-grid">
                                    <span class="font-medium text-gray-300">Flash</span>
                                    <span class="text-green-400 flex items-center">
                                        <i data-lucide="check-circle-2" class="h-4 w-4 mr-2"></i>
                                        0
                                    </span>
                                    <span class="text-gray-400">The page includes Flash content, which is no longer supported by most browsers and search engines.</span>
                                </div>

                                {/* <!-- Lorem Ipsum --> */}
                                <div class="metric-grid">
                                    <span class="font-medium text-gray-300">Lorem Ipsum</span>
                                    <span class="text-green-400 flex items-center">
                                        <i data-lucide="check-circle-2" class="h-4 w-4 mr-2"></i>
                                        0
                                    </span>
                                    <span class="text-gray-400">Placeholder "lorem ipsum" text is present, indicating unfinished content or design and potentially.</span>
                                </div>

                                {/* <!-- Has Misspelling --> */}
                                <div class="metric-grid">
                                    <span class="font-medium text-gray-300">Has Misspelling</span>
                                    <span class="text-green-400 flex items-center">
                                        <i data-lucide="check-circle-2" class="h-4 w-4 mr-2"></i>
                                        {/* null <!-- Assuming 'null' means no misspellings detected, or not applicable --> */}
                                    </span>
                                    <span class="text-gray-400">The page contains spelling errors.</span>
                                </div>
                            </div>
                        </div>

                        <p class="text-sm text-gray-500 mt-6 pt-4 border-t border-gray-700">
                            *This section provides a detailed audit of individual page elements, including meta tags, titles, and content structure, to ensure optimal on-page SEO and user experience.
                        </p>
                    </div>
                </div>
            </section>
    )
}



export {Card7 , Card8 , Card9}