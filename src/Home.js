import React from "react";
import "./Home.css";
import Product from "./Product";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Home() {
  return (
    <div className="Home">
      {/* <div className="Home__container"> */}
       <div className="home__container">
					<div className="Carousel">
						<Carousel
							enableAutoPlay
							autoPlaySpeed={3900}
							// autoPlay
							infiniteLoop
							itemsToShow={1}
							pagination={true}
							// itemPadding={[0, -30]}

							// showArrows={false}
						>
				
								<img
									src="https://m.media-amazon.com/images/I/61FkG0lVNdL._SX3000_.jpg"
									alt=""
								/>
						
								<img
									src="https://m.media-amazon.com/images/I/61XeI2ouz6L._SX3000_.jpg"
									alt=""
								/>
						
								<img
									src="https://m.media-amazon.com/images/I/615K5ffvbGL._SX3740_.jpg"
									alt=""
								/>
						
								<img
									src="https://m.media-amazon.com/images/I/71PiGY+Y6ML._SX3000_.jpg"
									alt=""
								/>
						
								<img
									src="https://m.media-amazon.com/images/I/71WBRk5SWhL._SX3740_.jpg"
									alt=""
								/>
							
								<img
									src="https://m.media-amazon.com/images/I/71pRV2VfXRL._SX3740_.jpg"
									alt=""
								/>
						
								<img
									src="https://m.media-amazon.com/images/I/61pg+50rEtL._SX3000_.jpg"
									alt=""
								/>
						
						</Carousel>
					</div>

        <div className="Home__row">
          <Product
            id="12321341"
            title="All New, Made for Amazon Volume Limiting Bluetooth BuddyPhones, PlayTime in Pink. Ages (3-7)"
            price={39.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71EV0IBSXGL._AC_SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="BELLEZE Traditional 58 Inch Rustic Electric Fireplace TV Stand & Media Entertainment Center Console Table for TVs up to 65 Inches with Open Storage Shelves & Cabinets - Astorga (Gray Wash)"
            price={469.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81IYcocO0pL._AC_SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Amazon Basics Low-Back, Upholstered Mesh, Adjustable, Swivel Computer Office Desk Chair, Black"
            price={62.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71yxAKCrQrL._AC_SL1500_.jpg"
          />
        </div>
        <div className="Home__row">
          <Product
            id="4903850"
            title="
DeaTee Glass Bud Vase Set of 10, Clear Bud Vases in Bulk, Small Flower Vase for Centerpieces, Clear Mini Vases for Rustic Wedding Decorations, Boho Vases..."
            price={34.58}
            rating={5}
            image="https://m.media-amazon.com/images/I/71-3757cD0L._AC_SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="
WAMPAT Modern Farmhouse Coffee Table, Rectangle Wood Center Table with Open Storage for Living Room, Spliced Wood Desktop, Riveted Metal Bars, Prismatic..."
            price={185.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/91SdNQKPP7L._AC_SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="
NordicTrack T Series Treadmills"
            price={549.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/719uh1Um6aL._AC_SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="Amazon Basics 4-Story Wooden Dollhouse and Furniture Accessories for 12-inch Dolls"
            price={101.94}
            rating={5}
            image="https://m.media-amazon.com/images/I/81Kpw1bxVHL._AC_SL1500_.jpg"
          />
        </div>
        <div className="Home__row">
          <Product
            id="90829332"
            title="SANSUI ES43S1A, 43 inch 4K UHD HDR Smart Android TV with Google Assistant(Voice Control), Screen Share, HDMI, USB"
            price={329.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71txr1d2B2L._AC_SL1404_.jpg"
          />
          <Product
            id="90829332"
            title="HONBAY Convertible Sectional Sofa Couch, L Shaped Sofa Couch with Faux Leather Sectional for Small Apartment Brown"
            price={519.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81sYp8B4bHL._AC_SL1500_.jpg"
          />
        </div>
        <div className="Home__row">
          <Product
            id="12321341"
            title="Aday Abeba 20 Piece Dinner Set / Yellow"
            price={67.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/91naog1-yPL._AC_SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Colorful Handmade Ethiopian Habesha Baskets (24x36 Giclee Gallery Art Print, Vivid Textured Wall Decor)"
            price={69.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61vXLNQzrLL._AC_.jpg"
          />
          <Product
            id="49538094"
            title="3 Lb, Single Origin Unroasted Green Coffee Beans, Specialty Grade From Single Nicaraguan Estate, Direct Trade (Caturra Varietal)"
            price={20.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81qKq0nbjKL._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
