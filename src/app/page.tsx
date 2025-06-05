'use client';
import Header from '@mui/material/Header';

export default function Home() {
  return (
    <>
      <Header className={"p-2 bg-blue-300"}>Default blue Header</Header>
      <Header className={"p-2 bg-green-600 text-green-200"}>Header using text-green-200</Header>
    </>
  );
}
