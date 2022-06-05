import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SideNavItems, SideNavLink } from 'carbon-components-react';

import { StyledSideNav } from './styles';

const items = [
  { name: 'Me', path: '/portfolio/' },
  { name: 'Projects', path: '/portfolio/projects' },
  { name: 'Work', path: '/portfolio/work' },
  { name: 'Education', path: '/portfolio/education' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side navigation">
      <SideNavItems>
        {items.map(i => (
          <SideNavLink
            isActive={
              location.pathname === '/portfolio/' && i.path === '/portfolio/' ? true : location.pathname === i.path
            }
            element={Link}
            to={i.path}
            key={i.name}
            style={{
              color: '#2ecc40'
            }}
          >
            {i.name}
          </SideNavLink>
        ))}
      </SideNavItems>
    </StyledSideNav>
  );
};

export default Sidebar;
