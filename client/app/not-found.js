import { Footer } from "@/components/component/footer";
import Header from "@/components/component/header";

// pages/404.js
export default function Custom404() {
    return (
      <>
        <Header />
        <div className="h-[86vh]">
          <img src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png" alt="" className="w-full h-full object-contain"/>
        </div>
        <Footer /> 
      </>
    );
  }
  