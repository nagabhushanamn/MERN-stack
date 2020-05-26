

import * as actions from './todos'

// test suite
describe('actions', () => {
   // test case
    it('should create an action to add a todo', () => {
      const title = 'Finish docs'
      const expectedAction = {
        type: 'ADD_TODO',
        todo:{id:0,title,completed:false}
      }
      expect(actions.addTodo(title)).toEqual(expectedAction)
    })
  })