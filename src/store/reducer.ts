import actionsType from './actionsType';

const INITIAL_LIST = [
  { text: 'Call Dwight Schrute', label: 'Work', isDone: false },
  { text: 'Learn redux', label: 'Work', isDone: true },
  { text: 'Buy bananas', label: 'Family', isDone: false },
  { text: 'Take out the trash', label: 'Family', isDone: true },
  { text: 'Go for a walk', label: 'Personal', isDone: false },
  { text: 'Do morning exercise', label: 'Personal', isDone: true },
];

const initialState = {
  list: INITIAL_LIST,
  filterType: ''
}

export function reducerTask (state: any = initialState, action: any) {

  switch(action.type) {
    case actionsType.CREATE_TASK: 
      return {
        ...state,
        list: [ ...state.list, {text: action.task.text, label: action.task.label, isDone: action.task.isDone } ]
      }
    case actionsType.SET_FILTER_TYPE: 
      return {
       ...state,
       filterType: action.filterType
      }
      default:
      return state
    }
}

