"use client";
import React, { useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2"; // Import SweetAlert2

const InquiryForm = () => {
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log("Email: ", email);
    console.log("Message: ", message);

    const res = await fetch("api/inquiry", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setemail("");
      setmessage("");

      // Trigger SweetAlert for success message
      Swal.fire({
        icon: "success",
        title: "Message sent successfully!",
        text: "Thank you for your inquiry.",
        confirmButtonText: "OK",
        timer: 4000, // Auto close after 3 seconds
        showConfirmButton: false, // Hide the button after the timer
      });
    } else {
      // Handle error case (optional)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Please try again.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="bg-[#222938] rounded-lg lg:p-16 p-5 flex flex-col md:ml-auto py-16 md:py-28 w-full relative z-10 shadow-md">
      <div className="flex justify-center items-center">
        <Image
          alt="logo"
          src="/Logo.svg"
          width="50"
          height="50"
          className="absolute -translate-y-[60%] w-36 h-36 rounded-full object-cover"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-white mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            name="email"
            required
            onChange={(e) => setemail(e.target.value)}
            value={email}
            className="w-full bg-white rounded-lg text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-8">
          <label htmlFor="message" className="leading-7 text-sm text-white mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="What are you saying?"
            onChange={(e) => setmessage(e.target.value)}
            value={message}
            className="w-full bg-white rounded-lg h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button
          type="submit"
          className="w-full text-white rounded-full border-2 border-[#224A50] hover:text-[#1f272e] hover:bg-white py-2 px-8 leading-6 bg-[#79CDC5]"
        >
          Click To Apply
        </button>
      </form>

      {/* {error && error.map((e, index) => (
        <div
          key={index}
          className={`${
            success ? "text-[#bbf7d0]" : "text-[#f7bbbb]"
          } text-lg font-serif text-center py-2 mt-5`}
        >
          {e}
        </div>
      ))} */}
    </div>
  );
};

export default InquiryForm;
