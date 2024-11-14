import { useState } from "react";

const Testimonial = () => {
  const [currentIndex, SetCurrentIndex] = useState(0);

  const handlePrevClick = () =>
    SetCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );

  const handleNextClick = () =>
    SetCurrentIndex((currentIndex + 1) % testimonials.length);

  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];

  return (
    <div className="testimonials">
      <div className="testiminals-quote">
        {testimonials[currentIndex].quote}
      </div>

      <div className="testimials-author">
        - {testimonials[currentIndex].author}
      </div>

      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Testimonial;
