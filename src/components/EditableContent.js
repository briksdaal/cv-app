import { useState } from 'react';
import ActionButton from './ActionButton';
import './styles/EditableContent.css';

export default function EditableContent({
  children,
  text,
  className,
  textarea,
  changeCurrentEdits,
  changeExperienceEdits,
  handleGlobalStateUpdate,
  handleLiRemove,
}) {
  const [editMode, setEditMode] = useState(false);
  const [inputVal, setInputVal] = useState(text);

  function handleChange(e) {
    setInputVal(e.target.value);
  }

  function handleEdit() {
    setEditMode(true);
    setInputVal(text);

    changeCurrentEdits(1);
    if (changeExperienceEdits) {
      changeExperienceEdits(1);
    }
  }

  function handleUpdate() {
    changeCurrentEdits(-1);
    if (changeExperienceEdits) {
      changeExperienceEdits(-1);
    }
    setEditMode(false);
    handleGlobalStateUpdate(inputVal);
  }

  function handleRemove() {
    if (editMode) {
      changeCurrentEdits(-1);
      if (changeExperienceEdits) {
        changeExperienceEdits(-1);
      }
    }
    handleLiRemove();
  }

  const classList = [
    'editable',
    className,
    handleLiRemove && 'removeable',
    editMode && 'in-edit',
  ]
    .filter((c) => c)
    .join(' ');

  const inputEl = textarea
    ? <textarea value={inputVal} onChange={handleChange} />
    : <input type="text" value={inputVal} onChange={handleChange} />;

  return (
    <div className={classList}>
      {editMode
        ? inputEl
        : children}
      <div className="action-buttons-container">
        <ActionButton
          onClick={editMode
            ? handleUpdate
            : handleEdit}
          type={editMode
            ? 'check'
            : 'edit'}
        />
        {handleLiRemove
              && (
              <ActionButton
                onClick={handleRemove}
                type="remove"
              />
              )}
      </div>
    </div>
  );
}
