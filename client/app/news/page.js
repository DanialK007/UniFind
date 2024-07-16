"use client"
import Header from "@/components/component/header";
import UniversityGrid from "@/components/component/universityGrid";
import Hero from "@/app/news/hero"
import { Footer } from "@/components/component/footer";
import NewsGrid from "@/components/component/newsGrid";
import { useEffect, useState } from "react";

export default function Home() {
    const [news, setnews] = useState([])

    useEffect(() => {
    //   fetch("http://localhost:5000/api/news")
      fetch("https://unifind.onrender.com/api/news")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setnews(data);
        console.log(news)
      })
      .catch((error) => console.error("Error: " + error));
    }, []);

    return (
        <>
            <Header />
            <Hero />
            <NewsGrid news={news} title="Latest News"/>
            <Footer />
        </>
    );
}