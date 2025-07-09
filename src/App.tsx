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

      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <h3 className="title is-3 has-text-centered">Custos fixos</h3>
              <p className="mb-4">
                Adicione aqui os seus custos fixos mensais. Custos fixos são
                despesas que você tem todo mês, independentemente da quantidade
                de trabalho ou projetos realizados. Eles não variam com a sua
                produção. Exemplos comuns de custos fixos incluem: aluguel do
                escritório ou da casa, conta de internet, energia elétrica,
                assinaturas de softwares como Adobe ou Figma, e serviços como
                contador ou MEI.
              </p>
              <div className="columns is-vcentered is-multiline">
                <div className="column is-half">
                  <label className="label">Descrição do custo</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Ex: Aluguel"
                  />
                </div>
                <div className="column is-half">
                  <label className="label">Valor mensal (R$)</label>
                  <input
                    className="input"
                    type="number"
                    placeholder="Ex: 1200"
                  />
                </div>
                <div className="column">
                  <button className="button is-link ">
                    Adicionar custo fixo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <h3 className="title is-3 has-text-centered">Salário desejado</h3>
              <p className="mb-4">
                Informe quanto você deseja receber mensalmente como remuneração
                pelo seu trabalho. Esse valor será somado aos custos fixos para
                calcular o custo total mensal do seu trabalho. Este é o valor
                que você quer “tirar para você” no final do mês.
              </p>

              <div className="column">
                <label className="label">Salário desejado (R$)</label>
                <input className="input" type="number" placeholder="Ex: 3000" />
              </div>
              <div className="column">
                <button className="button is-link ">
                  Definir salário desejado
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <h3 className="title is-3 has-text-centered">
                Carga horária disponível
              </h3>
              <p className="mb-4">
                Informe quantas horas você trabalha por dia e quantos dias por
                semana costuma trabalhar. A calculadora usará esses dados para
                estimar sua carga horária mensal, considerando uma média de 4,3
                semanas por mês (valor aproximado da divisão das 52 semanas do
                ano pelos 12 meses.)
              </p>
              <div className="columns is-vcentered is-multiline">
                <div className="column is-half">
                  <label className="label">Horas por dia</label>
                  <input className="input" type="number" placeholder="Ex: 6" />
                </div>
                <div className="column is-half">
                  <label className="label">Dias por semana</label>
                  <input className="input" type="number" placeholder="Ex: 8" />
                </div>
                <div className="column">
                  <button className="button is-link ">
                    Definir carga horária
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <h3 className="title is-3 has-text-centered">Margem de lucro</h3>
              <p className="mb-4">
                A margem de lucro é o valor que você adiciona sobre os seus
                custos para ter ganho real. Sem ela, você só cobre despesas. O
                ideal é aplicar entre 20% e 40%, sendo 30% um bom ponto de
                partida. Informe a porcentagem de lucro que deseja adicionar
                sobre seus custos. Com base nisso, a calculadora mostrará quanto
                você deve cobrar por hora para cobrir os custos e obter o lucro
                desejado.
              </p>

              <div className="column">
                <label className="label">Margem de lucro (%)</label>
                <input className="input" type="number" placeholder="Ex: 30" />
              </div>
              <div className="column">
                <button className="button is-link ">
                  Definir margem de lucro
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <h3 className="title is-3 has-text-centered">
                Resultado do cálculo
              </h3>
              <p className="mb-4">
                Após adicionar todas as informações e custos, clique em Calcular
                hora técnica. A calculadora vai mostrar o valor ideal da sua
                hora de trabalho, assim você saberá quanto cobrar para cobrir
                seus gastos e garantir o lucro desejado.
              </p>

              <div className="column">
                <button className="button is-primary is-large mt-5 is-fullwidth">
                  Calcular hora técnica
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <h3 className="title is-3 has-text-centered">
                Ajuste para projeto específico
              </h3>
              <p className="mb-4">
                Agora que você já sabe o valor da sua hora técnica, informe os
                custos variáveis do projeto, como materiais, deslocamento ou
                outras despesas, e também o prazo total. A calculadora usará
                esses dados para mostrar o preço final a ser cobrado.
              </p>

              <div className="column">
                <label className="label">Prazo do projeto (em dias)</label>
                <input className="input" type="number" placeholder="Ex: 15" />
              </div>
              <div className="column">
                <button className="button is-link mb-4">
                  Definir prazo do projeto
                </button>
              </div>

              <div className="columns is-vcentered is-multiline">
                <div className="column is-half">
                  <label className="label">Descrição do custo variável</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Ex: Pacote de software"
                  />
                </div>
                <div className="column is-half">
                  <label className="label">Valor (R$)</label>
                  <input
                    className="input"
                    type="number"
                    placeholder="Ex: 175"
                  />
                </div>
                <div className="column">
                  <button className="button is-link">
                    Adicionar custo variável
                  </button>
                </div>
              </div>
              <div className="column">
                <button className="button is-primary is-large mt-5 is-fullwidth">
                  Calcular valor do projeto
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
