import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import TestContext from "../contexts/TestContext";
import { getTests } from "../services/repoProvas";
import { Button } from "../styles/sharedStyles";

export default function Home() {
  const navigate = useNavigate();
  const { tests, setTests } = useContext(TestContext);

  const handleTests = () => {
    getTests().then((res) => {
      setTests(res.data);
      navigate("/text-form");
    });
  };

  return (
    <div>
      <>
        <Button onClick={handleTests}>Visualizar prova</Button>
        <Link to="/test-creation">
          <Button>Compartilhar prova</Button>
        </Link>
      </>
    </div>
  );
}
