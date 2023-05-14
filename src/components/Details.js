import { Component } from 'react';
import EditableContent from './EditableContent';
import DetailContainer from './DetailContainer';
import { handleChildUpdates } from './helpers/helperFunctions';

export default class Details extends Component {
  render() {
    const { details, updateDetails, changeCurrentEdits } = this.props;
    return (
      <>
        {Object.entries(details).map((detail) => (
          <DetailContainer icon={detail[0]} key={detail[0]}>
            <EditableContent
              text={detail[1]}
              className={`details-${detail[0]}`}
              handleGlobalStateUpdate={
                (newChild) => handleChildUpdates(details, newChild, detail[0], updateDetails)
              }
              changeCurrentEdits={changeCurrentEdits}
            >
              <span>{detail[1]}</span>
            </EditableContent>
          </DetailContainer>
        ))}
      </>
    );
  }
}
