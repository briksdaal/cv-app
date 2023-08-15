import EditableContent from './EditableContent';
import DetailContainer from './DetailContainer';
import { handleChildUpdates } from './helpers/helperFunctions';

export default function Details({
  details,
  updateDetails,
  changeCurrentEdits,
}) {
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
