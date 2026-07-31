import "./Features.css";

function Features() {
  const features = [
    {
      title: "Fast Compression",
      description:
        "Reduce image size in seconds using browser-based processing."
    },
    {
      title: "Secure",
      description:
        "Your images stay on your device whenever possible."
    },
    {
      title: "High Quality",
      description:
        "Maintain excellent image quality while reducing file size."
    },
    {
      title: "Free Forever",
      description:
        "No registration or subscription required."
    }
  ];

  return (
    <section className="features">
      <div className="container">

        <h2>Why Choose Compressify?</h2>

        <div className="features-grid">

          {features.map((feature, index) => (

            <div
              className="feature-card"
              key={index}
            >

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;