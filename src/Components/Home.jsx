import React from 'react';
import './Home.css';

const Home = () => {
  
  return (
    <div>
      <div className="grid">
        <div className="grid__item">
          <div className="card"><img className="card__img" src="https://images.unsplash.com/photo-1506318164473-2dfd3ede3623?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3300&amp;q=80" alt="Canyons" />
            <div className="card__content">
              <h1 className="card__header">Utah sunsets</h1>
              <p className="card__text">Sunsets over the <strong>stunning</strong> Utah Canyonlands are truly something much more than incredible.</p>
              <button className="card__btn">Explore <span>&rarr;</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
