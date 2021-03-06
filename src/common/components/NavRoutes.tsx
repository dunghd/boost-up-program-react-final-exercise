import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export interface ICustomNav {
  key: string;
  title: string;
  href: string;
};

type INavRoutesProps = {
  tabs: ICustomNav[]
};

const NavRoutes = (props: INavRoutesProps) => {
  const { tabs } = props;

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Nav className="me-auto">
        {
          tabs.map(tab =>
            <Nav.Link href={tab.href}>{tab.title}</Nav.Link>
          )
        }
      </Nav>
    </Navbar>
  );
};

export default NavRoutes;