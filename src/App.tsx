import board from "@/apis/trello-data.json";
import AppBar from "@/components/AppBar";
import BoardBar from "./pages/Boards/BoardBar";
import BoardContent from "./pages/Boards/BoardContent";

function App() {
  return (
    <>
      <AppBar />
      <BoardBar members={board.members} boardName={board.name} />
      <BoardContent
        columns={board.lists}
        cards={board.cards}
        members={board.members}
      />
    </>
  );
}

export default App;
