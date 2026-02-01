"use client"

import React, { memo } from "react"
import { motion } from "framer-motion"
import { Star, Quote, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const Testimonials = memo(() => {
  const testimonials = [
    {
      role: "CEO, Secteur Tech",
      content: "Vynal Agency a transformé ma présence digitale. Positionnement thought leader atteint avec invitations TEDx et couvertures dans les médias les plus prestigieux.",
      rating: 5,
      highlight: "TEDx Speaker"
    },
    {
      role: "Athlète professionnel international",
      content: "Lancement de mon personal brand réussi au-delà des attentes. +2M followers organiques et contrats de partenariats majeurs obtenus.",
      rating: 5,
      highlight: "+2M Followers"
    },
    {
      role: "Artiste multi-platine",
      content: "Reconstruction d'image maîtrisée après controverse médiatique. +340% de sentiment positif en 6 mois, carrière relancée.",
      rating: 5,
      highlight: "+340% Impact"
    }
  ]

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
      {/* Premium Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-16 lg:mb-20"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 backdrop-blur-sm sm:mb-6">
            <Sparkles className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
            <span className="text-xs font-medium text-primary sm:text-sm">Témoignages clients</span>
          </div>
          
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Ils nous font confiance
          </h2>
          
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Des résultats qui parlent d'eux-mêmes pour des personnalités qui comptent
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <Card className="relative h-full overflow-hidden border border-border/50 bg-card/50 backdrop-blur-xl transition-all duration-500 hover:border-primary/30 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/10">
                {/* Gradient Accent */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                
                <CardContent className="relative flex h-full flex-col p-6 sm:p-7 lg:p-8">
                  {/* Quote Icon */}
                  <div className="mb-5 flex items-start justify-between">
                    <Quote 
                      className="h-8 w-8 text-primary/60 transition-all duration-500 group-hover:scale-110 group-hover:text-primary sm:h-10 sm:w-10" 
                      strokeWidth={1.5} 
                    />
                    
                    {/* Highlight Badge */}
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {testimonial.highlight}
                    </span>
                  </div>
                  
                  {/* Rating */}
                  <div className="mb-5 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-4 w-4 fill-yellow-400 text-yellow-400 transition-transform duration-300 group-hover:scale-110 sm:h-4.5 sm:w-4.5" 
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="mb-6 flex-1 text-[15px] leading-relaxed text-muted-foreground sm:text-base sm:leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Footer */}
                  <div className="border-t border-border/50 pt-5">
                    <p className="mb-1.5 text-sm font-semibold text-foreground sm:text-base">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-muted-foreground/60 sm:text-sm">
                      Nom confidentiel
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto mt-12 text-center sm:mt-16 lg:mt-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border/30 bg-card/30 px-5 py-2.5 backdrop-blur-sm sm:px-6 sm:py-3">
            <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <p className="text-xs text-muted-foreground sm:text-sm">
              100% de nos clients bénéficient d'accords de confidentialité (NDA)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

Testimonials.displayName = "Testimonials"

export default Testimonials