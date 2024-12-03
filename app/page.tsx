import Footer from '@/components/Footer';
import 'boxicons/css/boxicons.min.css';

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen px-4 ">
      <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-4 text-center">
        Introduction to Next.js
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-6 text-center">
        Developed by Muhammad Samad
      </p>
      <a
        href="/blog"
        className="flex items-center text-lg sm:text-xl text-white bg-blue-700 hover:bg-blue-800 px-6 py-2 rounded-md shadow-md transition duration-300"
      >
        Learn Blog 
        <i className="bx bxs-right-arrow-alt ml-2"></i>
      </a>
      <br />
    </div>
    <Footer/>
    </>
  );
}
