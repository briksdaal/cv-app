import React, { Component } from 'react';
import Button from './Button';
import { handleChildUpdates } from './helpers/helperFunctions';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.hiddenFileInput = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.hiddenFileInput.current.click();
  }

  handleChange(e) {
    if (e.target.value === '') {
      return;
    }
    const { handleGlobalStateUpdate } = this.props;
    const newUrl = URL.createObjectURL(e.target.files[0]);
    handleGlobalStateUpdate(newUrl);
  }

  render() {
    const { url } = this.props;
    return (
      <div className="img-container">
        <img src={url} alt="profile portrait" />
        <Button
          type="edit"
          onClick={this.handleClick}
        />
        <input
          type="file"
          ref={this.hiddenFileInput}
          accept="image/*"
          onChange={this.handleChange}
          style={{ display: 'none' }}
        />
      </div>
    );
  }
}
