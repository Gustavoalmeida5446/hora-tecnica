export function Salary() {
  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <h3 className="title is-3 has-text-centered">Salário desejado</h3>
            <p className="mb-4">
              Informe quanto você deseja receber mensalmente como remuneração
              pelo seu trabalho. Esse valor será somado aos custos fixos para
              calcular o custo total mensal do seu trabalho. Este é o valor que
              você quer “tirar para você” no final do mês.
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
  );
}
