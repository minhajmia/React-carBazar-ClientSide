import React from "react";
import Banner from "./Banner/Banner";
import Review from "./Review/Review";
import SignUpSection from "./SignUpSection/SignUpSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <SignUpSection />
      <Review />
    </div>
  );
};

export default Home;
