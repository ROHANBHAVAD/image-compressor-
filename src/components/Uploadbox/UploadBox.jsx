import { useRef } from "react";
import "./UploadBox.css";

function Uploadbox({ setOriginalImage }) {

  const inputRef = useRef();

  const handleChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setOriginalImage(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    if (!file) return;

    setOriginalImage(file);
  };

  return (

    <section className="upload">

      <div
        className="upload-box"
        onClick={() => inputRef.current.click()}
        onDragOver={(e)=>e.preventDefault()}
        onDrop={handleDrop}
      >

        <h2>Select Image</h2>

        <p>
          Click or Drag & Drop JPG, PNG or WebP image here.
        </p>

        <button className="primary-btn">
          Choose Image
        </button>

        <input
          ref={inputRef}
          type="file"
          accept=".jpg,.jpeg,.png,.webp"
          hidden
          onChange={handleChange}
        />

      </div>

    </section>

  );

}

export default Uploadbox;