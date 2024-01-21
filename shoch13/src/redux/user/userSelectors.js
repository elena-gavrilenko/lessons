export const getUser = (state) => {
    return state.user.user
}

export const getUserId = (state) => {
    return state.user?.user?.id
}

export const getUserName = (state) => {
    // return state.user?.user?.username
    return state.user?.user?.firstName + ' ' + state.user?.user?.lastName
}

export const getIsUserAuth = (state) => {
    return !!state.user.user
}