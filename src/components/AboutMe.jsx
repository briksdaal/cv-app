import EditableContent from './EditableContent';

export default function AboutMe({
  aboutMe, updateAboutMe, changeCurrentEdits,
}) {
  return (
    <EditableContent
      text={aboutMe}
      className="about-me"
      textarea
      handleGlobalStateUpdate={(newChild) => updateAboutMe(newChild)}
      changeCurrentEdits={changeCurrentEdits}
    >
      <p>
        {aboutMe}
      </p>
    </EditableContent>
  );
}
