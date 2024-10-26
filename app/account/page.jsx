"use client";
import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { UserContext } from "../components/UserContext";
import { useRouter } from "next/navigation";
import Loader from "../components/Loader";
import Link from "next/link";
import { FaRegAddressCard, FaRegEye } from "react-icons/fa";
import { MdOutlineSecurity, MdOutlinePayments } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa6";
import { AiOutlineNotification } from "react-icons/ai";

const page = () => {
  const { user, ready } = useContext(UserContext);

  if (!ready) {
    return (
      <>
        <Navbar />
        <div className="min-h-full flex justify-center items-center">
          <Loader />
        </div>
      </>
    );
  }
  if (ready && !user) {
    const Router = useRouter();
    Router.push("/");
  }
  return (
    <div>
      <Navbar />
      <div className="max-w-[1100px] mx-auto mt-20 flex flex-col gap-10 px-32 xl:px-0">
        <div className="flex flex-col gap-3">
          <span className="text-4xl font-semibold">Account</span>
          <span className="text-xl flex gap-1">
            <span className="font-medium">{user.name}</span> , {user.email} ·
            <Link href={"/user/" + user._id} className="underline font-medium">
              Go to Profile
            </Link>
          </span>
        </div>

        <div className="grid grid-cols-2   xl:grid-cols-3 gap-5">
          <div className="card cursor-pointer flex flex-col gap-5 hover:shadow-xl transition-shadow duration-300 ease-in-out py-2 px-4 rounded-xl shadow-4-sides">
            <span className="text-4xl">
              <FaRegAddressCard />
            </span>
            <div className="flex flex-col gap-1">
              <span className="font-medium">Personal info</span>
              <p className="text-sm text-gray-500">
                Provide personal details and how we can reach you
              </p>
            </div>
          </div>
          <div className="card cursor-pointer flex flex-col gap-5 hover:shadow-xl transition-shadow duration-300 ease-in-out py-2 px-4 rounded-xl shadow-4-sides">
            <span className="text-4xl">
              <MdOutlineSecurity />
            </span>
            <div className="flex flex-col gap-1">
              <span className="font-medium">Login & Security</span>
              <p className="text-sm text-gray-500">
                Update your password and secure your account
              </p>
            </div>
          </div>
          <div className="card cursor-pointer flex flex-col gap-5 hover:shadow-xl transition-shadow duration-300 ease-in-out py-2 px-4 rounded-xl shadow-4-sides">
            <span className="text-4xl">
              <MdOutlinePayments />
            </span>
            <div className="flex flex-col gap-1">
              <span className="font-medium">Payements & Payout</span>
              <p className="text-sm text-gray-500">
                Review payments, payouts, coupons and gift cards
              </p>
            </div>
          </div>
          <div className="card cursor-pointer flex flex-col gap-5 hover:shadow-xl transition-shadow duration-300 ease-in-out py-2 px-4 rounded-xl shadow-4-sides">
            <span className="text-4xl">
              <FaRegCopy />
            </span>
            <div className="flex flex-col gap-1">
              <span className="font-medium">Taxes</span>
              <p className="text-sm text-gray-500">
                Manage taxpayer information and tax documents
              </p>
            </div>
          </div>
          <div className="card cursor-pointer flex flex-col gap-5 hover:shadow-xl transition-shadow duration-300 ease-in-out py-2 px-4 rounded-xl shadow-4-sides">
            <span className="text-4xl">
              <AiOutlineNotification />
            </span>
            <div className="flex flex-col gap-1">
              <span className="font-medium">Notification</span>
              <p className="text-sm text-gray-500">
                Choose notification preferences and how you want to be contacted
              </p>
            </div>
          </div>
          <div className="card cursor-pointer flex flex-col gap-5 hover:shadow-xl transition-shadow duration-300 ease-in-out py-2 px-4 rounded-xl shadow-4-sides">
            <span className="text-4xl">
              <FaRegEye />
            </span>
            <div className="flex flex-col gap-1">
              <span className="font-medium">Privacy & Sharing</span>
              <p className="text-sm text-gray-500">
                Manage your personal data, connected services and data sharing
                settings
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;