export function HourCalculation() {
  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <h3 className="title is-3 has-text-centered">
              Resultado do cálculo
            </h3>
            <p className="mb-4">
              Após adicionar todas as informações e custos, clique em Calcular
              hora técnica. A calculadora vai mostrar o valor ideal da sua hora
              de trabalho, assim você saberá quanto cobrar para cobrir seus
              gastos e garantir o lucro desejado.
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
  );
}
