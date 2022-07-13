import { NavLink } from 'solid-app-router';

const NavLinks = () => {
  return (
    <ul className='navlinks'>
      <li>
        <NavLink
          class='navlinks-link'
          href='/profile'
          activeClass='navlinks-active'
        >
          Profile
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
