// External Import
import { MapPin, Twitter, Linkedin, Download } from "lucide-react";

// internal import

export default function Profile() {
  return (
    <>
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="grid-cols-1 sm:grid-cols-2 justify-start">
            <div>photo resume details</div>
            <div>
              <p>Ankit Kumar </p>
              <p>Web Developer</p>
              <p className="">
                <MapPin size={16} className="inline-block" /> New Delhi , INDIA
              </p>
            </div>
          </div>
          <div className="flex justify-end underline">
            <a href="">
              {" "}
              <Download size={16} className="inline-block" /> Dowload CV
            </a>
          </div>
        </div>
        <hr />
        <div className="my-2">
          <p className="inline-block">itsankitkumar07@gmail.com</p>
          <div className="inline-block absolute right-2">
            <div className="inline-block mx-5">
              {" "}
              <Twitter size={16} className="inline-block" /> twitter
            </div>
            <div className="inline-block">
              <Linkedin size={16} className="inline-block" /> Linkedln
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
