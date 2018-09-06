import React,{Component} from 'react'
import Header from './Components/Header/'
import Main from  './Components/Main/'
// import RegistrationForm from './RegistartionForm'
// import '../Css/App.css'

class App extends Component{
    render(){
        return(
            <div className={'container'}>
                <Header/>
                <Main/>
            </div>
        )
    }
}

export default App