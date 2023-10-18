import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { PiNotepad } from "react-icons/pi";
import { FiLock } from "react-icons/fi";
import { PiDatabaseLight } from "react-icons/pi";

import "./index.css";
import Earning from "../Earning";
import Customers from "../Customers";
import Products from "../Products";
import Topbar from "../Topbar";

function Home() {
  return (
    <main className="main-container">
      <div className="main-title">
        <Topbar />
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <div className="bg1">
              <BsCurrencyDollar className="dollar-icon" />
            </div>
          </div>
          <div className="det-container">
            <h6 className="ear">Earning</h6>
            <h3 className="dol">$198K</h3>
            <div className="arr-container">
              <BiUpArrowAlt className="up-arrow" />
              <h2 className="tex">37.8%</h2>
              <p5 className="para">this month</p5>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="bg2">
              <PiNotepad className="dollar-icon2" />
            </div>
          </div>
          <div className="det-container">
            <h6 className="ear">Orders</h6>
            <h3 className="dol">$2.4K</h3>
            <div className="arr-container">
              <BiDownArrowAlt className="up-arrow2" />
              <h2 className="tex2">2%</h2>
              <p5 className="para">this month</p5>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="bg3">
              <PiDatabaseLight className="dollar-icon3" />
            </div>
          </div>
          <div className="det-container">
            <h6 className="ear">Balance</h6>
            <h3 className="dol">$2.4K</h3>
            <div className="arr-container">
              <BiDownArrowAlt className="up-arrow2" />
              <h2 className="tex2">2%</h2>
              <p5 className="para">this month</p5>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="bg4">
              <FiLock className="dollar-icon4" />
            </div>
          </div>
          <div className="det-container">
            <h6 className="ear">Total Sales</h6>
            <h3 className="dol">$89K</h3>
            <div className="arr-container">
              <BiDownArrowAlt className="up-arrow" />
              <h2 className="tex">11%</h2>
              <p5 className="para">this month</p5>
            </div>
          </div>
        </div>
      </div>

      <div className="charts">
        <Earning />
        <Customers />
      </div>
      <div className="pr-con">
        <Products className="pa" />
      </div>

      <br />
    </main>
  );
}

export default Home;
