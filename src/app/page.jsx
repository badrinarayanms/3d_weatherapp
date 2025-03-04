'use client'
import { OrbitControls, Plane, Sky, Stars, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Buildingmodel } from "../../components/building";
import { Switch, TextField, Button } from "@mui/material"; 
import axios from "axios";

export default function Home() {
  const [night, setnight] = useState(false);
  const [location, setLocation] = useState('Chennai');  
  const [inputLocation, setInputLocation] = useState(''); 
  const [weatherData, setWeatherData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setnight(event.target.checked);
  };

 
  const handleLocationSubmit = (e) => {
    e.preventDefault();
    if (inputLocation.trim()) {
      setLocation(inputLocation);
      setLoading(true);  
    }
  };

  const pos = night ? [0, -100, 0] : [100, 10, 100];

  useEffect(() => {
    const apiKey = '521994c6afaf43499db50121250403';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [location]);  

  if (loading) {
    return <div className="flex justify-center items-center h-screen w-screen">Loading weather data...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="items-center justify-items-center  h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="absolute z-10 bg-black w-full p-4 flex justify-between items-center gap-4 mb-4">
        <div >
        <h1 className="text-lg md:text-6xl mb-2">Weather App</h1>
        <form onSubmit={handleLocationSubmit} className="flex md:gap-2">
          <TextField
            variant="outlined"
            size="small"
            placeholder="Enter location"
            value={inputLocation}
            sx={{
              backgroundColor: night ? '#333' : '#fff',
              '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: night ? '#fff' : '#1976d2',
              },
              '&:hover fieldset': {
                borderColor: night ? '#fff' : '#1565c0',
              },
              '&.Mui-focused fieldset': {
                borderColor: night ? '#fff' : '#1976d2',
              },
              },
              input: {
              color: night ? '#fff' : '#000',
              },
            }}
            onChange={(e) => setInputLocation(e.target.value)}
          />
          <Button 
            variant="contained" 
            type="submit"
            sx={{
              backgroundColor: night ? '#333' : '#1976d2',
              '&:hover': {
                backgroundColor: night ? '#444' : '#1565c0'
              }
            }}
          >
            Search
          </Button>
        </form>
        </div>
        <div className="flex-col md:flex md:flex-row  mr-2 items-center">
    <Switch
     sx={{
    // "& .MuiSwitch-thumb": {
    //   backgroundColor: night ? "green" : "red",
    // },
    "& .MuiSwitch-track": {
      backgroundColor: night ? "white" : "blue", 
    },}}
      checked={night}  
      onChange={handleChange} 
    /> <h1 className="font-bold w-full text-[0.5rem] md:text-xl">Switch to Night</h1>
    </div>
      </div>
    
    <div className="h-full w-full rounded-lg">
      <Canvas 
        camera={{
          position: [0, 50, 4],
          fov: 45,
          
        }}
      >
        <Sky
        
        sunPosition={pos}  
        inclination={0} 
        azimuth={0.25}  
      />
      {night && (<Stars
  radius={100}  
  depth={50}   
  count={5000} 
  factor={4}   
  saturation={0} 
  fade />)}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
        <Plane
        args={[600, 600]}  
        rotation={[-Math.PI / 2, 0, 0]}  
        position={[0, -10, 0]}  
      >
        <meshStandardMaterial color="gray" />
      </Plane>
          <Buildingmodel data={weatherData} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
        
      </Canvas>
    </div>
  </div>
);
}
