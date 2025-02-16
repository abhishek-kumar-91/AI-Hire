export default function HowItWorksComponent() {
    const steps = [
      {
        icon: "🔍",
        step: "1️⃣",
        title: "Search & Filter Jobs",
        description: "Use advanced filters to find the most relevant job postings.",
      },
      {
        icon: "📩",
        step: "2️⃣",
        title: "Extract HR Emails",
        description: "Automatically collect recruiter contact information from job listings.",
      },
      {
        icon: "🚀",
        step: "3️⃣",
        title: "Apply & Automate Outreach",
        description: "Send AI-generated, personalized applications instantly.",
      },
    ];
  
    return (
      <section className="py-16 bg-white md:py-44" id="how-it-works">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
          <p className="text-lg text-gray-600 mt-2">Follow these 3 simple steps to land your dream job faster.</p>
  
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {steps.map((step, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                
                <div className="text-5xl mt-2">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mt-4">{step.title}</h3>
                <p className="text-gray-600 mt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  