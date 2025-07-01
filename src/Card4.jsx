import React from 'react'
import { FileText , AlertTriangle, XCircle} from 'lucide-react'

function Card4() {
    const imaggeURL = 'data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm0 36v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 36v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM12 34v-4H10v4H6v2h4v4h2v-4h4v-2h-4zm0-30V0H10v4H6v2h4v4h2V6h4V4h-4zm0 36v-4H10v4H6v2h4v4h2v-4h4v-2h-4zm0 36v-4H10v4H6v2h4v4h2v-4h4v-2h-4z\' fill=\'%239C92AC\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'
  return (
            <section className ="mb-12">
                <div className ="card p-8 rounded-xl shadow-2xl relative overflow-hidden">
                        
                    <div className ="absolute inset-0 z-0 opacity-10" style={{backgroundImage: `url(${imaggeURL})`}}></div>
                    
                    <div className ="relative z-10">
                        <div className ="flex items-center mb-8">
                            <FileText className ="h-9 w-9 text-blue-400 mr-4 stroke-[2px]"/>
                            {/* <i data-lucide="file-text" ></i> */}
                            <h3 className ="text-3xl font-extrabold text-white tracking-wide">Page Level Metrics</h3>
                        </div>

                        <div className ="rounded-lg border border-gray-600 overflow-hidden">
                            <div className ="metric-grid-header grid grid-cols-1 sm:grid-cols-[1fr_1fr_2fr]">
                                <span>Field Name</span>
                                <span>Audit Result</span>
                                <span>Description</span>
                            </div>

                                      
                            <div className ="metric-grid">
                                <span className ="font-medium text-gray-300">Page Not Found Status Code</span>
                                <span className ="text-yellow-400 flex items-center">
                                    
                                    <AlertTriangle className ="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="alert-triangle" ></i> */}
                                    200
                                </span>
                                <span className ="text-gray-400">OK, Confuses crawlers (soft 404)</span>
                            </div>

                                 
                            <div className ="metric-grid">
                                <span className ="font-medium text-gray-300">Canonicalization Status Code</span>
                                <span className="text-red-300 flex items-center">
                                    <XCircle  className="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="x-circle"></i> */}
                                    403
                                </span>
                                <span className ="text-gray-400">Server refusing to authorize resource (Access Denied)</span>
                            </div>
                            
                                      
                            <div className ="metric-grid">
                                <span className ="font-medium text-gray-300">Directory Browsing Status Code</span>
                                <span className="text-red-300 flex items-center">
                                    <XCircle className ="h-4 w-4 mr-2"/>
                                    <i data-lucide="x-circle" ></i>
                                    200
                                </span>
                                <span className ="text-gray-400">Directory browsing is enabled (potential security risk)</span>
                            </div>

                                  
                            <div className="metric-grid">
                                <span className="font-medium text-gray-300">www Redirect Status Code</span>
                                <span className="text-red-300 flex items-center">
                                      <XCircle className ="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="x-circle" className="h-4 w-4 mr-2"></i> */}
                                    200
                                </span>
                                <span className="text-gray-400">No www to non-www redirection implemented</span>
                            </div>

                            
                            <div className="metric-grid">
                                <span className ="font-medium text-gray-300">High Waiting Time</span>
                                <span className ="text-yellow-400 flex items-center">
                                    <AlertTriangle className ="h-4 w-4 mr-2"/> 
                                    {/* <i data-lucide="alert-triangle" ></i> */}
                                    500ms
                                </span>
                                <span className="text-gray-400">Pages where overall loading time exceeds 1.5 seconds.</span>
                            </div>

                           
                            <div className ="metric-grid">
                                <span className ="font-medium text-gray-300">High Loading Time</span>
                                <span className ="text-red-300 flex items-center">
                                    <XCircle className ="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="x-circle" className ="h-4 w-4 mr-2"></i> */}
                                    4s
                                </span>
                                <span className ="text-gray-400">Pages where overall loading time exceeds 3 seconds.</span>
                            </div>

                            
                            <div className ="metric-grid">
                                <span className ="font-medium text-gray-300">Size Greater than 3MB</span>
                                <span className ="text-red-300 flex items-center">
                                    <XCircle className ="h-4 w-4 mr-2"/>
                                    {/* <i data-lucide="x-circle" className ="h-4 w-4 mr-2"></i> */}
                                    5 pages
                                </span>
                                <span className ="text-gray-400">Number of pages exceeding 3 MB.</span>
                            </div>
                        </div>

                        <p className ="text-sm text-gray-500 mt-6 pt-4 border-t border-gray-700">
                            *This section provides a detailed breakdown of individual page-level metrics and their audit results.
                        </p>
                    </div>
                </div>
            </section>
  )
}

export default Card4