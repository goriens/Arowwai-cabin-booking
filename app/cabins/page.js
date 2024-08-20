import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";

// export const revalidate = 0;

export const metadata = {
  title: "Cabins",
};

export default async function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";
  console.log(filter);

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Our Luxury Cabins offer a unique blend of rustic charm and modern
        elegance, designed to provide an unparalleled experience of comfort and
        tranquility. Nestled in nature’s embrace, each cabin features
        thoughtfully curated interiors, premium amenities, and breathtaking
        views. Whether you’re seeking a peaceful retreat or an adventurous
        getaway, our cabins are crafted to cater to your every need, ensuring a
        memorable stay where luxury meets the serenity of the great outdoors.
      </p>
      <div className="flex justify-end mb-8">
        <Filter />
      </div>
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
}
