import React from 'react';
import './Authors.css'; 

const AuthorCard = ({ name, image, title, description }) => {
  return (
    <div className="author-card">
      <div>
        <img src={image} alt={name} className="author-image" />
        <h3>{name}</h3>
        <p className="title">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

const AuthorCards = () => {
  const authors = [
    {
      name: 'Kate Middleton',
      image: 'https://assets.website-files.com/64056753a2b6532a05724699/643a5a1dc9e88931efecaa79_kate-middleton.jpg',
    },
    {
      name: 'Randall Walters',
      image: 'https://assets.website-files.com/64056753a2b6532a05724699/643a5a1efa68304880b30483_randall-walters.jpg',
    },
    {
      name: 'Milton Smith',
      image: 'https://assets.website-files.com/64056753a2b6532a05724699/643a5a1db7e82c06cefecc9f_milton-smith.jpg',
    },
    {
      name: 'Lillian Chapman',
      image: 'https://assets.website-files.com/64056753a2b6532a05724699/643a5a1ddee4495fa7bd4e00_lillian-chapman.jpg',
    },
    {
        name: 'Drogo Cantrell',
        image: 'https://assets.website-files.com/64056753a2b6532a05724699/643a5a1e82485626e1977aa6_drogo-cantrell.jpg',
      },
      {
        name: 'Morgan Nikolas',
        image: 'https://assets.website-files.com/64056753a2b6532a05724699/643a5a1d0fae2ccd18856515_morgan-nikolas.jpg',
      },
  ];

  return (
    <div className="author-cards-container" style={{ backgroundImage: 'url("https://img.freepik.com/premium-vector/abstract-wavy-lines-gradient-background-presentations_608189-983.jpg?w=1060")', backgroundSize: 'cover', backgroundPosition: 'center', padding: '140px' }}>
      <div style={{ marginTop: '-8em' }}>
        <h1 className="heading">Performers</h1>
      </div>
      <p className="paragraph">OUR PERFORMER FOR EVENTS</p>
      <div className="author-cards">
        {authors.map((author, index) => (
          <AuthorCard key={index} {...author} />
        ))}
      </div>
    </div>
  );
};

export default AuthorCards;
