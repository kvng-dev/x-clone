import Image from "@/components/Image";
import Link from "next/link";

const UserPage = () => {
  return (
    <div className="">
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-">
        <Link href="/">
          <Image path="icons/back.svg" alt="Back" w={24} h={24} />
          <h1>Lama Dev</h1>
        </Link>
      </div>
    </div>
  );
};
export default UserPage;
