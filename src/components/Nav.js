// Router
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Styles
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const links = [
    { href: "/", name: "1. About Us" },
    { href: "/work", name: "2. Our Work" },
    { href: "/contact", name: "3. Contact Us" },
  ];

  const { pathname } = useLocation();

  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        {links.map(({ href, name }) => (
          <li>
            <Link to={href}>{name}</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === href ? "50%" : "0%" }}
            />
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

// Styles
const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 0;
    justify-content: space-around;
    width: 100%;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    li {
      padding: 1rem 2rem;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background-color: #23d997;
  position: absolute;
  width: 0;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    bottom: -10%;
    left: 20%;
  }
`;

export default Nav;
