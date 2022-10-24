import React from "react";
import { GrMail } from "react-icons/gr";
import { FaFacebookF, FaShoppingBasket } from "react-icons/fa";
import {
  BsTwitter,
  BsYoutube,
  BsPersonCircle,
  BsWhatsapp,
} from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { product1a, product1b } from ".";
import { Slider1, Slider2, Slider3, Slider4, Slider5 } from ".";

export const links = [
  {
    link: "https://mail.google.com/",
    icon: <GrMail />,
  },
  {
    link: "https://www.facebook.com/exportleftovers",
    icon: <FaFacebookF />,
  },
  {
    link: "https://www.instagram.com/exportleftovers/",
    icon: <RiInstagramFill />,
  },
  {
    link: "https://twitter.com/ExportLeftovers",
    icon: <BsTwitter />,
  },
  {
    link: "https://www.youtube.com/channel/UCGxEukyU7Dsogc6IM9ZabPQ",
    icon: <BsYoutube />,
  },
];

export const categories = [
  {
    title: "special deals",
    link: "/collection/special-deals",
  },
  {
    title: "new arrivals",
    link: "/collection/new-arrivals",
  },

  {
    title: "polo republica",
    link: "/collection/polo-republica",
    sub_tittle: [
      {
        name: "pr men",
        link: "/collection/pr-men",
        sub_sub_tittle: [
          {
            category: "pr men",
            name: "polos",
            link: "/collection/pr-men-polos",
          },
          {
            category: "pr men",
            name: "tees",
            link: "/collection/pr-men-tees",
          },
          {
            category: "pr men",
            name: "casual shirts",
            link: "/collection/pr-men-casual-shirts",
          },
          {
            category: "pr men",
            name: "ethnic wear",
            link: "/collection/pr-men-ethnic-wear",
          },
          {
            category: "pr men",
            name: "underwear & west",
            link: "/collection/pr-men-underwear-west",
          },
        ],
      },
      {
        name: "pr women",
        link: "/collection/pr-women",
        sub_sub_tittle: [
          {
            category: "pr women",
            name: "Sweat Shirts & Jacket",
            link: "/collection/pr-women-SweatShirts-Jacket",
          },
          {
            category: "pr women",
            name: "Top, Kurtis & Lawn",
            link: "/collection/pr-women-Top-Kurtis-Lawn",
          },
          {
            category: "pr women",
            name: "Trousers & Leggings",
            link: "/collection/pr-women-Trousers-Leggings",
          },
          {
            category: "pr women",
            name: "Watches",
            link: "/collection/pr-women-Watches",
          },
          {
            category: "pr women",
            name: "underwear & west",
            link: "/collection/pr-women-underwear-west",
          },
        ],
      },
      {
        name: "pr kids",
        link: "/collection/pr-kids",
        sub_sub_tittle: [
          {
            category: "pr kids",
            name: "rompers",
            link: "/collection/pr-kids-rompers",
          },
          {
            category: "pr kids",
            name: "tees, Sweat Shirts & Jacket",
            link: "/collection/pr-kids-TSSJ",
          },
        ],
      },
      {
        name: "pr home",
        link: "/collection/pr-home",
        sub_sub_tittle: [
          {
            category: "pr home",
            name: "bag and accessories",
            link: "/collection/pr-home-bag-accessories",
          },
          {
            category: "pr home",
            name: "Bed Sets & Blankets",
            link: "/collection/pr-home-BSB",
          },
        ],
      },
    ],
  },
  {
    title: "home",
    link: "/collection/home",
  },
  {
    title: "new arrivals",
    link: "/collection/automotive",
  },
  {
    title: "Rs.99 & below",
    link: "/collection/99-below",
  },
  {
    title: "Men",
    link: "/men",
    sub_tittle: [
      {
        name: "Top,Shirts & Ethnic Wear",
        link: "TSEW",
        sub_sub_tittle: [
          {
            name: "polos",
            link: "polos",
          },
          {
            name: "tees",
            link: "tees",
          },
          {
            name: "casual shirts",
            link: "casual-shirts",
          },
          {
            name: "ethnic wear",
            link: "ethnic-wear",
          },
        ],
      },
      {
        name: "Jeans, Trousers & Short",
        link: "JTS",
        sub_sub_tittle: [
          {
            name: "jeans trouser",
            link: "jeans-trouser",
          },
          {
            name: "sweatpants & short",
            link: "sweatpants-short",
          },
          {
            name: "active wear",
            link: "active-wear",
          },
        ],
      },
      {
        name: "Underwear & Loungewear",
        link: "UWLW",
        sub_sub_tittle: [
          {
            name: "loungewear",
            link: "loungewear",
          },
          {
            name: "underwear & west",
            link: "underwear-west",
          },
        ],
      },
    ],
  },
  {
    title: "women",
    link: "/collection/women",
  },
  {
    title: "kids",
    link: "/collection/kids",
  },
  {
    title: "collaboration",
    link: "/collection/collaboration",
  },
  {
    title: "big & tall",
    link: "/collection/big-tall",
  },
  {
    title: "minor fault",
    link: "/collection/99-below",
  },
  {
    title: "clearance",
    link: "/collection/clearance",
  },
];

