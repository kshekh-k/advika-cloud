
import React from 'react'

type IconProps = { 
	className?: string; // Optional Tailwind or custom classes
  };
  const  Cloudupicon: React.FC<IconProps> = ({ className }) =>{
  return (
	<div>
	 <svg viewBox="0 0 51.3333 44.2892" fill="currentColor" className={className}>	 
	<path id="path" d="M14 44.28C6.16 43.69 0 37.15 0 29.16C0 23.73 2.85 18.96 7.14 16.28C8.31 7.1 16.16 0 25.66 0C35.17 0 43.01 7.1 44.18 16.28C48.47 18.96 51.33 23.73 51.33 29.16C51.33 37.15 45.16 43.69 37.33 44.28L14 44.28ZM28 25.66L35 25.66L25.66 14L16.33 25.66L23.33 25.66L23.33 35L28 35L28 25.66Z" fillRule="nonzero"/>
</svg> 
	</div>
  )
}

export default Cloudupicon
