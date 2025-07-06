// Validate input contains only alphabets and spaces
const validateAlphabetsOnly = (input) => {
  const regex = /^[A-Za-z\s]*$/;
  return regex.test(input);
};

// Validate available seats (positive integer)
export const validateAvailableSeats = (seats) => {
  return Number.isInteger(Number(seats)) && Number(seats) > 0;
};

// Validate price per seat (positive number)
export const validatePricePerSeat = (price) => {
  return !isNaN(price) && Number(price) > 0;
};

// Validate departure date (today or future)
export const validateDepartureDate = (date) => {
  const today = new Date().toISOString().split("T")[0];
  return date >= today;
};

// Validate form data with optional findRideForm flag
export const validateFormData = (data, isFindRideForm = false) => {
  const errors = {};

  if (!validateAlphabetsOnly(data.name)) {
    errors.name = "Name must contain only alphabets.";
  }
  
  if (!isFindRideForm) {
    if (!validateAvailableSeats(data.availableSeats)) {
      errors.availableSeats = "Available seats must be valid.";
    }
    if (!validatePricePerSeat(data.pricePerSeat)) {
      errors.pricePerSeat = "Price per seat must be valid.";
    }
    if (!validateAlphabetsOnly(data.vehicleType)) {
      errors.vehicleType = "Vehicle Type must contain only alphabets.";
    }
  }

  return errors;
};
