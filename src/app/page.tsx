
import Image from "next/image";
import Board from "./components/Board";
import React from 'react'

export default function Home() {
  return (
    
    <div >
      <div className="	font-style: italic text-4xl text-center p-10 ">Tic Tac Toe Game</div>
      <Board />
    </div>
    
  )
}
