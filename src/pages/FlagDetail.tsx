import { useParams, useNavigate, Link } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { IoArrowBack } from "react-icons/io5";

import Wrapper from "../assets/wrappers/FlagDetail";
import { Country } from "./Home";

export type NativeNameType = {
  official: string;
  common: string;
};

const url = "https://restcountries.com/v3.1/";

const fetchBorders = (codes: string) => {
  return axios.get(`${url}alpha?codes=${codes}`);
};

const fetchCountry = (name: string) => {
  return axios.get(`${url}name/${name}`);
};

const FlagDetail = () => {
  const { country } = useParams();
  const navigate = useNavigate();
  const name = country || "";

  const { data, isLoading, isError } = useQuery(
    `${name}`,
    () => fetchCountry(name),
    {
      select: (data) => {
        const country: Country = data.data[0];
        return country;
      },
    }
  );

  const myData = data || ({} as Country);
  const { data: borders } = useQuery(
    `${name}_borders`,
    () => fetchBorders(myData.borders && myData?.borders.join(",")),
    {
      enabled: !!data,
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
      <button className="btn back-btn" onClick={() => navigate(-1)}>
        <IoArrowBack className="back-icon" />
        <span className="back-text">Back</span>
      </button>
      {data && (
        <div className="container">
          <div className="img-container">
            <img src={data.flags.svg} alt="flag img" className="flag" />
          </div>
          <div className="content">
            <h1 className="name">{data && data.name.common}</h1>
            <div className="details">
              <div className="main">
                <p className="native">
                  <span className="desc">Native Name:</span>
                  &nbsp;
                  {data.name.nativeName &&
                    Object.values(data.name.nativeName).map(
                      ({ common }) => common
                    )[Object.keys(data.name.nativeName).length - 1]}
                </p>
                <p className="population">
                  <span className="desc">Population:</span>
                  &nbsp;{data.population}
                </p>
                <p className="region">
                  <span className="desc">Region:</span>
                  &nbsp;{data.region}
                </p>
                <p className="sub-region">
                  <span className="desc">Sub Region:</span>
                  &nbsp;{data.subregion}
                </p>
                <p className="capital">
                  <span className="desc">Capital:</span>
                  &nbsp;{data.capital}
                </p>
              </div>
              <div className="sub">
                <p className="domain">
                  <span className="desc">Top Level Domain:</span>
                  &nbsp;{data.tld.join(", ")}
                </p>
                <p className="currency">
                  <span className="desc">Currencies:</span>
                  &nbsp;
                  {data.currencies &&
                    Object.values(data.currencies)
                      .map(({ name }) => name)
                      .join(", ")}
                </p>
                <p className="languages">
                  <span className="desc">languages:</span>
                  &nbsp;
                  {data.languages && Object.values(data.languages).join(", ")}
                </p>
              </div>
            </div>
            <div className="border">
              <h3 className="border-title">Border Countries:</h3>
              <div className="border-btns">
                {borders &&
                  borders.map((border) => {
                    return (
                      <Link
                        to={`/${border.name.common}`}
                        className="btn border-btn"
                        key={border.name.common}
                      >
                        {border.name.common}
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default FlagDetail;
