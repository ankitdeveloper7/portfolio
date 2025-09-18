import Aboutme from "@/component/Aboutme";
import Navbar from "@/component/navbar/navbar";
import Profile from "@/component/Profile";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";
import Project from "@/component/Project";
import Education from "@/component/Education";
import Certification from "@/component/Certification";
import Stack from "@/component/Stack";
import Articles from "@/component/Articles";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex  justify-center px-4">
        <div className="max-w-2xl mx-auto">
          <Navbar />
          <Profile />
          <Aboutme />
          <Project />
          <Education />
          <Certification />
          <Stack />
          <Articles />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
