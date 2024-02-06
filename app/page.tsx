import Container from "@/components/container";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-7">
      <div className="bg-[#fbfaf4]">
        <Container>
          <Hero />
        </Container>
      </div>
    </div>
  );
}
