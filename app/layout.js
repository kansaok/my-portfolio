import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Ukan Saokani - Software Developer",
  description:
    "This is the portfolio of Ukan Saokani. a passionate software engineer with a strong drive in both my personal and professional life. Since 2016, I've been deeply involved in backend development, recognized as a quick learner who is always eager to explore new technologies and solve complex problems. I enjoy a wide range of application development, with core skills in various languages and frameworks, including Laravel, Django, Golang, and Node.js. Beyond backend, I also have experience in frontend technologies such as Angular, React, and Vue.js, along with expertise in database management using MySQL, PostgreSQL, and MongoDB, giving me a comprehensive understanding of how all parts of an application work together seamlessly. While I'm highly comfortable working with these languages and frameworks, my primary focus is on ensuring that the applications I build are secure, scalable, and reliable. I'm always open to opportunities that align with my skills and interests, particularly in creating robust and efficient backend solutions. If you're seeking a dedicated professional who is committed to delivering excellence in every project, I'm ready to assist you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
