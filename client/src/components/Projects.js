import styled from "styled-components";

const Projects = () => {
  return (
    <Wrapper>
      <Title>Projects</Title>
      <Grid>
        <Block
        style={{
          backgroundImage: "url('./assets/Projects/PokeQuest.JPG')",
        }}>
          <Content>
          <h1>PokeQuest</h1>
          <p>
            PokeQuest is a social media application which aims to encourage
            interactions outside of social media through gamification. Users are
            encouraged to level up their Pokemons by meeting and socializing
            with other users in their neighbourhood through quests.
          </p>
          <p style={{fontStyle: "italic"}}>
            Note: The app is hosted on a Render free-tier server. Please allow 30 seconds for the web service to spin up.
          </p>
            <Links>
                <a href="https://poke-quest.onrender.com/" target="_blank">See Live</a>
                <a href="https://github.com/nandini92/BootCampFinalProjects" target="_blank">Source Code</a>
            </Links>
          </Content>
      </Block>
        <Block
          style={{
            backgroundImage: "url('./assets/Projects/GoGoEcommerce.JPG')",
          }}>
          <Content>
          <h1>GoGo Ecommerce</h1>
          <p style={{fontStyle: "italic"}}><span style={{fontWeight: 500}}>Co-contributors:</span> Jade Boutilier, Erez Michael</p>
          <p>
            An e-commerce page for gadgets where users are able to 1) add items
            to their cart, 2) checkout from their cart and 3) sign in to view
            their previous orders. This was a group project. Technologies:
            React, Express,js, MongoDB
          </p>
            <Links>
                <a href="https://github.com/nandini92/GoGo_ECommerce" target="_blank">Source Code</a>
            </Links>
          </Content>
      </Block>
        <Block
          style={{
            backgroundImage: "url('./assets/Projects/ClotureCinqEtoiles.JPG')",
          }}
        >
          <Content>
            <h1>Clôtures Cinq Étoiles</h1>
            <p>
              This is the main website for Clôtures Cinq Étoiles - a fencing
              company serving Montréal and it's surrounding areas. The site has
              one single page with the intention of giving quick information for
              potential customers including pictures of previous projects and
              the company's contact information. 
            </p>
            <Links>
                <a href="https://clotures5etoiles.com/" target="_blank">See Live</a>
                <a href="https://github.com/nandini92/Clotures_Cinq_Etoiles"target="_blank">Source Code</a>
            </Links>
          </Content>
        </Block>
        <Block
          style={{
            backgroundImage: "url('./assets/Projects/ThriveDentalMy.JPG')",
          }}
        >
          <Content>
            <h1>Thrive Dental Malaysia</h1>
            <p>
              This is the main website for Thrive Dental Malaysia - a dental
              clinic aimed at providing specialized service to the aging
              community in Malaysia. The site has one single page with the
              intention of giving quick information for potential customers
              including pictures of the clinic and the company's contact
              information. 
            </p>
            <Links>
                <a href="https://thrivedentalmy.onrender.com/" target="_blank">See Live</a>
                <a href="https://github.com/nandini92/thrivedentalmy" target="_blank">Source Code</a>
            </Links>
          </Content>
        </Block>
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 10% 7%;
  background-color: var(--berkeley-blue);
  background-image: linear-gradient(
    130deg,
    var(--non-photo-blue),
    var(--berkeley-blue)
  );

  clip-path: polygon(100% 10%, 100% 100%, 0 90%, 0 0);
`;
const Title = styled.h1`
  color: var(--honeydew);
  text-align: center;
  font-size: 3rem;
  line-height: 3.5rem;
  margin-bottom: 2%;
`;
const Grid = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 5% 1%;
`;
const Block = styled.div`
  background-size: cover;
  max-width: 95%;
  height: auto;

  h1 {
    font-weight: 500;
    padding-bottom: 15px;
  }

  p {
    font-weight: 300;
    line-height: 1.5rem;
  }
`;
const Content = styled.div`
  opacity: 0;
  height: 100%;
  padding: 35px;
  animation: opacity background-color 1s ease-in-out;

  &:hover {
    opacity: 1;
    background-color: var(--cerulean);
    color: var(--honeydew);
  }

  h1 {
    text-align: center;
  }

  p {
    margin-bottom: 5px;
  }
`;
const Links = styled.div`
    display: flex;

    a { 
        margin-top: 15px;
        padding: 3%;
        text-decoration: none;
        border: 1px solid var(--honeydew);
        font-weight: 500;
        color: var(--honeydew);

        &:hover {
            background-color: var(--honeydew);
            color: var(--cerulean);
        }
    }
`
export default Projects;
