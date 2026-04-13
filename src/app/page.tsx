export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-navy-700 text-white">
      <div className="text-center space-y-6 p-8">
        <div className="text-5xl font-bold tracking-wider text-primary-400">
          LARSOON
        </div>
        <h1 className="text-2xl font-light text-white/80">
          Solarne elektrane za kućanstva i industriju
        </h1>
        <p className="text-white/50 text-sm">
          Stranica je u izradi — uskoro dolazi potpuno novo iskustvo.
        </p>
        <div className="inline-flex items-center gap-2 bg-primary-400/10 border border-primary-400/20 rounded-full px-6 py-3 text-primary-400 text-sm">
          <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
          U izradi
        </div>
      </div>
    </main>
  );
}
