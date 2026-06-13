import { useEffect, useRef, useState } from "react"

const audiences = [
  {
    title: "Экспертам",
    description: "Записали курс, но студенты бросают на середине или оставляют плохие отзывы.",
  },
  {
    title: "Онлайн-школы",
    description: "Есть продукт, но продажи падают и не понятно, где именно теряется аудитория.",
  },
  {
    title: "Продюсеры",
    description: "Берёте курс в работу и хотите быстро понять, что нужно починить до следующего запуска.",
  },
]

export function ForWhom() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="for-whom" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p
            className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Для кого
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Кому подойдёт этот разбор
          </h2>
        </div>

        {/* Audiences */}
        <div className="space-y-0">
          {audiences.map((item, index) => (
            <div
              key={item.title}
              className={`group py-10 lg:py-14 border-t border-border last:border-b flex flex-col md:flex-row md:items-center gap-6 md:gap-16 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <h3 className="font-serif text-3xl md:text-4xl text-foreground group-hover:text-sage transition-colors duration-500 md:w-64 shrink-0">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg max-w-xl">{item.description}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}