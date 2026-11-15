import React from "react";

const storyParagraphs = [
  "Kids, if you ask your grandparents, they’ll tell you the story of how Nidhi and I met begins with a classic, time-tested institution: the Indian arranged marriage setup. Specifically, a profile forwarded by a relative from my dad’s side—because as it turned out, your mom and I were already very distantly related.",
  "Usually, those biodata PDFs read like a cross between a tax form and a LinkedIn resume. Wait for it... ours was different. The moment I opened Nidhi’s profile, two things jumped off the page: her relentless drive to keep leveling up by pursuing her M.Tech, and her deep love for music. Ambitious and artistic? I hadn’t even met her yet, and I was already a fan.",
  "Now, every great love story needs a legendary first date. Ours... was a logistical disaster. I picked Silaa for our very first meeting. Big mistake. Huge. Picture two people trying to discuss life goals, core values, and future expectations while screaming over pleasant yet loud Kannada music. We salvaged the evening by walking over to a nearby theatre to catch a live drama. Watching how completely absorbed she was in the play, I was genuinely impressed. We barely got to talk, but a spark had officially been lit.",
  "What followed was the “Slow Burn” era: intermittent phone calls and the occasional WhatsApp text. Brief, polite, limited. Yet somehow, in the quiet spaces between those messages, I found myself falling for her a little more each day. I knew I needed a rematch—a real date where we could actually hear each other speak.",
  "So, I put on my best planner hat and curated The Ultimate Day. Act I: couple’s pizza-making to test our teamwork under cheesy, flour-covered pressure. Spoiler: we passed. Act II: a movie at the theatre. Act III: a quiet, romantic dinner to seal the deal.",
  "It was a flawless plan. Until right before Act III, when the universe threw us a curveball: Nidhi suddenly fell ill. Romantic candlelit dinner? Cancelled. Immediately. In that moment, the carefully curated itinerary went out the window, and real life took over. I parked and abandoned my two-wheeler right there in Koramangala, hailed a cab, and made sure she got safely back to her PG to rest. Only after I knew she was okay did I cab all the way back to Koramangala to rescue my bike and make the long late-night ride back home to Whitefield.",
  "Funny how things work, isn’t it? The date didn’t go according to plan at all, yet it gave us everything we needed. Seeing how safe, happy, and comfortable she felt with me through the chaos—and realizing how effortlessly natural it felt to take care of her—locked it in for me. That late night riding back to Whitefield, I knew she wasn’t just a choice; she was the choice.",
  "After that night, the floodgates opened. The brief texts turned into endless, effortless conversations. Before long, we were recording our very first couple’s video together—guitar strumming, voices blending, finally making the music we couldn’t hear over on our first date.",
  "Soon, a little thing like geography couldn’t keep us apart. I started racking up miles, flying back and forth from Mumbai to Bengaluru just to steal a few hours with her. Every boarding pass, every cab ride through Bengaluru traffic, and every strum of the guitar gave me absolute clarity.",
  "And that, everyone, is how a distant relative’s text, a loud restaurant, a half-eaten pizza, and a stranded bike in Koramangala led me straight to the love of my life. And kids, that is how I met your mother."
];

export const OurLoveStory = () => (
  <section id="love-story" className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white tracking-wide">Our love story</h2>
      <p className="text-xs uppercase tracking-[0.3em] text-amber-300 mt-2">Harshith’s story</p>
      <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-2 opacity-70" />
    </div>
    <article className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-slate-950 via-[#0F4C81]/20 to-slate-950 border border-[#D4AF37]/30 shadow-2xl">
      <div className="max-w-4xl mx-auto space-y-5 text-sm sm:text-base text-slate-200/90 leading-8">
        <h3 className="font-playfair text-2xl sm:text-3xl text-amber-200">How I met your mother</h3>
        {storyParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </article>
  </section>
);
