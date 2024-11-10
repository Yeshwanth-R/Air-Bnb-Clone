"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { GoPlus } from "react-icons/go";
import axios from "axios";

const page = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    (async () => {
      let response = await axios.get("/api/get-place");
      setPlaces(response.data.places);
    })();
  }, []);

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <span className="text-center text-3xl  mx-auto mt-5">
          Accomodations
        </span>
      </div>

      <div className="flex flex-col gap-2 ">
        {places.length > 0 &&
          places.map((place) => {
            return (
              <div className="bg-gray-300 mx-10 p-3 rounded-2xl">
                {place.title}
              </div>
            );
          })}
      </div>
      <div className="flex mt-5">
        <Link
          className="bg-[#ff385c] flex gap-2 justify-center items-center hover:bg-[#e33450] px-4 py-2 rounded-full text-white mx-auto"
          href={"/places/new"}
        >
          <GoPlus className="text-3xl" />
          Add New Place
        </Link>
      </div>
    </div>
  );
};

export default page;
