import useFetchData from './useFetchData'
 
function Users() {
    const { data } = useFetchData("https://api.github.com/users");

  return (
      <div>
          {data && (
            data.map((user) =>(
                <div className="text-white" key={user.id}>
                    <div className="border">
                        <p>User: {user.login} </p>
                        <p>Login type: { user.type } </p>
                        <p>Id: { user.id }</p>
                        <img src={user.avatar_url} alt="avatar" className="github--Userpfp"/>
                        <br /><br />
                    </div>
                </div>
            ))
          )}
      </div>
  )
}

export default Users;