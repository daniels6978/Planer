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
export const initialStateT = { show: false };

export function reducerT(state, action) {
  switch (action.type) {
    case "shTask":
      return {
        show: action.payload,
      };
    default:
      return 0;
  }
}
