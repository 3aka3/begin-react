export default function( state = [], action){ 
  
  if( action.type == "ADD_STORE"){ 
    return [action.data];  
  }
  return state;
}
