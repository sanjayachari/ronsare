"use client"
import Image from "next/image";
import * as React from "react"

const DigitalInsights = () => {
  return (
    <div className="container mx-auto py-[60px] md:pt-[120px] md:pb-[60px] px-4 sm:px-6 md:px-12">  
      <div className=" mx-auto  rounded-2xl overflow-hidden border border-gray-200">  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">  
          {/* Left Side - Digital Insights Info */}  
          <div>  
            <div className="space-y-6">  
              <h2 className="text-4xl font-extrabold text-blue-800">Digital Insights</h2>  
              <p className="text-gray-600">Stay ahead in the digital world with our latest insights, trends, and innovations.</p>  
              <p className="text-gray-700 font-semibold">Explore cutting-edge technologies and strategies:</p>  
              <ul className="list-disc list-inside text-gray-600 space-y-2">  
                <li>Artificial Intelligence & Machine Learning</li>  
                <li>Data-Driven Decision Making</li>  
                <li>Cybersecurity Trends</li>  
                <li>Cloud & Edge Computing</li>  
                <li>Digital Transformation Strategies</li>  
              </ul>  
              <p className="text-gray-600">Our team of experts constantly analyzes market trends to provide you with actionable insights that drive success in the digital landscape. Whether you’re a startup or an enterprise, understanding digital trends is key to staying competitive.</p>
              <p className="text-gray-700 font-semibold">Why Digital Insights Matter:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">  
                <li>Improve decision-making with real-time data</li>  
                <li>Enhance customer engagement through personalized experiences</li>  
                <li>Boost operational efficiency with innovative technologies</li>  
              </ul>  
            </div>  
          </div>  

          {/* Right Side - Digital Insights Image */}  
         <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:col-span-1">
                <div>
                  <Image
                    src={"/se5.jpg"}
                    alt="hero"
                    width={250}
                    height={250}
                    className="rounded-[20px] object-cover"
                  />
                </div>
                <div className="flex items-center justify-center gap-5 flex-col">
                  <Image
                    src={"/g9.jpg"}
                    alt="hero"
                    width={250}
                    height={250}
                    className="rounded-[20px] object-cover"
                  />
                  <Image
                    src={"/g1.jpg"}
                    alt="hero"
                    width={250}
                    height={250}
                    className="rounded-[20px] object-cover"
                  />
                </div>
              </div> 
        </div>  
      </div>  
    </div>  
  );
};

export default DigitalInsights;
