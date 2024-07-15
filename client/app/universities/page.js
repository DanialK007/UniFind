"use client"
import Header from "@/components/component/header";
import UniversityGrid from "@/components/component/universityGrid";
import { universities } from "@/public/data"
import Hero from "@/app/universities/hero"
import { Footer } from "@/components/component/footer";
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
            <UniversityGrid universities={universities} title="Universities" />
            <Footer />
        </>
    );
}