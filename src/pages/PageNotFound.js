import { useTitle } from "../hook/useTitle"
import NotFound from "../assets/images/page-not-found.jpg";
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
  useTitle("Page Not Found");
  
  return (
    <section className="pageNotFound">
      <p>404 / Page Bot Found</p>
      <img src={NotFound} alt="Page Not Found" />
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </section>
  )
}
