/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const ADD_TAG = createActionName('ADD_TAG');
export const REMOVE_TAG = createActionName('REMOVE_TAG');
export const FILTER_BY_DURATION = createActionName('FILTER_BY_DURATION');
// TODO - add other action types

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const addTag = payload => ({ payload, type: ADD_TAG });
export const removeTag = payload => ({ payload, type: REMOVE_TAG });
export const filterByDuration = payload => ({ payload, type: FILTER_BY_DURATION });

// TODO - add other action creators

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case ADD_TAG:
      return {
        ...statePart,
        tags: [...statePart.tags, action.payload],
      };
    case REMOVE_TAG:
      return {
        ...statePart,
        tags: statePart.tags = statePart.tags.filter((tag) => tag!==action.payload),
      };
    case FILTER_BY_DURATION:
      return {
        ...statePart,
        duration: {from: 
            function(){
              if (action.payload[0] == 'from'){
                return action.payload[1];
              } else {
                return statePart.duration.from;
              }
            }, to: 
            function(){
              if (action.payload[0] == 'to'){
                return action.payload[1];
              } else {
                return statePart.duration.to;
              }
            },
        },
      };
    default:
      return statePart;
  }
}
