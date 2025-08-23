import Aboutme from "@/component/Aboutme";
import Navbar from "@/component/navbar/navbar";
import Profile from "@/component/Profile";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex  justify-center px-4">
        <div className="max-w-2xl mx-auto">
          <Navbar />
          <Profile />
          <Aboutme />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
