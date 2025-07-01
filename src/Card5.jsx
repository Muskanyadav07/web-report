import React from 'react'
import { List , CheckCircle2, XCircle} from 'lucide-react'

function Card5() {
    const imagiURL = 'data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm0 36v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 36v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM12 34v-4H10v4H6v2h4v4h2v-4h4v-2h-4zm0-30V0H10v4H6v2h4v4h2V6h4V4h-4zm0 36v-4H10v4H6v2h4v4h2v-4h4v-2h-4zm0 36v-4H10v4H6v2h4v4h2v-4h4v-2h-4z\' fill=\'%239C92AC\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'
  return (
               <section className ="mb-12">
                <div className="card p-8 rounded-xl shadow-2xl relative overflow-hidden">
                    {/* <!-- Background Grid/Pattern --> */}
                    <div className ="absolute inset-0 z-0 opacity-10" style={{backgroundImage: `url(${imagiURL})`}}></div>
                    
                    <div className="relative z-10">
                        <div className="flex items-center mb-8">
                            <List className="h-9 w-9 text-blue-400 mr-4 stroke-[2px]"/>
                            {/* <i data-lucide="list" ></i> */}
                            <h3 className="text-3xl font-extrabold text-white tracking-wide">Link & Content Metrics</h3>
                        </div>

                        <div className="rounded-lg border border-gray-600 overflow-hidden">
                            <div className="metric-grid-header grid grid-cols-1 sm:grid-cols-[1fr_1fr_2fr]">
                                <span>Field Name</span>
                                <span>Audit Result</span>
                                <span>Description</span>
                            </div>

                            {/* <!-- External Links --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">External Links</span>
                                <span className="text-green-400 flex items-center">
                                    <CheckCircle2 className="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="check-circle-2" ></i> */}
                                    46
                                </span>
                                <span className="text-gray-400">External links, also known as outbound links, are hyperlinks on a website that direct users to another website or domain.</span>
                            </div>

                            {/* <!-- Internal Links --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">Internal Links</span>
                                <span className="text-green-400 flex items-center">
                                      <CheckCircle2 className="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="check-circle-2" className="h-4 w-4 mr-2"></i> */}
                                    202
                                </span>
                                <span className="text-gray-400">Internal links are hyperlinks that point to another page or resource within the same website or domain.</span>
                            </div>
                            
                            {/* <!-- Duplicate Title --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">Duplicate Title</span>
                                <span className="text-red-300 flex items-center">
                                    <XCircle className="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="x-circle" ></i> */}
                                    3
                                </span>
                                <span className="text-gray-400">Duplicate titles occur when multiple web pages on a website share the same title tag.</span>
                            </div>

                            {/* <!-- Duplicate Description --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">Duplicate Description</span>
                                <span className="text-red-300 flex items-center">
                                     <XCircle className="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="x-circle" className="h-4 w-4 mr-2"></i> */}
                                    0
                                </span>
                                <span className="text-gray-400">Duplicate descriptions on a website, specifically duplicate meta descriptions, refer to the same text appearing as the meta description on multiple pages.</span>
                            </div>

                            {/* <!-- Duplicate Content --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">Duplicate Content</span>
                                <span className="text-red-300 flex items-center">
                                     <XCircle className="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="x-circle" className="h-4 w-4 mr-2"></i> */}
                                    3
                                </span>
                                <span className="text-gray-400">The same or almost similar content appears on multiple URLs, either on the same website or across different websites.</span>
                            </div>

                            {/* <!-- Broken Links --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">Broken Links</span>
                                <span className="text-red-300 flex items-center">
                                     <XCircle className="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="x-circle" className="h-4 w-4 mr-2"></i> */}
                                    0
                                </span>
                                <span className="text-gray-400">A broken link is a hyperlink that points to a page or resource that does not exist.</span>
                            </div>

                            {/* <!-- Broken Resources --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">Broken Resources</span>
                                <span className="text-red-300 flex items-center">
                                     <XCircle className="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="x-circle" className="h-4 w-4 mr-2"></i> */}
                                    0
                                </span>
                                <span className="text-gray-400">A "Broken Resources" error identifies files like images, stylesheets, or scripts that the website cannot load.</span>
                            </div>

                            {/* <!-- Links Relation Conflict --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">Links Relation Conflict</span>
                                <span className="text-red-300 flex items-center">
                                     <XCircle className="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="x-circle" className="h-4 w-4 mr-2"></i> */}
                                    0
                                </span>
                                <span className="text-gray-400">A "Link relation conflicts" error indicates inconsistencies in how a website is instructing search engines about which pages should be considered primary or preferred for indexing.</span>
                            </div>

                            {/* <!-- Redirect Loop --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">Redirect Loop</span>
                                <span className="text-red-300 flex items-center">
                                     <XCircle className="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="x-circle" className="h-4 w-4 mr-2"></i> */}
                                    0
                                </span>
                                <span className="text-gray-400">A "Redirect loop" error occurs when a page redirects to another page, and that second page then redirects back to the original page, creating an endless loop.</span>
                            </div>

                            {/* <!-- Non Indexable --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">Non Indexable</span>
                                <span className="text-red-300 flex items-center">
                                     <XCircle className="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="x-circle" className="h-4 w-4 mr-2"></i> */}
                                    0
                                </span>
                                <span className="text-gray-400">A non-indexable URL indicates that a search engine won't index a specific page or URL.</span>
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
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">Is Link Relation Conflicts</span>
                                <span className="text-red-300 flex items-center">
                                     <XCircle className="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="x-circle" className="h-4 w-4 mr-2"></i> */}
                                    0
                                </span>
                                <span className="text-gray-400">When a page receives both nofollow and dofollow links from internal pages.</span>
                            </div>

                            {/* <!-- HTTPS to HTTP Links --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">HTTPS to HTTP Links</span>
                                <span className="text-red-300 flex items-center">
                                     <XCircle className="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="x-circle" className="h-4 w-4 mr-2"></i> */}
                                    0
                                </span>
                                <span className="text-gray-400">Web links that redirect the user from a secure (HTTPS) website to an insecure (HTTP) website.</span>
                            </div>
                        </div>

                        <p className="text-sm text-gray-500 mt-6 pt-4 border-t border-gray-700">
                            *This section provides insights into the link profile and content quality of your website.
                        </p>
                    </div>
                </div>
            </section>

            
  )
}

export default Card5