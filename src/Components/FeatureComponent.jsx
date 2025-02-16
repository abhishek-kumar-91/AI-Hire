import { FaSearch, FaBrain } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { GoGraph } from "react-icons/go";



export default function FeatureComponent() {
    const features = [
      {
        icon: <FaSearch />        ,
        title: "Smart Job Filtering",
        description: "Find relevant jobs based on your skills, experience, and preferences.",
      },
      {
        icon: <CiMail />
        ,
        title: "HR Email Extraction",
        description: "Instantly extract recruiter contact details from job listings.",
      },
      {
        icon: <BsFillLightningChargeFill />
        ,
        title: "Automated Outreach",
        description: "Auto-send AI-generated job applications to HRs & recruiters.",
      },
      {
        icon: <GoGraph />
        ,
        title: "Job Tracking Dashboard",
        description: "Monitor your applications, responses, and follow-ups in real-time.",
      },
      {
        icon: <FaBrain />
        ,
        title: "AI Resume Optimization",
        description: "Improve your resume using AI-driven insights.",
      },
      {
        icon: "🔗",
        title: "Seamless LinkedIn Integration",
        description: "Apply for jobs with one click, directly from LinkedIn.",
      },
    ];
  
    return (
      <section className="py-24 bg-gray-100 md:py-44" id={"features"}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-gray-900">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 mt-2">Our AI-powered platform helps job seekers land their dream jobs faster.</p>
  
          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="text-5xl">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mt-4">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  