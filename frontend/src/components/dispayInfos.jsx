import React from "react";
import sellCar from "../assets/sell-car.png";
import "../styles/sell-car.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const SellCar  = () => {
  const value = 0.6;

  return (
    <div className="sell__car">
      <div className="sell__car-wrapper">
        <h2 className="sell__car-title">DriveUp</h2>
        <div className="sell__car-top">
          <div className="sell__car-img">
            <h2>2022 Audi Q5</h2>
            <img src={sellCar} alt="" />
          </div>

          <div className="tracking__history">
            <h3>Attention ! Speed limit :</h3>
            <div style={{ width: 200, height: 200 }} className="newSpeed" >
                <CircularProgressbar value={100} maxValue={1} text={`${value * 100}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellCar;