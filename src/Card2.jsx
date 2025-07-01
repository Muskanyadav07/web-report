import React from 'react'
import { Globe , Server , Lock, CheckCircle2 , Calendar} from 'lucide-react'

function Card2() {
    const imgURL = 'data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm0 36v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 36v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM12 34v-4H10v4H6v2h4v4h2v-4h4v-2h-4zm0-30V0H10v4H6v2h4v4h2V6h4V4h-4zm0 36v-4H10v4H6v2h4v4h2v-4h4v-2h-4zm0 36v-4H10v4H6v2h4v4h2v-4h4v-2h-4z\' fill=\'%239C92AC\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'
  return (
         <section className="mb-12">
                <div className="card p-8 rounded-xl shadow-2xl relative overflow-hidden">
                        
                    <div className="absolute inset-0 z-0 opacity-10" style={{backgroundImage: `url(${imgURL})`} } ></div>
                    
                    <div className="relative z-10">
                        <div className="flex items-center mb-8">
                            <Globe className="h-9 w-9 text-blue-400 mr-4 stroke-[2px]"/>
                            {/* <i data-lucide="globe" ></i> */}
                            <h3 className="text-3xl font-extrabold text-white tracking-wide">Domain, Server & SSL Audit</h3>
                        </div>

                               
                        <div className="mb-8 pb-6 border-b border-gray-700">
                            <h4 className="text-xl font-bold text-gray-100 mb-4 flex items-center">
                                
                                <Server className="h-5 w-5 text-blue-400 mr-2"/>Domain & Hosting Details
                                {/* <i data-lucide="server" ></i> */}
                                
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                       
                                <div className="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600">
                                    <p className="text-xs uppercase text-gray-400 mb-1 tracking-wider">Target Domain</p>
                                    <p className="text-lg font-semibold text-gray-100">deplidigital.com</p>
                                </div>
                                      
                                <div className="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600">
                                    <p className="text-xs uppercase text-gray-400 mb-1 tracking-wider">On Page Score</p>
                                    <p id="on-page-score-result" className="text-lg font-semibold text-green-400">91.03</p>
                                </div>
                            </div>
                                 
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                         
                                <div className="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600">
                                    <p className="text-xs uppercase text-gray-400 mb-1 tracking-wider">CMS System</p>
                                    <p className="text-lg font-semibold text-gray-100">Wordpress</p>
                                </div>
                                        
                                <div className="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600">
                                    <p className="text-xs uppercase text-gray-400 mb-1 tracking-wider">IP Address</p>
                                    <p className="text-lg font-semibold text-gray-100">147.93.99.93</p>
                                </div>
                                          
                                <div className="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600">
                                    <p className="text-xs uppercase text-gray-400 mb-1 tracking-wider">Web Server</p>
                                    <p className="text-lg font-semibold text-gray-100">LiteSpeed</p>
                                </div>
                            </div>
                        </div>

                              
                        <div className="mt-8">
                            <h4 className="text-xl font-bold text-gray-100 mb-4 flex items-center">
                                <Lock className="h-5 w-5 text-blue-400 mr-2"/>
                                {/* <i data-lucide="lock" ></i> */}
                                SSL & Security Audit
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                        
                                <div id="ssl-certification-status-container" className="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex items-center justify-between">
                                    <div>
                                        <p className="text-xs uppercase text-gray-400 mb-1 tracking-wider">SSL Status</p>
                                        <p id="ssl-status-text" className="text-lg font-semibold text-green-400">TRUE</p>
                                    </div>
                                    <CheckCircle2  id="ssl-status-icon" className="h-8 w-8 text-green-400 stroke-[2px]"/>
                                    {/* <i id="ssl-status-icon" data-lucide="check-circle-2" ></i> */}
                                </div>
                                         
                                <div id="ssl-expiration-container" className="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex items-center justify-between">
                                    <div>
                                        <p className="text-xs uppercase text-gray-400 mb-1 tracking-wider">Expiration Date</p>
                                        <p id="ssl-expiration-text" className="text-lg font-semibold text-yellow-400">2025-06-19 02:59:00 +00:00</p>
                                    </div>
                                    <Calendar className="h-8 w-8 text-yellow-400 stroke-[2px]" />
                                    {/* <i data-lucide="calendar" ></i> */}
                                </div>
                            </div>

                                   
                            <div className="bg-[#3f4a5a] p-6 rounded-lg border border-gray-600">
                                <h5 className="text-sm uppercase text-gray-400 mb-4 tracking-wider">Certificate Details</h5>
                                <div className="space-y-3 text-sm">
                                    <div className="flex flex-col sm:flex-row sm:items-center">
                                        <span className="font-medium text-gray-300 sm:w-1/4">Authority:</span>
                                        <span className="text-gray-200 break-words sm:w-3/4">CN=ZeroSSL RSA Domain Secure Site CA, O=ZeroSSL, C=AT</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center">
                                        <span className="font-medium text-gray-300 sm:w-1/4">Subject:</span>
                                        <span className="text-gray-200 break-words sm:w-3/4">CN=deplidigital.com</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center">
                                        <span className="font-medium text-gray-300 sm:w-1/4">Version:</span>
                                        <span className="text-gray-200 break-words sm:w-3/4">3</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center">
                                        <span className="font-medium text-gray-300 sm:w-1/4">Hash:</span>
                                        <span className="text-gray-200 break-words sm:w-3/4">sha384RSA</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">
                            *Comprehensive audit of your domain, server configuration, and SSL certificate for optimal security and performance.
                        </p>
                    </div>
                </div>
            </section>
  )
}

export default Card2