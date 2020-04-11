
export default (state = {}, action) => {  
  switch (action.type) {
   case 'SET_THEME':
    return {
     theme: action.payload
    }
   default:
    return state
  }
 };
