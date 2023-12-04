import RankRowComponent from "./components/RankRowComponent";

const Index = () => {
  return (
    <div className="border-[3px] border-sky-800 p-[30px] rounded-[20px] bg-transparent flex flex-col gap-[30px] content-center">
      <RankRowComponent />
      <RankRowComponent />
      <RankRowComponent />
    </div>
  );
};

export default Index;
