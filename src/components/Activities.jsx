import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ImageSlideshow = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    if (images && images.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  }, [images]);

  const prevSlide = () => {
    if (images && images.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    if (images && images.length > 1) {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }
  }, [nextSlide, images]);

  if (!images || images.length === 0) {
    return <div className="h-64 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-500 dark:text-gray-400">Images coming soon for {title}</div>;
  }

  return (
    <div className="relative w-full h-64 md:h-72 overflow-hidden rounded-lg shadow-inner bg-gray-100 dark:bg-gray-700">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <img  
            src={images[currentIndex].src || "https://images.unsplash.com/photo-1600880292203-757bb62b4be3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGV2ZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"} 
            alt={`${title} - Slide ${currentIndex + 1}: ${images[currentIndex].alt}`} 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
      {images.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 z-10"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 z-10"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${currentIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};


const Activities = () => {
  const eventTypes = [
    {
      title: "Guest Talk by Sushil Reddy",
      description: "An inspiring session with Mr. Sushil Reddy, an IIT Bombay alumnus, Guinness World Record holder for the longest journey on an electric bicycle, and founder of The SunPedal Ride. He shared his journey and insights on sustainable mobility and entrepreneurship.",
      images: [
        {src: "/images/R2.jpg", alt: "Sushil Reddy addressing the audience during the guest talk" },
        {src: "/images/R3.jpg", alt: "Students interacting with Sushil Reddy after the session" },
        {src: "/images/R1.jpg", alt: "Students getting valuable insigths from Sushil Reddy" },
        {src: "/images/R4.jpg", alt: "Group photo with Sushil Reddy and club members" },
      ]
    },
    {
      title: "EV Workshops for Students",
      description: "A series of hands-on workshops covering the fundamentals of Electric Vehicle technology, including battery systems, motor control, and vehicle assembly. Aimed at equipping students with practical skills for EV development.",
      images: [
        {src: "/images/W3.jpg", alt: "Workshop related to mechanical and electronics of an EV" },
        {src: "/images/W4.jpg", alt: "Students engaged in hand-on experience of understandin PCBs" },
        {src: "/images/W2.png", alt: "Students appearing for assessemeent at the end of workshop" },
        {src: "/images/W1.png", alt: "Presentation on all the aspects of an EV" },
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="events" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Our <span className="text-gradient-red">Events</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore our key events: insightful Guest Talks and practical Workshops.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {eventTypes.map((event, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col bg-gray-50 dark:bg-gray-800 rounded-xl">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors text-gray-800 dark:text-white">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col p-4 md:p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm md:text-base">{event.description}</p>
                  <div className="mt-auto">
                    <ImageSlideshow images={event.images} title={event.title} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;