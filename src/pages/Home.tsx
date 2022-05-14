import axios from "axios";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import { IoSearch, IoChevronDown } from "react-icons/io5";

import Wrapper from "../assets/wrappers/Home";
import FlagList from "../components/FlagList";

export type Country = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  capital: string;
  region: string;
  subregion: string;
  population: number;
  flags: {
    svg: string;
  };
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  borders: string[];
};

const regions = ["All", "Africa", "Asia", "Americas", "Europe", "Oceania"];

const url = "https://restcountries.com/v3.1/";

const fetchAllCountries = () => {
  return axios.get(`${url}all`);
};

const fetchByRegion = (region: string) => {
  return axios.get(`${url}region/${region}`);
};

const fetchByName = (name: string) => {
  return axios.get(`${url}name/${name}`);
};

const Home = () => {
  const [country, setCountry] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [showRegions, setShowRegions] = useState<boolean>(false);
  const [data, setData] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const {
    isLoading: allCountriesLoading,
    data: allCountries,
    isError: allCountriesError,
  } = useQuery("all_countries", fetchAllCountries, {
    select: (data) => {
      const countries: Country[] = data.data.map((country: Country) => country);
      return countries;
    },
  });

  const {
    isLoading: regionCountriesLoading,
    data: regionCountries,
    isError: regionCountriesError,
  } = useQuery(`${region}_countries`, () => fetchByRegion(region), {
    select: (data) => {
      const countries: Country[] = data.data.map((country: Country) => country);
      return countries;
    },
    enabled: !!region,
  });

  const {
    isLoading: nameCountriesLoading,
    data: nameCountries,
    isError: nameCountriesError,
  } = useQuery(`${country}`, () => fetchByName(country), {
    select: (data) => {
      const countries: Country[] = data.data.map((country: Country) => country);
      return countries;
    },
    enabled: !!country,
  });

  useEffect(() => {
    document.addEventListener("click", () => {
      setShowRegions(false);
    });
  }, []);

  // useEffect(() => {
  //   setData(allCountries || []);
  //   setIsLoading(allCountriesLoading);
  //   setIsError(allCountriesError);
  // }, [allCountries, allCountriesError, allCountriesLoading]);

  useEffect(() => {
    const setRegionCountries = () => {
      if (country) {
        setData(nameCountries || []);
        setIsLoading(nameCountriesLoading);
        setIsError(nameCountriesError);
      } else if (region && region !== "All") {
        setData(regionCountries || []);
        setIsLoading(regionCountriesLoading);
        setIsError(regionCountriesError);
      } else {
        setData(allCountries || []);
        setIsLoading(allCountriesLoading);
        setIsError(allCountriesError);
      }
    };
    setRegionCountries();
  }, [
    region,
    regionCountries,
    regionCountriesLoading,
    regionCountriesError,
    country,
    nameCountries,
    nameCountriesLoading,
    nameCountriesError,
    allCountries,
    allCountriesError,
    allCountriesLoading,
  ]);

  return (
    <Wrapper>
      <div className="inputs">
        <div className="country">
          <input
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            type="text"
            className="country-input"
            placeholder="Search for a country..."
          />
          <IoSearch className="search-icon" />
        </div>
        <div className="region">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowRegions(!showRegions);
            }}
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
      <FlagList data={data} isError={isError} isLoading={isLoading} />
    </Wrapper>
  );
};

export default Home;
