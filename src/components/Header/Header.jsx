"use client";
import { Bell, Settings, SquarePen } from "lucide-react";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <div className="fixed navbar px-[10%] bg-white z-10">
      <div className="flex-1 gap-[1rem] items-center">
        <Link className="text-xl" href="/">
          <TypeAnimation
            sequence={[
              500,
              "Bloggy", // initially rendered starting point
            ]}
            speed={50}
            className="text-xl"
          ></TypeAnimation>
        </Link>
        <div className="form-control">
          <label className="input input-bordered flex items-center gap-2 h-[2.4rem]">
            <input type="text" className="grow" placeholder="Search" />
            <kbd className="kbd kbd-sm">Alt</kbd>
            <kbd className="kbd kbd-sm">K</kbd>
          </label>
        </div>
      </div>

      <div className="flex-none gap-[2rem]">
        <button>
          <SquarePen size={20} strokeWidth={0.9} />
        </button>

        <button>
          <Bell size={20} strokeWidth={0.9} />
        </button>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

<Settings />;
export default Header;
