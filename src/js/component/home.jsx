import React from "react";
import { useState,useEffect } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [time, setTime] = useState(0);

  React.useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
	<div className="timer">
	<i className="fa-regular fa-clock"></i>
	  <p className="digits">{Math.floor((time / 100000) % 10)}</p>
	  <p className="digits">{Math.floor((time / 10000) % 10)}</p>
	  <p className="digits">{Math.floor((time / 1000) % 10)}</p>
	  <p className="digits">{Math.floor((time / 100) % 10)}</p>
	  <p className="digits">{Math.floor((time / 10) % 10)}</p>
	  <p className="digits">{Math.floor((time / 1) % 10)}</p>
	</div>
  );
};

export default Home;
