import React from 'react'
import { CheckCircle2, Fingerprint, XCircle } from 'lucide-react'

function Card6() {
   const imagyURL = 'data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm0 36v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 36v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM12 34v-4H10v4H6v2h4v4h2v-4h4v-2h-4zm0-30V0H10v4H6v2h4v4h2V6h4V4h-4zm0 36v-4H10v4H6v2h4v4h2v-4h4v-2h-4zm0 36v-4H10v4H6v2h4v4h2v-4h4v-2h-4z\' fill=\'%239C92AC\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'
  return (
               <section className="mb-12">
                <div className="card p-8 rounded-xl shadow-2xl relative overflow-hidden">
                    {/* <!-- Background Grid/Pattern --> */}
                    <div className="absolute inset-0 z-0 opacity-10"style={{backgroundImage: `url(${imagyURL})`}} ></div>
                    
                    <div className="relative z-10">
                        <div className="flex items-center mb-8">
                            <Fingerprint className="h-9 w-9 text-blue-400 mr-4 stroke-[2px]" />
                            {/* <i data-lucide="fingerprint" ></i> */}
                            <h3 className="text-3xl font-extrabold text-white tracking-wide">Indexing, Accessibility & Encoding</h3>
                        </div>

                        <div className="rounded-lg border border-gray-600 overflow-hidden">
                            <div className="metric-grid-header grid grid-cols-1 sm:grid-cols-[1fr_1fr_2fr]">
                                <span>Field Name</span>
                                <span>Audit Result</span>
                                <span>Description</span>
                            </div>

                            {/* <!-- Is Orphan Page --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">Is Orphan Page</span>
                                <span className="text-green-400 flex items-center">
                                    <CheckCircle2 className="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="check-circle-2" ></i> */}
                                    0
                                </span>
                                <span className="text-gray-400">Web pages that are not linked to any other pages on a website.</span>
                            </div>

                            {/* <!-- No Doctype --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">No Doctype</span>
                                <span className="text-green-400 flex items-center">
                                    <CheckCircle2 className="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="check-circle-2" className="h-4 w-4 mr-2"></i> */}
                                    0
                                </span>
                                <span className="text-gray-400">No doctype declaration in an HTML document.</span>
                            </div>
                            
                            {/* <!-- No Encoding Meta Tag --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">No Encoding Meta Tag</span>
                                <span className="text-green-400 flex items-center">
                                    <CheckCircle2 className="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="check-circle-2" className="h-4 w-4 mr-2"></i> */}
                                    0
                                </span>
                                <span className="text-gray-400">A "No Encoding" meta tag doesn't exist in standard HTML, Tag &lt;meta charset=?&gt;.</span>
                            </div>

                            {/* <!-- Meta Charset --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">Meta Charset</span>
                                <span className="text-red-300 flex items-center">
                                    <XCircle className="h-4 w-4 mr-2" />
                                    {/* <i data-lucide="x-circle" ></i> */}
                                    10
                                </span>
                                <span className="text-gray-400">A website should use &lt;meta charset="utf-8"&gt; in its HTML to specify that the document is encoded in UTF-8.</span>
                            </div>

                            {/* <!-- No Content Encoding --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">No Content Encoding</span>
                                <span className="text-green-400 flex items-center">
                                    <CheckCircle2 className="h-4 w-4 mr-2" />
                                    {/* <i data-lucide="check-circle-2" ></i> */}
                                    0
                                </span>
                                <span className="text-gray-400">Web pages or data are compressed and transmitted, often due to incompatibility between the server and the browser.</span>
                            </div>

                            {/* <!-- Has HTML doctype --> */}
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">Has HTML doctype</span>
                                <span className="text-red-300 flex items-center">
                                    <XCircle className="h-4 w-4 mr-2" />
                                    {/* <i data-lucide="x-circle" className="h-4 w-4 mr-2"></i> */}
                                    10
                                </span>
                                <span className="text-gray-400">Web Pages with HTML doctype declaration</span>
                            </div>
                        </div>

                        <p className="text-sm text-gray-500 mt-6 pt-4 border-t border-gray-700">
                            *This section evaluates your website's indexing, accessibility, and content encoding practices.
                        </p>
                    </div>
                </div>
            </section>
  )
}

export default Card6
