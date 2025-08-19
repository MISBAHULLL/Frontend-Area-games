import KickLogo from "../assets/KickH.jpg";
import TrovoLogo from "../assets/trovo.png";
import SteamLogo from "../assets/steam.jpg";
import TwitchLogo from "../assets/twitch.jpg";
import youtube from "../assets/youtube.png";
import tiktok from "../assets/tiktok.png";

import streamImage from "../assets/kickStream.jpg";
import streamGame from "../assets/streamGame.jpg";
import chat from "../assets/chat.jpg";
import saweria from "../assets/saweria.jpg";
import banner from "../assets/banner.jpg";
import like from "../assets/like.jpg"; 
import trovoStream from "../assets/trovoStream.jpg";
import twitchStream from "../assets/twitchStream.jpg";
import youtubeStream from "../assets/YoutubeStream.png";
import tiktokStream from "../assets/tiktokStream.png";

import usr1 from "../assets/usr1.jpg";
import usr2 from "../assets/usr2.jpg";
import usr3 from "../assets/usr3.jpg";
import usr4 from "../assets/usr4.jpg";
import usr5 from "../assets/usr5.jpg";
import usr6 from "../assets/usr6.jpg";


import {
  RiBarChart2Line,
  RiSettings2Line,
  RiTeamLine,
  RiTwitchLine,
  RiYoutubeLine,
  RiCalendarLine,
} from "@remixicon/react";

export const HERO_CONTENT = {
  badgeText: "🚀 New Feature: Gaming 2.0 is Here!",
  mainHeading: "The Ultimate \n Gaming Stream Toolkit+\n for Creators",
  subHeading:
    "Optimize your streams, track real-time analytics, and engage your audience effortlessly—all in one place. Perfect for Twitch, YouTube, and trovo streamers.",
  callToAction: {
    primary: "Start Free Trial",
    secondary: "Request a Demo",
  },
  trustedByText: "Trusted by Leading Streaming Brands & Creators",
};

export const BRAND_LOGOS = [
  { src: KickLogo, alt: "Kick" },
  { src: TrovoLogo, alt: "Trovo" },
  { src: SteamLogo, alt: "Steam" },
  { src: TwitchLogo, alt: "Twitch" },
  { src: youtube, alt: "YouTube" },
  { src: tiktok, alt: "TikTok" },
];

export const HOW_IT_WORKS_CONTENT = {
  sectionTitle: "How it works!",
  sectionDescription:
    "Stream like a pro with our 6-step process. From setup to performance tracking — designed to help you stream smarter and grow faster.",
  steps: [
    {
      title: "Choose Your Platform",
      description:
        "Connect your Twitch, YouTube, or Facebook Gaming account in just one click.",
      imageSrc: streamImage,
      imageAlt: "Streaming Platforms",
      platforms: [trovoStream, twitchStream, youtubeStream, tiktokStream],
    },
    {
      title: "Add Overlays & Alerts",
      description:
        "Install cool overlays, donation alerts, subscribers, and follow notifications for a more engaging stream.",
      imageSrc: like,
      imageAlt: "subscribe and like",
      
    },
    {
      title: "Set Up Camera & Audio",
      description:
        "Adjust your webcam, microphone, and background to look more professional.",
      imageSrc: streamGame,
      imageAlt: "Setreaming",
      user: [usr1, usr2, usr3, usr4, usr5, usr6],
    },
    {
      title: "Real-Time Interaction",
      description:
        "Engage with your viewers through live chat, polls, or game requests instantly.",
      imageSrc: chat,
      imageAlt: "Interaction Viewers",
    },
    {
      title: "Customize Your Channel",
      description:
        "Add banners, logos, and colors to match your gaming identity.",
      imageSrc: banner,
      imageAlt: "Logo Streaming Channel",
    },
    {
      title: "Monetize Your Streams",
      description:
        "Enable donations, subscriptions, and sponsorships to turn your passion into income.",
      imageSrc: saweria,
      imageAlt: "Subcribe and Like",
    }, 
  ],
};

export const KEY_FEATURES_CONTENT = {
  sectionTitle: "Stream Smarter with These Key Features",
  sectionDescription:
    "Everything you need to enhance your streaming experience, all in one place.",
  features: [
    {
      id: 1,
      icon: <RiBarChart2Line className="w-8 h-8" />,
      title: "Real-Time Stream Analytics",
      description:
        "Track your audience engagement, viewer count, and performance in real-time.",
    },
    {
      id: 2,
      icon: <RiSettings2Line className="w-8 h-8" />,
      title: "Automated Stream Management",
      description:
        "Set up automated alerts, stream schedules, and more with ease.",
    },
    {
      id: 3,
      icon: <RiTeamLine className="w-8 h-8" />,
      title: "Audience Engagement Tools",
      description:
        "Interact with your audience through custom alerts, chat integrations, and giveaways.",
    },
    {
      id: 4,
      icon: <RiTwitchLine className="w-8 h-8" />,
      title: "Twitch Integration",
      description:
        "Seamlessly connect with Twitch to automate alerts, manage subscribers, and track donations.",
    },
    {
      id: 5,
      icon: <RiYoutubeLine className="w-8 h-8" />,
      title: "YouTube Streaming Support",
      description:
        "Go live on YouTube with built-in tools for managing chats, subscribers, and more.",
    },
    {
      id: 6,
      icon: <RiCalendarLine className="w-8 h-8" />,
      title: "Schedule Streams",
      description:
        "Plan and schedule your streams ahead of time, with reminders sent to your audience.",
    },
  ],
};

