import Feed from "@/components/Feed";
import Image from "@/components/Image";
import Share from "@/components/Share";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="">
      <div className="flex justify-between text-textGray font-bold border-b-[1px] border-borderGray">
        <Link
          className="pb-3 flex items-center border-b-4 border-iconBlue"
          href="/"
        >
          For you
        </Link>
        <Link className="pb-3 md:flex items-center" href="/">
          Following
        </Link>
        <Link className="pb-3 md:flex items-center hidden" href="/">
          Following
        </Link>
        <Link className="pb-3 md:flex items-center hidden" href="/">
          Following
        </Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
};

export default Homepage;
