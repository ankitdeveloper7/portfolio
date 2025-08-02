import Aboutme from "@/component/Aboutme";
import Navbar from "@/component/navbar/navbar";
import Profile from "@/component/Profile";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex  justify-center">
        <div className="max-w-2xl mx-auto">
          <Navbar />
          <Profile />
          <Aboutme />
        </div>
      </div>
    </>
  );
}
