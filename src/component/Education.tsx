import { MapPin } from "lucide-react";

export default function Education() {
  return (
    <>
      <div className="py-8">
        <p className="text-lg sm:text-xl font-medium leading-[24px]">
          Education
        </p>
        <div>
          <div className="relative textColor">
            <p>
              <MapPin size={16} className="inline-block" />
              Greater Noida
            </p>
            <p className="absolute right-2">2022-2026</p>
          </div>
          <p>B.Tech in Computer Science</p>
          <p className="textColor"> Sharda University</p>
          <p>
            Studied core subject in computer science like computer network ,
            Operating system, Database Management System and Data Structure and
            Algorith.
          </p>
        </div>
      </div>
    </>
  );
}
