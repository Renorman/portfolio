import React, { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const vertexShader = `
  varying vec3 vNormal;
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vNormal = normalize(normalMatrix * normal);
  }
`

const fragmentShader = `
  uniform vec3 uDirLightPos; // where the light is coming from
  uniform vec3 uDirLightColor; // color of the directional light
  uniform vec3 uAmbientLightColor; // base fill light (so nothing is pure black)
  uniform vec3 uLineColor; // color of the hatch lines
  uniform vec3 uBaseColor; // color of bg

  varying vec3 vNormal;

  const float fSpace = 5.0; // gap between hatch lines (lower = denser)
  const float fThick = 2.0; // line thickness in pixels

  void main() {
    float directionalLightWeighting = max(dot(vNormal, uDirLightPos), 0.0);
    vec3 lightWeighting = uAmbientLightColor + uDirLightColor * directionalLightWeighting;
    float len = length(lightWeighting);

    // tints the lit areas with base color
    vec3 color = uBaseColor * (len * 0.6 + 0.5); // --> Adjust 0.6 for lighting intensity !!

    gl_FragColor = vec4(color, 1.0);

    // each if block adds a hatch layer at a darker light threshold
    // diagonal lines: x + y
    if (len < 1.00) {
      if (mod(gl_FragCoord.x + gl_FragCoord.y, fSpace) < fThick) {
        gl_FragColor = vec4(uLineColor, 1.0);
      }
    }
    // cross diagonal: x - y
    if (len < 0.75) {
      if (mod(gl_FragCoord.x - gl_FragCoord.y, fSpace) < fThick) {
        gl_FragColor = vec4(uLineColor, 1.0);
      }
    }
    // offset diagonal: x + y (shifted by half spacing)
    if (len < 0.50) {
      if (mod(gl_FragCoord.x + gl_FragCoord.y - (fSpace * 0.5), fSpace) < fThick) {
        gl_FragColor = vec4(uLineColor, 1.0);
      }
    }
    // offset cross diagonal
    if (len < 0.25) {
      if (mod(gl_FragCoord.x - gl_FragCoord.y - (fSpace * 0.5), fSpace) < fThick) {
        gl_FragColor = vec4(uLineColor, 1.0);
      }
    }
  }
`

export function Castle(props) {
  const { nodes } = useGLTF('./assets/models/Hero_BG_v05.gltf')

  const dl = useMemo(() => {
    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(0.8, 1, 0.5)
    return light
  }, [])

  const hatchMat = useMemo(() => new THREE.ShaderMaterial({
    uniforms: {
      uDirLightPos:      { value: dl.position },
      uDirLightColor:    { value: new THREE.Color(0xBCBAB5) },
      uAmbientLightColor:{ value: new THREE.Color(0x0d0d0b) },
      uLineColor:        { value: new THREE.Color(0x0d0b09) },
      uBaseColor:        { value: new THREE.Color(0xBCBAB5) },
    },
    vertexShader,
    fragmentShader,
  }), [dl])

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.CombinedCastle.geometry}   material={hatchMat} position={[-1.46, 0.499, 0.145]} rotation={[0, 1.568, 0]} />
      <mesh geometry={nodes.Landscape.geometry}        material={hatchMat} position={[0, 0, -0.053]} scale={[2, 2, 3.561]} />
      <mesh geometry={nodes.Landscape_plane.geometry}  material={hatchMat} />
      <mesh geometry={nodes.Landscape003.geometry}     material={hatchMat} position={[-8.361, -0.039, 0.157]} />
      <mesh geometry={nodes.Cylinder.geometry}         material={hatchMat} position={[1.63, 0.538, -1.007]} />
      <mesh geometry={nodes.Cylinder001.geometry}      material={hatchMat} position={[1.63, 0.443, -0.064]} />
    </group>
  )
}

useGLTF.preload('./assets/models/Hero_BG_v05.gltf')