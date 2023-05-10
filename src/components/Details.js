import { Component } from 'react';
import EditableContent from './EditableContent';
import { handleChildUpdates } from './helpers/helperFunctions';

export default class Details extends Component {
  render() {
    const { details, updateDetails, changeCurrentEdits } = this.props;
    return (
      <>
        <p>
          <EditableContent
            text={details.email}
            handleGlobalStateUpdate={(newChild) => handleChildUpdates(details, newChild, 'email', updateDetails)}
            changeCurrentEdits={changeCurrentEdits}
          />
        </p>
        <p>
          <EditableContent
            text={details.phone}
            handleGlobalStateUpdate={(newChild) => handleChildUpdates(details, newChild, 'phone', updateDetails)}
            changeCurrentEdits={changeCurrentEdits}
          />
        </p>
        <p>
          <EditableContent
            text={details.address}
            handleGlobalStateUpdate={(newChild) => handleChildUpdates(details, newChild, 'address', updateDetails)}
            changeCurrentEdits={changeCurrentEdits}
          />
        </p>
        <p>
          <EditableContent
            text={details.url}
            handleGlobalStateUpdate={(newChild) => handleChildUpdates(details, newChild, 'url', updateDetails)}
            changeCurrentEdits={changeCurrentEdits}
          />
        </p>
      </>
    );
  }
}
