'use client'

interface ButtonProps {
  children: React.ReactNode,
  className?: string,
  onClick: () => void,
}

const Button = (props: ButtonProps) => {
  const { className, onClick } = props

  return (
    <button className={className} onClick={onClick}>
      {props.children}
    </button>
  )
}

export default Button