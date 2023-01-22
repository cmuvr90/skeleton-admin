import React from 'react'
import Link from 'next/link';

export const NextLink = ({href, url, external, children, ...rest}) => {
  return <Link href={url} {...rest}>
    {children}
  </Link>
}

