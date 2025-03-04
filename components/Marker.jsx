import { Image, Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber"



export const Marker=(props)=>{
    const {data} =props;
    const {viewport}= useThree();
    return(
        <group>
            {/* <Image scale={[2,2,1]} url={data.Image}/> */}
            <Text position={[-1-0.4,0]}>hello world</Text>
        </group>

    )
}