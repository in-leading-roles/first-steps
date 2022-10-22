import * as React from 'react'
import {render} from 'react-dom'
import { UserResponse } from 'src/commmon/UserResponse';

const App = () => {
    const [text, SetText] = React.useState();
    React.useEffect(()=>{
        fetch('/users')
        .then<UserResponse>(res => res.json())
        .then(res => SetText(res[0].login))
    }, [])
    return <h1>{text}</h1>
} 

render(<App />, document.getElementById('app'));