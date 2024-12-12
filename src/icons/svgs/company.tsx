import React from 'react'
type IconProps = { 
	className?: string; // Optional Tailwind or custom classes
  };
  const  Companyicon: React.FC<IconProps> = ({ className }) =>{
  return (
    <svg viewBox="0 0 58 58" fill="currentColor" className={className} >
    <path id="path" d="M41.08 45.91L45.91 45.91L45.91 26.58L31.41 26.58L31.41 45.91L36.25 45.91L36.25 31.41L41.08 31.41L41.08 45.91ZM7.25 45.91L7.25 9.66C7.25 8.33 8.33 7.25 9.66 7.25L43.5 7.25C44.83 7.25 45.91 8.33 45.91 9.66L45.91 21.75L50.75 21.75L50.75 45.91L53.16 45.91L53.16 50.75L4.83 50.75L4.83 45.91L7.25 45.91ZM16.91 26.58L16.91 31.41L21.75 31.41L21.75 26.58L16.91 26.58ZM16.91 36.25L16.91 41.08L21.75 41.08L21.75 36.25L16.91 36.25ZM16.91 16.91L16.91 21.75L21.75 21.75L21.75 16.91L16.91 16.91Z"  fillRule="nonzero"/> 
   </svg>
  )
}

export default Companyicon

