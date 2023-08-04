import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the % of the page that user has scrolled through
      setScrollPercentage(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
          100
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyles />
          <Header />
          <Container>
            {window.screen.width > 1000 ? (
              <>
                <Home />
                <Projects />
                <About />
              </>
            ) : (
              <>
                <Home />
              </>
            )}
          </Container>
    </BrowserRouter>
  );
}

const Container = styled.div`
  height: 100%;
  background-color: var(--honeydew);
`;

export default App;
