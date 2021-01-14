import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import PersonAddTwoToneIcon from '@material-ui/icons/PersonAddTwoTone';
import content from '../Classes/content';
import { withRouter ,Link} from 'react-router-dom'

  class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  chgTitle = (e) => {
    this.setState({ TheTitle: e.target.value });
  }

  chgDescription = (e) => {
    this.setState({ TheDescription: e.target.value });
  }

  btnAddContent = () => {
    
    let newContent = new content(this.state.TheTitle, this.state.TheDescription);
    console.log(newContent);
    console.log(this.props);
    console.log(this.props.sendContentfromParent);
    this.props.sendContentfromParent(newContent);
  }

  render() {
    return (
      <div>
        <TextField label="title"
          variant="outlined"
          color="secondary"
          onChange={this.chgTitle}
          style={{ backgroundColor: 'lightgrey', borderRadius: 5, margin: 10 }} />
<br></br>
        <TextField label="description"
          variant="outlined"
          onChange={this.chgDescription}
          style={{ backgroundColor: 'lightgrey', borderRadius: 5, margin: 10 }} /> <br/>

        <IconButton aria-label="delete" onClick={this.btnAddContent}>
          <PersonAddTwoToneIcon style={{ color: 'green', margin: 5, fontSize: 45 }} />
        </IconButton>
        <br></br>
        <Link to='Notes'>Go to Notes Page</Link>

      </div>
    )
  }
}
export default withRouter(Main);