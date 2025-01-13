import Image from 'next/image'
import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function SearchCardDetailed({ title, image, year, genre, rating }) {
  return (
    <Card className="bg-zinc-900/90 border-zinc-800 hover:border-zinc-700 transition-colors">
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="relative h-[120px] w-[80px] flex-shrink-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded"
              sizes="80px"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium truncate">{title}</h3>
            <div className="mt-2 text-sm text-zinc-400 space-y-1">
              <p>{year}</p>
              <p>{genre}</p>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

