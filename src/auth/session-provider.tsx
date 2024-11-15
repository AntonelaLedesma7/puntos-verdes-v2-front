'use client'

import { SessionProvider as Provider } from "next-auth/react"


export default function SessionProvider({
    children,
  }: Readonly<{
    children: React.ReactNode
  }>) {
    return (
    <Provider>
        {children}
    </Provider> 
    )
}