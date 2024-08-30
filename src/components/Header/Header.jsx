import { Bell, Settings, SquarePen } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="fixed navbar px-[10%] bg-white z-10">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Bloggy</a>
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
          <SquarePen />
        </button>

        <button>
          <Bell />
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
