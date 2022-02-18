import Logo from "./Logo";
import Nav from "./Nav";
import Button from "./Button";

import { useState } from "react";

export default function NavBar() {
  const [offcanvas, setOffcanvas] = useState(false)
  
  return (
    <>
      <div className="flex items-center py-10">
        <div className="w-3/12">
          <Logo />
        </div>
        <div className="w-6/12 hidden md:block">
          <Nav scheme="light" dir="horizontal"/>
        </div>
        <div className="w-3/12 text-right hidden md:block">
          <Button href="#contact" variant="outline-yellow">
            Kontak
          </Button>
        </div>
        <div className="w-9/12 md:hidden text-right">
          <img src="/menu.svg" className="inline-block" onClick={() => setOffcanvas(true)}/>
        </div>
      </div>

      <div className={`fixed bg-white z-10 top-0 h-full w-7/12 p-10 md:hidden transition-all ${offcanvas ? "right-0" : "-right-full"}`}>
        <img src="/x.svg" className="w-8 absolute top-8 right-8" onClick={() => setOffcanvas(false)}/>
        <Nav scheme="dark" dir="vertical"/>
      </div>
    </>
  );
}
