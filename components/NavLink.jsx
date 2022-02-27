import { forwardRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const cn = 'px-5 py-4 text-sm hover:text-white transition uppercase font-lato'

const ActiveLink = forwardRef(
  (
    {
      children,
      className,
      activeClassName = 'text-primary pointer-events-none',
      ...props
    },
    ref
  ) => {
    const { asPath } = useRouter()

    // pages/index.js will be matched via props.href
    // pages/about.js will be matched via props.href
    // pages/[slug].js will be matched via props.as
    const fullClassName =
      asPath === props.href || asPath === props.as
        ? `${cn} ${className} ${activeClassName}`.trim()
        : `${cn} text-light ${className}`

    return (
      <Link {...props} ref={ref}>
        <a className={fullClassName}>{children}</a>
      </Link>
    )
  }
)
ActiveLink.displayName = 'Active Link'

export default ActiveLink
