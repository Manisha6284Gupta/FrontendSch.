import { useState, useEffect } from "react";
import carouselImage1 from "../assets/carousel1.jpg";
import carouselImage2 from "../assets/carousel2.jpg";

const MainContent = () => {
  const [currentImage, setCurrentImage] = useState(carouselImage1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => 
        prevImage === carouselImage1 ? carouselImage2 : carouselImage1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Contact Faculty - Left */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-start min-h-[420px] border-l-4 border-blue-500 pl-4 text-center sm:text-left">
          <h2 className="font-bold text-xl mb-2 text-blue-700">Contact Faculty for Scholarships</h2>
          <p className="text-lg text-gray-700">
            <strong>Scholarship Coordinator:</strong> Dr. A. Sharma <br />
            <strong>Office Hours:</strong> Monday - Friday (10 AM - 4 PM) <br />
            <strong>Contact No.:</strong> +91 9876543210 <br />
            <strong>Email:</strong> scholarship@college.edu <br />
            <strong>Location:</strong> Admin Block, Room No. 102
          </p>

          <h3 className="font-bold text-lg mt-4 text-blue-600">Available Scholarship Programs:</h3>
          <ul className="list-disc pl-5 text-gray-700 text-lg">
            <li>Merit-Based Scholarships</li>
            <li>Need-Based Financial Aid</li>
            <li>Sports Scholarships</li>
            <li>Government Scholarships</li>
            <li>Alumni-Sponsored Grants</li>
          </ul>

          <h3 className="font-bold text-lg mt-4 text-blue-600">Important Deadlines:</h3>
          <ul className="list-disc pl-5 text-gray-700 text-lg">
            <li><span className="text-red-600 font-bold animate-blink">NEW</span> Application Submission: March 30</li>
            <li>Document Verification: April 10</li>
            <li>Final Approval & Disbursement: May 5</li>
          </ul>

          <h3 className="font-bold text-lg mt-4 text-blue-600">How to Apply?</h3>
          <p className="text-lg text-gray-700">
            Visit the <a href="/scholarship-portal" className="text-blue-500 underline hover:text-blue-700">Scholarship Portal</a>, fill out the application form, and upload required documents.
          </p>
        </div>

        {/* Carousel - Center */}
        <div className="bg-gray-200 shadow-lg rounded-lg overflow-hidden relative flex flex-col">
          <div className="w-full h-[280px] flex items-center justify-center">
            <img 
              src={currentImage} 
              alt="Scholarship Carousel" 
              className="w-full h-full object-cover transition-all duration-500 ease-in-out rounded-lg"
            />
          </div>

          {/* New Scholarship Information Container */}
          <div className="bg-white p-4 shadow-md rounded-lg mt-4">
            <h3 className="text-xl font-bold text-green-700">Scholarship System Overview</h3>
            <p className="text-gray-700 text-lg mt-2">
              Our scholarship system offers financial aid to students based on merit, need, and special categories. 
              Eligible students can apply through the online portal and must ensure timely submission of documents.
            </p>
            <ul className="list-disc pl-5 text-gray-700 text-lg mt-2">
              <li>Merit-based and Need-based scholarships available.</li>
              <li>Easy online application process.</li>
              <li>Dedicated support for document verification.</li>
              <li>Regular updates on application status.</li>
            </ul>
          </div>
        </div>

        {/* Notice Board - Right */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-start min-h-[420px] border-l-4 border-green-500 pl-4 text-center sm:text-left">
          <h2 className="font-bold text-xl mb-2 text-green-700">Notice Board</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
            <li>
              <span className="text-red-600 font-bold animate-blink">NEW</span> Scholarship Application Deadline Extended to March 30.
            </li>
            <li>
              <span className="text-red-600 font-bold animate-blink">NEW</span> Submit your OTR documents before April 10.
            </li>
            <li>Mid-term exams start from April 15.</li>
            <li>Final year students must complete project submission by May 5.</li>
            <li>Hostel fee payment last date: March 20.</li>
            <li>Internship opportunity at XYZ Company – Apply before April 5.</li>
            <li>Annual Tech Fest registrations open now!</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default MainContent;
