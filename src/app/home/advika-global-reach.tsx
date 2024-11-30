import Image from "next/image";

export default function AdvikaGlobalReach() {
  return (
    <section className="bg-light pt-24 pb-20">
      <div className="container">
        <div className="grid grid-cols-2">
          <div className="border-r">
            <h2 className="text-6xl font-semibold text-primary">
              Advika&apos;s Technological Superiority
            </h2>
          </div>
          <div className="text-black/60 font-medium leading-loose pl-8">
            <p>
              We are the pioneers in Cloud Server and Dedicated Server services
              in India, offering highly affordable and reliable server solutions
              to our customers. Here are some key highlights of our presence and
              achievements
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>
                Fastest-growing server provider with over 5,000 trusted and
                satisfied subscribers
              </li>
              <li>
                Strong presence across 50 cities nationally and 12 international
                cities
              </li>
            </ul>
          </div>
        </div>

        <div className="relative flex items-center">
          <Image
            src={"/images/advika-map.png"}
            alt="Advika Global Reach"
            className="mt-12"
            width={1400}
            height={800}
          />
          <div className="absolute grid grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg size-40 flex flex-col items-center justify-center">
              <h3 className="text-primary font-semibold text-4xl">12+</h3>
              <p>Cities Globally</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg size-40 flex flex-col items-center justify-center">
              <h3 className="text-primary font-semibold text-4xl">50+</h3>
              <p>Cities Locally</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg size-40 flex flex-col items-center justify-center">
              <h3 className="text-primary font-semibold text-4xl">24+</h3>
              <p>Year of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
