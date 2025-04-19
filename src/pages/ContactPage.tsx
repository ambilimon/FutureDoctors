import { Helmet } from "react-helmet-async";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RequestCallbackForm from "@/components/RequestCallbackForm";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | MBBS Abroad Journey</title>
        <meta 
          name="description" 
          content="Need guidance for your MBBS abroad? Contact our expert counselors for personalized assistance with admissions, universities, and more."
        />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                Get in Touch with Our Expert Counselors
              </h1>
              <p className="text-lg text-gray-700">
                We're here to answer all your questions about studying MBBS abroad. 
                Fill out the form below, and our dedicated team will contact you shortly.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="bg-white rounded-xl shadow-lg p-8 order-2 lg:order-1">
                <RequestCallbackForm 
                  title="Request a Callback" 
                  subtitle="Our experts will help with all your queries" 
                  formType="contact_page"
                  className="shadow-none p-0"
                />
              </div>

              <div className="order-1 lg:order-2">
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                  <h2 className="text-2xl font-bold text-blue-900 mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Address</h3>
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-6 w-6 mt-1 text-primary" />
                        <p className="text-gray-600">
                          #79khb colony, 2nd phase opposite Karnataka bank, Gopal, Shimoga -577205.
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+919901712001" className="hover:text-primary">+91 9901712001</a><br />
                        <a href="tel:+919902342001" className="hover:text-primary">+91 9902342001</a>
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@futuredoctoredu.com" className="hover:text-primary">info@futuredoctoredu.com</a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-700 rounded-xl shadow-lg p-8 text-white">
                  <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      <span>Expert guidance from certified education consultants</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      <span>Partnerships with 100+ global medical universities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      <span>Complete assistance with visa, travel, and accommodation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      <span>Post-admission support throughout your education</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      <span>FMGE/NEXT preparation guidance for returning students</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Find Us on Map</h2>
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.1436340454567!2d75.56543661482946!3d13.932799990212744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbba8650e75eb49%3A0x9e3d6c1f0000000!2sKarnataka%20Bank%2C%20KHB%20Colony%2C%20Shimoga%2C%20Karnataka%20577205!5e0!3m2!1sen!2sin!4v1651994941454!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
                aria-label="Map showing our office location in Shimoga"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">How soon will I be contacted after submitting the form?</h3>
                  <p className="text-gray-700">Our counselors typically respond within 24 hours on business days. For urgent queries, you can directly call our helpline numbers.</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Do you provide counseling for specific countries?</h3>
                  <p className="text-gray-700">Yes, we have specialized counselors for different countries like Russia, Georgia, Philippines, Kazakhstan, and many more.</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Can I visit your office for a personal consultation?</h3>
                  <p className="text-gray-700">Absolutely! We encourage in-person consultations at our office. You can schedule an appointment through this form or by calling us directly.</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">What documents should I prepare before the consultation?</h3>
                  <p className="text-gray-700">It's helpful to have your academic records, passport copy, and NEET scorecard (if applicable) ready for a more productive consultation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage; 