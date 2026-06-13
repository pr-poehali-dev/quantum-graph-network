import { useEffect, useRef, useState } from "react"

export function Philosophy() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="philosophy" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <p
          className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Об эксперте
        </p>

        <h2
          className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-foreground mb-10 text-balance transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Диагноз, а не
          <span className="italic"> советы</span>
        </h2>

        <div
          className={`space-y-6 text-muted-foreground leading-relaxed max-w-2xl mx-auto text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p>6 лет в крупном EdTech — множество отсмотренных курсов, десятки точек потерь, которые повторяются снова и снова. 
Знаю, где студенты уходят и почему продажи не растут.</p>
          <p>ChatGPT даст усреднённые советы. Я отдаю конкретный диагноз по вашим материалам:</p>
          <ul className="space-y-2 list-none inline-block text-left">
            <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />главная причина проблемы</li>
            <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />3–5 исправлений по приоритетам</li>
            <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />чёткий план — что чинить первым</li>
          </ul>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p className="font-serif text-4xl md:text-5xl text-sage">6</p>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mt-3">Лет в EdTech</p>
          </div>
          <div>
            <p className="font-serif text-4xl md:text-5xl text-sage">+10</p>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mt-3">п.п. к удержанию</p>
          </div>
          <div>
            <p className="font-serif text-4xl md:text-5xl text-sage">−80%</p>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mt-3">Негативных отзывов</p>
          </div>
        </div>
      </div>
    </section>
  )
}