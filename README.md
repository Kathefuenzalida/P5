Proyecto 5 - Aplicación Web con React
1. Introducción
Esta aplicación muestra tasas de cambio en tiempo real y datos históricos de divisas utilizando la API pública ExchangeRate.host. El proyecto está desarrollado con React, Vite, React Router y Material UI, para ofrecer una experiencia moderna y responsiva.

2. Demo
Puedes acceder a la demo en producción aquí:
[https://pp5.netlify.app](https://pp5.netlify.app/)

3. ¿Qué construí?
Una SPA con React que consulta tasas de cambio actuales y datos históricos.

Interacción mediante selección de moneda base y fechas para histórico.

Manejo de rutas con React Router.

Manejo de errores con componentes ErrorBoundary.

Estilizado con Material UI.

4. Objetivos de aprendizaje cumplidos
Creación de componentes funcionales en React.

Pasar datos entre componentes con props.

Manejo de eventos y estado con hooks useState y efectos con useEffect.

Implementación de rutas con React Router.

Manejo de errores con Error Boundaries.

Conexión con API pública para obtener datos.

Estilizado mediante Material UI.

5. Requisitos y entregables
Proyecto creado con Vite.

Uso de React con componentes funcionales y hooks.

Conexión y consumo de API pública.

Implementación de React Router para navegación.

Uso de Error Boundaries para manejo de errores en renderizado.

Estilos aplicados con Material UI.

Repositorio GitHub con mínimo 5 commits.

README completo y actualizado.

Despliegue en Netlify con URL pública.

6. Instalación y uso local
Clona el repositorio:

bash
Copiar código
git clone https://github.com/Kathefuenzalida/P5
cd tu_repositorio
Instala dependencias:

bash
Copiar código
npm install
Levanta la app en modo desarrollo: 

bash
Copiar código
npm run dev
Abre tu navegador en http://localhost:5173 (u otro puerto que indique la consola).

7. Estructura del proyecto
/src/components - Componentes reutilizables (ExchangeCard, NavBar, ErrorBoundary).

/src/hooks - Hooks personalizados para consumir la API.

/src/pages - Páginas de la app (Home, Historico, About).

/src/App.jsx - Componente raíz con rutas.

/src/main.jsx - Entrada principal React.

/src/index.css - Estilos globales.

8. API usada
ExchangeRate.host — API pública para tasas de cambio y datos históricos sin necesidad de API key.

9. Despliegue
Desplegado en Netlify: https://pp5.netlify.app

10. Créditos
Proyecto desarrollado por [Katherine Fuenzalida].
