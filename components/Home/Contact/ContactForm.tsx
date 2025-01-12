import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    service: "frontend",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          service: "frontend",
          message: "",
        });
      } else {
        setStatus(result.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus("Failed to send email.");
    }
  };

  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        Let's Work together!
      </h1>
      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At repellendus,
        asperiores quam officiis porro quaerat?
      </p>
      <form
        className="mt-8 block w-full overflow-hidden"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>

        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile number"
            value={formData.mobile}
            onChange={handleChange}
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>
        <div>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          >
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="fullStack">Full stack Development</option>
          </select>
        </div>
        <textarea
          name="message"
          rows={7}
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
        ></textarea>
        <div className="mt-4">
          <button className="px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full">
            Send Message
          </button>
        </div>
      </form>
      {status && <p className="mt-4 text-gray-200">{status}</p>}
    </div>
  );
};

export default ContactForm;
