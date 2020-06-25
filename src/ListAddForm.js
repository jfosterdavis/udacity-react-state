import React, {Component} from 'react'

class ListAddForm extends React.Component {

  inputIsEmpty = () => {
    return this.props.value === '';
  };


    render () {
    
    const {onSubmitFunction, onChangeFunction, value} = this.props

    return (
      <div>
        <form onSubmit={onSubmitFunction}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={value}
            onChange={onChangeFunction}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>
	</div>
);

	}

}

export default ListAddForm