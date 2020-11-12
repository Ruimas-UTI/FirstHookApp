import React, {useState} from "react";
import ResourceList from "./ResourceList";
const App = () =>{
    const [resource, setResource] = useState("posts");
    return(
        <div className="ui container">
            <div className="content">
                <button onClick={() => setResource("posts")} className="ui button primary">Todos</button>
                <button onClick={() => setResource("todos")} className="ui button secondary">Posts</button>
                <button onClick={() => setResource("users")} className="ui button grey">Users</button>
            </div>
            <ResourceList resource={resource}/>
        </div>
    )
}
export default App;