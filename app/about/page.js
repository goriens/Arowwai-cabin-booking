import Image from "next/image";
import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";
import { getCabins } from "../_lib/data-service";

export const revalidate = 86400;
export const metadata = {
  title: "About",
};
export default async function Page() {
  const cabins = await getCabins();
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to Arowwai
        </h1>

        <div className="space-y-8">
          <p>
            At Arowwai, we invite you to step into a world where luxury and
            nature coexist in perfect harmony. Our exclusive resort is designed
            to be a sanctuary for the soul, offering an escape from the everyday
            hustle into a serene and refined environment. From the moment you
            arrive, you’ll be enveloped in an atmosphere of elegance, comfort,
            and unparalleled hospitality.
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>

      <div className="col-span-2 relative aspect-square">
        <Image
          src={image1}
          fill
          placeholder="blur"
          alt="Family sitting around a fire pit in front of cabin"
          className="object-cover"
        />
      </div>

      <div className="col-span-2">
        <Image
          src={image2}
          alt="Family that manages The Wild Oasis"
          placeholder="blur"
          quality={80}
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          The Arowwai Experience
        </h1>

        <div className="space-y-8">
          <p>
            Immerse yourself in the Arowwai experience, where every detail is
            crafted to elevate your stay. Our accommodations are more than just
            places to rest—they are spaces where you can rejuvenate and
            reconnect with yourself and the natural beauty around you. Whether
            you choose a luxury cabin, a private suite, or an exclusive villa,
            each option is designed to provide a seamless blend of
            sophistication and comfort.
          </p>
          <p>
            Indulge in gourmet dining experiences that celebrate local flavors
            and international cuisine, prepared by our expert chefs. Explore the
            breathtaking landscapes with guided nature walks, adventure trails,
            and bespoke outdoor activities. For those seeking relaxation, our
            world-class spa offers a range of treatments designed to soothe your
            mind, body, and spirit.
          </p>

          <div>
            <a
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
