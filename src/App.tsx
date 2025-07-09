import { FixedCosts } from "./components/FixedCosts";
import { HourCalculation } from "./components/HourCalculation";
import { Profit } from "./components/Profit";
import { ProjectValue } from "./components/ProjectValue";
import { Salary } from "./components/Salary";
import { Workload } from "./components/Workload";
import "./Style.css";

function App() {
  return (
    <>
      <div className="section hero is-primary">
        <div className="hero-body">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <h3 className="title is-1 has-text-centered">
                Calculadora de Hora Técnica
              </h3>
              <p className="mb-4">
                Esta calculadora ajuda você a descobrir quanto deve cobrar por
                hora de trabalho, levando em conta seus custos fixos mensais,
                carga horária disponível e objetivo de renda.
              </p>
            </div>
          </div>
        </div>
      </div>

      <FixedCosts />

      <Salary />

      <Workload />

      <Profit />

      <HourCalculation />

      <ProjectValue />

      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Desenvolvido por Gustavo Almeida. Veja o código no meu{" "}
            <a
              href="https://github.com/gustavoalmeida5446"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
