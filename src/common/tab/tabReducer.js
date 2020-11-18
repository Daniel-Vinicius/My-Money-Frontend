const INITIAL_STATE = {selected: '', visible: {}};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "TAB_SELECT":
      return {
          ...state, selected: action.payload      
      }
      case "TABS_SHOWED": 
      return {
        ...state, visible: action.payload
      }
    default:
      return state;
  }
}
