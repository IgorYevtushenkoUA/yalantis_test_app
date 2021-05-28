import Main from "./app/pages/main/Main";
import { useState, useEffect } from "react";
import Loading from "./app/pages/loading/Loading";
import API from "./app/utils/API";

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/").then(({ data }) => {
      setEmployees(data);
      setLoading(false);
    });
  }, []);

  return loading ? <Loading /> : <Main employees={employees} />;
}

export default App;
