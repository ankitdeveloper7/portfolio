// external import
import { MapPin, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <div>Let&apos;s talk</div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-2">
        <div>
          <div className="border-l-2 border-[#1a1a1a] pl-4 mb-8">
            <div className="py-2">
              Email:
              <div className="py-2">
                <Link href="" className="textColor hover:text-white">
                  itsankitkumar07@gmail.com
                </Link>
              </div>
            </div>
            <div className="py-2">
              Phone:
              <div className="py-2">
                <Link href="" className="textColor hover:text-white">
                  +91 7759816393
                </Link>
              </div>
            </div>
            <div className="py-2">
              Socials:
              <div className="py-2">
                <Link href="" className="textColor hover:text-white">
                  <Twitter size={16} className="inline-block mr-2" />
                  Twitter
                </Link>
              </div>
              <div className="py-2">
                <Link href="" className="textColor hover:text-white">
                  <Instagram size={16} className="inline-block mr-2" />
                  Instagram
                </Link>
              </div>
              <div className="py-2">
                <Link href="" className="textColor hover:text-white">
                  <Linkedin size={16} className="inline-block mr-2" />
                  Linkedin
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>Reach out:</div>
          <div className="py-2">
            <div className="">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full border-2  rounded px-4 py-2 mb-4 textColor bg-[#1a1a1a] border-[#1a1a1a] focus:border-white focus:outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email address"
                className="w-full border-2  rounded px-4 py-2 mb-4 textColor bg-[#1a1a1a] border-[#1a1a1a] focus:border-white focus:outline-none"
              />
            </div>
            <div>
              {" "}
              <textarea
                name="message"
                placeholder="Message"
                className="w-full border-2  rounded px-4 py-2 mb-4 textColor bg-[#1a1a1a] border-[#1a1a1a] focus:border-white focus:outline-none h-32"
              />
            </div>
            <div>
              <button className="w-full bg-white text-black rounded-lg py-2 cursor-pointer">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
