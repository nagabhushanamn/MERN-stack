import React from 'react';
import './App.css';

import { Collapsible, CollapsibleItem, Icon, Navbar } from 'react-materialize'
import ClassCounter from './use-state/ClassCounter';
import HookCounter from './use-state/HookCounter';
import HookUserForm from './use-state/HookUserForm';
import HookList from './use-state/HookList';
import ClassTitleChange from './use-effect/ClassTitleChange';
import HookTitleChange from './use-effect/HookTitleChange';
import HookTitleAndNameChange from './use-effect/HookTitleAndNameChange';
import ClassMousePosition from './use-effect/ClassMousePosition';
import HookMousePosition from './use-effect/HookMousePosition';
import ClassAutoCount from './use-effect/ClassAutoCount';
import HookAutoCount from './use-effect/HookAutoCount';

import Root from './use-context/Root'

function App() {

  return (

    <div className="container">

      <Navbar
        alignLinks="right"
        centerLogo
        brand={<a className="brand-logo" href="/">react hooks</a>}
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


          <div className="row">
            <div className="col s6">
              <ClassTitleChange />
            </div>
            <div className="col s6">
              <HookTitleChange />
            </div>
            <div className="col s6">
              <HookTitleAndNameChange />
            </div>
            <div className="col s6">
              <ClassMousePosition />
            </div>
            <div className="col s6">
              {<HookMousePosition />}
            </div>
            <div className="col s6">
              <ClassAutoCount />
            </div>
            <div className="col s6">
              <HookAutoCount />
            </div>
          </div>

        </CollapsibleItem>

        <CollapsibleItem
          expanded={true}
          header="useContext"
          icon={<Icon>filter_drama</Icon>}
          node="div"
        >

          <Root />

        </CollapsibleItem>

        <CollapsibleItem
          expanded={true}
          header="useCallback"
          icon={<Icon>filter_drama</Icon>}
          node="div"
        >

        </CollapsibleItem>

        <CollapsibleItem
          expanded={true}
          header="useMemo"
          icon={<Icon>filter_drama</Icon>}
          node="div"
        >

        </CollapsibleItem>

        <CollapsibleItem
          expanded={true}
          header="useRef"
          icon={<Icon>filter_drama</Icon>}
          node="div"
        >

        </CollapsibleItem>

        <CollapsibleItem
          expanded={true}
          header="useReducer"
          icon={<Icon>filter_drama</Icon>}
          node="div"
        >

        </CollapsibleItem>

        

      </Collapsible>

    </div>

  );
}

export default App;
