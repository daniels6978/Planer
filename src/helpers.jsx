export const initialState = {user: {user: {taks: []}}};

export function reducer(state, action) {
  switch (action.type) {
    case "updateData":
      return {
        user: action.payload,
      };
    case "updateTodos":
      const newState = {...state};
      newState.user.user.tasks = action.payload;
      return newState;
    default:
      return 0;
  }
}
