"use client"
import BlogGrid from "@/components/component/blogGrid";
import { blogs, news } from "@/public/data";
import { Footer } from "@/components/component/footer";
import Gallery from "@/components/component/gallery";
import Header from "@/components/component/header";
import Hero from "@/components/component/hero";
import NewsGrid from "@/components/component/newsGrid";
import UniversityGrid from "@/components/component/universityGrid";
import { useEffect, useState } from "react";

export default function Home() {
  const [universities, setUniversities] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api/universities/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setUniversities(data);
      console.log(universities)
    })
    .catch((error) => console.error("Error: " + error));
  }, []);
  
  return (
    <>
      <Header />
      <Hero />
      <UniversityGrid universities={universities} number="8" title="Featured Universities" />
      <BlogGrid blogs={blogs} number="3" title="Featured Blog Posts"/>
      <NewsGrid news={news} number="3" title="Latest News"/>
      <Gallery imageGallery={universities} />
      <Footer />
    </>
  );
}
