import styled from "styled-components";
import { Link } from "react-router-dom";
import { MovieState } from "../movieState";
// Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

const OurWork = () => {
  return (
    <StyledWork>
      {MovieState().map((movie) => (
        <StyledMovie>
          <h2>{movie.title}</h2>
          <div className="line"></div>
          <Link to={movie.url}>
            <img src={movie.mainImg} alt={movie.title} />
          </Link>
        </StyledMovie>
      ))}
    </StyledWork>
  );
};

const StyledWork = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const StyledMovie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
