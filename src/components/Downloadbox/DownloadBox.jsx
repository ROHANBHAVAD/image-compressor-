import "./DownloadBox.css";

function DownloadBox({ compressedImage }) {
  const handleDownload = () => {
    if (!compressedImage) return;

    const url = URL.createObjectURL(compressedImage);

    const link = document.createElement("a");
    link.href = url;
    link.download = compressedImage.name || "compressed-image.jpg";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <section className="download-section">

      <h2>Download Image</h2>

      <button
        disabled={!compressedImage}
        onClick={handleDownload}
      >
        Download Compressed Image
      </button>

    </section>
  );
}

export default DownloadBox;