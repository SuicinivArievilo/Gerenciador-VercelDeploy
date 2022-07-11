import React from 'react';
import { styled, keyframes} from '@stitches/react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import LinkNX from '../LinkNX';


const slideDown = keyframes({
    '0%': { opacity: 0, transform: 'translateY(-10px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  });
  
  const slideUp = keyframes({
    '0%': { opacity: 0, transform: 'translateY(10px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  });

const StyledContent = styled(DropdownMenuPrimitive.Content, {
  minWidth: 200,
  backgroundColor:  '#023160',
  borderRadius: 6,
  padding: 10,
  animationDuration: '0.6s',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  animationFillMode: 'forwards',
  '&[data-side="top"]': { animationName: slideUp },
  '&[data-side="bottom"]': { animationName: slideDown },
    },
)
const itemStyles = {
  all: 'unset',
  fontSize: 16,
  lineHeight: 1,
  color: "white",
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 50,
  position: 'relative',
  paddingLeft: 5,
  userSelect: 'none',
  '&[data-disabled]': {
    backgroundColor: '#023160',
    pointerEvents: 'none',
  },

  '&:focus': {
    backgroundColor: '#023160',
    backgroundColor: '#023160',
  },
};

const StyledItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles });

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = StyledContent;
export const DropdownMenuItem = StyledItem;


const IconButton = styled('button', {
  borderRadius: '100%',
  height: 60,
  width: 60,
  position: 'fixed',
  left: '82%',
  bottom: '2%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: "white" ,
  backgroundColor: '#023160',
  '&:focus': { boxShadow: `0 0 0 2px` },
  
});

export const BotaoEvento = () => {

  return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <IconButton>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="25.000000pt" height="25.000000pt" viewBox="0 0 50.000000 50.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
fill="#FFFFFF" stroke="none">
<path d="M50 290 c-11 -11 -20 -29 -20 -40 0 -26 34 -60 60 -60 26 0 60 34 60
60 0 26 -34 60 -60 60 -11 0 -29 -9 -40 -20z"/>
<path d="M210 290 c-11 -11 -20 -29 -20 -40 0 -26 34 -60 60 -60 26 0 60 34
60 60 0 11 -9 29 -20 40 -11 11 -29 20 -40 20 -11 0 -29 -9 -40 -20z"/>
<path d="M370 290 c-11 -11 -20 -29 -20 -40 0 -11 9 -29 20 -40 11 -11 29 -20
40 -20 26 0 60 34 60 60 0 11 -9 29 -20 40 -11 11 -29 20 -40 20 -11 0 -29 -9
-40 -20z"/>
</g>
</svg>


          </IconButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
          <LinkNX hrefLink="/registroEvento" nomeLink="Novo Evento"/>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <LinkNX hrefLink="/registroEvento" nomeLink="Sair"/>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  );
};

export default BotaoEvento;
