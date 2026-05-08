import { Link } from 'react-router';
import { paths } from '@/config/paths';

const LandingRoute = () => {
  return (
    <div className="mt-52 flex flex-col items-center font-semibold">
      <h1>Welcome to Our Application</h1>
      <p>Discover the amazing features we have to offer.</p>
      <Link to={paths.home.getHref()} replace>
        Get Started
      </Link>
    </div>
  );
};

export default LandingRoute;