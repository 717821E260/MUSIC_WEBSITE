import React from 'react';
import Figure from 'react-bootstrap/Figure';

function FigureExample() {
  return (
    <div style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_58702-8632.jpg?t=st=1708581423~exp=1708585023~hmac=3bce974b3e71cc2f477f5b7e59975a2dfdca85e6b29aaa837e61f6fd4925f2ed&w=996")', backgroundSize: 'cover', backgroundColor: 'white', padding: '120px', margin: 'auto', maxWidth: '160%', marginRight: '-0%' }}>
      <Figure style={{ textAlign: 'center' }}>
        <Figure.Image
          width={450}
          height={550}
          alt="450x550"
          src="https://assets.website-files.com/64056753a2b6532a05724699/644903b9fa9e895f67ac0c53_banner-1-1.png"
          style={{ margin: '0 auto', maxWidth: '100%',marginRight:'700px',marginTop:'-3em' }}
        />
        <Figure.Caption style={{ textAlign: 'center', color: 'white', fontSize: '30px', marginTop: '-11em', marginRight: '-50%' }}>
          <h1 style={{ fontSize: '2rem', fontFamily: 'sans-serif', margin: '0 auto', maxWidth: '80%', lineHeight: '2.5' }}>ORGANIZE QUALITY MUSICAL SHOWS</h1>
          <br></br>
          <p style={{ fontSize: '1.2rem', fontFamily: 'serif', margin: '0 auto', maxWidth: '80%', marginRight: '%', lineHeight: '1.5' }}>
            Musical show organized world wide, you can join this musical show very<br/> easily through this site and confirm your ticket with a click. Pursue pleasure<br/> rationally and encounter consequences that are extremely painful. Nor again is<br/>
            there anyone who loves or pursues or desires to obtain pain of itself.
          </p>
        </Figure.Caption>
      </Figure>
    </div>
  );
}

export default FigureExample;
