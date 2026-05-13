type Props = { eyebrow?: string; title: string; sub?: string; image?: string };
export function PageHeader({ eyebrow, title, sub, image }: Props) {
  return (
    <section className="relative overflow-hidden">
      {image && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-primary/60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-28 text-white">
        {eyebrow && (
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/85">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold max-w-3xl leading-tight">{title}</h1>
        {sub && <p className="mt-4 text-white/80 max-w-2xl">{sub}</p>}
      </div>
    </section>
  );
}
