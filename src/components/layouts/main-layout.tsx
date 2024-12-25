"use client";

import { ReactNode } from "react";
import VidextSvg from "@/components/svgs/vidext-svg";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const path = usePathname();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b border-[#ECECEC] flex justify-between items-center py-5 px-8 sm:px-12">
      <Link href="/">
        <VidextSvg width="96" height="28" />
      </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem
              className={`${
                path === "/" && "bg-vidextGreen"
              } rounded-[20px] hover:bg-vidextGreen ease-in duration-150`}
            >
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Videos
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem
              className={`${
                path === "/upload" && "bg-vidextGreen"
              } rounded-[20px] hover:bg-vidextGreen ease-in duration-150`}
            >
              <Link href="/upload" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Subir video
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>

      <main className="flex-grow flex flex-col py-5 px-8 sm:px-12 overflow-auto">
        {children}
      </main>

      <footer className="bg-white border-t border-[#ECECEC] py-5 px-8 sm:px-12">
        <div className="flex flex-col-reverse gap-5 md:gap-0 md:flex-row md:justify-between items-center">
          <p className="text-black text-sm font-normal">
            © 2024 VidextHub. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="/pdfs/terminos_y_condiciones.pdf"
              target="_blank"
              className="text-sm text-black hover:underline"
            >
              Términos y condiciones
            </a>
            <a
              href="/pdfs/politica_y_privacidad.pdf"
              target="_blank"
              className="text-sm text-black hover:underline"
            >
              Política y privacidad
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
