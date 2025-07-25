"use client";

import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Home } from "lucide-react";

export default function MainNavBar() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 text-primary">
              <Home className="h-5 w-5" />
              <span className="font-semibold">Ripoulitique</span>
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
