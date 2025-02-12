import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Button, Card, CardContent } from "@mui/material";


const books = [
  { title: "Book 1", image: "/images/book1.jpg" },
  { title: "Book 2", image: "/images/book2.jpg" },
  { title: "Book 3", image: "/images/book3.jpg" },
  { title: "Book 4", image: "/images/book4.jpg" },
  { title: "Book 5", image: "/images/book5.jpg" },
  { title: "Book 6", image: "/images/book6.jpg" },
  { title: "Book 7", image: "/images/book7.jpg" },
  { title: "Book 8", image: "/images/book8.jpg" },
];

const BookSlider = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        loop
        className="py-4"
      >
        {books.map((book, index) => (
          <SwiperSlide key={index}>
            <Card className="p-4 text-center shadow-lg rounded-xl">
              <CardContent>
                <h3 className="text-lg font-semibold">{book.title}</h3>
                <p className="text-gray-600">{book.description}</p>
                <p className="text-xl font-bold mt-2">{book.price}</p>
                <Button className="mt-4">Add to Cart</Button>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BookSlider;
