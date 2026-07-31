import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SEO from "../components/SEO";

import "../styles/Pages.css";

function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Compressify"
        description="Read the Compressify Privacy Policy to understand how your information and images are handled."
        keywords="privacy policy,image compressor privacy,compressify privacy"
      />

      <Navbar />

      <main className="page">

        <div className="container page-container">

          <div className="page-header">

            <h1>Privacy Policy</h1>

            <p>
              Your privacy is important to us. This Privacy Policy explains how
              Compressify collects, uses, and protects your information when you
              use our website.
            </p>

          </div>

          <section className="page-section">

            <h2>1. Image Processing</h2>

            <p>
              Compressify processes images directly within your browser whenever
              possible. Uploaded images are not permanently stored on our
              servers unless a future feature specifically requires cloud
              processing.
            </p>

          </section>

          <section className="page-section">

            <h2>2. Information We Collect</h2>

            <p>
              We may collect limited technical information such as browser type,
              operating system, device type, IP address, and anonymous usage
              statistics to improve our services.
            </p>

          </section>

          <section className="page-section">

            <h2>3. Cookies</h2>

            <p>
              Our website may use cookies to improve user experience, remember
              preferences, analyze website traffic, and enhance performance.
            </p>

          </section>

          <section className="page-section">

            <h2>4. Google Analytics</h2>

            <p>
              We may use Google Analytics to understand how visitors interact
              with our website. The collected information is anonymous and helps
              improve website performance and user experience.
            </p>

          </section>

          <section className="page-section">

            <h2>5. Google AdSense</h2>

            <p>
              We may display advertisements through Google AdSense. Google may
              use cookies and similar technologies to provide personalized or
              non-personalized advertisements based on your preferences and
              applicable regulations.
            </p>

          </section>

          <section className="page-section">

            <h2>6. Third-Party Services</h2>

            <p>
              Our website may contain links or integrations with third-party
              services. Their privacy practices are governed by their own
              privacy policies.
            </p>

          </section>

          <section className="page-section">

            <h2>7. Data Security</h2>

            <p>
              We implement reasonable security measures to protect our website
              and user information. However, no method of electronic storage or
              internet transmission is completely secure.
            </p>

          </section>

          <section className="page-section">

            <h2>8. Children's Privacy</h2>

            <p>
              Compressify is not intended for children under the age of 13. We
              do not knowingly collect personal information from children.
            </p>

          </section>

          <section className="page-section">

            <h2>9. Changes to This Policy</h2>

            <p>
              We may update this Privacy Policy from time to time. Changes will
              become effective immediately after being published on this page.
            </p>

          </section>

          <section className="page-section">

            <h2>10. Contact Us</h2>

            <p>
              If you have any questions regarding this Privacy Policy, please
              visit our Contact page and send us your query.
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

export default Privacy;