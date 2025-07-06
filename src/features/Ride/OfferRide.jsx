import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PageNav from "../../pages/PageNav";
import Footer from "../../ui/Footer";
import Button from "../../ui/Button";
import toast from "react-hot-toast";
import { updateRideStatus } from "../ride/findRideSlice"; // Assume you have this action to update ride status

const dummyRequestedRides = [
  {
    id: 201,
    passengerName: "Ali",
    pickupLocation: "DHA Phase 5",
    dropLocation: "Gulberg",
    departureDate: "July 7",
    departureTime: "8:30 AM",
    rideType: "Car",
    status: "Requested",
    additionalNotes: "Need to reach office early",
  },
  {
    id: 202,
    passengerName: "Sara",
    pickupLocation: "Johar Town",
    dropLocation: "Model Town",
    departureDate: "July 7",
    departureTime: "9:00 AM",
    rideType: "Car",
    status: "Requested",
    additionalNotes: "",
  },
];

const OfferRide = () => {
  const dispatch = useDispatch();

  // Example: you can fetch rides from redux store if implemented
  // const requestedRides = useSelector(state => state.findRide.requestedRides);
  // For now use dummy data
  const [requestedRides, setRequestedRides] = useState(dummyRequestedRides);

  const [availability, setAvailability] = useState("Free");

  const handleToggleAvailability = () => {
    setAvailability((prev) => (prev === "Free" ? "Busy" : "Free"));
    toast.success(`Status changed to ${availability === "Free" ? "Busy" : "Free"}`);
  };

  const handleRideDecision = (id, decision) => {
    setRequestedRides((prev) =>
      prev.map((ride) =>
        ride.id === id ? { ...ride, status: decision } : ride
      )
    );
    toast.success(`Ride ${decision.toLowerCase()} successfully.`);
    
    // If you have redux action, dispatch here:
    // dispatch(updateRideStatus({ id, status: decision }));
  };

  return (
    <main className="bg-slate-50 dark:bg-dark-gray min-h-screen flex flex-col">
      <PageNav />

      <section className="flex-grow m-10">
        <h1 className="capitalize text-2xl font-bold dark:text-white mb-4">
          Driver Dashboard
        </h1>

        <div className="mb-8">
          <p className="text-lg font-semibold dark:text-white">
            Availability Status:{" "}
            <span
              className={`font-bold ${
                availability === "Free" ? "text-green-600" : "text-red-600"
              }`}
            >
              {availability}
            </span>
          </p>
          <Button type="primary" onClick={handleToggleAvailability}>
            Toggle Status
          </Button>
        </div>

        <h2 className="text-xl font-bold text-cyan-900 dark:text-white mb-4">
          Requested Rides
        </h2>

        {requestedRides.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No ride requests.</p>
        ) : (
          <div className="space-y-6">
            {requestedRides.map((ride) => (
              <div
                key={ride.id}
                className="bg-gray-100 p-6 rounded shadow dark:bg-deep-navy dark:text-white"
              >
                <p>
                  <strong>Passenger:</strong> {ride.passengerName}
                </p>
                <p>
                  <strong>From:</strong> {ride.pickupLocation}{" "}
                  <strong>To:</strong> {ride.dropLocation}
                </p>
                <p>
                  <strong>Date:</strong> {ride.departureDate}{" "}
                  <strong>Time:</strong> {ride.departureTime}
                </p>
                <p>
                  <strong>Ride Type:</strong> {ride.rideType}
                </p>
                {ride.additionalNotes && (
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Notes: {ride.additionalNotes}
                  </p>
                )}
                <p className="font-semibold mt-2">
                  Status:{" "}
                  <span
                    className={
                      ride.status === "Requested"
                        ? "text-yellow-600"
                        : ride.status === "Accepted"
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {ride.status}
                  </span>
                </p>

                {ride.status === "Requested" && (
                  <div className="mt-3 flex space-x-4">
                    <Button
                      type="primary"
                      onClick={() => handleRideDecision(ride.id, "Accepted")}
                    >
                      Accept
                    </Button>
                    <Button
                      type="linkRed"
                      onClick={() => handleRideDecision(ride.id, "Rejected")}
                    >
                      Reject
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
};

export default OfferRide;
