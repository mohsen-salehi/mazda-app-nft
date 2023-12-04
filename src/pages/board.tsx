import BoardView from "@/views/BoardView";
import Head from "next/head";

const Board = () => {
  return (
    <div>
      <Head>
        <title>Board Chart</title>
      </Head>
      <BoardView />
    </div>
  );
};

export default Board;
