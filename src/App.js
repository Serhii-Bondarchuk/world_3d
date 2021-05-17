import React, { useEffect } from 'react'
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stars, Cloud, RoundedBox } from '@react-three/drei';
import { Physics, useBox, usePlane } from '@react-three/cannon'

import Text from './components/Text'
import Manual from './components/Manual'

function Box() {

    const [ref, api] = useBox(() => {
        return {
            mass: 1,
            position: [0, 10, 0]
        }
    })

    // onClick = { () => {
    //                  console.log('click')         
    //              api.velocity.set(0.1,5,0.1)
    //          } }




    return (

        <mesh 
onClick = { () => {
                        
             api.velocity.set(0.1,5,0.1)
         } }
           
           onPointerDown = { () => {
                  
             api.velocity.set(0.1,5,0.1)
         } }

           ref = {ref} position = { [0,10,0]}  >
            <boxBufferGeometry attach ="geometry"  />
             <meshLambertMaterial attach="material" color="gold"  />                         

         </mesh>

    )
}


function Plane(props) {

    const [ref, api] = usePlane(() => {

        return {
            rotation: [-Math.PI / 2, 0, 0]
        }
    })


    return (
        <mesh      className='plane'  rotation = {[-Math.PI/2, 0, 0 ]} >
            <planeBufferGeometry attach ="geometry" args = {[15,15]} />
             <meshLambertMaterial attach="material" color="blue"   />                         
         
         </mesh>

    )
}


export default function App() {


    useEffect(() => {
        let z = document.querySelector('.can')

        z.style.border = 'dashed'
        setTimeout(() => {

            z.style.border = 'none'

        }, 12000)

    })



    return (

        <React.Fragment>
            <Text  />
            <Manual  /> 
            <Canvas className ='can'  >
       
            <OrbitControls   />
            
              <Stars />
           
            <ambientLight  intensity = {0.5}  />
 
            <spotLight
              position = {[10,15,10]}  angle={0.9}/>

         
              <Physics>
               <Cloud position = {[7,12,0]} />
                <Box    />
                <Plane  />
             </Physics>
          </Canvas>

        </React.Fragment>
    )
}