export const getUser=(state)=>{
    return state.user.user
}

export const getUserId=(state)=>{
    return state.user?.user?.id
}
export const getUserName=(state)=>{
    return state.user?.user?.username
}

export const getIsUserAuth=(state)=>{
    return !!state.user.user
}