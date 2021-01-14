import React from 'react'
import FCContentItem from './FCContentItem';
import { withRouter, Link } from 'react-router-dom'


function Notes(props) {

    function sendItem2Remove(title) {
        props.sendId2RemovefromParent2(title);

    }

    let contents2Show = props.contents.map(cont =>
        <FCContentItem key={cont.title} content={cont}
            sendId2RemovefromParent={props.sendId2RemovefromParent}
            sendId2RemovefromParent2={sendItem2Remove} />);

    return (
        <div>
            {contents2Show}

            <Link to='/add'>Back to Menu Page</Link>
        </div>
    )
}
export default withRouter(Notes);