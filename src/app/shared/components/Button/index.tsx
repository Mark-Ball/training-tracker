'use client'

import clsx from 'clsx'

interface ButtonProps {
  children: React.ReactNode,
  className?: string,
  onClick: () => void,
}

const Button = (props: ButtonProps) => {
  const { className, onClick } = props

  return (
    <button
      className={clsx(
        "border border-slate-900 rounded-lg",
        "p-2 mt-4",
        "bg-green-600 text-white",
        "hover:bg-green-700",
        className,
      )}
      onClick={onClick}
    >
      {props.children}
    </button>
  )
}

export default Button