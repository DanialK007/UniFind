import Header from "@/components/component/header";
import UniversityGrid from "@/components/component/universityGrid";
import { blogs, universities } from "@/public/data"
import Hero from "@/app/blogs/hero"
import { Footer } from "@/components/component/footer";
import BlogGrid from "@/components/component/blogGrid";

export default function Home() {
    

    return (
        <>
            <Header />
            <Hero />
            <BlogGrid blogs={blogs} title="Our blogs"/>
            <Footer />
        </>
    );
}