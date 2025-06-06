'use client';
import Header from '@mui/material/Header';
import Slider from '@mui/material/Slider';

export default function Home() {
  return (
    <>
      <Header className={"p-2 bg-blue-300"}>Default blue Header</Header>
      <Header className={"p-2 bg-green-600 text-green-200"}>Header using text-green-200</Header>
      {/* <Slider defaultValue={30} aria-label="Default" valueLabelDisplay="auto" /> */}
    </>
  );
}
