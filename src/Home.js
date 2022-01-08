import React from "react";
import "./Home.css";
import Product from "./Product";
import CarouselContainer from "./component/CarouselContainer";
function Home() {
  return (
    <div className="Home">
      <div className="home_container">
        <CarouselContainer />
        <div className="home__row">
          <Product
            id="00001"
            title="Realme narzo 50A (Oxygen Blue, 4GB RAM + 128GB Storage) "
            price={12499}
            cut_price={13990}
            saving="Save ₹1,500"
            image="https://m.media-amazon.com/images/I/71hgVYiuFXL._AC_UY327_QL65_.jpg"
            rating={4}
          />
          <Product
            id="00002"
            title="Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 512GB SSD)"
            price={131900}
            cut_price={142900}
            saving="Save ₹11,000"
            image="https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY327_QL65_.jpg"
            rating={5}
          />
          <Product
            id="00003"
            title="DecorNation Julius Engineered  Wood Upholstered Platform Glossy Finish Queen Bed....  "
            price={17999}
            cut_price={22000}
            saving="Save -18%"
            image="https://m.media-amazon.com/images/I/61GnO+UavZL._AC_UL480_QL65_.jpg"
            rating={3}
          />
          <Product
            id="00004"
            title="Home by Nilkamal Hero Engineered Wood Queen Bed (Classic Wenge)  "
            price={12539}
            cut_price={25900}
            saving="Save -25%"
            image="https://m.media-amazon.com/images/I/71MT7HgBkCL._AC_UL480_QL65_.jpg"
            rating={5}
          />
          <Product
            id="00005"
            title="Apple iPhone 13 (128GB) - (Product) RED "
            price={89900}
            cut_price={90000}
            saving="Save ₹1,100"
            image="https://m.media-amazon.com/images/I/71gm8v4uPBL._AC_UY327_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="00006"
            title="Cosmic Byte CB-GK-17 Galactic Wired Gaming Keyboard with Aluminium Body, 7 Color RGB Backlit with Effects, Anti-Ghosting (Black) "
            price={1249}
            cut_price={1599}
            saving="Save ₹350 (22%)"
            image="https://m.media-amazon.com/images/I/71gyRfzBAKL._AC_UY327_QL65_.jpg"
            rating={3}
          />
          <Product
            id="00007"
            title="Custom Decor CNC Cuting Sheesham Wood Dining Table 4 Seater | Wooden Dining Room Furniture | 4 Chairs with Cushion | Honey Teak Brown Finish "
            price={17099}
            cut_price={30000}
            saving="Save ₹12,901 (43%)"
            image="https://m.media-amazon.com/images/I/61+fMil7fxL._AC_UL480_QL65_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="00008"
            title="Mi 80 cm (32 inches) HD Ready Android Smart.... "
            price={15099}
            cut_price={19999}
            saving="Save ₹4,000"
            image="https://m.media-amazon.com/images/I/71Z+l05eSIS._AC_UY327_QL65_.jpg"
            rating={4}
          />
          <Product
            id="00009"
            title="Samsung Galaxy S21 5G (Phantom Violet, 8GB...."
            price={55990}
            cut_price={79999}
            saving="Save ₹24,009 (30%)"
            image="https://m.media-amazon.com/images/I/91C0EYR0q5L._AC_UY327_QL65_.jpg"
            rating={5}
          />
          <Product
            id="00010"
            title="Snazzy Metal Fabric Foldable Open Book Shelf, Book Shelve Book Case..."
            price={1490}
            cut_price={2999}
            saving="Save (-50%)"
            image="https://m.media-amazon.com/images/I/71leiKbuifS._AC_UL480_QL65_.jpg"
            rating={5}
          />
          <Product
            id="00011"
            title="Snazzy Metal Fabric Foldable Open Book Shelf, Book Shelve Book Case..."
            price={15600}
            cut_price={2099}
            saving="Save (-26%)"
            image="https://m.media-amazon.com/images/I/71ft68SDUGL._AC_UL480_QL65_.jpg"
            rating={4}
          />
          <Product
            id="00012"
            title="ASUS TUF Gaming A15 (2021) 15.6-inch (39.62 cms) FHD 44Hz, AMD...."
            price={74990}
            cut_price={23000}
            saving="Save ₹23,000 "
            image="https://m.media-amazon.com/images/I/91zVSkGGZbS._AC_UY327_QL65_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
