// External Import
import { MapPin, Twitter, Linkedin, Download } from "lucide-react";
import Image from "next/image";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// internal import
import profile from "../../public/images/profile.jpg";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { dot } from "node:test/reporters";
import Link from "next/link";

export default function Profile() {
  return (
    <>
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="py-2 flex items-start">
            <div className="inline-block">
              <Image
                src={profile}
                alt="user profile"
                width={120}
                height={120}
                className="rounded"
              />{" "}
            </div>
            <div className="inline-block px-3">
              <div>
                <p className="font-medium text-2xl">Ankit Kumar </p>
                <p className="font-medium text-xl textColor">Web Developer</p>
                <p className="textColor">
                  <MapPin size={16} className="inline-block" /> New Delhi ,
                  INDIA
                </p>
                <p className="text-sm textColor pt-2">
                  <div className="text-green-500  inline-block mr-2">●</div>
                  Available to work
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-end py-2">
            <Link href="">
              {" "}
              <Download size={16} className="inline-block" /> Dowload CV
            </Link>
          </div>
        </div>
        {/* <hr /> */}
        <div className="my-2 textColor border-t-1 border-[#ababab]">
          <Link href="" className="inline-block hover:text-white">
            itsankitkumar07@gmail.com
          </Link>
          <div className="inline-block absolute right-2">
            <Link href="" className="inline-block mx-5 hover:text-white">
              {" "}
              <Twitter size={16} className="inline-block" /> twitter
            </Link>
            <Link href="" className="inline-block hover:text-white">
              <Linkedin size={16} className="inline-block" /> Linkedln
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
