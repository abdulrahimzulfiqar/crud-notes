import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link href={"/"} className="text-white font-bold border-blue-500">
        GTCoding
      </Link>
      <Link href={"/addTopic"} className="bg-white text-blue-800 p-2">
        Add Topic
      </Link>
    </nav>
  );
};

export default Navbar;
