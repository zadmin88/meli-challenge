import { useNavigate } from "react-router-dom";
import "../styles/pages/not-found-page.scss";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h2>404 - Página no encontrada</h2>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <button onClick={() => navigate("/")}>Volver al inicio</button>
    </div>
  );
}

export default NotFoundPage;
