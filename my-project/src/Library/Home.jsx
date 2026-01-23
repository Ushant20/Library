import React, { useEffect, useState, useRef } from "react";
import Logo from "../assets/logo.png";
import { FiUser } from "react-icons/fi";
import { MapPin, Phone, Clock } from "lucide-react";

import Img1 from "../assets/Img1.jpeg";
import Img2 from "../assets/Img2.jpeg";
import Img3 from "../assets/Img3.jpeg";
import Img4 from "../assets/Img4.jpeg";
import Img5 from "../assets/Img5.jpeg";
import Img6 from "../assets/Img6.jpeg";
import Img7 from "../assets/Img7.jpeg";
import Img8 from "../assets/Img8.jpeg";
import Img9 from "../assets/Img9.jpeg";
import Img10 from "../assets/Img10.jpeg";
import Google from "../assets/Googlelogo.png"

const Home = () => {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10];
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  

  useEffect(() => {
    if (isHovering) return;


    const reviews = [
      {
        name: "Rahul Sharma",
        rating: 5,
        time: "2 months ago",
        text: "Very calm and disciplined environment. Perfect for long study hours.",
      }
    ]

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isHovering]);


  const [form, setForm] = useState({
    name: "",
    phone: "",
    plan: "",
    facilities: [],
    time: "",
    joining: ""
  });

  const facilitiesList = [
    "AC / Heated Room",
    "100 Mbps WiFi",
    "Power Socket",
    "Silent Study Zone"
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleFacility = (f) => {
    let updated = [...form.facilities];
    if (updated.includes(f)) {
      updated = updated.filter((x) => x !== f);
    } else {
      updated.push(f);
    }
    setForm({ ...form, facilities: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello Front Benchers Library,

New Enquiry Received:

Name: ${form.name}
Mobile: ${form.phone}
Plan: ${form.plan}
Preferred Time: ${form.time}
Joining: ${form.joining}

Please connect with the student.`;

    const whatsappURL = `https://wa.me/919990226207?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };



  const styles = {
    page: {
      maxWidth: "520px",
      margin: "auto",
      padding: "20px",
      background: "#f8fafc",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.08)"
    }

    ,
    form: {
      display: "flex",
      flexDirection: "column"
    }

    ,
    input: {
      padding: "10px",
      marginBottom: "12px",
      borderRadius: "6px",
      border: "1px solid #ccc"
    }

    ,
    option: {
      display: "block",
      marginBottom: "6px"
    }

    ,
    button: {
      marginTop: "15px",
      padding: "12px",
      background: "#111827",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "16px"
    }
  };

  const policies = [
    {
      title: "Membership Policy",
      content:
        "Library access is available only to registered members. Membership is non-transferable and valid ID verification may be required."
    },
    {
      title: "Study Environment",
      content:
        "The library operates as a silent study zone. Loud talking, phone calls, or any disruptive behavior is strictly prohibited. Mobile phones must remain on silent mode at all times."
    },
    {
      title: "Seating & Discipline",
      content:
        "Members are required to use only their allotted seats. Any misuse of seating or repeated indiscipline may result in temporary or permanent suspension."
    },
    {
      title: "Timings & Access",
      content:
        "Entry is permitted strictly according to the selected membership plan. Library management reserves the right to modify operating hours when required."
    },
    {
      title: "Food & Cleanliness",
      content:
        "Consumption of food inside the study area is strictly prohibited. Members are expected to maintain cleanliness within the library premises."
    },
    {
      title: "Payment & Refund",
      content:
        "All membership fees must be paid in advance. Fees once paid are non-refundable and non-adjustable under any circumstances."
    },
    {
      title: "Safety & Security",
      content:
        "The premises are under CCTV surveillance for safety purposes. Damage to property or misuse of facilities may attract strict action."
    },
    {
      title: "Management Rights",
      content:
        "Library management reserves the right to update or modify policies without prior notice. The management’s decision shall be final and binding."
    },
    {
      title: "Policy Acceptance",
      content:
        "By using library facilities, members agree to comply with all policies and guidelines mentioned above."
    }
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);




  return (
    <div className="w-full min-h-screen overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="bg-[#e0e0a0] flex items-center justify-between px-5 h-20 shadow-sm">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-20" />
          <h1 className="text-2xl font-bold ml-5">FRONT BENCHERS LIBRARY</h1>
        </div>

        <div className=" hidden md:flex gap-8 text-xl">
         <span
      onClick={() => scrollToSection("home")}
      className="cursor-pointer hover:text-blue-600"
    >
      Home
    </span>

    <span
      onClick={() => scrollToSection("enquiries")}
      className="cursor-pointer hover:text-blue-600"
    >
      Enquiries
    </span>

    <span
      onClick={() => scrollToSection("contact")}
      className="cursor-pointer hover:text-blue-600"
    >
      Contact
    </span>

    <span
      onClick={() => scrollToSection("policies")}
      className="cursor-pointer hover:text-blue-600"
    >
      Policies
    </span>
        </div>

        {/* <div className=" hidden md:flex items-center gap-2 cursor-pointer hover:text-blue-600">
          <FiUser size={26} />
          <span className="text-lg">Login</span>
        </div> */}
      </nav>

      {/* ================= MAIN SECTION ================= */}
      <section id="home" className="bg-[#f7f0e6] px-4 sm:px-6 md:px-10 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-10">

          {/* LEFT IMAGE CARD */}
          <div className="w-full md:w-1/2">
            <div className="bg-[#ece6dd] rounded-[28px] p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex flex-col">

              {/* IMAGE AREA */}
              <div className="w-full h-[220px] sm:h-[280px] md:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden mb-6">
                <img
                  src={images[activeIndex]}
                  alt="Library"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* THUMBNAILS */}
              <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
                {images.map((img, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden cursor-pointer
              border-2 transition-all
              ${activeIndex === index
                        ? "border-black scale-105"
                        : "border-transparent"
                      }`}
                  >
                    <img
                      src={img}
                      alt="thumb"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT INFO CARD */}
          <div className="w-full md:w-1/2">
            <div className="bg-[#ece6dd] rounded-[28px] p-6 sm:p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex flex-col gap-8 h-full">

              {/* CONTENT */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold mb-6">
                  Why Students Choose <br /> Front Benchers Library
                </h2>

                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    ✔ A Calm Space for Deep Focus
                  </h3>
                  <ul className="ml-5 text-gray-700 space-y-1">
                    <li>Individual sound-controlled cubicles</li>
                    <li>Soft LED lighting for eye comfort</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    🪑 Comfort That Supports Long Hours
                  </h3>
                  <ul className="ml-5 text-gray-700 space-y-1">
                    <li>Air-conditioned & heated rooms</li>
                    <li>Ergonomic seating</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    📶 Fast & Reliable Internet
                  </h3>
                  <ul className="ml-5 text-gray-700 space-y-1">
                    <li>100 Mbps dual Wi-Fi</li>
                    <li>Ideal for online classes & research</li>
                  </ul>
                </div>
              </div>

              {/* BADGES */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {[
                  "🕒 24×7 Open",
                  "📶 High-Speed Wi-Fi",
                  "🪑 Private Cubicles",
                  "❄️ AC & Heated Rooms",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#f7f0e6] px-4 py-2 rounded-xl shadow-sm font-medium text-sm sm:text-base"
                  >
                    {item}
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= ENQUIRY FORM ================= */}
      <section id="enquiries" className="bg-[#f7f0e6] py-14 px-4">
        <div className="max-w-xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-md">

          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">
            Enquiry Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            />

            <input
              name="phone"
              placeholder="Mobile Number"
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            />

            <select
              name="plan"
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            >
              <option value="">Select Plan</option>
              <option value="Less than 6 Hours">Less than 6 Hours</option>
              <option>6 Hours</option>
              <option>8 Hours</option>
              <option>12 Hours</option>
              <option>24 Hours</option>
            </select>

            <select
              name="time"
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            >
              <option value="">Preferred Time</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
              <option>Night</option>
            </select>

            <select
              name="joining"
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            >
              <option value="">Joining When?</option>
              <option>Today</option>
              <option>This Week</option>
              <option>Next Week</option>
            </select>

            <button
              className="w-full bg-black text-white py-3 rounded text-base sm:text-lg
             transition-all duration-300
             hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)]
             active:translate-y-0 active:shadow-inner"
            >
              Send Enquiry on WhatsApp
            </button>
          </form>

        </div>
      </section>



      <section id="contact" className="bg-[#f7f0e6] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">
              Contact Us
            </h2>
            <p className="text-gray-600 mt-2">
              Get in touch or visit our library anytime
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-3">

            {/* Address */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <MapPin className="h-10 w-10 text-[#9b7a4b]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Address
              </h3>
              <p className="text-gray-600 leading-relaxed">
                FRONT BENCHERS LIBRARY <br />
                M-50 OLD DLF COLONY,SEC-14<br />
                GURUGRAM – 122001, India
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <Phone className="h-10 w-10 text-[#9b7a4b]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Call / WhatsApp
              </h3>
              <p className="text-gray-600">
                <a
                  href="tel:+919990226207"
                  className="cursor-pointer hover:text-blue-600"
                >
                  +91 9990226207
                </a>
              </p>
              <a
                href="https://wa.me/919990226207"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline ml-2"
              >
                Available for quick assistance on WhatsApp
              </a>

            </div>

            {/* Timing */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <Clock className="h-10 w-10 text-[#9b7a4b]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Opening Hours <br />24×7
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Flexible study access for students with
                extended availability throughout the day.
              </p>


            </div>
            <div className="w-full max-w-5xl h-[300px] md:h-[420px] mx-auto rounded-2xl overflow-hidden shadow-xl mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.3311383268165!2d77.0438528!3d28.4695726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1900310c6435%3A0xfb8c416fb0b3a63a!2sFront%20Benchers%20Library!5e0!3m2!1sen!2sin!4v1768835192348!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>

            </div>

            <div ref={scrollRef} className="flex overflow-x-auto gap-4 mt-8 ml-10">
              {/* review cards */}
              <div className="bg-white rounded-xl shadow-md p-5 w-[280px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                    R
                  </div>

                  <div>
                    <p className="font-medium text-sm">Rahul Sharma</p>
                    <p className="text-xs text-gray-500">⭐⭐⭐⭐⭐ · 2 months ago</p>
                  </div>
                </div>

                <p className="text-sm text-gray-700">
                  Very calm and disciplined environment. Perfect for long study hours.
                </p>

                <p className="text-xs text-gray-400 mt-2">Reviewed on Google</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6 mt-8">
              <img
                src={Google}
                className="w-10 h-10"
              />

              <div>
                <p className="text-xl font-semibold">4.9</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                  <span className="text-sm text-gray-500 ml-2">
                    Based on 50 reviews
                  </span>
                </div>
              </div>
            </div>






          </div>
        </div>

      </section>

      <section id="policies " className="bg-[#f7f0e6] py-16 px-4">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-10">
            Library Policies
          </h2>

          <div className="space-y-4">
            {policies.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold"
                >
                  <span>{item.title}</span>
                  <span className="text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-600 mt-12">
            These policies are designed to ensure a disciplined, secure, and
            productive study environment for all members.
          </p>

        </div>
      </section>

      <footer className="bg-[#ece6dd] px-4">
        <div className="max-w-7xl mx-auto px-10 py-14">

          {/* TOP SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {/* BRAND */}
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-4">
                Front Benchers Library
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A calm, disciplined and well-equipped study space designed
                for long hours of focused learning and exam preparation.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="hover:underline cursor-pointer">Home</li>
                <li className="hover:underline cursor-pointer">About Us</li>
                <li className="hover:underline cursor-pointer">Facilities</li>
                <li className="hover:underline cursor-pointer">Plans & Pricing</li>
                <li className="hover:underline cursor-pointer">Contact</li>
              </ul>
            </div>

            {/* FACILITIES */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Facilities</h4>
              <ul className="space-y-2 text-gray-700">
                <li>24×7 Open Library</li>
                <li>Individual Study Cubicles</li>
                <li>High-Speed Wi-Fi</li>
                <li>AC & Heated Rooms</li>
                <li>Clean & Hygienic Washrooms</li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-3 text-gray-700">
                <li>📍 M-50 OLD DLF COLONY SEC-14     GURUGRAM</li>
                <li>📞 +91 9990226207</li>
                <li>🕒 Open 24×7</li>
              </ul>
            </div>

          </div>

          {/* DIVIDER */}
          <div className="border-t border-gray-300 my-10"></div>

          {/* BOTTOM BAR */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
            <p>
              © {new Date().getFullYear()} Front Benchers Library. All rights reserved.
            </p>

            <div className="flex gap-6">
              <span className="hover:underline cursor-pointer">Privacy Policy</span>
              <span className="hover:underline cursor-pointer">Terms & Conditions</span>
            </div>
          </div>

        </div>
      </footer>




    </div>

  );
};

export default Home;