export const sliderProducts = [
  {
    title: "MEN'S FUR LINED FLEECE ZIPPER HOODIE",
    image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/sdfh_667b83a3-3082-49d8-8bb4-9b93c96760f3_800x.jpg?v=1666182766",
    hover_image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/zxczxczzz-_1_1e913043-b9a4-4841-8e0b-acf4d6380c5d_800x.jpg?v=1666182766",
    price: "5499",
  },
  {
    title: "IPHONE NYON FAST CHARGING CABLE - 1 METER",
    image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/1_1d6c0ab4-1292-4538-9601-4e138e6736dc_800x.jpg?v=1666184089",
    hover_image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/26_412c1210-603e-40cc-af1f-7317d7f9ee70_800x.jpg?v=1666184089",
    price: "249",
  },
  {
    title: "MONTREUX TOP QUALITY HANDSFREE",
    image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/2_b5ed6c28-a339-42f9-944d-600ab6ad828e_800x.jpg?v=1666184200",
    hover_image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/1_333a12d5-dcc0-4d04-ae1a-b43acf5a708e_800x.jpg?v=1666184200",
    price: "349",
  },
  {
    title: "MEN'S FUR LINED FLEECE ZIPPER HOODIE",
    image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/sdfh_667b83a3-3082-49d8-8bb4-9b93c96760f3_800x.jpg?v=1666182766",
    hover_image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/zxczxczzz-_1_1e913043-b9a4-4841-8e0b-acf4d6380c5d_800x.jpg?v=1666182766",
    price: "5499",
  },
  {
    title: "IPHONE NYON FAST CHARGING CABLE - 1 METER",
    image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/1_1d6c0ab4-1292-4538-9601-4e138e6736dc_800x.jpg?v=1666184089",
    hover_image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/26_412c1210-603e-40cc-af1f-7317d7f9ee70_800x.jpg?v=1666184089",
    price: "249",
  },
  {
    title: "MONTREUX TOP QUALITY HANDSFREE",
    image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/2_b5ed6c28-a339-42f9-944d-600ab6ad828e_800x.jpg?v=1666184200",
    hover_image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/1_333a12d5-dcc0-4d04-ae1a-b43acf5a708e_800x.jpg?v=1666184200",
    price: "349",
  },
  {
    title: "MEN'S FUR LINED FLEECE ZIPPER HOODIE",
    image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/sdfh_667b83a3-3082-49d8-8bb4-9b93c96760f3_800x.jpg?v=1666182766",
    hover_image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/zxczxczzz-_1_1e913043-b9a4-4841-8e0b-acf4d6380c5d_800x.jpg?v=1666182766",
    price: "5499",
  },
  {
    title: "IPHONE NYON FAST CHARGING CABLE - 1 METER",
    image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/1_1d6c0ab4-1292-4538-9601-4e138e6736dc_800x.jpg?v=1666184089",
    hover_image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/26_412c1210-603e-40cc-af1f-7317d7f9ee70_800x.jpg?v=1666184089",
    price: "249",
  },
  {
    title: "MONTREUX TOP QUALITY HANDSFREE",
    image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/2_b5ed6c28-a339-42f9-944d-600ab6ad828e_800x.jpg?v=1666184200",
    hover_image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/1_333a12d5-dcc0-4d04-ae1a-b43acf5a708e_800x.jpg?v=1666184200",
    price: "349",
  },
  {
    title: "MEN'S FUR LINED FLEECE ZIPPER HOODIE",
    image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/sdfh_667b83a3-3082-49d8-8bb4-9b93c96760f3_800x.jpg?v=1666182766",
    hover_image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/zxczxczzz-_1_1e913043-b9a4-4841-8e0b-acf4d6380c5d_800x.jpg?v=1666182766",
    price: "5499",
  },
  {
    title: "IPHONE NYON FAST CHARGING CABLE - 1 METER",
    image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/1_1d6c0ab4-1292-4538-9601-4e138e6736dc_800x.jpg?v=1666184089",
    hover_image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/26_412c1210-603e-40cc-af1f-7317d7f9ee70_800x.jpg?v=1666184089",
    price: "249",
  },
  {
    title: "MONTREUX TOP QUALITY HANDSFREE",
    image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/2_b5ed6c28-a339-42f9-944d-600ab6ad828e_800x.jpg?v=1666184200",
    hover_image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/1_333a12d5-dcc0-4d04-ae1a-b43acf5a708e_800x.jpg?v=1666184200",
    price: "349",
  },
  {
    title: "MEN'S FUR LINED FLEECE ZIPPER HOODIE",
    image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/sdfh_667b83a3-3082-49d8-8bb4-9b93c96760f3_800x.jpg?v=1666182766",
    hover_image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/zxczxczzz-_1_1e913043-b9a4-4841-8e0b-acf4d6380c5d_800x.jpg?v=1666182766",
    price: "5499",
  },
  {
    title: "IPHONE NYON FAST CHARGING CABLE - 1 METER",
    image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/1_1d6c0ab4-1292-4538-9601-4e138e6736dc_800x.jpg?v=1666184089",
    hover_image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/26_412c1210-603e-40cc-af1f-7317d7f9ee70_800x.jpg?v=1666184089",
    price: "249",
  },
  {
    title: "MONTREUX TOP QUALITY HANDSFREE",
    image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/2_b5ed6c28-a339-42f9-944d-600ab6ad828e_800x.jpg?v=1666184200",
    hover_image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/1_333a12d5-dcc0-4d04-ae1a-b43acf5a708e_800x.jpg?v=1666184200",
    price: "349",
  },
  {
    title: "MEN'S FUR LINED FLEECE ZIPPER HOODIE",
    image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/sdfh_667b83a3-3082-49d8-8bb4-9b93c96760f3_800x.jpg?v=1666182766",
    hover_image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/zxczxczzz-_1_1e913043-b9a4-4841-8e0b-acf4d6380c5d_800x.jpg?v=1666182766",
    price: "5499",
  },
  {
    title: "IPHONE NYON FAST CHARGING CABLE - 1 METER",
    image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/1_1d6c0ab4-1292-4538-9601-4e138e6736dc_800x.jpg?v=1666184089",
    hover_image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/26_412c1210-603e-40cc-af1f-7317d7f9ee70_800x.jpg?v=1666184089",
    price: "249",
  },
  {
    title: "MONTREUX TOP QUALITY HANDSFREE",
    image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/2_b5ed6c28-a339-42f9-944d-600ab6ad828e_800x.jpg?v=1666184200",
    hover_image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/1_333a12d5-dcc0-4d04-ae1a-b43acf5a708e_800x.jpg?v=1666184200",
    price: "349",
  },
  {
    title: "MEN'S FUR LINED FLEECE ZIPPER HOODIE",
    image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/sdfh_667b83a3-3082-49d8-8bb4-9b93c96760f3_800x.jpg?v=1666182766",
    hover_image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/zxczxczzz-_1_1e913043-b9a4-4841-8e0b-acf4d6380c5d_800x.jpg?v=1666182766",
    price: "5499",
  },
  {
    title: "IPHONE NYON FAST CHARGING CABLE - 1 METER",
    image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/1_1d6c0ab4-1292-4538-9601-4e138e6736dc_800x.jpg?v=1666184089",
    hover_image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/26_412c1210-603e-40cc-af1f-7317d7f9ee70_800x.jpg?v=1666184089",
    price: "249",
  },
  {
    title: "MONTREUX TOP QUALITY HANDSFREE",
    image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/2_b5ed6c28-a339-42f9-944d-600ab6ad828e_800x.jpg?v=1666184200",
    hover_image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/1_333a12d5-dcc0-4d04-ae1a-b43acf5a708e_800x.jpg?v=1666184200",
    price: "349",
  },
  {
    title: "MEN'S FUR LINED FLEECE ZIPPER HOODIE",
    image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/sdfh_667b83a3-3082-49d8-8bb4-9b93c96760f3_800x.jpg?v=1666182766",
    hover_image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/zxczxczzz-_1_1e913043-b9a4-4841-8e0b-acf4d6380c5d_800x.jpg?v=1666182766",
    price: "5499",
  },
  {
    title: "IPHONE NYON FAST CHARGING CABLE - 1 METER",
    image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/1_1d6c0ab4-1292-4538-9601-4e138e6736dc_800x.jpg?v=1666184089",
    hover_image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/26_412c1210-603e-40cc-af1f-7317d7f9ee70_800x.jpg?v=1666184089",
    price: "249",
  },
  {
    title: "MONTREUX TOP QUALITY HANDSFREE",
    image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/2_b5ed6c28-a339-42f9-944d-600ab6ad828e_800x.jpg?v=1666184200",
    hover_image:
      "https://cdn.shopify.com/s/files/1/0671/0621/products/1_333a12d5-dcc0-4d04-ae1a-b43acf5a708e_800x.jpg?v=1666184200",
    price: "349",
  },
];
export const bigSlider = [
  {
    link: "MEN'S FUR LINED FLEECE ZIPPER HOODIE",
    image: { Slider1 },
  },
  {
    link: "MEN'S FUR LINED FLEECE ZIPPER HOODIE",
    image: { Slider2 },
  },
  {
    link: "MEN'S FUR LINED FLEECE ZIPPER HOODIE",
    image: { Slider3 },
  },
  {
    link: "MEN'S FUR LINED FLEECE ZIPPER HOODIE",
    image: { Slider4 },
  },
  {
    link: "MEN'S FUR LINED FLEECE ZIPPER HOODIE",
    image: { Slider5 },
  },
];

