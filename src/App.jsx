export default function App() {
  return (
    <div className="app">
      <img
        className="imagem"
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png"
        alt="react logo"
      ></img>
      <h1>React</h1>
      <p>Abiblioteca para interfaces de usuario web e nativas</p>
      <div className="container">
        <div>
          <a
            className="btn btn-light"
            target="_blank"
            href="https://pt-br.legacy.reactjs.org/"
          >
            Aprenda React
          </a>
        </div>
        <div>
          <a
            className="btn btn-light"
            target="_blank"
            href="https://pt-br.react.dev/reference/react/apis"
          >
            Referência da API
          </a>
        </div>
      </div>

      <hr />
      <h2>Crie interfaces de usuario de componentes</h2>
      <p>
        React permite que você construa interfaces de usuario a partir de
        pedaços individuais chamados componentes.
      </p>
      <hr />
      <h2>Escreva componentes com código e marcação</h2>
      <p>
        Componentes React são funções Javascript. A sintaxe de marcação é
        chamada de JSX. É uma extensão da sintaxe JavaScript popularizada pelo
        React
      </p>
      <ul>
        <li>Uso dos dados dinamicos no JSX</li>
        <li>Criação de novos componentes</li>
        <li>Estilização de componentes</li>
        <li>Reutilização de componentes</li>
        <li>Uso de props e children</li>
        <li>Uso de eventos do Javascript</li>
      </ul>
    </div>
  );
}
