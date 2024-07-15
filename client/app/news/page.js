import Header from "@/components/component/header";
import UniversityGrid from "@/components/component/universityGrid";
import { news } from "@/public/data"
import Hero from "@/app/news/hero"
import { Footer } from "@/components/component/footer";
import NewsGrid from "@/components/component/newsGrid";

export default function Home() {
    

    return (
        <>
            <Header />
            <Hero />
            <NewsGrid news={news} title="Latest News"/>
            <Footer />
        </>
    );
}