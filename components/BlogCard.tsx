"use client";
import { useState } from "react";

interface Lecture {
  id: number;
  title: string;
  description: string;
}

const lectures: Lecture[] = [
  { id: 1, title: "Introduction to Next.js 15", description: "Learn the basics of Next.js 15, its key features, and why it's a popular framework for modern web applications." },
  { id: 2, title: "Next.js 15 Installation", description: "Step-by-step guide to installing Next.js 15 and setting up your development environment." },
  { id: 3, title: "Routing in Next.js 15", description: "Understand the file-based routing system in Next.js 15 and how to create dynamic routes." },
  { id: 4, title: "API Routes in Next.js 15", description: "Learn how to create and use API routes for server-side logic in your Next.js applications." },
  { id: 5, title: "Next.js 15 Layouts", description: "Explore the new layouts feature in Next.js 15 and how to create nested layouts." },
  { id: 6, title: "Image Optimization", description: "Understand the built-in image optimization capabilities in Next.js 15." },
  { id: 7, title: "Server Actions", description: "Learn about Server Actions, a new feature in Next.js 15 to handle server-side logic directly in your components." },
  { id: 8, title: "Middleware in Next.js 15", description: "Learn how to use middleware to handle requests and responses globally in Next.js 15." },
  { id: 9, title: "Deploying Next.js 15 Apps", description: "A guide to deploying your Next.js 15 application to platforms like Vercel or other hosting services." },
  { id: 10, title: "Next.js 15 Best Practices", description: "Tips and tricks to make the most out of your Next.js 15 projects." },
];

export default function BlogCard() {
  const [selectedLecture, setSelectedLecture] = useState<Lecture | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  return (
    <div className="flex h-screen">
      <div
        className={`fixed z-40 top-0 left-0 w-64 bg-gray-800 text-white h-full p-4 overflow-y-auto transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300`}>
        <h2 className="text-xl font-bold mb-4">Lectures</h2>
        <ul>
          {lectures.map((lecture) => (
            <li key={lecture.id} className="mb-4">
              <h3 className="font-semibold">{lecture.title}</h3>
              <button
                onClick={() => setSelectedLecture(lecture)}
                className="mt-2 text-sm bg-[#3b5c30] hover:bg-[#769b69] px-3 py-1 rounded">
                Read More
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-[2%] left-[65%] z-50 bg-gray-800 text-white p-2 rounded shadow-md md:hidden">
        {isSidebarOpen ? "Close" : "Menu"}
      </button>

      <div className="flex-1 p-6 md:ml-10">
        {selectedLecture ? (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#85e459]">{selectedLecture.title}</h2>
            <p>{selectedLecture.description}</p>
          </div>
        ) : (
          <div className="text-gray-500 text-center">
            <p className="text-xl">Select a lecture to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}
