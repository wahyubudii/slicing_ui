import Logo from "./Logo";
import Nav from "./Nav";
import Button from "./Button";

export default function NavBar() {
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
          <img src="/menu.svg" className="inline-block" />
        </div>
      </div>

      <div className="fixed bg-white z-10 right-0 top-0 h-full w-full p-10 md:hidden">
        <Nav scheme="dark" dir="vertical"/>
      </div>
    </>
  );
}
