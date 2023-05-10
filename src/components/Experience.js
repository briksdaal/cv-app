import { Component } from 'react';
import EditableContent from './EditableContent';
import { handleChildUpdates, handleLiUpdates } from './helpers/helperFunctions';

export default class Experience extends Component {
  render() {
    const {
      experiences,
      updateExperiences,
      changeCurrentEdits,
    } = this.props;
    return (
      <ul>
        {experiences.map((exp) => (
          <li key={exp.key}>
            <h4>
              <EditableContent
                text={exp.title}
                handleGlobalStateUpdate={(newChild) => handleLiUpdates(exp.key, experiences, newChild, 'title', updateExperiences)}
                changeCurrentEdits={changeCurrentEdits}
              />
            </h4>
            <h5>
              <EditableContent
                text={exp.subtitle}
                handleGlobalStateUpdate={(newChild) => handleLiUpdates(exp.key, experiences, newChild, 'subtitle', updateExperiences)}
                changeCurrentEdits={changeCurrentEdits}
              />
            </h5>
            <span>
              <EditableContent
                text={exp.from}
                handleGlobalStateUpdate={(newChild) => handleLiUpdates(exp.key, experiences, newChild, 'from', updateExperiences)}
                changeCurrentEdits={changeCurrentEdits}
              />
              {' '}
              -
              {' '}
              <EditableContent
                text={exp.to}
                handleGlobalStateUpdate={(newChild) => handleLiUpdates(exp.key, experiences, newChild, 'to', updateExperiences)}
                changeCurrentEdits={changeCurrentEdits}
              />
            </span>
            <ul>
              {exp.points.map((point) => (
                <li key={point.key}>
                  <EditableContent
                    text={point.text}
                    handleGlobalStateUpdate={
                      (newChild) => handleLiUpdates(
                        point.key,
                        exp.points,
                        newChild,
                        'text',
                        (newLi) => handleLiUpdates(
                          exp.key,
                          experiences,
                          newLi,
                          'points',
                          updateExperiences,
                        ),
                      )
                    }
                    changeCurrentEdits={changeCurrentEdits}
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    );
  }
}
