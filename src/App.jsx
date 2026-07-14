import MeetTheDevsPage from "./DevsPage.jsx";

export default function App() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="w-full h-25 shadow-md flex items-center px-6 z-10 bg-white">
        <h1
          className="text-5xl rounded-xl p-4 select-none text-gray-700"
          style={{ fontFamily: "Monoton, cursive" }}
        >
          Onion
        </h1>
        <h1
          className="hidden sm:flex ml-2 text-xl font-bold text-center items-center text-gray-700"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Vancouver's Interactive Food Access Planning Platform | About Us
        </h1>

        <a
          href="https://two800-202610-bby02.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto px-4 py-2 rounded-lg border border-gray-400 text-gray-700 font-semibold hover:bg-gray-100 transition-colors"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          View the App
        </a>
      </div>
      <MeetTheDevsPage page="devs" setPage={() => {}} />
    </div>
  );
}
