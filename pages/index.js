import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import ReadMore from "@/components/home/readMore";
import WhyAbound from "@/components/home/whyAbound";
import MyLoan from "@/components/home/myLoan";
import Testimonials from "@/components/home/testimonials";
import Whoweare from "@/components/home/whoweare";
import Footer from "@/components/footer";
import MyQuote from "@/components/home/myQuote";
import LoanPage from "@/components/home/loanPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={``}>
      <Navbar />
      <ReadMore/>
      <LoanPage/>
      <WhyAbound/>
      <MyLoan/>
      <Testimonials/>
      <Whoweare/>
      <Footer/>
    </main>
  );
}
