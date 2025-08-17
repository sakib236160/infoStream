"use client";
import React from 'react';
import { Button } from '../ui/button';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const MobileMenu = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen)
  }
    return (
        <div className="lg:hidden">
          <Button onClick={toggleMenu}>
            {
              isMenuOpen ?<AiOutlineClose></AiOutlineClose> : <AiOutlineMenu />
            }
          </Button>
        </div>
    );
};

export default MobileMenu;