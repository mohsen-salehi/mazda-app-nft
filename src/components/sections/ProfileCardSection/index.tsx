import MedalIcon from "@/components/icons/MedalIcon";
import YoutubeIcon from "@/components/icons/YoutubeIcon";
import Image from "next/image";
import styles from "./style.module.css";

const Index = () => {
  return (
    <div className="border-sky-800 border-[3] rounded-[20px] bg-blue-800 flex flex-row gap-[17px] p-[30px] content-center">
      <div>
        <Image
          className="rounded-[50%] border-3 border-white-500"
          src="/img/profile/avatar2.png"
          alt="profile image"
          width={78}
          height={78}
        />
      </div>
      <div className="flex flex-col">
        <p className={styles.user_name}>James David</p>
        <p className="flex flex-row content-center items-center gap-[5px]">
          <MedalIcon />
          <span className={styles.minting}>MINT Points: 2031 Pt</span>
        </p>

        <p className="flex flex-row content-center items-center gap-[5px]">
          <YoutubeIcon />
          <span className={styles.minting}>Uploaded URL’s: 13</span>
        </p>
      </div>
    </div>
  );
};

export default Index;
