import React, { useState, useEffect, useMemo } from 'react';
import { CanvasTexture, BoxBufferGeometry, MeshStandardMaterial } from 'three';
import { Canvas } from '@react-three/fiber';
import { fetchRepos } from './GithubAPI';

interface RepoType {
  name: string;
  description?: string;
}

interface RepoProps {
  repo: RepoType;
  position: [number, number, number];
}

function createRepoTexture(repo: RepoType): CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext('2d');
  
  if (context) {
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'black';
    context.font = '20px Arial';
    context.fillText(repo.name, 10, 30);
    context.fillText(repo.description || "No description", 10, 60);
  }

  return new CanvasTexture(canvas);
}

const Repo: React.FC<RepoProps> = ({ repo, position }) => {
  const texture = useMemo(() => createRepoTexture(repo), [repo]);

  return (
    <mesh position={position}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

const Repo3DPreview: React.FC = () => {
  const [repos, setRepos] = useState<RepoType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const repoData = await fetchRepos();
      if (Array.isArray(repoData)) {
        setRepos(repoData);
      }
    }
    fetchData();
  }, []);

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {repos.map((repo, index) => (
        <Repo key={index} repo={repo} position={[index * 2, 0, 0]} />
      ))}
    </Canvas>
  );
}

export default Repo3DPreview;
