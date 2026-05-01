const getUserFromServer = async() =>{
    const res = await fetch(`https://shopping-cart-backend-7wvv.onrender.com/api/auth/user`,{
        credentials:'include'
    })
    const data = await res.json()

    return data
}

export default getUserFromServer