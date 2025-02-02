import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link href={"/"} className="text-gray-400 font-bold border-blue-500">
        GTCoding
      </Link>
      <Link href={"/addTopic"} className="bg-blue-500 text-white p-2">
        Add Topic
      </Link>
    </nav>
  );
};

export default Navbar;
