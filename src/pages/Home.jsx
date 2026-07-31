import { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import UploadBox from "../components/Uploadbox/UploadBox";
import Compressbox from "../components/Compressbox/Compressbox";
import Preview from "../components/Preview/Preview";
import Statistics from "../components/Statistics/Statistics";
import DownloadBox from "../components/Downloadbox/DownloadBox";
import Features from "../components/Features/Features";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import SEO from "../components/SEO";

import "../styles/home.css";

function Home() {
  const [originalImage, setOriginalImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);

  return (
    <>
      <SEO
        title="Compressify | Free Online Image Compressor"
        description="Compress JPG, PNG and WebP images online for free. Reduce image size without losing quality. Fast, secure and browser-based image compression."
        keywords="compress image,image compressor,jpg compressor,png compressor,webp compressor,reduce image size,online image compressor"
      />

      <Navbar />

      <main className="home">

        {/* Hero */}
        <Hero />

        {/* Upload */}
        <section className="home-section upload-section">
  <div className="container upload-container">
    <UploadBox
      setOriginalImage={setOriginalImage}
    />
  </div>
</section>

        {/* Compression */}
        <section className="home-section compress-section">
          <div className="container">

            <Compressbox
              originalImage={originalImage}
              setCompressedImage={setCompressedImage}
            />

          </div>
        </section>

        {/* Preview */}
        {(originalImage || compressedImage) && (
          <section className="home-section preview-section">
            <div className="container">

              <Preview
                originalImage={originalImage}
                compressedImage={compressedImage}
              />

            </div>
          </section>
        )}

        {/* Statistics */}
        {compressedImage && (
          <section className="home-section statistics-section">
            <div className="container">

              <Statistics
                originalImage={originalImage}
                compressedImage={compressedImage}
              />

            </div>
          </section>
        )}

        {/* Download */}
        {compressedImage && (
          <section className="home-section download-section">
            <div className="container">

              <DownloadBox
                compressedImage={compressedImage}
              />

            </div>
          </section>
        )}

        {/* Features */}
        <section className="home-section features-section">
          <div className="container">

            <Features />

          </div>
        </section>

        {/* FAQ */}
        <section className="home-section faq-section">
          <div className="container">

            <FAQ />

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Home;