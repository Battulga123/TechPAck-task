"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  CalendarDaysIcon,
  UsersIcon,
  PhoneIcon,
  BriefcaseIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

interface CV {
  data: any;
  _id: string;
  aboutme: string;
  firstname: string;
  lastname: string;
  register: string;
  birthdate: string;
  gender: string;
  job: string;
  number: string;
}

export default function HRPage() {
  const [CV, setCV] = useState<CV[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  async function getCV(searchTerm?: string): Promise<void> {
    const url = searchTerm
      ? `http://localhost:3000/api/CV?searchTerm=${encodeURIComponent(
          searchTerm
        )}`
      : "http://localhost:3000/api/CV";

    const fetchedData = await axios.get(url);
    setCV(fetchedData.data);
  }

  useEffect(() => {
    getCV();
  }, []);

  return (
    // <div className="w-10/12 mx-auto relative rounded-md shadow-sm">
    //   <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
    //     <MagnifyingGlassIcon
    //       className="h-5 w-5 text-gray-400"
    //       aria-hidden="true"
    //     />
    //   </div>
    //   <input
    //     type="text"
    //     placeholder="Хайх үгээ оруулна уу"
    //     value={searchTerm}
    //     onChange={(e) => setSearchTerm(e.target.value)}
    //   />

    <div className="w-10/12 mx-auto relative rounded-md shadow-sm">
      <div className="flex gap-2 col-span-2 place-items-start bg-white m-4 mb-6 p-4 rounded-2xl ">
        <MagnifyingGlassIcon
          className="h-5 w-5 text-gray-700"
          aria-hidden="true"
        />
        <input
          value={searchTerm}
          placeholder="Хайх үгээ оруулна уу"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full ring-0"
        />
      </div>
      {CV.filter((cv) =>
        `${cv.data.firstname} ${cv.data.birthdate} ${cv.data.lastname}${cv.data.number}${cv.data.job}${cv.data.gender}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      ).map((cv, index) => (
        <div key={index} className="bg-white m-4 mb-6 p-4 rounded-2xl">
          <p className="text-lg font-bold py-2 ">
            {cv.data.lastname} <span></span>
            {cv.data.firstname}
          </p>
          <p className="border-b-2">{cv.data.aboutme}</p>
          <div className="grid gap-x-10 grid-cols-1 sm:grid-cols-9 pt-4">
            <div className="flex gap-2 col-span-2 place-items-start">
              <CalendarDaysIcon className="h-5 w-5" />
              <p>{cv.data.birthdate}</p>
            </div>
            <div className="flex gap-2 col-span-2 place-items-start">
              <UsersIcon className="h-5 w-5" />
              <p>{cv.data.gender}</p>
            </div>
            <div className="flex gap-2 col-span-3 place-items-start">
              <BriefcaseIcon className="h-5 w-5" />
              <p>{cv.data.job}</p>
            </div>
            <div className="flex gap-2 col-span-2 place-items-start">
              <PhoneIcon className="h-5 w-5" />
              <p>{cv.data.number}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
