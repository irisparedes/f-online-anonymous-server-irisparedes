'use strict';

const menuTrigger = document.querySelector('.nav-trigger');
const menu = document.querySelector('.nav');
const menuClose = document.querySelector('.nav-close');

const handleMenu = () => {
  menu.classList.toggle('show');
  menuTrigger.classList.toggle('hide');
} 

menuTrigger.addEventListener('click', handleMenu);
menuClose.addEventListener('click', handleMenu);
