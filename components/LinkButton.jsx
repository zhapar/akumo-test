import cn from 'classnames'
import Link from 'next/link'

export default function LinkButton({ href, className, children }) {
  return (
    <Link href={href}>
      <a className={cn('btn px-6 py-2', className)}>{children}</a>
    </Link>
  )
}
