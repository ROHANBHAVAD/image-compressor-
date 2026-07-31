import "./FAQ.css";

function FAQ() {

const faqs=[

{
question:"Is Compressify free?",
answer:"Yes. Compressify is completely free to use."
},

{
question:"Are my images uploaded?",
answer:"No. Images are processed inside your browser whenever possible."
},

{
question:"Which formats are supported?",
answer:"JPG, PNG and WebP."
},

{
question:"Can I compress large images?",
answer:"Yes, depending on your browser and available memory."
}

];

return(

<section className="faq">

<div className="container">

<h2>Frequently Asked Questions</h2>

{
faqs.map((faq,index)=>(

<div
className="faq-item"
key={index}
>

<h3>{faq.question}</h3>

<p>{faq.answer}</p>

</div>

))
}

</div>

</section>

);

}

export default FAQ;