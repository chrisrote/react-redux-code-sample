import {
  ADD_JOURNAL
} from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case ADD_JOURNAL:
      return [...state, action.post];
  }
  return state;
}
