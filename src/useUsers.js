import useFetchData from './useFetchData'
 
function Users() {
    const { data } = useFetchData("https://api.github.com/users");

  return (
      <div>
          {data && (
            data.map((something) =>(
                <div className="text-white" key={something.id}>
                    <div className="border">
                        <br />
                        <p className="center">User: {something.login} </p>
                        <p className="center">Login type: { something.type } </p>
                        <p className="center">Id: { something.id }</p>
                        <p className="center">Gravatar id: { something.gravatar_id }</p>
                        <p className="center">Node id: { something.node_id }</p>
                        <a className="center" href={ something.avatar_url } rel="noreferrer" target="_blank"><img src={ something.avatar_url } alt="avatar" className="github--Userpfp"/></a>
                        <br /><br />
                        {/*
                        WHAT TO DO NEXT:
                         - Try to make it so that there is a URL inputter and when someone sends a URL, it creates a data.map and then displays all of the JSON data from that site in a JSONpretty way
                         */}
                    </div>
                </div>
            ))
          )}
      </div>
  )
}

export default Users;