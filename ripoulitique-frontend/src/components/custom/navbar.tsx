"use client";

import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function MainNavBar() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/">
              <img src="/logo.svg" alt="Home" className="h-14" />
            </Link>
            <div className="flex space-x-4">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link to="/">Accueil</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link to="/search">Recherche</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link to="/contact">Contact</Link>
                  </NavigationMenuLink>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
