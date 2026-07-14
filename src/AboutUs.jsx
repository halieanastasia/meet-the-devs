import { useState } from "react";
import tempImg from "../public/devImages/temp.png";

import megan from "../public/devImages/megan.jpg";
import halie from "../public/devImages/halie.jpg";
import vish from "../public/devImages/vish.jpg";
import carlos from "../public/devImages/cadu.jpg";
import adam from "../public/devImages/adam.jpg";

// import { Mail, Phone } from "lucide-react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

// Placeholder data — swap in real photos, blurbs, and links.
const developers = [
  {
    id: 1,
    name: "Megan Chow",
    picture: megan,
    blurb: "Intro blurb goes here.",
    memory: "Favourite contribution / dev memory goes here.",
    linkedin: "https://www.linkedin.com/in/megancchow/",
    portfolio: "https://github.com/megan-chow",
    phone: "",
    email: "chow.megan@gmail.com",
  },
  {
    id: 2,
    name: "Halie Favron",
    picture: halie,
    blurb: "Intro blurb goes here.",
    memory: "Favourite contribution / dev memory goes here.",
    linkedin: "https://www.linkedin.com/in/haliefavron/",
    portfolio: "https://github.com/halieanastasia",
    phone: "",
    email: "halieanastasia@gmail.com",
  },
  {
    id: 3,
    name: "Vish Epa",
    picture: vish,
    blurb: "Intro blurb goes here.",
    memory: "Favourite contribution / dev memory goes here.",
    linkedin: "linkedin.com/in/vish-epa",
    portfolio: "https://github.com/vishepa",
    phone: "",
    email: "vishepa@myyahoo.com",
  },
  {
    id: 4,
    name: "Carlos Fonseca",
    picture: carlos,
    blurb: "Intro blurb goes here.",
    memory: "Favourite contribution / dev memory goes here.",
    linkedin: "https://www.linkedin.com/in/carlosrcpf/",
    portfolio: "https://github.com/CaduF01",
    phone: "",
    email: "cadurcpf@gmail.com",
  },
  {
    id: 5,
    name: "Adam Olszewski",
    picture: adam,
    blurb: "Intro blurb goes here.",
    memory: "Favourite contribution / dev memory goes here.",
    linkedin: "https://www.linkedin.com/in/adam-e-olszewski/",
    portfolio: "https://github.com/Lime-N-ade",
    phone: "",
    email: "LimeZephyr@proton.me",
  },
];

function DevCard({ dev }) {
  // Controls the little "contact info" flyout under the LinkedIn icon.
  const [showContacts, setShowContacts] = useState(false);

  return (
    <div className="relative w-96 flex-shrink-0 flex-grow-0 aspect-square bg-gray-100 shadow-lg rounded-lg p-6 flex flex-col items-center text-center overflow-hidden">
      {/* Picture */}
      <div className="w-1/2 aspect-square flex-shrink-0 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mb-4">
        {dev.picture ? (
          <img
            src={dev.picture}
            alt={dev.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-400 text-sm">Picture</span>
        )}
      </div>

      <h3 className="font-semibold text-gray-700 mb-2">{dev.name}</h3>

      {/* Intro blurb + memory */}
      <p className="text-sm text-gray-600 mb-2">{dev.blurb}</p>
      <p className="text-sm text-gray-500 italic mb-4">{dev.memory}</p>

      {/* Icon row */}
      <div className="flex items-center gap-2 relative">
        <a
          href={dev.linkedin || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7
        rounded-full border border-gray-400 flex items-center justify-center
        text-gray-500 hover:text-blue-600 hover:border-blue-600
        transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={14} />
        </a>

        <a
          href={dev.portfolio || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7
        rounded-full border border-gray-400 flex items-center justify-center
        text-gray-500 hover:text-gray-800 hover:border-gray-800
        transition-colors"
          aria-label="GitHub / Portfolio"
        >
          <FaGithub size={14} />
        </a>

        <a
          href={dev.email ? `mailto:${dev.email}` : "#"}
          className="w-7 h-7 rounded-full border border-gray-400 flex items-center
        justify-center text-gray-500 hover:text-gray-800 hover:border-gray-800
        transition-colors"
          aria-label="Email"
        >
          <FaEnvelope size={14} />
        </a>
        {/* <a
          href={dev.phone ? `tel:${dev.phone}` : "#"}
          className="w-7 h-7 rounded-full border border-gray-400 flex items-center
        justify-center text-gray-500 hover:text-gray-800 hover:border-gray-800
        transition-colors"
          aria-label="Phone"
        >
          <FaPhone size={14} />
        </a> */}
      </div>

      {/* Contact flyout (LinkedIn / Portfolio / Phone / Email) */}
      {showContacts && (
        <div className="mt-3 w-full bg-gray-50 rounded-lg p-3 text-left text-sm text-gray-600 space-y-1">
          <p>LinkedIn: {dev.linkedin || "—"}</p>
          <p>Portfolio / GitHub: {dev.portfolio || "—"}</p>
          <p>Phone #: {dev.phone || "—"}</p>
          <p>Email: {dev.email || "—"}</p>
        </div>
      )}
    </div>
  );
}

function MeetTheDevsPage() {
  return (
    <div className="bg-gray-100 flex flex-col">
      <div className="flex-1 p-5">
        <div className="bg-white shadow-md p-10 rounded-lg w-full">
          <div className="flex flex-wrap justify-center gap-10 max-w-[960px] mx-auto">
            {developers.map((dev) => (
              <DevCard key={dev.id} dev={dev} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetTheDevsPage;
