import React from 'react'
import { Settings2, CheckCircle2, XCircle} from 'lucide-react'

function Card3() {
    const imageURL = 'data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm0 36v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 36v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM12 34v-4H10v4H6v2h4v4h2v-4h4v-2h-4zm0-30V0H10v4H6v2h4v4h2V6h4V4h-4zm0 36v-4H10v4H6v2h4v4h2v-4h4v-2h-4zm0 36v-4H10v4H6v2h4v4h2v-4h4v-2h-4z\' fill=\'%239C92AC\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'
  return (
       <section className="mb-12">
                <div className="card p-8 rounded-xl shadow-2xl relative overflow-hidden">
                               
                    <div className="absolute inset-0 z-0 opacity-10"  style={{backgroundImage: `url(${imageURL})`}}></div>
                    
                    <div className="relative z-10">
                        <div className="flex items-center mb-8">
                            <Settings2 className="h-9 w-9 text-blue-400 mr-4 stroke-[2px]"/>
                            {/* <i data-lucide="settings-2" ></i> */}
                            <h3 className="text-3xl font-extrabold text-white tracking-wide">Technical Site-Level Checks</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                     
                            <div className="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col justify-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                <h5 className="text-xs uppercase text-gray-400 mb-2 tracking-wider">Sitemap</h5>
                                <div className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-3 shrink-0 mt-1"/>
                                    {/* <i data-lucide="check-circle-2" ></i> */}
                                    <div>
                                        <span className="font-medium text-green-400">TRUE</span>
                                        <p className="text-xs text-gray-400">A Valid Sitemap has been detected.</p>
                                    </div>
                                </div>
                            </div>
                                      
                            <div className="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col justify-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                <h5 className="text-xs uppercase text-gray-400 mb-2 tracking-wider">Robots.txt</h5>
                                <div className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-3 shrink-0 mt-1"/>
                                    {/* <i data-lucide="check-circle-2" ></i> */}
                                    <div>
                                        <span className="font-medium text-green-400">TRUE</span>
                                        <p className="text-xs text-gray-400">A valid robots.txt file has been detected.</p>
                                    </div>
                                </div>
                            </div>
                                  
                            <div className="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col justify-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                <h5 className="text-xs uppercase text-gray-400 mb-2 tracking-wider">Start page Deny Flag</h5>
                                <div className="flex items-start">
                                    <XCircle className="h-5 w-5 text-red-300 mr-3 shrink-0 mt-1"/>
                                    {/* <i data-lucide="x-circle" ></i> */}
                                    <div>
                                        <span className="font-medium text-red-300">FALSE</span>
                                        <p className="text-xs text-gray-400">The start page is accessible to search engines.</p>
                                    </div>
                                </div>
                            </div>
                                  
                            <div className="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col justify-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                <h5 className="text-xs uppercase text-gray-400 mb-2 tracking-wider">HTTP/2 Status</h5>
                                <div className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-3 shrink-0 mt-1"/>
                                    {/* <i data-lucide="check-circle-2" ></i> */}
                                    <div>
                                        <span className="font-medium text-green-400">TRUE</span>
                                        <p className="text-xs text-gray-400">HTTP/2 is enabled.</p>
                                    </div>
                                </div>
                            </div>
                                  
                            <div className="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col justify-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                <h5 className="text-xs uppercase text-gray-400 mb-2 tracking-wider">Test Canonicalization</h5>
                                <div className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-3 shrink-0 mt-1"/>
                                    {/* <i data-lucide="check-circle-2" ></i> */}
                                    <div>
                                        <span className="font-medium text-green-400">TRUE</span>
                                        <p className="text-xs text-gray-400">Canonical tags are correctly implemented.</p>
                                    </div>
                                </div>
                            </div>
                                  
                            <div className="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col justify-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                <h5 className="text-xs uppercase text-gray-400 mb-2 tracking-wider">Test www Redirection</h5>
                                <div className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-3 shrink-0 mt-1"/>
                                    {/* <i data-lucide="check-circle-2" ></i> */}
                                    <div>
                                        <span className="font-medium text-green-400">TRUE</span>
                                        <p className="text-xs text-gray-400">Implemented www to non-www redirection on (Domain Name)</p>
                                    </div>
                                </div>
                            </div>
                                  
                            <div className="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col justify-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                <h5 className="text-xs uppercase text-gray-400 mb-2 tracking-wider">Test Hidden Server Signature</h5>
                                <div className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-3 shrink-0 mt-1"/>
                                    {/* <i data-lucide="check-circle-2" ></i> */}
                                    <div>
                                        <span className="font-medium text-green-400">TRUE</span>
                                        <p className="text-xs text-gray-400">Hidden Server Signature is hidden from the web crawlers</p>
                                    </div>
                                </div>
                            </div>
                                   
                            <div className="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col justify-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                <h5 className ="text-xs uppercase text-gray-400 mb-2 tracking-wider">Test Page Not Found</h5>
                                <div className ="flex items-start">
                                    <CheckCircle2 className ="h-5 w-5 text-green-400 mr-3 shrink-0 mt-1"/>
                                    {/* <i data-lucide="check-circle-2" ></i> */}
                                    <div>
                                        <span className ="font-medium text-green-400">TRUE</span>
                                        <p className="text-xs text-gray-400">website correctly returns a 404 HTTP status code for pages that don't exist.</p>
                                    </div>
                                </div>
                            </div>
                                     
                            <div className ="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col justify-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                <h5 className ="text-xs uppercase text-gray-400 mb-2 tracking-wider">Test Directory Browsing</h5>
                                <div className ="flex items-start">
                                    <CheckCircle2 className ="h-5 w-5 text-green-400 mr-3 shrink-0 mt-1"/>
                                    {/* <i data-lucide="check-circle-2" ></i> */}
                                    <div>
                                        <span className ="font-medium text-green-400">TRUE</span>
                                        <p className ="text-xs text-gray-400">Directory browsing is disabled.</p>
                                    </div>
                                </div>
                            </div>
                                     
                            <div className ="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col justify-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                <h5 className ="text-xs uppercase text-gray-400 mb-2 tracking-wider">Test HTTPS Redirect</h5>
                                <div className ="flex items-start">
                                    <CheckCircle2 className ="h-5 w-5 text-green-400 mr-3 shrink-0 mt-1"/>
                                    {/* <i data-lucide="check-circle-2" ></i> */}
                                    <div>
                                        <span className ="font-medium text-green-400">TRUE</span>
                                        <p className ="text-xs text-gray-400">Home page is redirected from HTTP request to HTTPS request</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className ="text-sm text-gray-500 mt-6 pt-4 border-t border-gray-700">
                            *This section provides a comprehensive audit of technical aspects critical for SEO and website security.
                        </p>
                    </div>
                </div>
            </section>
  )
}

export default Card3