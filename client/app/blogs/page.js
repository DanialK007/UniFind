"use client"
import Header from "@/components/component/header";
import UniversityGrid from "@/components/component/universityGrid";
import Hero from "@/app/blogs/hero"
import { Footer } from "@/components/component/footer";
import BlogGrid from "@/components/component/blogGrid";
import { useEffect, useState } from "react";

export default function Home() {
    const [blogs, setblogs] = useState([])

    useEffect(() => {
    //   fetch("http://localhost:5000/api/blogs")
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
            <Hero />
            <BlogGrid blogs={blogs} title="Our blogs"/>
            <Footer />
        </>
    );
}