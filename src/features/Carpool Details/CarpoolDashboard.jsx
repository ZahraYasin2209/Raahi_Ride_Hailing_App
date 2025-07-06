import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PageNav from "../../pages/PageNav";
import Footer from "../../ui/Footer";
import Button from "../../ui/Button";
import { deleteCommute } from "../ride/findRideSlice";
import toast from "react-hot-toast";
import { useState } from "react";

const completedRides = [
  {
    id: 101,
    departureLocation: "Model Town",
    destinationLocation: "Liberty Market",
    departureDate: "July 6",
    departureTime: "9:00 AM",
    rideType: "Car",
    status: "In Progress",
    additionalNotes: "Morning ride for office",
  },
  {
    id: 102,
    departureLocation: "Mall Road",
    destinationLocation: "Airport Road",
    departureDate: "July 4",
    departureTime: "6:00 PM",
    rideType: "Rickshaw",
    status: "Completed",
    additionalNotes: "",
  },
];

const CarpoolDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const commutes = useSelector((state) => state.findRide.commutes);
  const [history, setHistory] = useState(completedRides);

  const handleStartRide = (ride) => {
    toast.success("Ride has been started!");
  };

  const handleCancelRide = (index) => {
    dispatch(deleteCommute(index));
    toast.error("Ride has been cancelled.");
  };

  const handleChangeStatus = (id) => {
    setHistory((prev) =>
      prev.map((ride) =>
        ride.id === id
          ? { ...ride, status: "Completed" }
          : ride
      )
    );
    toast.success("Ride marked as completed.");
  };

  return (
    <main className="bg-slate-50 dark:bg-dark-gray min-h-screen flex flex-col">
      <PageNav />

      <section className="flex-grow m-4 md:m-10">
        <h1 className="capitalize text-xl md:text-2xl font-bold dark:text-white mb-2">
          Welcome, Zahra
        </h1>

        <h2 className="text-lg md:text-xl font-bold text-cyan-900 dark:text-white mb-4">
          Scheduled Rides
        </h2>

        {commutes.length ? (
          <div className="p-2 md:p-4 rounded shadow mt-2 dark:bg-soft-black dark:text-white space-y-4 md:space-y-6">
            {commutes.map((ride, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 md:p-6 rounded shadow dark:bg-deep-navy dark:text-white"
              >
                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                  Ride from <strong>{ride.departureLocation}</strong> to{" "}
                  <strong>{ride.destinationLocation}</strong> on{" "}
                  <strong>{ride.departureDate}</strong> at{" "}
                  <strong>{ride.departureTime}</strong> via{" "}
                  <strong>{ride.rideType}</strong>.
                </p>

                {ride.additionalNotes && (
                  <p className="mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    Note: {ride.additionalNotes}
                  </p>
                )}

                <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-4 space-y-2 md:space-y-0">
                  <p className="text-sm md:text-md font-semibold text-teal-700">
                    Status: <span className="text-yellow-600">Requested</span>
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    <Button type="link" onClick={() => handleStartRide(ride)}>
                      Start Ride
                    </Button>
                    <Button
                      type="linkRed"
                      onClick={() => handleCancelRide(index)}
                    >
                      Cancel Ride
                    </Button>
                    <button
                      onClick={() => navigate("/app/chat")}
                      className="text-green-700 font-bold px-4 py-2 rounded hover:text-green-500 transition text-sm md:text-base"
                    >
                      Chat
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 mt-6 dark:text-gray-400 text-sm md:text-base">
            No ride requests found.
          </p>
        )}

        <h2 className="text-lg md:text-xl font-bold text-cyan-900 dark:text-white mt-8 md:mt-12 mb-4">
          Ride History
        </h2>

        {history.map((ride) => (
          <div
            key={ride.id}
            className="bg-gray-100 p-4 md:p-6 rounded shadow mb-4 dark:bg-deep-navy dark:text-white"
          >
            <p className="text-sm md:text-base leading-relaxed">
              Ride from <strong>{ride.departureLocation}</strong> to{" "}
              <strong>{ride.destinationLocation}</strong> on{" "}
              <strong>{ride.departureDate}</strong> at{" "}
              <strong>{ride.departureTime}</strong> via{" "}
              <strong>{ride.rideType}</strong>.
            </p>
            {ride.additionalNotes && (
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-2">
                Notes: {ride.additionalNotes}
              </p>
            )}
            <p className="font-semibold mt-2 text-sm md:text-base">
              Status:{" "}
              <span
                className={
                  ride.status === "Completed"
                    ? "text-green-600"
                    : "text-orange-600"
                }
              >
                {ride.status}
              </span>
            </p>

            {ride.status === "In Progress" && (
              <div className="mt-3">
                <Button
                  type="primary"
                  onClick={() => handleChangeStatus(ride.id)}
                >
                  Mark as Completed
                </Button>
              </div>
            )}
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
};

export default CarpoolDashboard;
