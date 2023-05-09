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
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(e) {
    this.setState({ inputVal: e.target.value });
  }

  handleEdit() {
    const { updateState, text } = this.props;
    this.setState({
      editMode: true,
      inputVal: text,
    });
    updateState({ newData: false });
  }

  handleUpdate() {
    const { updateState, field } = this.props;
    const { inputVal } = this.state;
    const newState = {};

    this.setState({ editMode: false });
    newState[field] = inputVal;
    updateState(newState);
  }

  handleBlur() {
    this.setState({
      editMode: false,
    });
  }

  render() {
    const { editMode, inputVal } = this.state;
    const { text, newData } = this.props;

    return (
      (editMode && !newData)
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
        )
    );
  }
}
