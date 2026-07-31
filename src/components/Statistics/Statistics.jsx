import "./Statistics.css";

function Statistics({

originalImage,

compressedImage

}){

const originalSize=

originalImage?

(originalImage.size/1024).toFixed(1):0;

const compressedSize=

compressedImage?

(compressedImage.size/1024).toFixed(1):0;

const saved=

compressedImage?

(
100-
((compressedImage.size/originalImage.size)*100)
).toFixed(1):0;

return(

<section className="statistics">

<div className="container">

<h2>Compression Result</h2>

<div className="stats-grid">

<div className="stat-card">

<h3>Original</h3>

<p>{originalSize} KB</p>

</div>

<div className="stat-card">

<h3>Compressed</h3>

<p>{compressedSize} KB</p>

</div>

<div className="stat-card">

<h3>Saved</h3>

<p>{saved}%</p>

</div>

</div>

</div>

</section>

);

}

export default Statistics;