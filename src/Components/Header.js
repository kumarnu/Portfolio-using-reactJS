import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>
              "Versatile Senior Software Developer with more than 4 years of
              experience in production-level projects and interacting with
              international clients - The Hershey, Metro Systems, and
              Mondelez International"
            </h3>
            <h3>Java|C#|Python|SAP|React|Node.js|JS|SQL|MongoDB</h3>
            <h3>
              <a className='site_link' href="https://clone-23ff5.web.app/">
                Cloned Amazon Shopping Website in 5 Days
              </a>
            </h3>
            <h3>
              <a className='site_link' href="https://facebook-by-nitish.web.app/">
                Cloned Facebook in 1 Day
              </a>
            </h3>
            <h3>
              <a className='site_link' href="https://covid-tracker-by-nitish.web.app/">
                COVID-19 Tracker
              </a>
            </h3>
            <h3>
              <a className='site_link' href="https://learnwithnitish.wordpress.com/">Personal Blog</a>
            </h3>

            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
