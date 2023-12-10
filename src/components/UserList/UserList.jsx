import { UserAlone } from '../User/UserAlone'
import './user-list.scss'


export const UserList =({users})=>{
    return(
        <ul className="user-list">
            {users.map(({id, ...otherProps})=>{
                return <UserAlone key={id} {...otherProps}/>
            })}

        </ul>
    )
}