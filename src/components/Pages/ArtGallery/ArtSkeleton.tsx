
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

function ArtSkeleton() {
    return (
        <div className={`bg-gray-900 p-4 rounded-xl border border-zinc-700`}>
            {/* Image skeleton */}
            <div className="aspect-square mb-4 rounded-lg overflow-hidden">
                <Skeleton className="w-full h-full bg-gray-800" />
            </div>

            {/* Text content skeleton */}
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-32 bg-gray-700" />
                </div>

                <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-48 bg-gray-700" />
                </div>

                <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-20 bg-gray-700" />
                </div>
            </div>
        </div>
    )
}

export default ArtSkeleton