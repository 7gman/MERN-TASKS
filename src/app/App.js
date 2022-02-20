import React from "react";
import ReactDOM from 'react-dom';

//Variables

//******Functions******/
const addTask = (e) => {
    console.log(state);
    e.preventDefault();
}
const handleChange = (e) => {
    const {name, value} = e.target;
}

//******Component by an Arrow function******
const App = () => {

    return(
        <div>
            {/* Navigation */}
            <nav className="light-blue darken-4">
                <div className="container">
                    <a className="brand-logo" href="/">MERN Stack</a>
                </div>
            </nav>

            <div className="container">
                <div className="row ">
                    <div className="col s5">
                        <div className="card">
                            <div className="card-content">
                                <form onSubmit={addTask}>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input name="title" onChange={handleChange} type="text" placeholder="Task Title" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <textarea name="description" onChange={handleChange} placeholder="Task Descrption"
                                            className="materialize-textarea"></textarea>
                                        </div>
                                    </div>
                                    <button className="btn light-blue darken-4">
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col s7">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

//******Component by a Class******
// class App extends Component {
//     render(){
//         return(
//             <App/>
//         )
//     }
// }

export default App;