import React from 'react';
import { HemisphereLight } from '@react-three/drei';
import Repo3DPreview from '../Components/Repo3DPreview';
import RandomGeometries from '../Components/RandomGeometries';
import WebFrame from '../Components/WebFrame';

const MainScene: React.FC = () => {
  return (
    <>
      <HemisphereLight groundColor="red" />
      <WebFrame />
      <Repo3DPreview />
      <RandomGeometries />
    </>
  );
}

export default MainScene;
