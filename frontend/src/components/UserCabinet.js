import React, {useState, useEffect} from 'react';

function UserCabinet() {

    const[logins, setLogins] = useState([])

    useEffect(() => {
        const api = 'http://localhost:9001/usercabinet'
    
        fetch(api)
        .then(result => result.json())
        .then((result) => {
            console.log(result)
            setLogins(result.data)
        })
      }, [])

      /*
      let login = ""

      logins.forEach(function(item, index, array) {
        login = item.login
      });
    
    return (
        <>
        <div className="Product"> 
            <h1>Список юзеров</h1>
            <span>{login}</span>
         </div> 
        </>
  );
  */

  return (
    <div className="Main">
        {React.Children.toArray(
            logins.map((item) => <span>key={item._id} <br/> login={item.login} <br/> password={item.password} <br/> email={item.email}</span>)
          )}
    </div>
  );



}

export default UserCabinet;
