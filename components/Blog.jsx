import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1px;
  background-image: url('https://img.freepik.com/free-vector/blank-purple-patterned-background-vector_53876-63147.jpg?t=st=1708595770~exp=1708599370~hmac=c966d67499858c131f3f3f834aa11a7afb24cda9809b2cec33fb7da6b9950e5f&w=740');
  background-size: cover;
  background-position: center;
  padding: 20px;


  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

const Card = styled.div`
  position: relative;
  width: calc(45% - 30px);
  max-width: 900px;
  height: 500px;

  box-sizing: border-box;
  margin: 10px;
  border-radius: 20px;

  @media (max-width: 1200px) {
    width: calc(100% - 30px); 
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
  border-radius: 20px;
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 6;
  left: 0;
  right: 0;

  padding: 10px;
  text-align: center;
`;

const CardTitle = styled.h2`
  font-size: 15px;
  margin-bottom: 5px;
  font-family: italic;
  color: white;
`;

const CardText = styled.p`
  font-size: 19px; 
  font-family: Yantramanav, sans-serif;
  color: white;
  margin-bottom: -30px;
  text-align: center;
  font-weight: 400;
  line-height: 1.875;

`;

const ReadButton = styled.button`
  background-color: darkviolet;
  color: white;
  font-family: italic;
  padding: 5px 10px;
  border: white;
  border-radius: 1px;
  cursor: pointer;
  margin-top: 40px;


`;

const GoArrow = styled.div`
  margin-top: -4px;
  margin-right: -4px;
  color: white;
`;


const blogPosts = [
  {
    id: 1,
  
    content: 'World music -Aug 25, 2023 ',
    paragraph:'Musical Show Worldwide this time not so easy',

    imageUrl: 'https://assets-global.website-files.com/6319b848ccc94727d7317320/632b05330dea6b089671c495_group%20performance%20.webp',
  },
  {
    id: 2,

    content: 'Pop-Aug 23, 2023 ',
    paragraph:'Solo Musical Concert of Robert Mackton',
    imageUrl: 'https://assets-global.website-files.com/6319b848ccc94727d7317320/632b034f844e65e00799c065_photo%20of%20people%20at%20the%20concert.webp',
  },
  {
    id: 3,

    content: 'Rock -Aug 21, 2023 ',
    paragraph:'What to Consider when You decide to Attend a Festival',

    imageUrl: 'https://assets-global.website-files.com/64d4d76682d7421338f85d54/64e8a684ffeef1f2496738ba_pexels-thibault-trillet-167491.jpg',
  },
  {
    id: 4,

    content: 'Pop-Aug 23, 2023',
    paragraph:'How you can Enjoy a music Festival Safely though',

    imageUrl: 'https://assets.website-files.com/64095707e7c9a7edba65e6a3/6411ac7eb92ea579b442457b_how-you-can-enjoy-a-music-festival-safely-though.jpg',
  },
];

const BlogPost = () => {
  return (
    <div>
      <div style={{ color:"white",marginTop:'12em'}}>
       
          <p style={{ fontSize: '40px',marginTop:'-7em',fontStyle:"sans-serif",color:"white",marginLeft:"600px"}}>
       LATEST NEWS
          </p>
        
        </div>
        <CardContainer>
          {blogPosts.map((post) => (
            <Card key={post.id}>
              <CardImage src={post.imageUrl} alt={`Post ${post.id}`} />
              <CardContent>
                <CardTitle>{post.content}</CardTitle>
                <CardText>{post.paragraph}</CardText>
                <ReadButton className="readmore">Read more</ReadButton>
                <GoArrow>→</GoArrow>
              </CardContent>
            </Card>
          ))}
        </CardContainer>
      </div>

  );
};

export default BlogPost;
