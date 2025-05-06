import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingCart, Info } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const products = [
  {
    name: "Basilard",
    description: "A sleek, double-edged dagger inspired by medieval designs.",
    price: "$350",
    image: "/images/basilard.jpg",
    gallery: [
      "/images/20241115_200650.jpeg"
    ]
  },
  {
    name: "Trail Knife",
    description: "Reliable and rugged, built for endurance and wilderness utility.",
    price: "$200",
    image: "/images/20241012_230349.jpeg",
    gallery: [
      "/images/20241012_230349.jpeg",
      "/images/20241012_230344.jpeg",
      "/images/20241012_230342.jpeg",
      "/images/20241012_230333.jpeg",
      "/images/20241002_183811.jpeg",
      "/images/20241010_144833.jpeg",
      "/images/20241012_232558.jpeg",
      "/images/20241012_232546.jpeg",
      "/images/20241012_230329.jpeg"
    ],
  },
  {
    name: "Collector’s Sword",
    description: "Beautifully balanced and crafted for display or ceremony.",
    price: "$1200",
    image: "/images/collectors-sword.jpg",
  },
  {
    name: "Miscellaneous & Prototype Knives",
    description: "Unique one-off designs, experimental models, and budget-friendly blades.",
    price: "$80",
    image: "/images/misc-knives.jpg",
    gallery: [
      "/images/20241123_145510.jpeg",
      "/images/20241207_162921.jpeg",
      "/images/20241207_162917.jpeg",
      "/images/20250223_143000.jpeg",
      "/images/20250223_143000.jpeg"
    ]
  },
  {
    name: "Fire Flipper / Meat Flipper",
    description: "Forged from solid stock for serious BBQ and firepit action. Functional, sturdy, and handcrafted.",
    price: "$29",
    image: "/images/20250108_120205.jpeg",
    gallery: [
      "/images/20250108_120205.jpeg",
      "/images/20250108_120230.jpeg"
    ]
  },
  {
    name: "Renaissance Fair Fencing Sword",
    description: "Custom epee and costume foil handles built for Renaissance reenactment, theatrical fencing, or display.",
    price: "$450",
    image: "/images/20250213_162757.jpeg",
    gallery: [
      "/images/20250213_162757.jpeg",
      "/images/20250206_200507.jpeg",
      "/images/20250107_231830.jpeg",
      "/images/20250107_231820.jpeg"
    ]
  },
  {
    name: "Knife in a Day Class",
    description: "You may have noticed that many of the photos in this section are the same as the Miscellaneous & Prototype Knives. That's because the knives are the same! In this hands-on, full-day class, you'll forge and finish your very own knife — the same quality and designs available in our shop.",
    price: "$150",
    image: "/images/20241123_145510.jpeg",
    gallery: [
      "/images/20241123_145510.jpeg",
      "/images/20241207_162921.jpeg",
      "/images/20241207_162917.jpeg",
      "/images/20250223_143000.jpeg",
      "/images/20250223_143000.jpeg"
    ]
  }
];

export default function CommissionedKnivesPage() {
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const openLightbox = (images) => {
    setLightboxImages(images.map((src) => ({ src })));
    setLightboxOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="p-6 grid gap-6 max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center"
      >
        Commissioned Knives & Swords
      </motion.h1>
      <p className="text-center text-lg text-gray-600">
        Handcrafted blades designed for collectors, adventurers, and enthusiasts.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Card key={index} className="rounded-2xl shadow-lg">
            <CardContent className="p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                onClick={() => product.gallery && openLightbox(product.gallery)}
              />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-sm text-gray-500 mb-2">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">{product.price}</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Info className="w-4 h-4 mr-1" /> Details
                  </Button>
                  <Button size="sm">
                    <ShoppingCart className="w-4 h-4 mr-1" /> Order
                  </Button>
                </div>
              </div>
              {product.gallery && (
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {product.gallery.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${product.name} view ${i + 1}`}
                      className="w-full h-24 object-cover rounded-lg hover:scale-110 transition-transform duration-200 cursor-zoom-in"
                      onClick={() => openLightbox(product.gallery)}
                    />
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <form
        onSubmit={handleFormSubmit}
        className="mt-10 bg-white shadow-md rounded-lg p-6 grid gap-4"
      >
        <h2 className="text-2xl font-bold text-center">Interested in a Blade?</h2>
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 rounded-lg"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-2 rounded-lg"
          required
        />
        <textarea
          placeholder="Let us know what you're looking for..."
          rows={4}
          className="border p-2 rounded-lg"
          required
        ></textarea>
        <Button type="submit" className="w-full">Send Inquiry</Button>
        {formSubmitted && (
          <p className="text-green-600 text-center font-semibold mt-2">
            Thank you! We'll get back to you shortly.
          </p>
        )}
      </form>
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={lightboxImages}
        />
      )}
    </div>
  );
}
