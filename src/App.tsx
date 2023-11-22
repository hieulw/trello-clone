import AppBar from "@/components/AppBar";
import "@mantine/core/styles.css";
import BoardBar from "./pages/Boards/BoardBar";
import BoardContent from "./pages/Boards/BoardContent";

function App() {
  return (
    <>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </>
  );
}

export default App;
