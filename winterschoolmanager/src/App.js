import Table from "./components/Table";

function App() {
  console.log(process.env.REACT_APP_FIREBASE_API_KEY);
  return (
    <>
      <div className="App">매니저 모드</div>
      <div>{}</div>
      <Table></Table>
    </>
  );
}

export default App;
