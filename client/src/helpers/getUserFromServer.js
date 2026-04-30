const getUserFromServer = async() =>{
    const res = await fetch(`http://localhost:3000/api/auth/user`,{
        credentials:'include'
    })
    const data = await res.json()

    return data
}

export default getUserFromServer