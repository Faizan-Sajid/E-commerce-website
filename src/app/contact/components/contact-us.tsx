import SmoothAnimatedSection from "@/app/components/animation";

// pages/contact.tsx
export default function Contact() {
    return (
      <>
      <SmoothAnimatedSection>
      <div className="min-h-screen bg-[#84a8f7] to-teal-500 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Section */}
            <div className="bg-blue-600 p-10 flex flex-col justify-center space-y-8 text-center md:text-left">
              <h2 className="text-4xl font-bold text-white">Get in Touch</h2>
              <p className="text-lg text-gray-200">
                We would love to hear from you! Please reach out with any questions or comments.
              </p>
              <div className="space-y-4 text-gray-200">
                <p><strong>Phone:</strong> +1 234 567 890</p>
                <p><strong>Email:</strong> contact@glintsite.com</p>
                <p><strong>Address:</strong> 123 Glint Street, NY</p>
              </div>
            </div>
  
            {/* Right Section */}
            <div className="p-10">
              <h3 className="text-3xl font-semibold text-blue-600 mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </SmoothAnimatedSection>
      </>
    );
  }
  