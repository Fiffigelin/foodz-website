import { motion } from "motion/react";
import { useState } from "react";
import { RiMenuLine, RiCloseLargeLine  } from "react-icons/ri";
import NavbarItem, { type NavlistItem } from "./navbar-item";
import OrderNowButton from "../../components/order-now-button/order-now-btn";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const nav: NavlistItem[] = [
    {
      href: "#home",
      title: "Home"
    },
    {
      href: "#menu",
      title: "Menu"
    },
    {
      href: "#blog",
      title: "Blog"
    },
    {
      href: "#contact",
      title: "Contact"
    }
  ];

  return (
    <div className="w-screen top-0 bg-(--color-background) fixed inset-x-0 z-9999 2xl:w-full">
      <div className="mx-auto c-space max-w-7xl p-2">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <img 
            className="w-38"
            src="/foodz.png"
          />
          <div className="sm:hidden flex gap-5">
            <button
              className="flex cursor-pointer focus:outline-none"
              onClick={() => setIsOpen(prev => !prev)}
              >
              {isOpen ? (
                <RiCloseLargeLine className="w-6 h-6 text-black" />

              ) : (
                <RiMenuLine className="w-6 h-6 text-black"/>
              )}
            </button>
          </div>
          <nav
            className="hidden sm:flex gap-5">
              <NavbarItem navlist={nav} />
              <OrderNowButton />
          </nav>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity:0, x:-10 }}
          animate={{ opacity:1, x:0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration:1} }
        >
          <nav
            className="pb-5">
            <NavbarItem navlist={nav} />
          </nav>
        </motion.div>
      )}
    </div>
  )
}

export default Navbar;