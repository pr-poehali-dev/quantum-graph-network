export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} EdDiagnos. Все права защищены.
          </p>
          <p className="text-xs text-muted-foreground">Результат через 1–2 рабочих дня</p>
        </div>
      </div>
    </footer>
  )
}