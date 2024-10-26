import clsx from "clsx";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import { Header } from "./header";

export function Layout() {
  return (
    <div className="w-[100dvw] h-[100dvh] flex">
      {/* <DrawerComponent open={isDrawerOpen} openChange={handleAsideToggle} /> */}
      {/* <Aside isMenuOpen={isMenuOpen} /> */}
      <motion.div
        className="w-full flex flex-col"
        // animate={{ marginLeft: isMenuOpen ? 0 : "-350px" }}
        // transition={{ duration: 0.3 }}
      >
        <Header />
        <div className="flex flex-1 p-2 bg-muted/40 justify-center overflow-y-scroll">
          <div className={clsx("w-[98%] h-full")}>
            <Outlet />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
