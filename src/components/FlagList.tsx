import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";

import Wrapper from "../assets/wrappers/FlagList";
import { Country } from "../pages/Home";

const url = "https://restcountries.com/v3.1/";

const fetchAllCountries = () => {
  return axios.get(`${url}all`);
};

const FlagList = () => {
  const { isLoading, data, isError } = useQuery(
    "all_countries",
    fetchAllCountries,
    {
      select: (data) => {
        const countries: Country[] = data.data.map(
          (country: Country) => country
        );
        return countries;
      },
    }
  );

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (isError) {
    return <div className="error">Something went wrong. Try Again Later.</div>;
  }

  return (
    <Wrapper>
      {data &&
        data.map(({ name, population, region, capital, flags }: Country) => {
          return (
            <Link to={`/${name.common}`} key={name.common} className="flag">
              <img src={flags.svg} alt="flag img" className="flag-img" />
              <div className="content">
                <h2 className="name">{name.official}</h2>
                <p className="population">
                  <span className="description">Population:</span>&nbsp;
                  {population}
                </p>
                <p className="region">
                  <span className="description">Region:</span>&nbsp;{region}
                </p>
                <p className="capital">
                  <span className="description">Capital:</span>&nbsp;{capital}
                </p>
              </div>
            </Link>
          );
        })}
    </Wrapper>
  );
};

export default FlagList;
