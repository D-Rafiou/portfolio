export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground/60">
          <p className="font-mono text-xs">
            Rafiou Diallo · {new Date().getFullYear()}
          </p>
          <p className="text-xs">
          </p>
        </div>
      </div>
    </footer>
  )
}
