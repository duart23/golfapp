"use client";
import Footer from "../components/footer";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const router = useRouter();

  // Main form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: "",
    gender: "",
    country: "",
    handicap: "",
  });

  // Separate state for phone details
  const [phoneDetails, setPhoneDetails] = useState({
    countryCode: "",
    phone: "",
  });

  // Repeat password state
  const [repeatPassword, setRepeatPassword] = useState("");

  // Handle input changes for regular form fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Handle phone number changes
  const handlePhoneChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setPhoneDetails({ ...phoneDetails, [e.target.name]: e.target.value });
  };
  // Handle repeat password changes
  const handleRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(e.target.value);
  };

  // Handle form submission
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== repeatPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Final form data with phone number included
    const finalData = {
      ...formData,
      phoneNumber: phoneDetails.countryCode + phoneDetails.phone,
    };

    // Send request to backend
    await createUser();
  };

  // API request function
  const createUser = async () => {
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const text = await response.text();  // Log raw response before parsing
      console.log("Raw Response:", text);
  
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
  
      const data = JSON.parse(text);  // Now safely parse JSON
      console.log("User Created", data);
      
      router.push("/?login=true");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <>
      <div className="signup-page py-24 flex items-center justify-center bg-gray-100">
        <div className="signup-container w-1/2 bg-white p-10">
          <h1 className="text-2xl">Sign Up</h1>
          <form className="flex flex-col">
            <div className="flex flex-row gap-5">
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-1/2 border-2 p-2 my-2 rounded-md"
              />
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-1/2 border-2 p-2 my-2 rounded-md"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-2 p-2 my-2 rounded-md"
              type="email"
              placeholder="Email"
            />
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border-2 p-2 my-2 rounded-md"
              type="password"
              placeholder="Password"
            />
            <input
              name="repeatPassword"
              value={repeatPassword}
              onChange={handleRepeatPasswordChange}
              className="border-2 p-2 my-2 rounded-md"
              type="password"
              placeholder="Repeat Password"
            />
            <div className="flex flex-row gap-5">
              {/* // Country Code */}
              <select
                name="countryCode"
                value={phoneDetails.countryCode}
                onChange={handlePhoneChange}
                className="w-1/5 border-2 p-2 my-2 rounded-md"
              >
                <option data-countrycode="AD" value="376">
                  Andorra (+376)
                </option>
                <option data-countrycode="AT" value="43">
                  Austria (+43)
                </option>
                <option data-countrycode="BY" value="375">
                  Belarus (+375)
                </option>
                <option data-countrycode="BE" value="32">
                  Belgium (+32)
                </option>
                <option data-countrycode="BA" value="387">
                  Bosnia & Herzegovina (+387)
                </option>
                <option data-countrycode="BG" value="359">
                  Bulgaria (+359)
                </option>
                <option data-countrycode="HR" value="385">
                  Croatia (+385)
                </option>
                <option data-countrycode="CY" value="357">
                  Cyprus (+357)
                </option>
                <option data-countrycode="CZ" value="420">
                  Czech Republic (+420)
                </option>
                <option data-countrycode="DK" value="45">
                  Denmark (+45)
                </option>
                <option data-countrycode="EE" value="372">
                  Estonia (+372)
                </option>
                <option data-countrycode="FI" value="358">
                  Finland (+358)
                </option>
                <option data-countrycode="FR" value="33">
                  France (+33)
                </option>
                <option data-countrycode="DE" value="49">
                  Germany (+49)
                </option>
                <option data-countrycode="GR" value="30">
                  Greece (+30)
                </option>
                <option data-countrycode="HU" value="36">
                  Hungary (+36)
                </option>
                <option data-countrycode="IS" value="354">
                  Iceland (+354)
                </option>
                <option data-countrycode="IE" value="353">
                  Ireland (+353)
                </option>
                <option data-countrycode="IT" value="39">
                  Italy (+39)
                </option>
                <option data-countrycode="LV" value="371">
                  Latvia (+371)
                </option>
                <option data-countrycode="LI" value="423">
                  Liechtenstein (+423)
                </option>
                <option data-countrycode="LT" value="370">
                  Lithuania (+370)
                </option>
                <option data-countrycode="LU" value="352">
                  Luxembourg (+352)
                </option>
                <option data-countrycode="MT" value="356">
                  Malta (+356)
                </option>
                <option data-countrycode="MD" value="373">
                  Moldova (+373)
                </option>
                <option data-countrycode="MC" value="377">
                  Monaco (+377)
                </option>
                <option data-countrycode="ME" value="382">
                  Montenegro (+382)
                </option>
                <option data-countrycode="NL" value="31">
                  Netherlands (+31)
                </option>
                <option data-countrycode="MK" value="389">
                  North Macedonia (+389)
                </option>
                <option data-countrycode="NO" value="47">
                  Norway (+47)
                </option>
                <option data-countrycode="PL" value="48">
                  Poland (+48)
                </option>
                <option data-countrycode="PT" value="351">
                  Portugal (+351)
                </option>
                <option data-countrycode="RO" value="40">
                  Romania (+40)
                </option>
                <option data-countrycode="RU" value="7">
                  Russia (+7)
                </option>
                <option data-countrycode="SM" value="378">
                  San Marino (+378)
                </option>
                <option data-countrycode="RS" value="381">
                  Serbia (+381)
                </option>
                <option data-countrycode="SK" value="421">
                  Slovakia (+421)
                </option>
                <option data-countrycode="SI" value="386">
                  Slovenia (+386)
                </option>
                <option data-countrycode="ES" value="34">
                  Spain (+34)
                </option>
                <option data-countrycode="SE" value="46">
                  Sweden (+46)
                </option>
                <option data-countrycode="CH" value="41">
                  Switzerland (+41)
                </option>
                <option data-countrycode="UA" value="380">
                  Ukraine (+380)
                </option>
                <option data-countrycode="GB" value="44">
                  United Kingdom (+44)
                </option>
                <option data-countrycode="VA" value="379">
                  Vatican City (+379)
                </option>
              </select>
              <input
                name="phone"
                value={phoneDetails.phone}
                onChange={handlePhoneChange}
                className="w-4/5 border-2 p-2 my-2 rounded-md"
                type="number"
                placeholder="Phone Number"
              />
            </div>
            <div className="flex flex-row gap-5">
              <input
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-1/2 border-2 p-2 my-2 rounded-md"
                type="date"
                placeholder="Date of Birth"
              />
              <select
                value={formData.gender}
                onChange={handleChange}
                id="gender"
                name="gender"
                className="w-1/2 border-2 p-2 my-2 rounded-md "
              >
                <option value="" disabled>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="flex flex-row gap-5">
              <input
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-1/2 border-2 p-2 my-2 rounded-md"
                type="text"
                placeholder="Country"
              />
              <input
                name="handicap"
                value={formData.handicap}
                onChange={handleChange}
                className="w-1/2 border-2 p-2 my-2 rounded-md"
                type="number"
                placeholder="Handicap"
              />
            </div>
            <button
              type="button"
              onClick={handleSignUp}
              className="bg-blue-500 text-white p-2 my-2 rounded-md"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
