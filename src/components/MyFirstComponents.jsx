export const MyFirstComponents = () => {
  const name = "Camilo Ramirez Martinez";

  const github_profile = "https://github.com/CamiloBETA6";

  return (
    <>
      <div>MyFirstComponents</div>
      <div className="container bg-primary">
        <h1>Temas de React</h1>
        <ul className="list-padre">
          <li>Componentes</li>
          <li>Eventos</li>
          <li>Estados Hooks</li>
          <li>Props</li>
        </ul>
      </div>
      <div className="container bg-warning">
        <h1>Temas de React</h1>
        <p>Datos de estudiante: {name}</p>
        <p>
          My github is,
          <a className="text-black" href={github_profile}>
            CamiloBETA6
          </a>
        </p>
      </div>
    </>
  );
};
