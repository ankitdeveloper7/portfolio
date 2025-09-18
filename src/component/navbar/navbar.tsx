"use client";
import Link from "next/link";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [navbar, Hidenavbar] = useState(false);
  return (
    <>
      <div className="my-4 flex justify-center">
        <div className="border-1 w-min border-[#242424] rounded flex justify-center items-center bg-[#242424]">
          <div className={navbar ? "hidden" : ""}>
            <Link href="" className="px-2 text-[#fafafa]">
              Intro
            </Link>
            <Link href="" className="px-2 text-[#fafafa]">
              About
            </Link>
            <Link href="" className="px-2 text-[#fafafa]">
              Work
            </Link>
            <Link href="" className="px-2 text-[#fafafa]">
              Experience
            </Link>
          </div>

          <div className="inline-block">
            <button
              className="cursor-pointer bg-black border-1 border-black rounded p-1"
              onClick={() => Hidenavbar(!navbar)}
            >
              <Plus className="inline-block" />
            </button>
          </div>
          <div className={navbar ? "hidden" : ""}>
            <Link href="" className="px-2 text-[#fafafa]">
              Education
            </Link>
            <Link href="" className="px-2 text-[#fafafa]">
              Stack
            </Link>
            <Link href="" className="px-2 text-[#fafafa]">
              Article
            </Link>
            <Link href="" className="px-2 text-[#fafafa]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
