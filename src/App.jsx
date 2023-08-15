import uniqid from 'uniqid';
import { getDataWithKeys } from './components/helpers/helperFunctions';
import { defaultDataRaw, dummyDataRaw } from './components/defaultData';

import CV from './components/CV';

export default function App() {
  const defaultData = getDataWithKeys(defaultDataRaw, uniqid);
  const dummyData = getDataWithKeys(dummyDataRaw, uniqid);
  return (
    <CV
      getNextId={uniqid}
      defaultData={defaultData}
      dummyData={dummyData}
    />
  );
}
