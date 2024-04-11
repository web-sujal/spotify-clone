"use client";

import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { FaUserAlt } from "react-icons/fa";
import toast from "react-hot-toast";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import usePlayer from "@/hooks/usePlayer";

import Button from "./Button";
import Link from "next/link";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const player = usePlayer();
  const { onOpen } = useAuthModal();
  const router = useRouter();

  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();

    player.reset();
    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged out!");
    }
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
          <Link
            href="/"
            className="rounded-full p-2 flex items-center justify-center bg-white hover:opacity-75 transition"
          >
            <HiHome size={20} className="text-black" />
          </Link>

          <Link
            href="/search"
            className="rounded-full p-2 flex items-center justify-center bg-white hover:opacity-75 transition"
          >
            <BiSearch size={20} className="text-black" />
          </Link>
        </div>

        {/* sign up and login in buttons */}
        <div className="flex justify-between items-center gap-x-4">
          {user ? (
            <div className="flex gap-x-4 items-center">
              <Button onClick={handleLogout} className="bg-white py-2 px-6">
                Logout
              </Button>

              <Button
                onClick={() => router.push("/account")}
                className="bg-white"
              >
                <FaUserAlt />
              </Button>
            </div>
          ) : (
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
          )}
        </div>
      </div>

      {children}
    </div>
  );
};

export default Header;
