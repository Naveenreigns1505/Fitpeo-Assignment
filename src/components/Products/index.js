import React, { useState } from "react";
import "./index.css";
import { GoSearch } from "react-icons/go";

function Products() {
  const [selectedOption, setSelectedOption] = useState("30days");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="productWrapper">
      <div className="productTop">
        <div className="productHeading">Product Sell</div>
        <div className="productFilter">
          <div className="searchbar">
            <div classname="searchImgContainer">
              <GoSearch className="searchIcon" />
            </div>
            <div className="searchInputContainer">
              <input type="text" class="searchInput" placeholder="Search" />
            </div>
          </div>
          <div className="dropdownList">
            <select
              value={selectedOption}
              onChange={handleChange}
              className="selectList"
            >
              <option value={"3days"}>Last 3 days</option>
              <option value={"7days"}>Last 7 days</option>
              <option value={"30days"}>Last 30 days</option>
            </select>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <table className="productTable">
          <thead>
            <tr>
              <th className="th1">Product Name</th>
              <th className="th2">Stocks</th>
              <th className="th3">Price</th>
              <th className="th4">Total Sales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="productNameContainer">
                  <div className="ProductImgContainer">
                    <img
                      src="https://img.freepik.com/free-photo/deep-colorful-reef-teems-with-life-generated-by-ai_188544-34766.jpg?size=626&ext=jpg&ga=GA1.1.2002628386.1688888353&semt=ais"
                      className="productImg"
                      alt=""
                    />
                  </div>
                  <div className="nameContainer">
                    <div className="productName">Abstract 3d</div>
                    <div className="productDesc">
                      Larem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                  </div>
                </div>
              </td>
              <td>32 in stock</td>
              <td>$45.99</td>
              <td>20</td>
            </tr>
            <tr>
              <td>
                <div className="productNameContainer">
                  <div className="ProductImgContainer">
                    <img
                      src="https://img.freepik.com/free-photo/burning-bonfire-sandy-beach-dusk-generated-by-ai_188544-35192.jpg?size=626&ext=jpg&ga=GA1.1.2002628386.1688888353&semt=ais"
                      className="productImg"
                      alt=""
                    />
                  </div>
                  <div className="nameContainer">
                    <div className="productName">Sarphens illustration</div>
                    <div className="productDesc">
                      Larem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                  </div>
                </div>
              </td>
              <td>32 in stock</td>
              <td>$45.99</td>
              <td>20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
