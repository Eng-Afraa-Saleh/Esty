import type {
  ContactDiscoverLocationsFilterDataType,
  ContactExplorePhotosDataType,
  ContactHeroDataType,
  FeaturesType,
  ContactLetsConnectFormDataType,
} from "../../types/Contact/ContactType";
import DownArrow from "../../svg/DownArrow";
import Email from "../../svg/Email";
import Phone from "../../svg/Phone";
import Location from "../../svg/Location";
import TopRightArrow from "../../svg/TopRightArrow";

import emailIcon from "/assets/icons/emailIcon.svg";
import phoneIcon from "/assets/icons/phoneIcon.svg";
import locationIcon from "/assets/icons/locationIcon.svg";
import roseIcon from "/assets/icons/roseIcon.svg";

import ExploreWomanInSuit from "/assets/images/Contact/ExploreWomanInSuit.webp";
import ExploreShakingHands from "/assets/images/Contact/ExploreShakingHands.webp";
 import exploreOffice from "/assets/images/Contact/exploreOffice.webp";
import explorePeople from "/assets/images/Contact/explorePeople.webp";
import exploreOfficeLaptops from "/assets/images/Contact/exploreOfficeLaptops.webp";
import ExplorePeopleInSuits from "/assets/images/Contact/ExplorePeopleInSuits.webp";

// ContactHero Data

export const contactHeroData: ContactHeroDataType = {
  title: "Get in Touch with Estatein",
  description:
    "Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation.",
};

export const contactHeroCard: FeaturesType[] = [
  {
    arrow: <TopRightArrow />,
    icon:emailIcon,
    title: "info@estatein.com",
    link: "/contact"
  },
  {
    arrow: <TopRightArrow />,
    icon:phoneIcon,
    title: "+1 (123) 456-7890",
    link: "/contact"
  },
  {
    arrow: <TopRightArrow />,
    icon: locationIcon,
    title: "Main Headquarters",
    link: "/contact"
  },
  {
    arrow: <TopRightArrow />,
    icon:roseIcon,
    title: ["Instagram", "LinkedIn", "Facebook"],
    link: "/contact"
  },
];

// let's connect section

export const contactLetsConnectData: ContactHeroDataType = {
  title: "Let's Connect",
  description:
    "We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.",
};

export const contactLetsConnectFormData: ContactLetsConnectFormDataType = {
  conactForm: [
    {
      id: "firstName",
      name: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "Enter First Name",
      required: true,
    },
    {
      id: "lastName",
      name: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Enter Last Name",
      required: true,
    },
    {
      id: "email",
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your Email",
      required: true,
    },
    {
      id: "phone",
      name: "phone",
      label: "Phone",
      type: "text",
      placeholder: "Enter Phone Number",
    },
    {
      id: "inquiry",
      name: "inquiry",
      label: "Inquiry Type",
      type: "text",
      placeholder: "Select Inquiry Type",
      icon: <DownArrow />,
      options: ["Buy", "Sell", "Invest", "Other"],
    },
    {
      id: "hear",
      name: "hear",
      label: "How Did You Hear About Us?",
      type: "text",
      placeholder: "Select",
      icon: <DownArrow />,
      options: ["Google", "Facebook", "Instagram", "Linkedin", "Other"],
    },
  ],
  areaText: {
      id: "message",
      name: "message",
      label: "Message",
      type: "text",
      placeholder: "Enter your Message here..",
      required: true,
    },
};

// Discover Our Office Locations

export const contactDiscoverLocationsData: ContactHeroDataType = {
  title: "Discover Our Office Locations",
  description:
    "Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you",
};

export const contactDiscoverLocationsFilterData: ContactDiscoverLocationsFilterDataType =
  {
    FilterOptions: ["All", "Regional", "International"],
    categoriesCard: [
      {
        id: "international",
        title: "Main Headquarters",
        address: "123 Estatein Plaza, City Center, Metropolis",
        description:
          "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
        contactDetailes: [
          { icon:<Email/> , title: ["info@estatein.com"] },
          { icon:<Phone/> , title: ["+1 (123) 456-7890"] },
          { icon:<Location />, title: ["Metropolis"] },
        ],
        button: {
          text: "Get Directions",
          link: "#",
        },
      },
      {
        id: "regional",
        title: "Regional Offices",
        address: "456 Urban Avenue, Downtown District, Metropolis",
        description:
          "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
        contactDetailes: [
          { icon: <Email />, title: ["info@estatein.com"] },
          { icon: <Phone />, title: ["+1 (123) 456-7890"] },
          { icon: <Location />, title: ["Metropolis"] },
        ],
        button: {
          text: "Get Direction",
          link: "#",
        },
      },
      {
        id: "international",
        title: "Main Headquarters",
        address: "123 Estatein Plaza, City Center, Metropolis",
        description:
          "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
        contactDetailes: [
          { icon:<Email/> , title: ["info@estatein.com"] },
          { icon:<Phone/> , title: ["+1 (123) 456-7890"] },
          { icon:<Location />, title: ["Metropolis"] },
        ],
        button: {
          text: "Get Directions",
          link: "#",
        },
      },
      {
        id: "regional",
        title: "Regional Offices",
        address: "456 Urban Avenue, Downtown District, Metropolis",
        description:
          "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
        contactDetailes: [
          { icon: <Email />, title: ["info@estatein.com"] },
          { icon: <Phone />, title: ["+1 (123) 456-7890"] },
          { icon: <Location />, title: ["Metropolis"] },
        ],
        button: {
          text: "Get Direction",
          link: "#",
        },
      },
    ],
  };

// Explore Estatein's World

export const contactExplorePhotosData: ContactExplorePhotosDataType = {
  photos: [
    {
      id: "exploreOffice",
      image:exploreOffice,
    },
    {
      id: "explorePeople",
      image:explorePeople,
    },
    {
      id: "exploreOfficeLaptops",
      image: exploreOfficeLaptops,
    },
    {
      id: "explorePeopleInSuits",
      image:ExplorePeopleInSuits,
    },
    {
      id: "exploreWomanInSuit",
      image:ExploreWomanInSuit,
    },
  ],
  contactExploreEstateinData: {
    title: "Explore Estatein's World",
    description:
      "Discover the world of Estatein and its impact on the real estate industry. From our team of experts to our commitment to excellence, we're here to guide you on your real estate journey.",
  },
  titlePhoto:ExploreShakingHands,
};
