import Link from 'next/link'
import { ReactNode } from 'react'
import { Button, ButtonProps } from '..'

interface ButtonLinkProps extends ButtonProps {
  href: string
  children: ReactNode
}

export function ButtonLink({ children, href, ...props }: ButtonLinkProps) {
  return (
    <Link href={href} passHref legacyBehavior>
      <Button
        asAnchor
        rel={props.target === '_blank' ? 'noreferrer noopener' : undefined}
        {...props}
      >
        {children}
      </Button>
    </Link>
  )
}
