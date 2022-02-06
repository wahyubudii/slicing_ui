import Button from "./Button";
import NavBar from "./NavBar";

export default function Hero() {
  return (
    <div>
      <div className="bg-hero h-[712px]">
        <div className="container mx-auto">
          <NavBar />

          {/* Hero */}
          <div className="text-center mt-20">
            <h1 className="text-3xl text-white font-semibold font-mono w-8/12 mx-auto leading-relaxed">
              Saya seorang front-end engineer, back-end engineer, dan juga UI
              designer
            </h1>
            <p className="text-white text-opacity-60 text-lg w-4/12 mx-auto mt-6 leading-relaxed">
              Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI
              design
            </p>

            <Button className="mt-14" variant="yellow">
              Pelajari
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
