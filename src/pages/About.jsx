import { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SEO from "../components/SEO";

import "../styles/Pages.css";

function About() {
  return (
    <>
      <SEO
        title="About Compressify"
        description="Learn about Compressify, a free online image compressor that helps reduce image size while maintaining high quality."
        keywords="about compressify,image compressor,online image compressor"
      />

      <Navbar />

      <main className="page">

        <div className="container page-container">

          <div className="page-header">

            <h1>About Compressify</h1>

            <p>
              Compressify is a fast, secure and completely free online image
              compression tool built to help users reduce image file sizes
              without sacrificing visual quality.
            </p>

          </div>

          <section className="page-section">

            <h2>Our Mission</h2>

            <p>
              Large image files slow down websites, consume storage space and
              take longer to upload or share. Compressify was created to solve
              this problem with a simple, fast and user-friendly solution that
              anyone can use.
            </p>

            <p>
              Our goal is to provide professional image optimization tools that
              work directly in your browser while keeping your experience fast,
              secure and easy.
            </p>

          </section>

          <section className="page-section">

            <h2>Why Choose Compressify?</h2>

            <div className="about-grid">

              <div className="about-card">

                <h3>Fast Processing</h3>

                <p>
                  Compress images within seconds using modern browser
                  technology.
                </p>

              </div>

              <div className="about-card">

                <h3>Secure</h3>

                <p>
                  Your images remain private and are processed locally whenever
                  possible.
                </p>

              </div>

              <div className="about-card">

                <h3>High Quality</h3>

                <p>
                  Reduce image size while maintaining excellent visual quality.
                </p>

              </div>

              <div className="about-card">

                <h3>Free Forever</h3>

                <p>
                  No subscriptions, registrations or hidden charges.
                </p>

              </div>

            </div>

          </section>

          <section className="page-section">

            <h2>Supported Formats</h2>

            <ul className="page-list">

              <li>JPEG (.jpg, .jpeg)</li>

              <li>PNG (.png)</li>

              <li>WebP (.webp)</li>

            </ul>

          </section>

          <section className="page-section">

            <h2>Who Can Use Compressify?</h2>

            <p>
              Compressify is useful for students, bloggers, photographers,
              designers, developers, businesses and anyone who wants to reduce
              image size before uploading or sharing files.
            </p>

          </section>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default About;