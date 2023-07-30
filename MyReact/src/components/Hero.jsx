const HeroSection = () => {
  return (
    <div>
      <main className="Hero">
        <div className="HeroContent">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="TwoButton">
            <button>Shop Now</button>
            <button className="category">Category</button>
          </div>
          <div>
            <p>Also Available On</p>
            <img src="/images/flipkart.png" alt="filpkart" srcset="" />
            <img src="/images/amazon.png" alt="" srcset="" />
          </div>
        </div>
        <div className="HeroImage">
          <img src="/images/shoe_image.png" alt="" srcset="" />
        </div>
      </main>
    </div>
  );
};
export default HeroSection;
