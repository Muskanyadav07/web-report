import React from 'react'

function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 pb-4 border-b border-gray-700">
                <div>
                    <h2 className="text-4xl font-extrabold text-white leading-tight">Website Audit Report</h2>
                    <p className="text-gray-400 mt-2 text-lg">
                        <span className="font-semibold text-gray-300">Your Website</span> - Last scanned on June 7, 2025
                    </p>
                </div>
                <div className="flex items-center space-x-4 mt-6 md:mt-0">
                    <button className="header-button bg-gray-700 hover:bg-gray-600 flex items-center px-5 py-3 rounded-lg text-sm font-semibold transition-colors duration-200">
                        <i data-lucide="rotate-cw" className="mr-3 h-5 w-5 text-gray-300"></i>
                        Re-Scan
                    </button>
                    <button className="header-button bg-blue-600 hover:bg-blue-700 flex items-center px-5 py-3 rounded-lg text-sm font-semibold transition-colors duration-200">
                        <i data-lucide="download" className="mr-3 h-5 w-5 text-white"></i>
                        Export as PDF
                    </button>
                </div>
     </header>
  )
}

export default Header