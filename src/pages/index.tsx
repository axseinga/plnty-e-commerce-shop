import { Hero } from "@/components/hero/hero";
import { HomeSections } from "@/styles/pages/home.styles";
import { BlogTeaser } from "@/components/blog-teaser/blog-teaser";

const HomePage = () => {
  const blogtileData = [
    {
      image: "/temp/plnty-blog-light.png",
      alt: "Soil",
      title: "Shining a Light on Plant Growth",
      shortDescription:
        "Plants have different light requirements, depending on their species, age, and growth stage. Light is a critical factor in a plant's growth and development, as it is essential for photosynthesis, the process by which plants produce food.",
      slug: "blog-post",
    },
    {
      image: "/temp/plnty-blog-watering.png",
      alt: "Soil",
      title: "Thirsty Plants? A Guide to Proper Watering",
      shortDescription:
        "Watering plants is an essential task for any plant owner, whether you have a small windowsill garden or a vast outdoor oasis. It's important to understand that plants require different levels of water, depending on the species, location, and season.",
      slug: "blog-post",
    },
    {
      image: "/temp/plnty-blog-arranging.png",
      alt: "Soil",
      title: "Greening Up Your Space: Arranging Plants",
      shortDescription:
        "Plants are a great addition to any home as they add life and color to your space. They also have a range of benefits such as purifying the air and reducing stress levels.",
      slug: "blog-post",
    },
    {
      image: "/temp/pnty-blog-petssafe.png",
      alt: "Soil",
      title: "Pawsitively Safe: A Comprehensive Guide to Pet-Friendly Plants",
      shortDescription:
        "For pet owners, keeping their furry friends safe and healthy is a top priority. One area of concern is the plants in their home. ",
      slug: "blog-post",
    },
  ];
  return (
    <>
      <Hero heroImage="/assets/homepage-bg.png" />
      <HomeSections>
        <BlogTeaser posts={blogtileData} />
      </HomeSections>
    </>
  );
};

export default HomePage;
