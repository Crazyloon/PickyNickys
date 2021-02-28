import React from 'react';
import Card from "./Card";

const galleryCards = [
  {
    src: "banana_bread.jpg",
    heading: 'Banana Bread',
    body: `Banana bread is the perfect treat for a quick breakfast or light snack!`,
  },
  {
    src: "banana_bread_packaged.jpg",
    heading: 'Banana Bread',
    body: `Our first order of banana bread prepped for delivery!`,
  },
  {
    src: "banana_bread_packaged_02.jpg",
    heading: 'Banana Bread',
    body: `Our banana bread never shys away from a photo shoot.`,
  },
  {
    src: "chocolate_chip_cookies_02.jpg",
    heading: 'Chocolate Chip Cookies',
    body: `These classics will be a family favorite for years to come.`,
  },
  {
    src: "chocolate_chip_cookies.jpg",
    heading: 'Jumbo Chocolate Chip',
    body: `For those not watching their weight, these are a great snack!`,
  },
  {
    src: "cookies_packaged.jpg",
    heading: 'Chocolate Chip Cookies',
    body: `Preparing some fresh baked cookies for delivery.`,
  },
  {
    src: "golden_brown_cookies.jpg",
    heading: 'Chocolate Chip Cookies',
    body: `Golden brown chocolate chip cookies fresh from the oven.`,
  },
  {
    src: "cookies_packaged_in_bag.jpg",
    heading: 'Chocolate Chip Cookies',
    body: `Our first order packed with our official logo. How exciting!`,
  },
  {
    src: "cookies_packaged_in_container.jpg",
    heading: 'Chocolate Chip Cookies',
    body: `Another order packed with our official logo, ready to be eaten.`,
  },
  {
    src: "multi_order_display.jpg",
    heading: 'Banana Bread and Cookies',
    body: `We had a very busy day! Business is starting out quite well!`,
  },
  {
    src: "milk_tea_01.jpg",
    heading: 'Milk Tea',
    body: `Classic (left) and Darkchoco Creamcheese (right) milk teas are here!`,
  },
  {
    src: "milk_tea_02.jpg",
    heading: 'Milk Tea',
    body: `Choco-banana (left) and Okinawa (right) milk teas - so refreshing!`,
  },
]

const Gallery = ({cards}) => {
  cards = galleryCards;
  return ( 
    <section className='col-12 mt-4'>
      <div className='card-columns'>
      {
        cards.map((card, i) => {
          return <Card key={i} body={card.body} heading={card.heading}
                imgSrc={card.src}
          />
        })
      }
      </div>
    </section>
   );
}
 
export default Gallery;