export const footer = [
  {
    title: "Contact Us",
    link: [
      { title: "Contact Us", link: "/contact-us" },
      { title: "We are Hiring", link: "/contact-us" },
      { title: "Selling at elo", link: "/contact-us" },
      { title: "Works at elo", link: "/contact-us" },
      { images: { links } },
      {
        color: "white",
        bgColor: "#25D366",
        text: "",
        heading: "WhatsApp",
        icon: <BsWhatsapp />,
        borderRadius: "7px",
        link: "https://api.whatsapp.com/send/?phone=923450084100&text&type=phone_number&app_absent=0",
        border1: true,
      },
    ],
  },
  {
    title: "Help",
    link: [
      { title: "How To Order", link: "/contact-us" },
      { title: "How To Use Gift Card", link: "/contact-us" },
      { title: "Returns & Exchanges", link: "/contact-us" },
      { title: "Shipping Details", link: "/contact-us" },
      { title: "Shipping Details", link: "/contact-us" },
      { title: "Privacy Policy", link: "/contact-us" },
      { title: "FAQs", link: "/contact-us" },
    ],
  },
  {
    title: "Whats New",
    link: [
      { title: "Become a Brand Ambassador", link: "/contact-us" },
      { title: "Carbon Calculator", link: "/contact-us" },
      { title: "Video Reviews", link: "/contact-us" },
      { title: "Why we do what we do", link: "/contact-us" },
      { title: "Customer Reviews", link: "/contact-us" },
      { title: "Company News", link: "/contact-us" },
      { title: "Who Made Your Clothes?", link: "/contact-us" },
      { title: "Shop Instagram", link: "/contact-us" },
    ],
  },
];
