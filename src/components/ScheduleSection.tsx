'use client'

import { motion } from 'framer-motion'

export default function ScheduleSection() {
  return (
    <section className="py-20 relative" id="schema">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-athletic-dark mb-6">
            Data, Tijden & Locatie
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Schedule Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 shadow-ocean"
          >
            <h3 className="text-2xl font-display font-semibold text-athletic-primary mb-6">
              📅 Planning
            </h3>

            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-athletic-dark mb-2">
                  Structuur
                </h4>
                <p>10 wekelijkse sessies van 1 uur</p>
              </div>

              <div>
                <h4 className="font-semibold text-athletic-dark mb-2">
                  Periode
                </h4>
                <p>
                  Start: Week van 27 april
                  <br />
                  Einde: Week van 29 juni
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-athletic-dark mb-4">
                  Lesmomenten
                </h4>
                <div className="space-y-3">
                  <div className="bg-gradient-ocean text-white p-4 rounded-lg">
                    <div className="font-semibold">Groep 1: Maandag</div>
                    <div className="text-sm opacity-90">07:00 - 08:00</div>
                  </div>
                  <div className="bg-gradient-ocean text-white p-4 rounded-lg">
                    <div className="font-semibold">Groep 2: Woensdag</div>
                    <div className="text-sm opacity-90">07:00 - 08:00</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3 italic">
                  Je volgt 1x per week les in dezelfde groep
                </p>
              </div>
            </div>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 shadow-ocean"
          >
            <h3 className="text-2xl font-display font-semibold text-athletic-primary mb-6">
              📍 Locatie
            </h3>

            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-athletic-dark mb-2">
                  Zwembad
                </h4>
                <p className="text-lg">Zwembad 't Zeepaardje</p>
              </div>

              <div>
                <h4 className="font-semibold text-athletic-dark mb-2">Adres</h4>
                <p>
                  Heldenplein 13
                  <br />
                  1800 Vilvoorde
                </p>
              </div>

              {/* Map */}
              <div className="mt-6">
                <h4 className="font-semibold text-athletic-dark mb-3">Kaart</h4>
                <div
                  className="relative w-full rounded-lg overflow-hidden shadow-md"
                  style={{ paddingBottom: '75%' }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2514.8521442812707!2d4.423732876545454!3d50.926452052977005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3dd55ceea6099%3A0xdb83fcabeb3ab3a0!2sStedelijk%20zwembad%20%E2%80%98t%20Zeepaardje!5e0!3m2!1snl!2sbe!4v1762466568509!5m2!1snl!2sbe"
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Locatie Zwembad 't Zeepaardje"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
