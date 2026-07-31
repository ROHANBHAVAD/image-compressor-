import { Helmet } from "react-helmet-async";

function SEO({

title,

description,

keywords

}){

return(

<Helmet>

<title>{title}</title>

<meta
name="description"
content={description}
/>

<meta
name="keywords"
content={keywords}
/>

<meta
name="viewport"
content="width=device-width, initial-scale=1"
/>

<meta
property="og:title"
content={title}
/>

<meta
property="og:description"
content={description}
/>

<meta
property="og:type"
content="website"
/>

<meta
name="twitter:card"
content="summary_large_image"
/>

</Helmet>

);

}

SEO.defaultProps={

keywords:"image compressor,compress image,reduce image size"

};

export default SEO;