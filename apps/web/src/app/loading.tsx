import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <main className="flex flex-col min-h-screen justify-start items-center">
      <section className="mt-28 max-w-screen-lg px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Skeleton className="w-48 h-24" />
        <Skeleton className="w-48 h-24" />
        <Skeleton className="w-48 h-24" />
      </section>
    </main>
  )
}