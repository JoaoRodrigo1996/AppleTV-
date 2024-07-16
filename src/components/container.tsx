import { ComponentProps, ReactNode } from "react"
import { twMerge } from 'tailwind-merge'

type ContainerProps = ComponentProps<'div'> & {
  children: ReactNode
}

export function Container({ children, className, ...props }: ContainerProps){
  return (
    <div 
      className={twMerge("mx-auto max-w-[980px] px-6", className)} 
      {...props}
    >
      {children}
    </div>
  )
}
