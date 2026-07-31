import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SEO from "../components/SEO";

import "../styles/Pages.css";

function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions | Compressify"
        description="Read the Terms and Conditions for using Compressify, our free online image compression tool."
        keywords="terms and conditions,compressify terms,image compressor terms"
      />

      <Navbar />

      <main className="page">

        <div className="container page-container">

          <div className="page-header">

            <h1>Terms & Conditions</h1>

            <p>
              Welcome to Compressify. By accessing or using this website, you
              agree to comply with these Terms & Conditions. Please read them
              carefully before using our services.
            </p>

          </div>

          <section className="page-section">

            <h2>1. Acceptance of Terms</h2>

            <p>
              By using Compressify, you acknowledge that you have read,
              understood, and agreed to these Terms & Conditions. If you do not
              agree, please discontinue using the website.
            </p>

          </section>

          <section className="page-section">

            <h2>2. Use of the Website</h2>

            <p>
              You agree to use Compressify only for lawful purposes. You must
              not use this website in any manner that could damage, disable, or
              interfere with the normal operation of the service.
            </p>

          </section>

          <section className="page-section">

            <h2>3. User Content</h2>

            <p>
              You are solely responsible for the images you upload and compress.
              You must ensure that you own the necessary rights or permissions
              to use those files.
            </p>

          </section>

          <section className="page-section">

            <h2>4. Intellectual Property</h2>

            <p>
              All website content, including design, branding, graphics, text,
              logos, and source code, is the property of Compressify unless
              otherwise stated. Unauthorized copying or redistribution is
              prohibited.
            </p>

          </section>

          <section className="page-section">

            <h2>5. Service Availability</h2>

            <p>
              We strive to keep Compressify available at all times. However, we
              do not guarantee uninterrupted access and may suspend the service
              for maintenance or updates without prior notice.
            </p>

          </section>

          <section className="page-section">

            <h2>6. Disclaimer</h2>

            <p>
              Compressify is provided on an "as is" and "as available" basis.
              We make no warranties regarding accuracy, reliability,
              availability, or suitability for any particular purpose.
            </p>

          </section>

          <section className="page-section">

            <h2>7. Limitation of Liability</h2>

            <p>
              Compressify and its owners shall not be liable for any direct,
              indirect, incidental, consequential, or special damages arising
              from the use or inability to use this website.
            </p>

          </section>

          <section className="page-section">

            <h2>8. Third-Party Services</h2>

            <p>
              This website may use third-party services such as Google Analytics
              and Google AdSense. These services operate according to their own
              terms and privacy policies.
            </p>

          </section>

          <section className="page-section">

            <h2>9. Changes to These Terms</h2>

            <p>
              We reserve the right to modify these Terms & Conditions at any
              time. Continued use of Compressify after changes are published
              constitutes acceptance of the updated terms.
            </p>

          </section>

          <section className="page-section">

            <h2>10. Governing Law</h2>

            <p>
              These Terms & Conditions shall be governed and interpreted in
              accordance with the applicable laws of your jurisdiction.
            </p>

          </section>

          <section className="page-section">

            <h2>11. Contact Us</h2>

            <p>
              If you have any questions regarding these Terms & Conditions,
              please contact us through the Contact page.
            </p>

          </section>

          <section className="page-section">

            <p>
              <strong>Last Updated:</strong> July 2026
            </p>

          </section>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Terms;