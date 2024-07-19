"use client"
import BlogGrid from "@/components/component/blogGrid";
import { Footer } from "@/components/component/footer";
import Gallery from "@/components/component/gallery";
import Header from "@/components/component/header";
import Hero from "@/components/component/hero";
import NewsGrid from "@/components/component/newsGrid";
import UniversityGrid from "@/components/component/universityGrid";
import { useEffect, useState } from "react";

export default function Home() {
  const [universities, setUniversities] = useState([])
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [news, setnews] = useState([])
  const [blogs, setblogs] = useState([])

  const applyFilters = (searchQuery, locationFilter, programFilter) => {
    const results = universities.filter((university) => {
      return (
        university.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        university.location.city.toLowerCase().includes(locationFilter.toLowerCase()) &&
        university.programs.some(program => program.name.toLowerCase().includes(programFilter.toLowerCase()))
      );
    });
    setFilteredUniversities(results);
  };

  useEffect(() => {
    // fetch("http://localhost:5000/api/universities")
    fetch("https://unifind.onrender.com/api/universities")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setUniversities(data);
      console.log(universities)
    })
    .catch((error) => console.error("Error: " + error));

      // fetch("http://localhost:5000/api/news")
      fetch("https://unifind.onrender.com/api/news")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setnews(data);
        console.log(news)
      })
      .catch((error) => console.error("Error: " + error));

      // fetch("http://localhost:5000/api/blogs")
      fetch("https://unifind.onrender.com/api/blogs")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setblogs(data);
        console.log(blogs)
      })
      .catch((error) => console.error("Error: " + error));
    }, []);

  return (
    <>
      <Header />
      <Hero universities={universities} applyFilters={applyFilters} />
      <UniversityGrid universities={filteredUniversities.length > 0 ? filteredUniversities : universities} number="8" title="Featured Universities" />
      <BlogGrid blogs={blogs} number="3" title="Featured Blog Posts"/>
      <NewsGrid news={news} number="3" title="Latest News"/>
      <Gallery imageGallery={universities} />
      <Footer />
    </>
  );
}
