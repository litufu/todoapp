import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'


const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp


// 等价于
// export default function todoApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }
