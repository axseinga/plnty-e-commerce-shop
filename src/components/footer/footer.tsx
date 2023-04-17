import React from "react";
import {
  FooterWrapper,
  FooterContent,
  FooterSocials,
  FooterLinks,
} from "./footer.styles";
import { NewsletterForm } from "@/components/form/forms/newsletter-form";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";

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
        <NewsletterForm />
        <FooterSocials>
          <FacebookIcon fill="var(--color-cream)" />
          <InstagramIcon fill="var(--color-cream)" />{" "}
          <LinkedinIcon fill="var(--color-cream)" />
        </FooterSocials>
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
