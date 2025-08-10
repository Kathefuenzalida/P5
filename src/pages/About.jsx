export default function About() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Acerca de esta aplicación</h2>
      <p>
        Esta aplicación muestra tasas de cambio en tiempo real utilizando la API pública de{' '}
        <a href="https://open.er-api.com/" target="_blank" rel="noopener noreferrer">
          open.er-api.com
        </a>.
      </p>
      <p>
        El objetivo es permitir a los usuarios consultar el valor de diferentes divisas de forma rápida y sencilla, sin necesidad de API key.
      </p>
      <p>
        Proyecto desarrollado con React, React Router y Material UI para una experiencia moderna y responsiva.
      </p>
    </div>
  );
}