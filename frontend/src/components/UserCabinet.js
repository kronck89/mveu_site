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


      function changePass(clicked_id) {
      
        let filterlogin = clicked_id.target.id;
        var resultVal = [];
        let input = document.getElementsByTagName('input');

        for (let n=0, length = input.length; n < length; n++) {
            resultVal.push(input[n].value);  
        }
        
        let newPass = resultVal.filter(Boolean);
        const data = {
            login: filterlogin,
            password: newPass[0] // лучше не придумал ) 
        }

        //console.log(data)
 
        const api = 'http://127.0.0.1:9001/changePassword'

        fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((result) => result.json())
            .then((result) => {
                console.log(result)

        })
         
    }

  return (
    <div className="Main">    
        {React.Children.toArray(
            logins.map((item) => <p>key=<span id="user_key">{item._id}</span> <br/> login=<span id="user_id">{item.login}</span> <br/> password=<span>{item.password}</span> <br/> email=<span>{item.email}</span> <input id="password" type='text' placeholder='новый пароль' /> <button id={item.login} onClick={changePass}>Сменить пароль</button></p>  )
          )}
    </div>
  );

}

export default UserCabinet;
