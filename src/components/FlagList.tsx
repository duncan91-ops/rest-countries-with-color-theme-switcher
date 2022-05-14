import { Link } from "react-router-dom";

import Wrapper from "../assets/wrappers/FlagList";
import { Country } from "../pages/Home";

const FlagList = ({
  data,
  isError,
  isLoading,
}: {
  data: Country[];
  isError: boolean;
  isLoading: boolean;
}) => {
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
              <div className="flag-box">
                <img src={flags.svg} alt="flag img" className="flag-img" />
              </div>
              <div className="content">
                <h2 className="name">{name.common}</h2>
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
