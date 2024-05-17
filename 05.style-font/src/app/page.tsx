import dogPic from "../../public/dog-pic.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div>
        <Image src={dogPic} alt=""></Image>
        <Image src="/dog-pic.jpg" alt="" width={1920} height={1279}></Image>
    </div>
  );
}
