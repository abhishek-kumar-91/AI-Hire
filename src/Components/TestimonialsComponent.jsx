import { useState } from "react";

export default function TestimonialsComponent
() {
  const testimonials = [
    {
      name: "Amit Sharma",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      quote: "This app helped me land my dream job in just a few weeks! The AI-driven filtering is amazing.",
    },
  
    {
      name: "Priya Desai",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      quote: "Super easy to use! I extracted HR emails effortlessly and got quick responses.",
    },
    {
      name: "Rahul Verma",
      image: "https://randomuser.me/api/portraits/men/56.jpg",
      rating: 5,
      quote: "I love the automation feature! It saved me hours of manual job applications.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-100 md:py-44" id="testimonials">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-900">What Our Users Say</h2>
        <p className="text-lg text-gray-600 mt-2">Hear from job seekers who landed their dream jobs with AI.</p>

        {/* Testimonials Grid - Desktop View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-gray-600 mt-2">"{testimonial.quote}"</p>
              <div className="flex mt-3 text-yellow-400">
                {"⭐".repeat(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel - Mobile View */}
        <div className="md:hidden flex flex-col items-center mt-10">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <img src={testimonials[current].image} alt={testimonials[current].name} className="w-16 h-16 rounded-full mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">{testimonials[current].name}</h3>
            <p className="text-gray-600 mt-2">"{testimonials[current].quote}"</p>
            <div className="flex mt-3 text-yellow-400">
              {"⭐".repeat(testimonials[current].rating)}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex mt-4 space-x-4">
            <button onClick={prevSlide} className="px-4 py-2 bg-gray-200 rounded-full">⬅️</button>
            <button onClick={nextSlide} className="px-4 py-2 bg-gray-200 rounded-full">➡️</button>
          </div>
        </div>
      </div>
    </section>
  );
}
