import React from 'react';
import Figure from 'react-bootstrap/Figure';
import styled, { keyframes } from 'styled-components';


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }                   
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedFigureImage = styled(Figure.Image)`
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const ImageContainer = styled.div`
  background-color: aliceblue;
  padding: 60px;
  margin-top: -4em;
  object-fit: cover;
`;

const Heading = styled.h1`
  font-size: 60px;
  margin-top: -1100px;
  color: black;
  margin-left: 160px;

`;

const Paragraph = styled.p`
  font-size: 24px;
  color: black;
  margin-top: 720px;
  text-align: right;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1000px;
`;

const Card = styled.div`
  flex: 0 0 calc(33.33% - 24px);
  max-width: calc(33.33% - 74px);
  position: relative;
  top: 290px;
  background-color: white;
  border-radius: 10px;
  padding: 3em 1.2em;
  margin: 19px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
  background: white;
  font-family: sans-serif;
  transition: all 0.5s ease-out;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: linear-gradient(135deg, #364a60, #384c6c);
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.35s ease-out;
  }

  &:hover {
    &:before {
      transform: scale(28);
    }

    .small-desc {
      color: black;
    }

    .card-title {
      color: black;
    }
  }
`;

const CardTitle = styled.p`
  color: black;
  font-size: 2em;
  line-height: normal;
  font-weight: 700;
  margin-bottom: 0.5em;
`;

const SmallDescription = styled.p`
  font-size: 1.8em;
  font-weight: 400;
  line-height: 1.8em;
  color: black;
  font-family: cursive, sans-serif;
  transition: all 0.5s ease-out;
`;

const GoCorner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 2em;
  height: 2em;
  overflow: hidden;
  top: 0;
  right: 0;
  background: linear-gradient(135deg, #6293c8, #384c6c);
  border-radius: 0 4px 0 32px;
`;

const GoArrow = styled.div`
  margin-top: -4px;
  margin-right: -4px;
  color: white;
`;

const MainContainer = styled.div`
  background-color: aliceblue;
  min-height: 300vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ApplyNowButton = styled.button`
  position: relative;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  padding-block: 0.5rem;
  padding-inline: 1.25rem;
  background-color: white;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  gap: 10px;
  font-weight: bold;
  border: 3px solid #ffffff4d;
  outline: none;
  overflow: hidden;
  font-size: 15px;
  margin-left: 970px;
  margin-top: 50px;

  &:hover {
    transform: scale(1.05);
    border-color: white;
  }

  &:hover .icon {
    transform: translate(4px);
  }

  &::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100%;
    background-image: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0) 70%
    );
    top: 0;
    left: -100px;
    opacity: 0.6;
  }
`;

const Icon = styled.svg`
  width: 100px;
  height: 24px;
  transition: all 0.3s ease-in-out;
  color: black;
  margin-left: 300px;
`;

const FigureExample = () => {
  return (
    <div>
      <MainContainer>
  
        <ImageContainer>
          <Figure>
            <AnimatedFigureImage
              height={850}
              alt="550x850"
              src="https://assets-global.website-files.com/64b8bca09e0474df27fcc6a9/64d306b25cab998e11554b30_About%20Banner%20img2.png"
              style={{
                width: 'auto',
                border: '2px solid black',
                borderRadius: '8px',
                marginTop: '400px',
                marginLeft: '80px',
              }}
            />
          </Figure>

          <Figure>
            <AnimatedFigureImage
              alt="900x600"
              src="https://assets-global.website-files.com/64b8bca09e0474df27fcc6a9/64d306b2a22895cbb02f3808_About%20Banner%20img1.png"
              style={{
                marginLeft: '800px', 
                marginTop: '-1000px',  
                height: '800px',
                width: '600px',
                border: '2px solid black',
                borderRadius: '8px',
              }}
            />
          </Figure>

          <Heading>Infi Is Best<br /> Choice For You</Heading>

          <CardContainer>
            <div>
              <h1 style={{ marginRight: '-22em', marginTop: '170px', textAlign: 'center', justifyContent: 'center', fontSize: '4em' }}>Our Missions</h1>
            </div>
            <Card>
              <CardTitle className="card-title">Best Bookstore</CardTitle>
              <SmallDescription className="small-desc">
                Books Explore More Your go-to destination for a treasure trove of reading wonders.
              </SmallDescription>
              <GoCorner>
                <GoArrow>→</GoArrow>
              </GoCorner>
            </Card>

            <Card>
              <CardTitle className="card-title">Exciting Novels</CardTitle>
              <SmallDescription className="small-desc">
                Dive into a world of excitement with our curated collection of thrilling novels.
              </SmallDescription>
              <GoCorner>
                <GoArrow>→</GoArrow>
              </GoCorner>
            </Card>

            <Card>
              <CardTitle className="card-title">Children's Corner</CardTitle>
              <SmallDescription className="small-desc">
                Delight your kids with enchanting tales from our specially curated children's section.
              </SmallDescription>
              <GoCorner>
                <GoArrow>→</GoArrow>
              </GoCorner>
            </Card>
          </CardContainer>

          <div style={{ marginTop: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '150px', width: '500px' }}>
            <div>
              <h2 style={{ textAlign: 'center', marginRight: '-1600px', fontSize: '50px', marginTop: "-10px" }}>Join the community</h2>
            </div>

            <div>
              <img
                className="d-block w-100"
                src="https://assets-global.website-files.com/64b8bca09e0474df27fcc6a9/64c0a9bbc46dba0d69a50eb5_Newsletter-Bannerr.png"
                alt="Your Image Alt Text"
                style={{ marginTop: "-300px", height: "500px", }}
              />
              <p style={{ textAlign: 'center', marginTop: '-320px', fontSize: '30px', color: '#555', marginRight: '-1500px' }}>
                For newest books updates
              </p>
            </div>

          </div>

          <ApplyNowButton>
            <Icon fill="currentColor" viewBox="0 0 24 24" className="icon">
              <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fillRule="evenodd"></path>
            </Icon>
          </ApplyNowButton>
        </ImageContainer>
      </MainContainer>

    </div>
  );
};

export default FigureExample;
