import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/cards");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <header className="flex items-center justify-between bg-black rounded-t-md text-white p-4 px-14">
          <div className="flex items-center space-x-4">
            <span className="text-lg font-bold">Abstract</span>
            <span className="text-lg">| Help Center</span>
          </div>
          <div className="pr-2 md:pr-16">
            <button className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-[#1a1a1a] px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Submit a request
            </button>
          </div>
        </header>
        <main className="flex flex-col items-center ">
          <div className="flex flex-col items-center w-full py-12 bg-[#e6e6fa]">
            <h1 className="text-5xl font-semibold mb-8">How can we help?</h1>
            <div className="relative w-full max-w-md mb-16">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 pr-12 py-2 rounded-[5px] border-[1px] border-black border-input bg-background text-foreground shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <button className="inline-flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 absolute right-2 top-1">
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 py-16 px-24">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="rounded-xl bg-[#f4f6f8] shadow-sm min-w-72"
              >
                <h3 className="text-lg font-bold px-4 pt-3">{item.title}</h3>
                <hr className="mt-2" />
                <p className="font-normal px-4 pt-1 pb-4">{item.description}</p>
              </div>
            ))}
          </div>
        </main>
        <footer class="bg-black text-white py-8 px-16">
          <div class="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <h3 class="font-bold mb-4">Abstract</h3>
              <ul>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white">
                    Branches
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-bold mb-4">Resources</h3>
              <ul>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white">
                    Release Notes
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white">
                    Status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-bold mb-4">Community</h3>
              <ul>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white">
                    Dribbble
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white">
                    Podcast
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-bold mb-4">Company</h3>
              <ul>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white">
                    Legal
                  </a>
                </li>
              </ul>
              <div class="mt-4">
                <h3 class="font-bold mb-2">Contact Us</h3>
                <p>
                  <a
                    href="mailto:info@abstract.com"
                    class="text-gray-400 hover:text-white"
                  >
                    info@abstract.com
                  </a>
                </p>
              </div>
            </div>
            <div class="md:col-span-1 flex flex-col justify-end items-end h-full">
              <p class="text-gray-400 text-left">
                &copy; Copyright {new Date().getFullYear()}
                <br />
                Abstract Studio Design, Inc.
                <br />
                All rights reserved
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
