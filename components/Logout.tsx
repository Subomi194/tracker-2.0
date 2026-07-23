import React from 'react'
import { signOut } from '@/app/auth/actions';

type LogoutProps = {
  className?: string
  children?: React.ReactNode
  title?: string
}

const Logout = ({ className, children, title }: LogoutProps) => {
  return (
    <form action={signOut}>
      <button
        type='submit'
        title={title}
        className={className ?? 'bg-blush-light text-rose-deep px-4 py-1.5 rounded-full text-sm hover:bg-blush-light-hover transition'}
      >
        {children ?? 'Logout'}
      </button>
    </form>
  )
}

export default Logout