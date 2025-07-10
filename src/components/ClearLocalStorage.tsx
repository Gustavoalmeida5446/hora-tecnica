import { useState, useEffect } from "react";

type Props = {
  setStorageCleared: React.Dispatch<React.SetStateAction<boolean>>;
};

export function ClearLocalStorage({ setStorageCleared }: Props) {
  const [closeNotification, setCloseNotification] = useState(true);
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    if (localStorage.length > 0) {
      setHasData(true);
    }
  }, []);

  function handleClear(e: React.FormEvent) {
    e.preventDefault();
    localStorage.clear();
    setCloseNotification(false);
    setStorageCleared(true);
  }

  return (
    <>
      {closeNotification && hasData && (
        <div className="section">
          <div className="columns mb-0">
            <div className="column is-half is-offset-one-quarter">
              <div className="notification mt-4">
                <button
                  className="delete"
                  aria-label="Fechar aviso"
                  onClick={() => setCloseNotification(false)}
                ></button>
                <p>
                  Esta calculadora armazena no seu navegador as informações
                  inseridas, como salário desejado, custos fixos, carga horária
                  e dados do projeto. Elas são salvas para que você não precise
                  preenchê-las novamente ao voltar ao site.
                </p>
                <p>Para apagar tudo e recomeçar, clique no botão abaixo.</p>

                <form>
                  <div className="column">
                    <button className="button is-danger" onClick={handleClear}>
                      Limpar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
