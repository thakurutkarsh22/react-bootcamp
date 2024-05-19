import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>Page Not Found</h1>

        <button
          onClick={() => {
            navigate("/");
          }}
        >
          GO to HOMEPAGE
        </button>
      </div>
    </>
  );
}

export default NotFoundPage;
