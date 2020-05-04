import React from 'react';
import './App.css';

import { Collapsible, CollapsibleItem, Icon, Navbar } from 'react-materialize'
import ClassCounter from './use-state/ClassCounter';
import HookCounter from './use-state/HookCounter';
import HookUserForm from './use-state/HookUserForm';
import HookList from './use-state/HookList';
import ClassTitleChange from './use-effect/ClassTitleChange';
import HookTitleChange from './use-effect/HookTitleChange';
import ClassMousePosition from './use-effect/ClassMousePosition';
import HookMousePosition from './use-effect/HookMousePosition';
import ClassAutoCount from './use-effect/ClassAutoCount';
import HookAutoCount from './use-effect/HookAutoCount';

import Root from './use-context/Root'
import HookVotingBox from './use-reducer/HookVotingBox';
import Box from './use-context and reducer/Box';
import TodoApp from './use-callback/TodoApp';
import NumberCheck from './use-memo/NumberCheck';
import Comp1 from './use-cusom-hook/Comp1';
import Comp2 from './use-cusom-hook/Comp2';

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
          header="useState  - to manage state "
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
          header="useEffect - to add side effects"
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
          expanded={false}
          header="useContext - to connsume conext"
          icon={<Icon>filter_drama</Icon>}
          node="div"
        >
          <Root />

        </CollapsibleItem>

        <CollapsibleItem
          expanded={false}
          header="useReducer - to manage comp's complex state on different action(s)"
          icon={<Icon>filter_drama</Icon>}
          node="div"
        >
          <HookVotingBox />
        </CollapsibleItem>

        <CollapsibleItem
          expanded={false}
          header="useReducer + useContext"
          icon={<Icon>filter_drama</Icon>}
          node="div"
        >
          <Box />
        </CollapsibleItem>

        <CollapsibleItem
          expanded={false}
          header="useCallback - to cache function to pass as props"
          icon={<Icon>filter_drama</Icon>}
          node="div"
        >

          <TodoApp />


        </CollapsibleItem>

        <CollapsibleItem
          expanded={false}
          header="useMemo  - to invoke expensive-function only if there is change in dependency"
          icon={<Icon>filter_drama</Icon>}
          node="div"
        >
          <NumberCheck />

        </CollapsibleItem>

        <CollapsibleItem
          expanded={false}
          header="customHook  - to share same logic on multiple components"
          icon={<Icon>filter_drama</Icon>}
          node="div"
        >
          <div className="row">
            <div className="col s6">
              <Comp1 />
            </div>
            <div className="col s6">
              <Comp2 />
            </div>
          </div>
        </CollapsibleItem>


      </Collapsible>

    </div>

  );
}

export default App;
