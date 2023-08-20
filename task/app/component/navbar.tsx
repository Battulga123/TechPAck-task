import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-black flex items-center justify-between px-20">
      <Link href="/" className="">
        <Image
          src="/techpack.jpg"
          alt="logo"
          width={130}
          height={130}
          priority
        />
      </Link>
      <button className="rounded-3xl bg-indigo-600 text-sm  text-white shadow-md hover:bg-indigo-500 h-fit mr-5 px-4 py-2" >
        <Link href="/UserPage">Нэвтрэх</Link>
      </button>
    </div>
  );
};

export default Navbar;
