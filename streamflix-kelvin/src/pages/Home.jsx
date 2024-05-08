import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col">
        <Hero />
        <Card />
      </div>
    </div>
  );
};

export default Home;
