import React from "react";
import { Link } from "react-router-dom";
import bannerimage from "../../assets/women.png";
const Home = () => {
  return (
    <div className="hero banner bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerimage}
          className="lg:w-1/2 rounded-lg shadow-2xl"
          alt="bannerimg"
        />
        <div>
          <h1 className="text-2xl font-bold lg:text-5xl">
            BEAUTY SALON <br /> FOR EVERY WOMEN
          </h1>
          <p className="py-6">
            Jarin's Parlour,CTG is one of the popular Hair Salon located in
            ,Chittagong listed under Local business in Chittagong , Beauty Salon
            in Chittagong ,
          </p>
          <Link to="/dashboard">
            <button className="btn btn-primary text-white">
              Go to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
