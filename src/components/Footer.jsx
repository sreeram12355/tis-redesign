import Reveal from './Reveal.jsx'

export default function Footer() {
  return (
    <footer id="enquire" className="mt-16 bg-[#10213f] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="max-w-3xl font-display text-2xl font-extrabold sm:text-4xl">Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust to impart education through seamless opportunities.</p>
        </Reveal>
        <Reveal i={2}>
          <div className="mt-14 grid gap-8 text-white/80 md:grid-cols-3">
            <div><h3 className="mb-2 font-semibold text-gold">Contact Us.</h3><a href="tel:+91-9837983791">Admission Helpline No. +91-98379 83791</a><br /><a href="mailto:info@tis.edu.in">info@tis.edu.in</a></div>
            <address className="not-italic">Tulas International School Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)</address>
            <div>Landline No. <a href="tel:0135-2699444">0135-2699444</a>, <a href="tel:0135-2699666">0135-2699666</a></div>
          </div>
        </Reveal>
        <p className="mt-16 text-sm text-white/50">Copyright © 2026 Tulas International School, Dehradun | All Rights Reserved</p>
      </div>
    </footer>
  )
}
