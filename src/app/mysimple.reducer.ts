import { Action } from '@ngrx/store';


export function mySimpleReducer (state: string = 'initial state string', action: Action) {
  console.log(state, action.type);

  switch (action.type) {
    case 'SPANISH':
      return 'in spanish';
    case 'ENGLISH':
      return 'in english';
    default:
        return 'in polish';
  }
}

