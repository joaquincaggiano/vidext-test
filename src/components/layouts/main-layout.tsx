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
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-[#ECECEC] flex justify-between items-center py-4 px-8 sm:px-12">
        <VidextSvg width="96" height="28" />

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

      <main className="min-h-screen flex flex-col py-4 px-8 sm:px-12">
        {children}
      </main>

      <footer className="bg-white border-t border-[#ECECEC] py-4 px-8 sm:px-12">
        <div className="flex justify-between items-center">
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
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 VidextHub. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="/pdfs/terminos_y_condiciones.pdf"
                target="_blank"
                className="text-muted-foreground hover:text-primary text-sm transition"
              >
                Términos y condiciones
              </a>
              <a
                href="/pdfs/politica_y_privacidad.pdf"
                target="_blank"
                className="text-muted-foreground hover:text-primary text-sm transition"
              >
                Política y privacidad
              </a>
            </div>
          </div>
        </div> */}
      </footer>
    </div>
  );
};

export default MainLayout;
