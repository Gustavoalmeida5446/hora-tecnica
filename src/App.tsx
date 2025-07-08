import { Custos } from "./components/FixedCosts";
import { Profit } from "./components/Profit";
import { Workload } from "./components/Workload";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <h1 className="title is-1">Calculadora de Hora Técnica</h1>
          <p>
            Esta calculadora ajuda você a descobrir quanto deve cobrar por hora
            de trabalho, levando em conta seus custos fixos mensais, carga
            horária disponível e objetivo de renda.
          </p>
        </div>
      </section>
      {/* <div className="width"> */}
      <section className="section">
        <h3 className="title is-3">Custos fixos</h3>
        <p className="mb-4">
          Adicione aqui os seus custos fixos mensais. Custos fixos são despesas
          que você tem todo mês, independentemente da quantidade de trabalho ou
          projetos realizados. Eles não variam com a sua produção. Exemplos
          comuns de custos fixos incluem: aluguel do escritório ou da casa,
          conta de internet, energia elétrica, assinaturas de softwares como
          Adobe ou Figma, e serviços como contador ou MEI.
        </p>
        <Custos />
      </section>
      <section className="section">
        <h3 className="title is-3">Carga horária disponível</h3>
        <p className="mb-4">
          Informe quantas horas você trabalha por dia e quantos dias por semana
          costuma trabalhar. A calculadora usará esses dados para estimar sua
          carga horária mensal, considerando uma média de 4,3 semanas por mês
          (valor aproximado da divisão das 52 semanas do ano pelos 12 meses.)
        </p>
        <Workload />
      </section>
      <section className="section">
        <h3 className="title is-3">Lucro e hora técnica</h3>
        <p className="mb-4">
          Informe a porcentagem de lucro que deseja adicionar sobre seus custos.
          Com base nisso, a calculadora mostrará quanto você deve cobrar por
          hora para cobrir os custos e obter o lucro desejado.
        </p>
        <Profit />
      </section>
      {/* </div> */}
    </div>
  );
}

export default App;
