import React from 'react';
import './App.css';

import { Collapsible, CollapsibleItem, Icon, Navbar, NavItem } from 'react-materialize'
import ClassCounter from './use-state/ClassCounter';
import HookCounter from './use-state/HookCounter';
import HookUserForm from './use-state/HookUserForm';
import HookList from './use-state/HookList';

function App() {
  return (

    <div className="container">

      <Navbar
        alignLinks="right"
        centerLogo
        brand={<a className="brand-logo" href="#">react hooks</a>}
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
      />

      <Collapsible accordion>

        <CollapsibleItem
          expanded={false}
          header="useState"
          icon={<Icon>filter_drama</Icon>}
          node="div"
        >

          <div className="row">
            <div className="col s6">
              <ClassCounter />
            </div>
            <div className="col s6">
              <HookCounter />
            </div>
            <div className="col s6">
              <HookUserForm />
            </div>
            <div className="col s6">
              <HookList />
            </div>
          </div>

        </CollapsibleItem>

        <CollapsibleItem
          expanded={false}
          header="useEffect"
          icon={<Icon>filter_drama</Icon>}
          node="div"
        >

        </CollapsibleItem>



      </Collapsible>

    </div>

  );
}

export default App;
