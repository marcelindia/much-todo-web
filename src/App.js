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
          backgroundColor: "teal",
          fontSize: 30,
        }}
      >
        <h1
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          Much ToDo
        </h1>
      </Layout.Header>
      <Layout.Content style={{ padding: "0 50px", marginTop: 64 }}>
        <Main />
      </Layout.Content>
      <Layout.Footer style={{ textAlign: "center" }}>
        &copy; 2022, Diana Marcelin
      </Layout.Footer>
    </Layout>
  );
}

export default App;
