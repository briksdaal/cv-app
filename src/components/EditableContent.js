import { Component } from 'react';

export default class EditableContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleChange(e) {
    this.setState({ inputVal: e.target.value });
  }

  handleEdit() {
    const { text, changeCurrentEdits } = this.props;
    this.setState({
      editMode: true,
      inputVal: text,
    });
    changeCurrentEdits(true);
  }

  handleUpdate() {
    const { handleGlobalStateUpdate, changeCurrentEdits } = this.props;
    const { inputVal } = this.state;
    changeCurrentEdits(false);
    this.setState({ editMode: false });
    handleGlobalStateUpdate(inputVal);
  }

  render() {
    const {
      editMode,
      inputVal,
    } = this.state;
    const {
      text,
      handleLiRemove,
    } = this.props;

    return (
      <>
        { editMode
          ? (
            <>
              <input type="text" value={inputVal} onChange={this.handleChange} />
              <button type="button" onClick={this.handleUpdate}>Update</button>
            </>
          )
          : (
            <>
              { text }
              <button type="button" onClick={this.handleEdit}>Edit</button>
            </>
          )}
        {handleLiRemove && <button type="button" onClick={handleLiRemove}>Remove</button>}
      </>
    );
  }
}
