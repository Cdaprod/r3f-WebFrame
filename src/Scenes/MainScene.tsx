import React, { FC, Fragment } from 'react'
import Repo3DPreview from '../Components/Repo3DPreview'
import RandomGeometries from '../Components/RandomGeometries'
import WebFrame from '../Components/WebFrame'

const MainScene: FC = () => {
  return (
    <Fragment>
      <WebFrame />
      <Repo3DPreview />
      <RandomGeometries />
    </Fragment>
  );
}

export default MainScene;
