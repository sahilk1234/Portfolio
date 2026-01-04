import { Testimonial } from '@/lib/types'
import { isInViewport } from '@/utils'
import { LinkedIn } from '@/utils/icons'
import Image from 'next/image'
import { FC, useEffect, useRef } from 'react'

interface TestimonialCardProps {
  testimonial: Testimonial
  handleActiveCard: () => void
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  testimonial: { name, title, feedback, image },
  handleActiveCard,
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  useEffect(() => {
    let observer: IntersectionObserver

    if (cardRef.current) {
      observer = isInViewport(cardRef.current, handleActiveCard)
    }

    return () => {
      observer?.disconnect()
    }
  }, [cardRef.current])

  return (
    <div
      ref={cardRef}
      className="bg-secondary border-border flex h-[360px] w-[320px] shrink-0 flex-col gap-4 rounded-2xl border p-5 sm:h-[380px] sm:w-[360px]">
      <div className="text-accent flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
        <LinkedIn className="size-4" />
        <span>LinkedIn Recommendation</span>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto pr-2">
        <p className="text-neutral text-sm leading-7 before:content-['“'] after:content-['”']">
          {feedback}
        </p>
      </div>
      <div className="border-border mt-auto flex items-center gap-3 border-t pt-4">
        {image ? (
          <Image src={image} alt={name} width={48} height={48} className="size-12 rounded-full" />
        ) : (
          <div className="bg-primary text-primary-content flex size-12 items-center justify-center rounded-full text-sm font-semibold">
            {initials}
          </div>
        )}
        <div>
          <p className="text-neutral font-semibold">{name}</p>
          {title && <p className="text-tertiary-content text-sm">{title}</p>}
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
