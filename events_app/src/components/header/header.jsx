import Image from "next/image";
import Link from "next/link";

export const MyHeader = () => {
  return (
    <header>
      <div>
      <div className="topNav">
        <Image alt="logo" src={"/images/logo_black.png"} width={50} height={50} />
        <nav>
          <ul>
            <li>
              <Link href="/"> Home </Link>
            </li>
            <li>
              <Link href="/events"> Events </Link>
            </li>
            <li>
              <Link href="/about_us"> About Us </Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className="title"> Crafting Timeless Memories Together </p>
      </div>
      
    </header>
  );
};
