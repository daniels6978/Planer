export const initialState = { user: "admin" };

export function reducer(state, action) {
  switch (action.type) {
    case "updateData":
      return {
        user: action.payload,
      };
    default:
      return 0;
  }
}