export const PLANS_CONTENT = {
  sectionTitle: "Choose Your Plan",
  sectionDescription:
    "Streamerzz offers flexible pricing plans to fit every streamer’s needs, from beginner to pro.",
  popularBadge: "Most Popular",
  ctaText: "Get Started",
  plans: [
    {
      name: "Basic",
      price: "$9.99/month",
      description:
        "Perfect for beginners just starting their streaming journey.",
      features: [
        "Basic analytics",
        "Custom overlays",
        "Viewer engagement tools",
        "Stream up to 720p",
      ],
    },
    {
      name: "Pro",
      price: "$19.99/month",
      description:
        "For streamers who want more advanced tools to grow their audience.",
      features: [
        "Advanced analytics",
        "Custom alerts & notifications",
        "HD streaming up to 1080p",
        "Real-time audience insights",
        "Unlimited support",
      ],
      popular: true,
    },
    {
      name: "Elite",
      price: "$49.99/month",
      description:
        "For professional streamers who need cutting-edge tools and insights.",
      features: [
        "Premium analytics & reporting",
        "4K Ultra HD streaming",
        "Dedicated account manager",
        "Full API access",
        "Custom branding & overlays",
      ],
    },
  ],
};

export const PLATFORM_TESTIMONIALS = {
  sectionTitle: "Trusted by Top Streaming Platforms",
  sectionDescription:
    "Major streaming platforms rely on Streamerzz to provide creators with the best tools for growth, engagement, and performance.",
  reviews: [
    {
      name: "Twitch",
      title: "Live Streaming Leader",
      review:
        "Streamerzz integrates seamlessly with Twitch, providing creators with alerts, overlays, and analytics that enhance live interactions.",
      image: twitchStream,
    },
    {
      name: "YouTube Gaming",
      title: "Global Video Platform",
      review:
        "With Streamerzz, YouTube streamers get advanced customization and monetization tools that help grow their communities faster.",
      image: youtubeStream,
    },
    {
      name: "Trovo",
      title: "Emerging Streaming Hub",
      review:
        "Streamerzz empowers Trovo creators with automation and engagement features that simplify stream management and boost visibility.",
      image: trovoStream,
    },
    {
      name: "TikTok Live",
      title: "Short-Form Streaming Giant",
      review:
        "By connecting with TikTok Live, Streamerzz enables real-time fan engagement and smooth stream optimization on mobile-first platforms.",
      image: tiktokStream,
    },
  ],
};

export const STREAMER_TESTIMONIALS = {
  sectionTitle: "What Gamers Say",
  sectionDescription:
    "Listen to top gaming streamers who use Streamerzz to build their audience, engage with fans, and level up their streaming careers.",
  reviews: [
    {
      name: "ShadowHunterX",
      title: "Twitch Partner",
      review:
        "Streamerzz completely changed my streaming game. The overlays, alerts, and analytics give me pro-level quality while keeping everything simple to manage.",
      image: twitchStream,
    },
    {
      name: "LunaPlays",
      title: "YouTube Gaming Creator",
      review:
        "I love how easy it is to customize my stream layout and connect with viewers. My channel growth has doubled since I started using Streamerzz.",
      image: youtubeStream,
    },
    {
      name: "AceNova",
      title: "Trovo Streamer",
      review:
        "The automation features are a lifesaver. From alerts to tracking donations, Streamerzz lets me focus more on gameplay and less on management.",
      image: trovoStream,
    },
    {
      name: "PixelRogue",
      title: "TikTok Live Streamer",
      review:
        "Engagement went through the roof once I started with Streamerzz. The real-time interactions make my streams way more fun for my audience.",
      image: tiktokStream,
    },
  ],
};


export const FOOTER_CONTENT = {
  sections: [
    {
      title: "TOOLS & SERVICES",
      links: [
        { text: "Real-time Analytics", url: "#" },
        { text: "Customizable Alerts", url: "#" },
        { text: "Integrated Chat Systems", url: "#" },
        { text: "Instant Notifications", url: "#" },
        { text: "Overlays & Visuals", url: "#" },
        { text: "Mobile Streaming Support", url: "#" },
        { text: "4K Stream Capabilities", url: "#" },
        { text: "Stream Scheduling Tool", url: "#" },
      ],
    },
    {
      title: "SUPPORT & RESOURCES",
      links: [
        { text: "Subscription Plans", url: "#" },
        { text: "Affiliate Program", url: "#" },
        { text: "Frequently Asked Questions", url: "#" },
        { text: "Company Blog", url: "#" },
        { text: "Subscribe to Newsletter", url: "#" },
        { text: "Latest Features", url: "#" },
        { text: "Merchandise Store", url: "#" },
        { text: "Workshops & Events", url: "#" },
      ],
    },
    {
      title: "CONNECT WITH US",
      links: [
        { text: "Twitter", url: "#" },
        { text: "Facebook", url: "#" },
        { text: "TikTok", url: "#" },
        { text: "LinkedIn", url: "#" },
        { text: "YouTube", url: "#" },
        { text: "Twitch", url: "#" },
        { text: "Discord", url: "#" },
      ],
    },
    {
      title: "LEARN & EXPLORE",
      links: [
        { text: "Engage Viewers with Custom Alerts", url: "#" },
        { text: "Top Streaming Strategies for New Streamers", url: "#" },
        { text: "How to Stream in 4K for Maximum Quality", url: "#" },
        { text: "Efficient Stream Scheduling Techniques", url: "#" },
        { text: "Using Analytics to Boost Engagement", url: "#" },
        { text: "Create Stunning Overlays for Streams", url: "#" },
        { text: "Advanced Analytics for Streamers: A Guide", url: "#" },
      ],
    },
  ],
  platformsText:
    "Streaming Platforms | Twitch | YouTube | Discord | Facebook Gaming",
  copyrightText: "© 2024 Streamerzz, Inc. All rights reserved.",
};
