import Image from 'next/image'

interface ServiceCardTypes {
  icon: string
  title: string
  shortDescription: string
  stack?: string[]
}

const ServiceCard: React.FC<ServiceCardTypes> = ({ title, shortDescription, icon, stack = [] }) => {
  return (
    <div className="bg-secondary border-border group flex h-full flex-col gap-5 rounded-2xl border p-6 transition-transform duration-200 hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <div className="bg-primary text-accent flex size-12 items-center justify-center rounded-xl">
          <Image src={icon} alt={title} className="size-7" />
        </div>
        <div>
          <h5 className="text-primary-content text-lg font-semibold">{title}</h5>
          <p className="text-tertiary-content mt-2 text-sm leading-6">{shortDescription}</p>
        </div>
      </div>
      {stack.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="bg-primary border-border text-primary-content rounded-full border px-3 py-1 text-xs">
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default ServiceCard
