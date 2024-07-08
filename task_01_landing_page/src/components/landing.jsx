import React from "react";
import "./landing.css";
import { SocialIcon } from 'react-social-icons'
export default function landing() {
  return (
    <div>
      <div className="container">
        <div className="top" id="Home">
          <div className="navbar">
            <h2 className="logo">Logo</h2>
            <ul>
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#Services">Services</a>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="overlay">
            <h1>Image</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium rerum quo harum, impedit hic sapiente praesentium,
              minima repellat, at explicabo placeat. Perferendis nemo eaque
              autem odio vero pariatur laboriosam quisquam?
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className="main">
            {/* Services Section */}
          <div className="card-container" id="Services">
            <div className="card">
              <h3 className="card-heading">Title 1</h3>
              <p className="card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                id ab quos? Dignissimos porro quidem labore reprehenderit id at!
                Vero provident eos voluptatibus possimus, cupiditate iusto
                assumenda neque nulla ducimus.
              </p>
            </div>
            <div className="card">
              <h3 className="card-heading">Title 2</h3>
              <p className="card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, impedit! Incidunt minima quisquam, saepe inventore
                ut dolore, consectetur quae maxime ipsa ad nam aliquam porro
                itaque enim culpa nemo deleniti.
              </p>
            </div>
            <div className="card">
              <h3 className="card-heading">Title 3</h3>
              <p className="card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                aliquid sapiente totam explicabo tempora saepe corrupti tempore
                cum, quia est possimus, ratione illo iste delectus voluptatem
                et? Quisquam, praesentium delectus.
              </p>
            </div>
          </div>
          {/* About Section */}
          <div className="about-container" id="About">
            <section className="about-sectionleft">
              <div className="image-textleft">
                <div className="imageleft">
                  <img
                    src="https://images.unsplash.com/photo-1719654872904-a586e49b413b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Loading..."
                  />
                </div>
                <div className="textleft">
                  <h1>About Section1</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolor commodi fugiat itaque placeat corrupti recusandae, autem, nemo explicabo praesentium laudantium possimus doloremque dicta temporibus qui non obcaecati nobis hic!.
                  </p>
                </div>
              </div>
            </section>

            <section className="about-sectionright">
              <div className="image-textright">
                <div className="image">
                  <img
                    src="https://images.unsplash.com/photo-1718976707931-91bfad672f18?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Loading..."
                  />
                </div>
                <div className="text">
                  <h1>About Section2</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quam dolor reprehenderit ipsam dolores magnam iusto quas voluptates praesentium. Laboriosam quibusdam eum provident labore corporis facere quidem magnam eos illo!
                  </p>
                </div>
              </div>
            </section>
          </div>
            {/* Contact Section */}
            <div className="page-wrapper" id="Contact">
                <div className="contact-form-container">
                    <h2>Contact Us</h2>
                    <form >
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button className="submit-button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="footer">
                <span>
                    Privacy Policies<br/>Terms & Conditions
                </span>
                <span className="icons">
                    <SocialIcon className="icon" url="https://x.com"/>
                    <SocialIcon className="icon" url="https://youtube.com"/>
                    <SocialIcon className="icon" url="https://instagram.com"/>
                    <SocialIcon className="icon" url="https://facebook.com"/>
                </span>
            </div>
        </div>
      </div>
    </div>
  );
}
