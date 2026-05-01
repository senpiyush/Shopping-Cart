const getUserFromServer = async () => {
     const token = localStorage.getItem("token");
      const res = await fetch( "https://shopping-cart-backend-7wvv.onrender.com/api/auth/user",
         { method: "GET", headers: { Authorization: `Bearer ${token}` } }
         );
          const data = await res.json(); return data;
        };
          
    export default getUserFromServer;