import { Link } from 'solid-app-router';

const Logo = () => {
  return (
    <div className='logo'>
      <Link href='/' className='logo-text'>
        🏠
      </Link>
    </div>
  );
};

export default Logo;
