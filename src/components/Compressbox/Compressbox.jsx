import { useEffect, useRef, useState } from "react";
import "./Compressbox.css";

function CompressBox({
  originalImage,
  compressedImage,
  setCompressedImage,
}) {
  const [targetSize, setTargetSize] = useState(5);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const canvasRef = useRef(document.createElement("canvas"));

  useEffect(() => {
    if (originalImage) {
      setTargetSize(Math.ceil(originalImage.size / 1024));
    }
  }, [originalImage]);

  const originalSizeKB = originalImage
    ? Math.ceil(originalImage.size / 1024)
    : 0;

  const fileFromCanvas = (canvas, quality) =>
    new Promise((resolve) => {
      canvas.toBlob(
        (blob) => {
          resolve(
            new File(
              [blob],
              originalImage.name.replace(/\.\w+$/, ".jpg"),
              {
                type: "image/jpeg",
                lastModified: Date.now(),
              }
            )
          );
        },
        "image/jpeg",
        quality
      );
    });

  const loadImage = (file) =>
    new Promise((resolve, reject) => {
      const img = new Image();

      img.onload = () => resolve(img);
      img.onerror = reject;

      img.src = URL.createObjectURL(file);
    });

  const compressImage = async () => {
    if (!originalImage) {
      alert("Please select an image.");
      return;
    }

    setLoading(true);
    setStatus("Loading image...");

    try {
      const img = await loadImage(originalImage);

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      let width = img.width;
      let height = img.height;

      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0, width, height);

      const targetBytes = targetSize * 1024;

      let bestFile = null;

      let resize = 1;

            while (resize >= 0.2) {

        canvas.width = Math.round(width * resize);
        canvas.height = Math.round(height * resize);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(
          img,
          0,
          0,
          canvas.width,
          canvas.height
        );

        let low = 0.02;
        let high = 1;
        let candidate = null;

        for (let i = 0; i < 12; i++) {

          const quality = (low + high) / 2;

          setStatus(
            `Searching quality... ${Math.round(
              quality * 100
            )}%`
          );

          const file = await fileFromCanvas(
            canvas,
            quality
          );

          if (file.size <= targetBytes) {

            candidate = file;

            low = quality;

          } else {

            high = quality;

          }

        }

        if (candidate) {

          bestFile = candidate;

          break;

        }

        resize -= 0.1;

      }

      if (!bestFile) {

        setStatus(
          "Target size not possible. Using smallest available..."
        );

        bestFile = await fileFromCanvas(
          canvas,
          0.02
        );

      }

      setCompressedImage(bestFile);

      setStatus(
        `Finished • ${(
          bestFile.size / 1024
        ).toFixed(1)} KB`
      );

    } catch (err) {

      console.error(err);

      alert("Compression failed.");

      setStatus("");

    } finally {

      setLoading(false);

    }

  };

  return (

    <section className="compress">

      <div className="compress-card">

        <h2>Compression Settings</h2>

        {originalImage && (

          <p className="original-size">

            Original Size :
            <strong> {originalSizeKB} KB</strong>

          </p>

        )}

        <div className="slider">

          <label>Target Size</label>

          <input
            type="range"
            min="5"
            max={originalImage ? originalSizeKB : 5}
            value={targetSize}
            disabled={!originalImage}
            onChange={(e) =>
              setTargetSize(Number(e.target.value))
            }
          />

          <div className="slider-value-box">

    <strong>{targetSize} KB</strong>

</div>

        </div>

                <button
          onClick={compressImage}
          disabled={loading}
        >
          {loading ? "Compressing..." : "Compress Image"}
        </button>

        {status && (
          <p className="compression-status">
            {status}
          </p>
        )}

        {compressedImage && (
          <div className="compression-result">

            <div className="result-row">
              <span>Original Size</span>
              <strong>{originalSizeKB} KB</strong>
            </div>

            <div className="result-row">
              <span>Compressed Size</span>
              <strong>
                {(compressedImage.size / 1024).toFixed(1)} KB
              </strong>
            </div>

            <div className="result-row">
              <span>Saved</span>
              <strong>
                {(
                  (
                    (originalImage.size - compressedImage.size) /
                    originalImage.size
                  ) * 100
                ).toFixed(1)}
                %
              </strong>
            </div>

          </div>
        )}

      </div>

    </section>
  );
}

export default CompressBox;