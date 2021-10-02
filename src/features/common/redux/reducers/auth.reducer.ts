export const authReducer = (state={}, action:any) => {
    switch (action.type){
        case 'login':
            return{
                uuid: action?.payload?.id || 321,
                name: action?.payload?.name || 'Andrew',
            }
        case 'authUser':
            return{
                uuid: action?.payload?.uid,
                name: action?.payload?.name,
                roles: action?.payload?.roles,
            }
        case 'NoAuthUser':
            return{
                auth: null
            }
        default:
            return state;
    }
}