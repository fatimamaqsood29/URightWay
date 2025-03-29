"use client";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import logo from "@/app/logo/URightWay.png";

export default function FlightWayAccountForm() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [avatar, setAvatar] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const defaultAvatar = "/profile.png";

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("avatar", avatar);
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
      formData.append("city", city);
      formData.append("district", district);
      formData.append("country", country);
      formData.append("state", state);

      // Here you would typically send the data to your API
      console.log(Object.fromEntries(formData));
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to login page after successful submission
      router.push("/login");
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        {/* Header Section with Logo */}
        <div className="flex flex-col items-center mb-6">
          <div className="mb-4">
            <Image
              src={logo}
              alt="URightWay Logo"
              width={100}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="border-b-2 border-gray-200 pb-4 w-full text-center">
            <div className="flex justify-center items-center mb-2">
              <h2 className="text-sm font-semibold text-gray-600">
                [Parent] / Student
              </h2>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">
              Necessary Personal Information
            </h1>
            <p className="text-gray-600 mt-2">
              Please fill out the form below to make your U flight Way Account.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Personal Photo Section */}
          <div className="mb-8 flex flex-col items-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Personal Photo
            </h3>
            <div
              onClick={handleAvatarClick}
              className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden cursor-pointer hover:bg-gray-300 transition-colors mb-4"
            >
              {preview ? (
                <Image
                  src={preview}
                  alt="User avatar"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              ) : (
                <Image
                  src={defaultAvatar}
                  alt="Default avatar"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              )}
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
            <button
              type="button"
              onClick={handleAvatarClick}
              className="px-6 py-2 bg-[#E1F8EC] text-[#1EBF89] rounded-md hover:bg-[#D1F8E0] transition-colors text-base font-medium"
            >
              Upload Photo
            </button>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                Full Name:
              </h3>
              <input
                {...register("fullName")}
                className="w-full px-4 py-2.5 border border-gray-300 rounded text-base focus:outline-none focus:ring-2 focus:ring-[#1EBF89]"
                placeholder="Name"
                required
              />
            </div>

            {/* Email & Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-base font-semibold text-gray-800 mb-2">
                  Email:
                </h3>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded text-base focus:outline-none focus:ring-2 focus:ring-[#1EBF89]"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-800 mb-2">
                  Password:
                </h3>
                <input
                  type="password"
                  {...register("password")}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded text-base focus:outline-none focus:ring-2 focus:ring-[#1EBF89]"
                  placeholder="Password"
                  required
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                Phone Number:
              </h3>
              <input
                {...register("phoneNumber")}
                type="tel"
                className="w-full px-4 py-2.5 border border-gray-300 rounded text-base focus:outline-none focus:ring-2 focus:ring-[#1EBF89]"
                placeholder="Phone Number"
                required
              />
            </div>

            {/* Country */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                Country:
              </h3>
              <FormControl fullWidth>
                <Select
                  value={country}
                  onChange={handleCountryChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(0, 0, 0, 0.23)",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(0, 0, 0, 0.23)",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#1EBF89",
                      borderWidth: 2,
                    },
                  }}
                  renderValue={(selected) => {
                    if (!selected) {
                      return "Select Country";
                    }
                    return selected;
                  }}
                >
                  <MenuItem
                    value="Pakistan"
                    sx={{ "&:hover": { backgroundColor: "#E1F8EC" } }}
                  >
                    Pakistan
                  </MenuItem>
                  <MenuItem
                    value="India"
                    sx={{ "&:hover": { backgroundColor: "#E1F8EC" } }}
                  >
                    India
                  </MenuItem>
                  <MenuItem
                    value="USA"
                    sx={{ "&:hover": { backgroundColor: "#E1F8EC" } }}
                  >
                    USA
                  </MenuItem>
                  <MenuItem
                    value="UK"
                    sx={{ "&:hover": { backgroundColor: "#E1F8EC" } }}
                  >
                    UK
                  </MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* State/Province */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                State/Province:
              </h3>
              <FormControl fullWidth>
                <Select
                  value={state}
                  onChange={handleStateChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(0, 0, 0, 0.23)",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(0, 0, 0, 0.23)",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#1EBF89",
                      borderWidth: 2,
                    },
                  }}
                  renderValue={(selected) => {
                    if (!selected) {
                      return "Select State";
                    }
                    return selected;
                  }}
                >
                  <MenuItem
                    value="Punjab"
                    sx={{ "&:hover": { backgroundColor: "#E1F8EC" } }}
                  >
                    Punjab
                  </MenuItem>
                  <MenuItem
                    value="Sindh"
                    sx={{ "&:hover": { backgroundColor: "#E1F8EC" } }}
                  >
                    Sindh
                  </MenuItem>
                  <MenuItem
                    value="Balochistan"
                    sx={{ "&:hover": { backgroundColor: "#E1F8EC" } }}
                  >
                    Balochistan
                  </MenuItem>
                  <MenuItem
                    value="Khyber Pakhtunkhwa"
                    sx={{ "&:hover": { backgroundColor: "#E1F8EC" } }}
                  >
                    Khyber Pakhtunkhwa
                  </MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* City */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                City:
              </h3>
              <FormControl fullWidth>
                <Select
                  value={city}
                  onChange={handleCityChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(0, 0, 0, 0.23)",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(0, 0, 0, 0.23)",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#1EBF89",
                      borderWidth: 2,
                    },
                  }}
                  renderValue={(selected) => {
                    if (!selected) {
                      return "Select City";
                    }
                    return selected;
                  }}
                >
                  <MenuItem
                    value="Lahore"
                    sx={{ "&:hover": { backgroundColor: "#E1F8EC" } }}
                  >
                    Lahore
                  </MenuItem>
                  <MenuItem
                    value="Karachi"
                    sx={{ "&:hover": { backgroundColor: "#E1F8EC" } }}
                  >
                    Karachi
                  </MenuItem>
                  <MenuItem
                    value="Islamabad"
                    sx={{ "&:hover": { backgroundColor: "#E1F8EC" } }}
                  >
                    Islamabad
                  </MenuItem>
                  <MenuItem
                    value="Peshawar"
                    sx={{ "&:hover": { backgroundColor: "#E1F8EC" } }}
                  >
                    Peshawar
                  </MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* District */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                District:
              </h3>
              <FormControl fullWidth>
                <Select
                  value={district}
                  onChange={handleDistrictChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(0, 0, 0, 0.23)",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(0, 0, 0, 0.23)",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#1EBF89",
                      borderWidth: 2,
                    },
                  }}
                  renderValue={(selected) => {
                    if (!selected) {
                      return "Select District";
                    }
                    return selected;
                  }}
                >
                  <MenuItem
                    value="Lahore District"
                    sx={{ "&:hover": { backgroundColor: "#E1F8EC" } }}
                  >
                    Lahore District
                  </MenuItem>
                  <MenuItem
                    value="Karachi District"
                    sx={{ "&:hover": { backgroundColor: "#E1F8EC" } }}
                  >
                    Karachi District
                  </MenuItem>
                  <MenuItem
                    value="Islamabad District"
                    sx={{ "&:hover": { backgroundColor: "#E1F8EC" } }}
                  >
                    Islamabad District
                  </MenuItem>
                  <MenuItem
                    value="Peshawar District"
                    sx={{ "&:hover": { backgroundColor: "#E1F8EC" } }}
                  >
                    Peshawar District
                  </MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* Total */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                Total:
              </h3>
              <input
                {...register("total")}
                type="number"
                className="w-full px-4 py-2.5 border border-gray-300 rounded text-base focus:outline-none focus:ring-2 focus:ring-[#1EBF89]"
                placeholder="Total"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 text-white rounded-md transition-colors text-base font-semibold ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#1EBF89] hover:bg-[#18a678]"
              }`}
            >
              {isSubmitting ? "Processing..." : "Proceeds Payment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}