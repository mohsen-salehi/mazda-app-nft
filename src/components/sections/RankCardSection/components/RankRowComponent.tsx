import Link from "next/link";
import styles from "../style.module.css";
import ProgressbarComponent from "./ProgressbarComponent";

const RankRowComponent = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-[17px]">
          <p className="text-white">1</p>
          <Link href={"/"} passHref className={styles.video_rank_title}>
            Like 5 Video
          </Link>
        </div>
        <span className={styles.pt_span}>3 Pt</span>
      </div>
      <div className="pt-[28px]">
        <ProgressbarComponent progress={40} />
      </div>
    </div>
  );
};

export default RankRowComponent;
