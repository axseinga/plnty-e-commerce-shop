import React from "react";
import {
  FooterWrapper,
  FooterContent,
  FooterSocials,
  FooterLinks,
} from "./footer.styles";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <p>
          At PLNTY, we&apos;re committed to providing you with the best possible
          shopping experience. We&aposre always open to feedback and suggestions
          to improve our service. If you have any questions or need assistance,
          our friendly team is here to help. Feel free to reach out to us
          anytime - we&apos;re dedicated to helping you bring more green into
          your life!
        </p>
        <FooterSocials>F T I</FooterSocials>
      </FooterContent>
      <FooterLinks>
        <div>
          <p>Product</p>
          <ul>
            <li>New Arrivals</li>
            <li>Best Selling</li>
            <li>Inspirations</li>
          </ul>
        </div>
        <div>
          <p>Support</p>
          <ul>
            <li>Privacy Policy</li>
            <li>Contact us</li>
            <li>FAQ & Terms</li>
          </ul>
        </div>
        <div>
          <p>Support</p>
          <ul>
            <li>Privacy Policy</li>
            <li>Contact us</li>
            <li>FAQ & Terms</li>
          </ul>
        </div>
      </FooterLinks>
    </FooterWrapper>
  );
};
