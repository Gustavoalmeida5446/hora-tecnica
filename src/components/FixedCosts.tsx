export function FixedCosts() {
  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <h3 className="title is-3 has-text-centered">Custos fixos</h3>
            <p className="mb-4">
              Adicione aqui os seus custos fixos mensais. Custos fixos são
              despesas que você tem todo mês, independentemente da quantidade de
              trabalho ou projetos realizados. Eles não variam com a sua
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
                <input className="input" type="number" placeholder="Ex: 1200" />
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
  );
}
