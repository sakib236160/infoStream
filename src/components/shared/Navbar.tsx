"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";


const Navbar = () => {
  const pathname = usePathname()
  return (
    <header className="py-4 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center sm:px-6 lg:px-8">
        {/* logo */}
        <div className="text-xl font-bold">
          <Link href="/">InfoStream</Link>
        </div>

        {/* desktop menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex space-x-4">
            {/* Normal link */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/news" className={`${pathname === '/news' ? 'text-red-500 font-semibold' : ''} px-3 py-2 hover:text-red-500`}>
                  News
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:text-red-500 text-gray-700">Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-4 w-48 text-gray-700 shadow-md rounded-md">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/services/web" className="block px-2 py-1">
                        Web Development
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/services/apps" className="block px-2 py-1">
                        Mobile App
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/services/seo" className="block px-2 py-1">
                        SEO
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
             {/* Normal link */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about" className={`${pathname === '/about' ? 'text-red-500 font-semibold' : ''} px-3 py-2 hover:text-red-500`}>
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
             {/* Normal link */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/contact" className={`${pathname === '/contact' ? 'text-red-500 font-semibold' : ''} px-3 py-2 hover:text-red-500`}>
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* color switcher and login button */}
        <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center">
                <span className="mr-2">Dark Mode</span>
                <Switch />
            </div>
            <Button variant="default">Login</Button>
        </div>
        {/* Mobile Hamber Menu */}
        <MobileMenu></MobileMenu>
      </nav>
    </header>
  );
};

export default Navbar;
