export function ProjectValue() {
  return (
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
              outras despesas, e também o prazo total. A calculadora usará esses
              dados para mostrar o preço final a ser cobrado.
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
                <input className="input" type="number" placeholder="Ex: 175" />
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
  );
}
