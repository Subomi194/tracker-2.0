import Link from 'next/link'
import { ChevronLeft, Sparkles, Heart, Users, Zap, Star, BookOpen, Clock, Package } from 'lucide-react'

function AboutPage() {
  return (
    <div className="min-h-screen bg-cream font-sans">
      {/* Nav */}
      <nav className="bg-cream/95 backdrop-blur-md border-b border-blush-border px-6 py-4 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5 text-ink-muted hover:text-rose-deep transition-colors text-sm">
            <ChevronLeft className="w-4 h-4" /> Back
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-rose-deep flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-cream" />
            </div>
            <span className="font-serif font-bold text-rose-deep">Hair Routine Tracker</span>
          </div>
          <Link href="/register" className="bg-rose-deep text-cream px-5 py-2 rounded-full text-sm font-semibold hover:bg-rose-mid transition-colors">
            Get started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="bg-rose-deep py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-pink-accent text-xs font-bold uppercase tracking-widest mb-5">About</p>
          <h1 className="font-serif text-5xl text-cream font-bold leading-tight mb-6">
            The hair journal that actually makes a difference
          </h1>
          <p className="text-blush-light text-xl leading-relaxed">
            Built for anyone who has ever stared at a shelf of products and thought: <em className="italic text-cream/90">which one actually worked?</em>
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">
        {/* Problem */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-pink-accent text-xs font-bold uppercase tracking-widest mb-4">The problem we solve</p>
            <h2 className="font-serif text-3xl text-ink font-bold mb-4">Thousands of products. No way to know what works.</h2>
            <p className="text-ink-muted leading-relaxed mb-4">
              There are thousands of hair products on the market and an overwhelming amount of advice online. Most people buy products based on recommendations but have no way to know whether those products are working for their specific hair.
            </p>
            <p className="text-ink-muted leading-relaxed">
              People forget when they last washed, moisturised, or treated their hair. There is no easy way to track how long a protective style has been in. Existing apps are either too generic or too social to serve as a structured hair journal.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1653784097013-786a8965ea3b?w=500&h=380&fit=crop&auto=format"
            alt="Hair care products"
            className="w-full h-64 object-cover rounded-2xl bg-blush-light"
          />
        </div>

        {/* Vision */}
        <div className="bg-rose-deep rounded-3xl p-10">
          <p className="text-pink-accent text-xs font-bold uppercase tracking-widest mb-4">Our vision</p>
          <h2 className="font-serif text-3xl text-cream font-bold mb-4">The go-to companion for anyone serious about their hair health</h2>
          <p className="text-blush-light leading-relaxed">
            Making it effortless to track, reflect, and improve your hair care journey over time. Whether you have 4C coils, fine wavy hair, locs, or straight hair — this is for you. Hair Routine Tracker celebrates every texture, every background, and every hair journey.
          </p>
        </div>

        {/* Who it's for */}
        <div>
          <h2 className="font-serif text-3xl text-ink font-bold mb-8 text-center">Who it&apos;s for</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: <Heart className="w-5 h-5" />, title: 'Natural hair enthusiasts', body: 'Coils, curls, locs, afros — anyone with a structured hair care routine they want to understand.' },
              { icon: <Users className="w-5 h-5" />, title: 'All genders', body: 'Hair care is for everyone. No gatekeeping here. Track what you do and what works.' },
              { icon: <Zap className="w-5 h-5" />, title: 'Hair recovery journeys', body: 'Post-bleach damage, postpartum hair loss, alopecia management — log it all.' },
              { icon: <Star className="w-5 h-5" />, title: 'Intentional care seekers', body: 'Anyone who wants to understand their hair better, regardless of texture or background.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-blush-border hover:shadow-sm transition-shadow">
                <div className="w-10 h-10 bg-blush-light rounded-xl flex items-center justify-center text-rose-deep shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-ink mb-1">{item.title}</p>
                  <p className="text-sm text-ink-muted leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MVP features */}
        <div className="bg-blush-light/60 rounded-3xl p-10">
          <p className="text-pink-accent text-xs font-bold uppercase tracking-widest mb-6">What's included now</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: <BookOpen className="w-5 h-5" />, title: 'Log Routines', body: 'Record routine type, date, products used, and personal notes in under 2 minutes.' },
              { icon: <Clock className="w-5 h-5" />, title: 'View History', body: 'Full timeline of every entry, grouped by month, newest first.' },
              { icon: <Package className="w-5 h-5" />, title: 'Product Library', body: 'Save products once, tag them instantly. Search and filter your library.' },
            ].map((f, i) => (
              <div key={i}>
                <div className="w-10 h-10 bg-rose-deep rounded-xl flex items-center justify-center text-cream mb-3">{f.icon}</div>
                <h3 className="font-semibold text-ink mb-1">{f.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pb-8">
          <h2 className="font-serif text-3xl text-ink font-bold mb-4">Ready to start your hair journey?</h2>
          <Link href="/register" className="inline-block bg-rose-deep text-cream px-8 py-4 rounded-full font-semibold hover:bg-rose-mid transition-colors hover:shadow-lg">
            Create your account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutPage