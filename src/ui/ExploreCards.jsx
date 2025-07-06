import { HiGlobeAsiaAustralia } from "react-icons/hi2";
import { FaCarSide } from "react-icons/fa";
import { FaCaravan } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";

const ExploreCards = () => {
  return (
    <section>
      <h1 className="tracking-widest uppercase font-bold text-center text-4xl font-mono my-6">Explore</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {/* Card 1 */}
        <div className="group div-explore-card hover:bg-cyan-900">
          <h2 className="h2-explore-card">
            <FaCarSide className="text-4xl sm:text-5xl md:text-6xl text-cyan-900 transition-transform duration-300 group-hover:text-white" />
            <span className="text-lg">Verified Drivers</span>
          </h2>
          <p className="p-explore-card text-justify">
            All drivers are background-checked and rated for safety and reliability.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group div-explore-card hover:bg-cyan-900">
          <h2 className="h2-explore-card">
            <HiGlobeAsiaAustralia className="text-4xl sm:text-5xl md:text-6xl text-cyan-900 transition-transform duration-300 group-hover:text-white" />
            <span className="text-lg">Easy Booking</span>
          </h2>
          <p className="p-explore-card text-justify">
            Book a ride in seconds through our seamless and smart app interface.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group div-explore-card hover:bg-cyan-900">
          <h2 className="h2-explore-card">
            <FaCaravan className="text-4xl sm:text-5xl md:text-6xl text-cyan-900 transition-transform duration-300 group-hover:text-white" />
            <span className="text-lg">24/7 Availability</span>
          </h2>
          <p className="p-explore-card text-justify">
            Whether it’s day or night, Raahi is ready to take you where you need to go.
          </p>
        </div>

        {/* Card 4 */}
        <div className="group div-explore-card hover:bg-cyan-900">
          <h2 className="h2-explore-card">
            <FaHandshake className="text-4xl sm:text-5xl md:text-6xl text-cyan-900 transition-transform duration-300 group-hover:text-white" />
            <span className="text-lg">Transparent Policies</span>
          </h2>
          <p className="p-explore-card text-justify">
            Clear pricing, honest commitments, and respect between riders and drivers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExploreCards;
