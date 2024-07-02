import Button from "@/components/buttons/Button";
import Image from "next/image";
import brandsImage from '../../public/brands.png'
import heroImage from '../../public/hero.gif'
import PostCard from "@/components/blog/PostCard";

export default function Home() {

  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="flex-1 flex flex-col gap-9">
        <h1 className="text-8xl font-bold">Creative Thoughts Agency.</h1>
        <p className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className="flex gap-4">
          <Button variant="primary">Learn More</Button>
          <Button variant="white">Contact</Button>
        </div>
        <div className="relative h-24 grayscale">
          <Image src={brandsImage} alt="" fill className="" />
        </div>
      </div>
      <div className="relative md:flex-1 h-[470px] w-full">
        <Image src={heroImage} alt="" fill className="" />
      </div>
    </div>
  );
}
