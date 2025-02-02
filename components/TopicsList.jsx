import { HiLink, HiPencilAlt } from "react-icons/hi";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";

const TopicsList = () => {
  return (
    <>
      <div className="p-4 border border-blue-900 my-3 flex justify-between gap-5 items-start">
        <div>
          <h2 className="font-bold text-2xl">Topic Title</h2>
          <div>Topic Description</div>
        </div>
        <div className="flex gap-2">
          <RemoveBtn />
          <Link href={"/editTopic/123"}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopicsList;
