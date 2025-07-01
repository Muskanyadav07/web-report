import React from 'react'
import { Activity,Zap, RotateCw , BarChart2,CheckCircle2 , Info } from 'lucide-react'

function Cards() {
    const ImgURL = 'data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm0 36v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 36v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM12 34v-4H10v4H6v2h4v4h2v-4h4v-2h-4zm0-30V0H10v4H6v2h4v4h2V6h4V4h-4zm0 36v-4H10v4H6v2h4v4h2v-4h4v-2h-4zm0 36v-4H10v4H6v2h4v4h2v-4h4v-2h-4z\' fill=\'%239C92AC\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'
  return (
       <section className="mb-12">
                <div className="card p-8 rounded-xl shadow-2xl relative overflow-hidden">
                        {/* <!-- Background Grid/Pattern for tech touch -->  */}
                    <div className="absolute inset-0 z-0 opacity-10" style={{backgroundImage: `url(${ImgURL})`} } ></div>
                    
                    <div className="relative z-10">
                        <div className="flex items-center mb-8">
                            <Activity className="h-9 w-9 text-blue-400 mr-4 stroke-[2px]"/> 
                            
                            <h3 className="text-3xl font-extrabold text-white tracking-wide">Crawling Status</h3>
                        </div>

                         
                        <div className="space-y-4 mb-8 pb-6 border-b border-gray-700">
                            <h4 className="text-xl font-bold text-gray-100 mb-4 flex items-center">
                                <Zap className="h-5 w-5 text-blue-400 mr-2"/>
                               
                            Crawl Progress
                            </h4>
                            <div id="crawl-session-status" className="bg-[#3f4a5a] p-5 rounded-lg border border-gray-600 flex items-center justify-between">
                                <div>
                                    <p id="session-status-text" className="text-lg font-semibold text-red-300">Session: In Progress</p>
                                    <p id="session-status-description" className="text-sm text-gray-400">The crawling session is currently active.</p>
                                </div>
                                < RotateCw id="session-status-icon" className="h-8 w-8 text-red-300 stroke-[2px]" />
                                {/* <i  data-lucide="rotate-cw" ></i> */}
                            </div>
                            <p className="text-sm text-gray-500 mt-4">
                                *Real-time status of the crawling session. 'Finished' is displayed in Green upon completion.
                            </p>
                        </div>

                           
                        <div className="mt-8">
                            <h4 className="text-xl font-bold text-gray-100 mb-4 flex items-center">
                                <BarChart2 className="h-5 w-5 text-blue-400 mr-2"/>
                                {/* <i data-lucide="bar-chart-2" ></i> */}
                                Session Metrics & Details
                            </h4>

                                
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                     
                                <div id="detailed-crawl-status-container" className="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col justify-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                    <h5 className="text-xs uppercase text-gray-400 mb-2 tracking-wider">Current Audit Detail</h5>
                                    <li className="flex items-start">
                                        <CheckCircle2 id="detailed-status-icon" className="h-5 w-5 text-green-400 mr-3 shrink-0 mt-1"/>
                                        {/* <i  data-lucide="check-circle-2" ></i> */}
                                        <div>
                                            <span id="detailed-status-title" classNames="font-medium text-green-400">No Errors</span>
                                            <p className="text-xs text-gray-400">No crawling errors were detected.</p>
                                        </div>
                                    </li>
                                </div>

                                    
                                <div id="crawl-stop-reason-container" className="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col justify-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                    <h5 className="text-xs uppercase text-gray-400 mb-2 tracking-wider">Crawl Stop Reason</h5>
                                    <li className="flex items-start">
                                        <Info id="stop-reason-icon" className="h-5 w-5 text-blue-400 mr-3 shrink-0 mt-1"/>
                                        {/* <i  data-lucide="info" ></i> */}
                                        <div>
                                            <span id="stop-reason-title" className="font-medium text-blue-400">Limited Exceeded</span>
                                            <p className="text-xs text-gray-400">Max Crawl Pages Limit was Exceeded.</p>
                                        </div>
                                    </li>
                                </div>
                            </div>

                                 
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                 
                                <div className="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col items-center justify-center text-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                    <p className="text-xs uppercase text-gray-400 mb-1 tracking-wider">Max Pages</p>
                                    <p className="text-3xl font-bold text-green-400 leading-none">10</p>
                                </div>

                                    
                                <div className="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col items-center justify-center text-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                    <p className="text-xs uppercase text-gray-400 mb-1 tracking-wider">In Queue</p>
                                    <p className="text-3xl font-bold text-green-400 leading-none">0</p>
                                </div>

                                     
                                <div className="bg-[#3f4a5a] p-4 rounded-lg border border-gray-600 flex flex-col items-center justify-center text-center transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                                    <p className="text-xs uppercase text-gray-400 mb-1 tracking-wider">Crawled</p>
                                    <p className="text-3xl font-bold text-green-400 leading-none">10</p>
                                </div>
                            </div>
                            
                            <p className="text-sm text-gray-500 mt-4">
                                *Overview of session metrics, current detailed crawl audit finding, and the reason for the crawl cessation.
                            </p>
                        </div>

                        <p className="text-sm text-gray-500 mt-6 pt-4 border-t border-gray-700">
                            *This report provides real-time insights into your website's crawlability by search engine bots. Optimizing queue management is critical for comprehensive and efficient indexing of your web assets.
                        </p>
                    </div>
                </div>
            </section>
  )
}

export default Cards