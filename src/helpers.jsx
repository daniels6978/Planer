export const initialState = {user : "admin"}

export function reducer (state, action){

    switch (action.type) {
        case 'addTask' :
            return {
                user : action.payload
            }
    }
}

