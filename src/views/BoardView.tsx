import WhatsTopIcon from "@/components/icons/WhatsTopIcon";
import BoardTable from "@/components/sections/BoardTableSection";
import ProfileCard from "@/components/sections/ProfileCardSection";
import RankCard from "@/components/sections/RankCardSection";
import RollingTextSection from "@/components/sections/RollingTextSection";
import Touch from "@/components/sections/Touch";
import { hardCodedData } from "@/data/RankData";
const BoardView = () => {
  return (
    <>
      <section>
        <RollingTextSection />
      </section>

      <section className="flex items-center justify-center mt-6 mb-36">
        <WhatsTopIcon />
      </section>

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-30 p-4">
          <BoardTable data={hardCodedData} />
        </div>
        <div className="w-full md:w-70 p-4">
          <article className="flex flex-col gap-8">
            <ProfileCard />
            <RankCard />
          </article>
        </div>
      </div>

      <section>
        <Touch />
      </section>
    </>
  );
};

export default BoardView;
