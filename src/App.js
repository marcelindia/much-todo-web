import { Layout } from "antd";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <Layout>
      <Layout.Header
        style={{
          position: "fixed",
          zIndex: 10,
          width: "100%",
          color: "white",
          textAlign: "center",
          backgroundColor: "rgb(61, 143, 71)",
          fontSize: 30,
        }}
      >
        <h1
          style={{
            color: "rgb(189, 234, 235)",
            fontWeight: "bold",
          }}
        >
          Much ToDo
        </h1>
      </Layout.Header>
      <Layout.Content
        className="background-img"
        style={{ padding: "0 400px", marginTop: 64 }}
      >
        <Main />
      </Layout.Content>
      <Layout.Footer style={{ color: "darksalmon", textAlign: "center" }}>
        &copy; 2022, Diana Marcelin
      </Layout.Footer>
    </Layout>
  );
}

export default App;
