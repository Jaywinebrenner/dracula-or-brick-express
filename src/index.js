import React, { Component} from 'react';
import ReactDom from 'react-dom';
import Posts from './components/Posts'

class App extends Component {

    render() {
        return(
            <Posts/>
        )
    }

}

ReactDom.hydrate(<App />, document.getElementById('root'))