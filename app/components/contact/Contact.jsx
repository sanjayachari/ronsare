export default function ContactUs() {
  return (
    <div className="mt-[60px] md:mt-[90px] py-20 w-full flex justify-center items-center bg-white px-4 sm:px-6 md:px-12 xl:px-10 xxl:px-20 max-w-screen-xxxl mx-auto">
      <div className="flex flex-col md:flex-row w-full rounded-lg ">
        {/* Left Side - Contact Info */}
        <div className="md:w-1/2 pr-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-[#0732EF] mb-6">Contact Us</h2>
          <p className="text-[#1E40AF] mb-4">
            Lets start a conversation. Ask how we can help you.
          </p>
          <p className="text-[#1E40AF] mb-4 font-semibold">See our AI platforms in action:</p>
          <p className="text-[#1E40AF] mb-4">Request a personalized demo of Ronsare’s TREO IQ or SmartDoc AI platform.</p>
          <h3 className="text-xl font-semibold text-[#0732EF] mt-6">Points of Contact</h3>
          <p className="text-[#1E40AF]">U.S. | Ronsare</p>
          <p className="text-[#1E40AF]">50 Carnation Ave, Unit 1, Floral Park, NY 11001</p>
          <h3 className="text-xl font-semibold text-[#0732EF] mt-6">Information & Sales</h3>
          <a href="mailto:partnerservices@ronsare.com" className="text-[#0732EF] hover:underline">
            partnerservices@ronsare.com
          </a>
          <h3 className="text-xl font-semibold text-[#0732EF] mt-6">Product Support</h3>
          <a href="mailto:support@ronsare.com" className="text-[#0732EF] hover:underline">
            support@ronsare.com
          </a>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-1/2 bg-white rounded-lg">
          <form className="space-y-4">
            <div>
              <label className="block text-[#1E40AF]">Full Name</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-[#1E40AF]">Email Address</label>
              <input type="email" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Your Email" />
            </div>
            <div>
              <label className="block text-[#1E40AF]">Subject</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Subject" />
            </div>
            <div>
              <label className="block text-[#1E40AF]">Message</label>
              <textarea className="w-full p-3 border border-gray-300 rounded-md" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="w-full bg-[#0732EF] text-white p-3 rounded-md hover:bg-[#0527C2] transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
