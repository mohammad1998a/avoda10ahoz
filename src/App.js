
import React, { Component } from 'react';
import './App.css';
import Main from './ClassComponents/Main';
import content from './Classes/content';
import Notes from './FunctionalComponents/Notes';


import Login from './Components/Login'
import Register from './Components/Register'

import { Switch,Route,withRouter } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contents: [
        new content("my title", "my description"),

      ],
      users:[],
      borad:[],
      loggedUser:''
    }
  }

  checkUser=(user)=>{
    let us=this.state.users.find((u)=>u.userName===user.userName && u.password===user.password)
    if(us){
        this.setState({loggedUser:user})
        this.props.history.push({
            pathname:'/add',
            state:us
        })
    }
}

addUser=(user)=>{
  this.setState((prev)=>({
      users:[...prev.users,user]
  }))
  this.props.history.push({
      pathname:'/'
  })
}

  getContentfromChild = (cont) => {
    let newContents = [...this.state.contents, cont];
    this.setState({ contents: newContents });
  }

  getId2RemovefromChild = (title) => {
    let newContents = this.state.contents.filter(cont => cont.title !== title);
    this.setState({ contents: newContents });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Switch>

            <Route exact  path='/' render={() => <Login checkUser={this.checkUser}/> }/>
            <Route path='/registration' render={()=><Register addUser={this.addUser} />} />


            <Route path='/add' render={() => <Main sendContentfromParent={this.getContentfromChild} />}/>

            <Route path='/Notes' render={() => <Notes sendId2RemovefromParent={this.getId2RemovefromChild}
              sendId2RemovefromParent2={this.getId2RemovefromChild}
              contents={this.state.contents} />} />

          </Switch>

        </header>
      </div>
    )
  }
}
export default withRouter(App);
