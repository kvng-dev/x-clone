import Link from "next/link";
import Image from "./Image";

const Recommendations = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <Image
              path="general/avatar.png"
              alt="avatar"
              w={100}
              h={100}
              tr={true}
            />
          </div>
          <div className="">
            <h1 className="text-md font-bold">John Doe</h1>
            <span className="text-textGray text-sm">@johndoe</span>
          </div>
        </div>

        <button className="py-1 px-4 font-semibold bg-white text-black text-sm rounded-full">
          Follow
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <Image
              path="general/avatar.png"
              alt="avatar"
              w={100}
              h={100}
              tr={true}
            />
          </div>
          <div className="">
            <h1 className="text-md font-bold">John Doe</h1>
            <span className="text-textGray text-sm">@johndoe</span>
          </div>
        </div>

        <button className="py-1 px-4 font-semibold bg-white text-black text-sm rounded-full">
          Follow
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <Image
              path="general/avatar.png"
              alt="avatar"
              w={100}
              h={100}
              tr={true}
            />
          </div>
          <div className="">
            <h1 className="text-md font-bold">John Doe</h1>
            <span className="text-textGray text-sm">@johndoe</span>
          </div>
        </div>

        <button className="py-1 px-4 font-semibold bg-white text-black text-sm rounded-full">
          Follow
        </button>
      </div>
      <Link href="/" className="text-iconBlue text-sm">
        Show more
      </Link>
    </div>
  );
};
export default Recommendations;
