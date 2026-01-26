import Area from "../../svg/Area";
import Bathroom from "../../svg/Bathroom";
import Bed from "../../svg/Bedroom";
import Lightning from "../../svg/Lightning";
import Location from "../../svg/Location";
import type { ContactHeroDataType, ContactLetsConnectFormDataType } from "../../types/Contact/ContactType";
import type { PropertyDetailsType } from "../../types/PropertyDetails/PropertyDetailsTypes";

import SeasideSerenityVilla1 from "/assets/images/PropertyDetails/SeasideSerenityVilla1.webp";
import SeasideSerenityVilla2 from "/assets/images/PropertyDetails/SeasideSerenityVilla2.webp";
import SeasideSerenityVilla3 from "/assets/images/PropertyDetails/SeasideSerenityVilla3.webp";
import SeasideSerenityVilla4 from "/assets/images/PropertyDetails/SeasideSerenityVilla4.webp";
import SeasideSerenityVilla5 from "/assets/images/PropertyDetails/SeasideSerenityVilla5.webp";
import SeasideSerenityVilla6 from "/assets/images/PropertyDetails/SeasideSerenityVilla6.webp";
import SeasideSerenityVilla7 from "/assets/images/PropertyDetails/SeasideSerenityVilla7.webp";
import SeasideSerenityVilla8 from "/assets/images/PropertyDetails/SeasideSerenityVilla8.webp";
import SeasideSerenityVilla9 from "/assets/images/PropertyDetails/SeasideSerenityVilla9.webp";


export const PropertyDetailsData : PropertyDetailsType={
    title: "Seaside Serenity Villa",
    location : "Malibu, California" ,
    price : "$1,250,000",
    PropertyImages : [ 
        {image: SeasideSerenityVilla1,},
        {image: SeasideSerenityVilla2,},
        {image: SeasideSerenityVilla3,},
        {image: SeasideSerenityVilla4,},
        {image: SeasideSerenityVilla5,},
        {image: SeasideSerenityVilla6,},
        {image: SeasideSerenityVilla7,},
        {image: SeasideSerenityVilla8,},
        {image: SeasideSerenityVilla9,},
        // 
        {image: SeasideSerenityVilla1,},
        {image: SeasideSerenityVilla2,},
        {image: SeasideSerenityVilla3,},
    ],
    description :{
        description : "Discover your own piece of paradise with the Seaside Serenity Villa. T With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.",
        details: [
            { 
                icon: <Bed/>, 
                label: "Bedrooms" ,
                value : "04",
            },
            { 
                icon: <Bathroom/>, 
                label: "Bathrooms",
                value : "03",
            },
            { 
                icon: <Area/>, 
                label: "Area",
                value : "2,500 Square Feet",
            },
        ],
        features : [
            {
                icon: <Lightning/>, 
                label: "Expansive oceanfront terrace for outdoor entertaining",
            },
            {
                icon: <Lightning/>, 
                label: "Gourmet kitchen with top-of-the-line appliances",
            },
            {
                icon: <Lightning/>, 
                label: "Private beach access for morning strolls and sunset views",
            },
            {
                icon: <Lightning/>, 
                label: "Master suite with a spa-inspired bathroom and ocean-facing balcony",
            },
            {
                icon: <Lightning/>, 
                label: "Private garage and ample storage space",
            },
        ],
    },
}

// Contact Form

export const detailsFormHeaderData: ContactHeroDataType = {
  title: "Inquire About Seaside Serenity Villa",
  description:
    "Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.",
};

export const detailsFormData: ContactLetsConnectFormDataType = {
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
      id: "selected_property",
      name: "selected_property",
      label: "Selected Property",
      type: "text",
      placeholder: "Empty",
      icon: <Location />,
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

