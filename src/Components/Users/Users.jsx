import React from "react";

let Users = (props) => {
    if (props.users.length ===0){
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/250px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
                followed: false,
                fullName: 'Semoyn',
                status: 'I learn JS',
                location: {city: 'Tomsk', country: 'Russia'}
            },
            {
                id: 2,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/250px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
                followed: true,
                fullName: 'Jay',
                status: 'I love surfing',
                location: {city: 'Sydney', country: 'Australia'}
            },
            {
                id: 3,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/250px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
                followed: false,
                fullName: 'Hurrem',
                status: 'I am doctor',
                location: {city: 'Istanbul', country: 'Turkey'}
            },
            ]
        )
    }
    return (
    <div>
        {
            props.users.map(u=> <div key={u.id}>
                <span>
                    <div>
                        <img src ={u.photoUrl} />
                    </div>
                    <div>
                        { u.follow
                            ? <button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={ () => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
    )
}

export default Users;