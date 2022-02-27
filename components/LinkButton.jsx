import { forwardRef } from 'react'
import cn from 'classnames'
import Link from 'next/link'

const LinkButton = forwardRef(({ href, className, children }, ref) => {
  return (
    <Link href={href} ref={ref}>
      <a className={cn('btn px-6 py-2', className)}>{children}</a>
    </Link>
  )
})
LinkButton.displayName = 'Link Button component'

export default LinkButton
