import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],

  getInitialState () {
    const {name, color} = this.props.label
    return {name, color}
  },

  onEditClick (event) {
    event.preventDefault();
    this.props.label.editing = true;
  },

  onCancelClick (event) {
    event.preventDefault();
    this.props.label.editing = false;
  },

  onDeleteClick (event) {
    event.preventDefault;
    this.props.label.destroy({wait: true});
  },

  onNameChange (event) {
    this.setState({
      name: event.target.value
    })
  },

  render () {
    const {label} = this.props;
    const {color} = this.state;
    const cssColor = '#' + label.color;
    let content;


    if (label.editing) {
      content = (
        <form className='label'>
          <span className='label-color avatar avatar-small avatar-rounded'>&nbsp;</span>
          <input name='name' onChange={this.onNameChange} value={this.state.name} />
          <input name='color' onChange={this.onColorChange} value={color}/>
          <button type='submit' className='button button-small'>Save</button>
          <button onClick={this.onCancelClick} type='button' className='button button-small button-unstyled'>cancel</button>
        </form>
      )
    } else{
      content = (
        <div className='label'>
          <span className='label-color' style={{backgroundColor: cssColor }}>&nbsp;</span>
          <span>{label.name}</span>
          <span onClick={this.onEditClick} className='octicon octicon-pencil'></span>
          <span onClick={this.onDeleteClick} className='octicon octicon-x'></span>
        </div>
      )
    }

    return(
      <div>
        {content}
      </div>
    )
  }

})