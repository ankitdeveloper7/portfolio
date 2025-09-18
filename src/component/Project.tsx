import Link from "next/link";
import { MoveUpRight } from "lucide-react";

export default function Project() {
  return (
    <>
      <div className="py-8">
        <div className="relative">
          <p className="inline-block text-lg sm:text-xl font-medium leading-[24px]">
            Some of my Projects
          </p>
          <div className="inline-block absolute right-2 textColor ">
            <Link href="" className="hover:text-white">
              View all
              <MoveUpRight
                size={14}
                className="ml-1 inline-block items-center"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
