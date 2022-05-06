import { useState } from "react";
import { IoSearch, IoChevronDown } from "react-icons/io5";

import Wrapper from "../assets/wrappers/Home";

const regions = ["Africa", "Asia", "Americas", "Europe", "Oceania"];

const Home = () => {
  const [country, setCountry] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [showRegions, setShowRegions] = useState<boolean>(false);

  console.log(region);

  return (
    <Wrapper>
      <div className="inputs">
        <div className="country">
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            type="text"
            className="country-input"
            placeholder="Search for a country..."
          />
          <IoSearch className="search-icon" />
        </div>
        <div className="region">
          <button
            onClick={() => setShowRegions(!showRegions)}
            className="btn regions-btn"
          >
            <span className="btn-text">{region || "Filter By Region"}</span>
            <span className="btn-icon">
              <IoChevronDown />
            </span>
          </button>
          {showRegions && (
            <ul className="regions">
              {regions.map((regionName) => {
                return (
                  <li className="region-name" key={regionName}>
                    <button
                      className="btn region-btn"
                      onClick={() => setRegion(regionName)}
                    >
                      {regionName}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
