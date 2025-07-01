import React from 'react'
import { AlertCircle, AlertTriangle, Link, XCircle } from 'lucide-react'

function Card5s() {
     const imaagURL = 'data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm0 36v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 36v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM12 34v-4H10v4H6v2h4v4h2v-4h4v-2h-4zm0-30V0H10v4H6v2h4v4h2V6h4V4h-4zm0 36v-4H10v4H6v2h4v4h2v-4h4v-2h-4zm0 36v-4H10v4H6v2h4v4h2v-4h4v-2h-4z\' fill=\'%239C92AC\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'
  return (
                <section className="mb-12">
                <div className="card p-8 rounded-xl shadow-2xl relative overflow-hidden">
                    {/* <!-- Background Grid/Pattern --> */}
                    <div className="absolute inset-0 z-0 opacity-10" style={{backgroundImage: `url(${imaagURL})`}} ></div>
                    
                    <div className="relative z-10">
                        <div className="flex items-center mb-8">
                            <Link className="h-9 w-9 text-blue-400 mr-4 stroke-[2px]"/>
                            {/* <i data-lucide="link" ></i> */}
                            <h3 className="text-3xl font-extrabold text-white tracking-wide">Protocol, Redirect & Status Code</h3>
                        </div>

                        <div className="rounded-lg border border-gray-600 overflow-hidden">
                            <div className="metric-grid-header grid grid-cols-1 sm:grid-cols-[1fr_1fr_2fr]">
                                <span>Field Name</span>
                                <span>Audit Result</span>
                                <span>Description</span>
                            </div>

                            {/* <!-- Is HTTPS --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">Is HTTPS</span>
                                <span className="text-red-300 flex items-center">
                                    <XCircle className="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="x-circle" ></i> */}
                                    FALSE
                                </span>
                                <span className="text-gray-400">Number of Pages with HTTP Protocol (If the Value is less than the Total Pages it is an Error)</span>
                            </div>

                            {/* <!-- Is Redirect --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">Is Redirect</span>
                                <span className="text-yellow-400 flex items-center">
                                    <AlertTriangle className="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="alert-triangle" ></i> */}
                                    302
                                </span>
                                <span className="text-gray-400">Found - Moved Temporary - The resource is temporarily located at a different URL</span>
                            </div>
                            
                            {/* <!-- Is Broken --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">Is Broken</span>
                                <span className="text-red-300 flex items-center">
                                    <XCircle  className="h-4 w-4 mr-2" />
                                    {/* <i data-lucide="x-circle"></i> */}
                                    404
                                </span>
                                <span className="text-gray-400">Not Found - Page missing or incorrect URL</span>
                            </div>

                            {/* <!-- Is 4xx Code --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">Is 4xx Code</span>
                                <span className="text-red-300 flex items-center">
                                    <XCircle className="h-4 w-4 mr-2" />
                                    {/* <i data-lucide="x-circle" ></i> */}
                                    403
                                </span>
                                <span className="text-gray-400">Forbidden - Access denied (unfulfilled, is a problem)</span>
                            </div>

                            {/* <!-- Is 5xx Code --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">Is 5xx Code</span>
                                <span className="text-red-300 flex items-center">
                                    <XCircle className="h-4 w-4 mr-2" />
                                    {/* <i data-lucide="x-circle" ></i> */}
                                    500
                                </span>
                                <span className="text-gray-400">Internal Server Error - Server misconfiguration</span>
                            </div>

                            {/* <!-- Is www --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">Is www</span>
                                <span className="text-red-300 flex items-center">
                                    <XCircle className="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="x-circle" ></i> */}
                                    FALSE
                                </span>
                                <span className="text-gray-400">If the Value is more than Zero AND Not Equal to the Total Pages it is an error</span>
                            </div>

                            {/* <!-- Has Meta Refresh Redirect --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">Has Meta Refresh Redirect</span>
                                <span className="text-red-300 flex items-center">
                                    <XCircle className="h-4 w-4 mr-2" />
                                    {/* <i data-lucide="x-circle" ></i> */}
                                    10 pages
                                </span>
                                <span className="text-gray-400">The number of pages with a meta http-equiv="refresh" tag that instructs a browser to load another page after a specified period.</span>
                            </div>

                            {/* <!-- Has Render Blocking resources --> */}
                            <div className="metric-grid">
                                <span class="font-medium text-gray-300">Has Render Blocking resources</span>
                                <span className="text-red-300 flex items-center">
                                    <XCircle className="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="x-circle" ></i> */}
                                    10 pages
                                </span>
                                <span className="text-gray-400">Pages with render-blocking resources.</span>
                            </div>

                            {/* <!-- Redirect chain --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">Redirect chain</span>
                                <span className="text-red-300 flex items-center">
                                    <XCircle className="h-4 w-4 mr-2" />
                                    <i data-lucide="x-circle" ></i>
                                    1 page
                                </span>
                                <span className="text-gray-400">A redirect chain occurs when a website encounters multiple redirects between the initial and final URLs.</span>
                            </div>

                            {/* <!-- Canonical chain --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">Canonical chain</span>
                                <span className="text-red-300 flex items-center">
                                    <XCircle className="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="x-circle" ></i> */}
                                    0
                                </span>
                                <span className="text-gray-400">Pages canonical tag points to another page, which in turn also points to another page, and so on, creating a chain of redirects.</span>
                            </div>

                            {/* <!-- Canonical To Broken --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">Canonical To Broken</span>
                                <span className="text-red-300 flex items-center">
                                    <XCircle className="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="x-circle" className="h-4 w-4 mr-2"></i> */}
                                    0
                                </span>
                                <span className="text-gray-400">A broken link or a canonical tag pointing to a non-working URL.</span>
                            </div>

                            {/* <!-- Canonical To Redirect --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">Canonical To Redirect</span>
                                <span className="text-red-300 flex items-center">
                                    <XCircle className="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="x-circle" className="h-4 w-4 mr-2"></i> */}
                                    0
                                </span>
                                <span className="text-gray-400">A canonical tag on a page points to a URL that redirects to another page.</span>
                            </div>

                            {/* <!-- Has Links To Redirects --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">Has Links To Redirects</span>
                                <span className="text-red-300 flex items-center">
                                    <XCircle className="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="x-circle" className="h-4 w-4 mr-2"></i> */}
                                    0
                                </span>
                                <span className="text-gray-400">A page that has links to redirects that indicate a page on your website is either being redirected to another URL or links to external or internal URLs that return a 3xx redirect status code.</span>
                            </div>

                            {/* <!-- Recursive Canonical --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">Recursive Canonical</span>
                                <span className="text-red-300 flex items-center">
                                    <XCircle className="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="x-circle" className="h-4 w-4 mr-2"></i> */}
                                    0
                                </span>
                                <span className="text-gray-400">A canonical tag on a page points to a URL that redirects to another page, eventually redirecting the user back to the original page, forming a loop.</span>
                            </div>
                        </div>

                        <p className="text-sm text-gray-500 mt-6 pt-4 border-t border-gray-700">
                            *This section provides an audit of various protocol, redirection, and status code related metrics.
                        </p>
                    </div>
                </div>
            </section>
  )
}

export default Card5s