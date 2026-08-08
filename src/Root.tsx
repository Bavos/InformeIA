import React from 'react';
import { Composition } from 'remotion';
import { MainVideo } from './Video';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="AIGovernanceVideo"
        component={MainVideo}
        durationInFrames={900} // 30 segundos a 30 FPS
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
