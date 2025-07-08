import "./Style.css";

function App() {
  return (
    <>
      <div className="block">
        <div className="section hero is-primary">
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
        <div className="block">
          <div className="section">
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
              <label className="label">Descrição do custo</label>
              <input className="input" type="text" placeholder="Ex: Aluguel" />

              <label className="label mt-3">Valor mensal (R$)</label>
              <input className="input" type="number" placeholder="Ex: 1200" />

              <button className="button is-link mt-4">
                Adicionar custo fixo
              </button>
            </div>
          </div>

          <div className="section">
            <div className="column is-half is-offset-one-quarter">
              <h3 className="title is-3 has-text-centered">Salário desejado</h3>
              <p className="mb-4">
                Salário Desejado Informe quanto você deseja receber mensalmente
                como remuneração pelo seu trabalho. Esse valor será somado aos
                custos fixos para calcular o custo total mensal do seu trabalho.
                Este é o valor que você quer “tirar para você” no final do mês.
              </p>
              <label className="label">Salário desejado (R$)</label>
              <input className="input" type="number" placeholder="Ex: 3000" />

              <button className="button is-link mt-4">
                Definir salário desejado
              </button>
            </div>
          </div>

          <div className="section">
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
              <label className="label">Horas por dia</label>
              <input className="input" type="number" placeholder="Ex: 6" />

              <label className="label mt-3">Dias por semana</label>
              <input className="input" type="number" placeholder="Ex: 5" />

              <button className="button is-link mt-4">
                Definir carga horária
              </button>
            </div>
          </div>

          <div className="section">
            <div className="column is-half is-offset-one-quarter">
              <h3 className="title is-3 has-text-centered">Margem de lucro </h3>
              <p className="mb-4">
                A margem de lucro é o valor que você adiciona sobre os seus
                custos para ter ganho real. Sem ela, você só cobre despesas. O
                ideal é aplicar entre 20% e 40%, sendo 30% um bom ponto de
                partida. Informe a porcentagem de lucro que deseja adicionar
                sobre seus custos. Com base nisso, a calculadora mostrará quanto
                você deve cobrar por hora para cobrir os custos e obter o lucro
                desejado.
              </p>
              <label className="label">Margem de lucro (%)</label>
              <input className="input" type="number" placeholder="Ex: 30" />

              <button className="button is-link mt-4">
                Definir margem de lucro
              </button>
            </div>
          </div>

          <div className="section">
            <div className="column is-half is-offset-one-quarter">
              <h3 className="title is-3 has-text-centered">
                Resultado do cálculo
              </h3>
              <p className="mb-4">
                Após adicionar todas as informações e custos, clique em Calcular
                hora técnica. A calculadora mostrará o valor ideal da sua hora
                de trabalho, considerando seus custos fixos, salário desejado,
                carga horária, margem de lucro e custos variáveis do projeto.
                Assim, você saberá exatamente quanto cobrar para garantir
                cobertura dos seus gastos e obter lucro adequado.
              </p>

              <button className="button is-primary is-large mt-5 is-fullwidth">
                Calcular hora técnica
              </button>
            </div>
          </div>

          <div className="section">
            <div className="column is-half is-offset-one-quarter">
              <h3 className="title is-3 has-text-centered">
                Ajuste para projeto específico
              </h3>
              <p className="mb-4">
                Agora que você já sabe o valor da sua hora técnica, use esta
                seção para informar os custos variáveis do projeto, como
                materiais, deslocamento ou outras despesas extras, além do prazo
                total do trabalho. Com esses dados, a calculadora poderá estimar
                o preço final do projeto, garantindo que todos os custos sejam
                cobertos e o lucro mantido.
              </p>
              <p className="mb-4">
                <label className="label mt-3">Prazo do projeto (em dias)</label>
                <input className="input" type="number" placeholder="Ex: 15" />
                <button className="button is-link mt-4">
                  Definir prazo do projeto
                </button>
              </p>
              <p>
                <label className="label">Descrição do custo variável</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Ex: Transporte"
                />

                <label className="label mt-3">
                  Valor do custo variável (R$)
                </label>
                <input className="input" type="number" placeholder="Ex: 150" />

                <button className="button is-link mt-4">
                  Adicionar custo variável
                </button>
              </p>
              <p>
                <button className="button is-primary is-large mt-5 is-fullwidth">
                  Calcular valor total do projeto
                </button>
              </p>
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
      </div>
    </>
  );
}

export default App;
