import { useDispatch } from "react-redux";
import { addCommute } from "./findRideSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { validateFormData } from "../../utils/helper";
import Button from "../../ui/Button";

const initialState = {
  name: "",
  departureLocation: "",
  destinationLocation: "",
  departureDate: "",
  departureTime: "",
  rideType: "Bike",
  additionalNotes: "",
};

const today = new Date().toISOString().split("T")[0];

const FindRide = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [rideData, setRideData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRideData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateFormData(rideData, true);

    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((error) => toast.error(error));
      return;
    }

    dispatch(addCommute(rideData));
    toast.success("Ride request submitted!");
    setRideData(initialState);

    navigate("/app/carpoolDashboard");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      <div className="md:w-1/2 w-full overflow-y-auto bg-teal-50 p-6">
        <h2 className="mb-5 text-center text-3xl font-bold text-cyan-900">
          Find a Ride
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="ride-form-label">Name:</label>
            <input
              type="text"
              name="name"
              value={rideData.name}
              onChange={handleChange}
              required
              className="ride-form-input"
            />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1 mb-4 md:mb-0">
              <label className="ride-form-label">Departure Location:</label>
              <input
                type="text"
                name="departureLocation"
                value={rideData.departureLocation}
                onChange={handleChange}
                required
                className="ride-form-input"
              />
            </div>
            <div className="flex-1">
              <label className="ride-form-label">Destination Location:</label>
              <input
                type="text"
                name="destinationLocation"
                value={rideData.destinationLocation}
                onChange={handleChange}
                required
                className="ride-form-input"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1 mb-4 md:mb-0">
              <label className="ride-form-label">Departure Date:</label>
              <input
                type="date"
                name="departureDate"
                value={rideData.departureDate}
                onChange={handleChange}
                min={today}
                required
                className="ride-form-input"
              />
            </div>
            <div className="flex-1">
              <label className="ride-form-label">Departure Time:</label>
              <input
                type="time"
                name="departureTime"
                value={rideData.departureTime}
                onChange={handleChange}
                required
                className="ride-form-input"
              />
            </div>
          </div>

          <div>
            <label className="ride-form-label">Ride Type:</label>
            <select
              name="rideType"
              value={rideData.rideType}
              onChange={handleChange}
              className="ride-form-input"
            >
              <option value="Bike">Bike</option>
              <option value="Car">Car</option>
              <option value="Rickshaw">Rickshaw</option>
            </select>
          </div>

          <div>
            <label className="ride-form-label">Additional Notes (optional):</label>
            <textarea
              name="additionalNotes"
              value={rideData.additionalNotes}
              onChange={handleChange}
              className="ride-form-input"
            />
          </div>

          <div className="text-center">
            <Button type="primary">Find Ride</Button>
          </div>
        </form>
      </div>

      <div className="hidden md:block md:w-1/2 h-full">
        <img
          src="/map.jpg"
          alt="Map Preview"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default FindRide;
