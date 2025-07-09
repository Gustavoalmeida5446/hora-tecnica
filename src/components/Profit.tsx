export function Profit() {
  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <h3 className="title is-3 has-text-centered">Margem de lucro</h3>
            <p className="mb-4">
              A margem de lucro é o valor que você adiciona sobre os seus custos
              para ter ganho real. Sem ela, você só cobre despesas. O ideal é
              aplicar entre 20% e 40%, sendo 30% um bom ponto de partida.
              Informe a porcentagem de lucro que deseja adicionar sobre seus
              custos. Com base nisso, a calculadora mostrará quanto você deve
              cobrar por hora para cobrir os custos e obter o lucro desejado.
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
  );
}
