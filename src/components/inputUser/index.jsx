import axios from "axios";
import { useState } from "react";
import InputRequest from "../inputRequest";
import "antd/dist/antd.css";
import "./style.css";
import { Button } from "antd";
import { Container, Main } from "../card/style";
const InputUser = () => {
  const [inputValue, setInputValue] = useState([]);
  const [repoName, setRepoName] = useState([]);
  const [errTrue, setErrTrue] = useState(false);
  const req = () => {
    axios
      .get(`https://api.github.com/repos/${inputValue}`)
      .then((response) => {
        setRepoName([...repoName, response.data]);
        setErrTrue(false);
      })
      .catch((err) => {
        console.log(err);
        setErrTrue(true);
      });
  };
  return (
    <Main>
      <h1>Pesquise Repositórios no GitHub</h1>
      <Container>
        <input
          className={errTrue ? "borderRed" : "borderNormal"}
          placeholder={errTrue && "Repositório não encontrado"}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="default" onClick={req}>
          Pesquisar
        </Button>
      </Container>
      <InputRequest repoName={repoName} />
    </Main>
  );
};
export default InputUser;
