"use client";

import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";

import useAuthModal from "@/hooks/useAuthModal";

import Button from "./Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const { onOpen } = useAuthModal();
  const router = useRouter();

  const handleLogout = () => {
    // TODO: handle logout in the future
  };

  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-6`,
        className
      )}
    >
      <div className="flex items-center justify-between w-full mb-4">
        {/* bigger screens header buttons */}
        <div className="hidden md:flex items-center gap-x-2">
          <button className="flex items-center rounded-full justify-center hover:opacity-75 transition bg-black">
            <RxCaretLeft
              onClick={() => router.back()}
              size={35}
              className="text-white"
            />
          </button>

          <button className="flex items-center rounded-full justify-center hover:opacity-75 transition bg-black">
            <RxCaretRight
              onClick={() => router.forward()}
              size={35}
              className="text-white"
            />
          </button>
        </div>

        {/* mobile header buttons */}
        <div className="flex md:hidden items-center gap-x-2">
          <button className="rounded-full p-2 flex items-center justify-center bg-white hover:opacity-75 transition">
            <HiHome size={20} className="text-black" />
          </button>

          <button className="rounded-full p-2 flex items-center justify-center bg-white hover:opacity-75 transition">
            <BiSearch size={20} className="text-black" />
          </button>
        </div>

        {/* sign up and login in buttons */}
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button
                onClick={onOpen}
                className="bg-transparent text-neutral-300 font-medium"
              >
                Sign up
              </Button>
            </div>

            <div>
              <Button onClick={onOpen} className="bg-white py-2 px-6">
                Log in
              </Button>
            </div>
          </>
        </div>
      </div>

      {children}
    </div>
  );
};

export default Header;
