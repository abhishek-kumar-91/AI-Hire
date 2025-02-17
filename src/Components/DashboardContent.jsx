import React from 'react'

function DashboardContent() {
  return (
    
    <div className="flex h-screen bg-gray-100">
     
   

        {/* Dashboard Stats */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">Total Applications</h3>
            <p className="text-2xl font-bold text-blue-600">120</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">Jobs Found</h3>
            <p className="text-2xl font-bold text-green-600">45</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">Emails Sent</h3>
            <p className="text-2xl font-bold text-red-600">30</p>
          </div>
        </div>

        {/* Job Suggestions */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">AI-Powered Job Suggestions</h3>
          <div className="bg-white p-4 rounded-md shadow-md">
            <p className="text-lg font-semibold">Frontend Developer - Google</p>
            <p className="text-gray-600">Remote | Full-time</p>
            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md">Apply Now</button>
          </div>
        </div>
    
  </div>

  )
}

export default DashboardContent