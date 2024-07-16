import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"
import { twMerge } from 'tailwind-merge'

const buttonVariants = tv({
  base: 'bg-white text-textBlack rounded-full font-medium',
  variants: {
    size: {
      small: 'text-xs px-3 py-1',
      medium: 'text-sm px-6 py-3',
      large: 'text-lg py-5 px-8'
    }
  },

  defaultVariants: {
    size: 'small'
  }
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  children: ReactNode
}

export function Button({ children, size, className, ...props }: ButtonProps){
  return (
    <button
      className={twMerge(buttonVariants({ size }), className)}
      {...props}
    >{children}</button>
  )
}
