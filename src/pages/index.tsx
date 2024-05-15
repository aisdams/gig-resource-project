import Navbar from "@/components/layout/Navbar";
import Header from "@/components/layout/Header";
import Image from "next/image";
import TenBooked from "@/components/home/ten-booked";
import FindVendor from "@/components/home/find_vendor";
import WhyGigresource from "@/components/home/why_gigresource";
import VendorImage from '/public/img/vendor_home.png'
import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/footer";
import Affiliate from "@/components/home/affiliate";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Header />
      <TenBooked/>
      <FindVendor/>
      <WhyGigresource/>
      <div className="grid lg:grid-cols-2 items-center mt-10">
        <div className="lg:ml-20 ml-5">
          <h1 className="text-4xl font-bold mb-3">FOR VENDORS</h1>
          <h3 className="">Are you a service provider who spends more time project-searching and less time earning? Stop handing out flyers. Bring out your business to the world and reach more clients. Create your profile today!</h3>
          <Button className="px-9 bg-[#FDA50F] textw-white mt-5">SignUp</Button>
        </div>
        <Image src={VendorImage} alt="" className="lg:h-[80vh] h-40 mt-10 lg:mt-0 object-cover object-top"/>
      </div>
      <Affiliate/>
      <Footer/>
    </main>
  );
}
