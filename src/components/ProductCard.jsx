import React from 'react';
import "../styles/components/ProductCard.css"
import image1 from '../assets/images/image1.jpg';
import image3 from '../assets/images/image3.jpg';
import image10 from '../assets/images/image10.jpg';
import image9 from '../assets/images/image9.jpg';

const products = [
  {
    id: 1,
    title: "Earthen Bottle",
    price: "$48",
    image: image1,
    alt: "Tall slender porcelain bottle with natural clay textured body and cork stopper."
  },
  {
    id: 2,
    title: "Nomad Tumbler",
    price: "$35",
    image: image9,
    alt: "Olive drab green insulated bottle with flared screw lid and flat top."
  },
  {
    id: 3,
    title: "Focus Paper Refill",
    price: "$89",
    image: image3,
    alt: "Person using a pen to cross a task off a productivity paper card."
  },
  {
    id: 4,
    title: "Focus Paper Refill",
    price: "$89",
    image: image10,
    alt: "Person using a pen to cross a task off a productivity paper card."
  }
];

const ProductCard = (props) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="shop_title">{props.shop_title}</div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map(product => (
            <a href="#" className="group" key={product.id}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  alt={product.alt}
                  src={product.image}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
