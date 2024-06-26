import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const sections = [
  {
    title: "Explore",
    items: ["Categories", "Job Listings", "Events", "Resources"],
  },
  {
    title: "About",
    items: ["About Us", "Contact Us", "FAQ"],
  },
  {
    title: "Legal",
    items: ["Privacy Policy", "Terms of Service"],
  },
];

const items = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/yourpage" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/yourpage" },
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/yourpage" },
  { name: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/company/yourpage" },
  { name: "Github", icon: FaGithub, link: "https://github.com/yourpage" },
];

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold uppercase pt-2">{section.title}</h6>
            <ul>
              {section.items.map((item, i) => (
                <li key={i} className="py-1 text-gray-500 hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">2024 Japan Careers. All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          {items.map((x, index) => {
            return (
              <a key={index} href={x.link} target="_blank" rel="noopener noreferrer">
                <x.icon className="hover:text-white mr-4" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
