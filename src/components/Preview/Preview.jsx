import "./Preview.css";

function Preview({

    originalImage,

    compressedImage

}) {

    return (

        <section className="preview">

            <div className="preview__container">

                <div className="preview__card">

                    <h3>Original</h3>

                    <div className="preview__image">

                        {

                            originalImage ?

                            <img

                                src={URL.createObjectURL(originalImage)}

                                alt="Original"

                            />

                            :

                            <p>

                                No Image Selected

                            </p>

                        }

                    </div>

                </div>

                <div className="preview__card">

                    <h3>Compressed</h3>

                    <div className="preview__image">

                        {

                            compressedImage ?

                            <img

                                src={URL.createObjectURL(compressedImage)}

                                alt="Compressed"

                            />

                            :

                            <p>

                                Compressed image will appear here

                            </p>

                        }

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Preview;