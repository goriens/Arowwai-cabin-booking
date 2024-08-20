import Link from "next/link";
import bg from "../public/bg.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        alt="Mountains and forests with two cabins"
        className="object-cover blur-sm"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight bg-gradient-to-r from-blue-600 via-green-500 to-accent-600 font-bold  text-transparent bg-clip-text">
          Welcome to Arowwai
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all rounded-sm"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
