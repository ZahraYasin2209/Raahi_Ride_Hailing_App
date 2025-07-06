import { FaStar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5"; 
import { BsChatSquareDotsFill } from "react-icons/bs"; 
import { FaMap } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <main className="bg-slate-50 dark:bg-dark-gray">
      

      <section className="flex flex-col md:flex-row min-h-[70vh]">
        <div className="mx-8 mt-14 flex-1 justify-center z-10">
          <h2 className="text-3xl font-bold my-3 text-cyan-900 dark:text-white">About راہی</h2>
          <h3 className="text-2xl font-bold my-4 text-stone-900 dark:text-white">
            Revolutionizing Ride-Hailing in Pakistan
          </h3>
          <p className="text-lg mb-6 text-justify text-cyan-900 dark:text-white">
            <strong>Raahi</strong> is a smart, reliable, and affordable ride-hailing platform tailored for everyday commuters. Whether you need a quick pickup or you're planning ahead, Raahi ensures comfort, safety, and convenience with just a few taps.
          </p>
          <p className="text-cyan-900 text-xl  dark:text-white">
            <strong>"Ride smart, ride safe, ride Raahi."</strong>
          </p>
        </div>

  
        <div className="flex-1 h-96 mt-0 pt-10 pr-2 md:mt-0 md:ml-8 md:max-w-[80%]">
  <img
    src="/aboutUs.jpg"
    alt="About Raahi"
    className="w-full h-full object-cover"
  />
</div>
      </section>

      <section className="my-12 mx-6">
      <h3 className="text-center text-4xl font-bold mb-10 text-cyan-900 dark:text-white">
        Core App Features
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">

    {/* Feature 1: Login/Register */}
    <div className="group div-explore-card border border-cyan-900 bg-cyan-900 text-white hover:bg-cyan-700 hover:text-cyan-900 transition duration-300">
      <h5 className="h2-explore-card">
        <FaStar className="text-5xl group-hover:text-white transition duration-300" />
        <span className="text-lg font-semibold">Quick Login</span>
      </h5>
      <p className="p-explore-card text-white">
        Register or login with ease using dummy or basic authentication.
      </p>
    </div>

    {/* Feature 2: Request a Ride */}
    <div className="group div-explore-card border border-cyan-900 bg-cyan-900 text-white hover:bg-cyan-700 hover:text-cyan-900 transition duration-300">
      <h5 className="h2-explore-card">
        <IoLocationSharp className="text-5xl group-hover:text-white transition duration-300" />
        <span className="text-lg font-semibold">Request a Ride</span>
      </h5>
      <p className="p-explore-card text-white">
        Select pickup, drop-off and ride type (Car, Bike, Rickshaw).
      </p>
    </div>

    {/* Feature 3: Ride Status */}
    <div className="group div-explore-card border border-cyan-900 bg-cyan-900 text-white hover:bg-cyan-700 hover:text-cyan-900 transition duration-300">
      <h5 className="h2-explore-card">
        <FaMap className="text-5xl group-hover:text-white transition duration-300" />
        <span className="text-lg font-semibold">Ride Status</span>
      </h5>
      <p className="p-explore-card text-white">
        See real-time updates from Requested → Accepted → Completed.
      </p>
    </div>

    {/* Feature 4: Ride History */}
    <div className="group div-explore-card border border-cyan-900 bg-cyan-900 text-white hover:bg-cyan-700  transition duration-300">
      <h5 className="h2-explore-card">
        <BsChatSquareDotsFill className="text-5xl group-hover:text-white transition duration-300" />
        <span className="text-lg font-semibold">Ride History</span>
      </h5>
      <p className="p-explore-card text-white">
        View your ride history with all relevant details in one place.
      </p>
    </div>
  </div>
  </section>

    </main>
  );
};

export default AboutUs;
