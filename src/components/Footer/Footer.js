import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaHome,
  FaBookReader,
  FaContao,
  FaFacebookF,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { FcServiceMark, FcGallery } from "react-icons/fc";
import { MdPreview } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <section class="footer">
        <div class="box-container">
          <div class="box">
            <h3>about us</h3>
            <p>
              We are dedicated to make you happy in any go you want just like
              your wish. We will keep in touch with you 24/7 where you need. So
              without any doubt, you can rely on us. Happy go round!s
            </p>
          </div>
          <div class="box">
            <h3>branch locations</h3>
            <Link to="#">india</Link>
            <Link to="#">USA</Link>
            <Link to="#">japan</Link>
            <Link to="#">france</Link>
          </div>
          <div class="box">
            <h3>quick links</h3>
            <Link to="#">
              {" "}
              <FaHome></FaHome> home
            </Link>
            <Link to="#">
              <FaBookReader></FaBookReader> book
            </Link>
            <Link to="#">
              <BsBookmarkCheckFill></BsBookmarkCheckFill>packages
            </Link>
            <Link to="#">
              <FcServiceMark></FcServiceMark>services
            </Link>
            <Link to="#">
              <FcGallery></FcGallery>gallery
            </Link>
            <Link to="#">
              <MdPreview></MdPreview>review
            </Link>
            <Link to="#">
              <FaContao></FaContao>contact
            </Link>
          </div>
          <div class="box">
            <h3>follow us</h3>
            <Link to="#">
              <FaFacebookF></FaFacebookF>facebook
            </Link>
            <Link to="#">
              <FaInstagramSquare></FaInstagramSquare>instagram
            </Link>
            <Link to="#">
              <FaTwitter></FaTwitter>twitter
            </Link>
            <Link to="#">
              <FaLinkedin></FaLinkedin>linkedin
            </Link>
          </div>
        </div>

        <h1 class="credit">
          created by <span>Souad Anam Himel</span> | all rights reserved!
        </h1>
      </section>
    </div>
  );
};

export default Footer;
