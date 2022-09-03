import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer bg-primary text-white text-center mt-5">
        <p>
          Created by{' '}
          <a href="https://www.instagram.com/frliann_/" rel="noreferrer" className="text-white fw-bold" target="_blank">
            Eko Firlianto
          </a>
        </p>
      </div>
    );
  }
}
