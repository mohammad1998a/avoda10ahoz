import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverTwoTone from '@material-ui/icons/DeleteForeverTwoTone';

export default function FCContentItem(props) {

  function btnRemoveById() {
    props.sendId2RemovefromParent(props.content.title);
  }


  return (
    <div>
      <p style={{
        border: 'solid green 1px', padding: 15,
        borderRadius: 5
      }} >title={props.content.title}   --   description={props.content.description}
        <IconButton aria-label="delete" onClick={btnRemoveById} >
          <DeleteForeverTwoTone style={{ color: 'red', fontSize: 35 }} />
        </IconButton>
 </p>
    </div>
  )
}