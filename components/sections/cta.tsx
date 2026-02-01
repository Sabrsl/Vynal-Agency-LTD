"use client"

import React, { memo } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Shield, Clock, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const CTA = memo(() => {
  return (
    <section className="relative overflow-hidden section-padding">
      {/* Background gradient - Optimisé */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10" />
      
      {/* Glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute right-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl sm:h-96 sm:w-96" />
      </div>

      <div className="container relative mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Glass Card */}
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-card/80 to-background/80 p-8 backdrop-blur-xl sm:rounded-3xl sm:p-10 lg:p-12 glass-strong">
            {/* Subtle gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />
            
            <div className="relative">
              {/* Headline - Mobile First */}
              <h2 className="mb-4 responsive-text-3xl font-bold leading-tight text-foreground sm:mb-6">
                Prêt à maîtriser votre
                <span className="mt-1 block gradient-strategy sm:mt-2">
                  image publique ?
                </span>
              </h2>
              
              {/* Subtitle */}
              <p className="mb-6 responsive-text-base leading-relaxed text-muted-foreground sm:mb-8">
                Prenez le contrôle de votre réputation digitale avec une équipe 
                qui comprend les enjeux de la notoriété moderne.
              </p>

              {/* Trust Badges - Mobile Optimized */}
              <div className="mb-6 flex flex-col items-center justify-center gap-4 text-sm text-muted-foreground sm:mb-8 sm:flex-row sm:gap-6 sm:text-base">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 flex-shrink-0 text-primary sm:h-5 sm:w-5" strokeWidth={2} />
                  <span>Consultation 100% confidentielle</span>
                </div>
                <div className="hidden h-4 w-px bg-primary/30 sm:block" aria-hidden="true" />
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 flex-shrink-0 text-primary sm:h-5 sm:w-5" strokeWidth={2} />
                  <span>Réponse sous 24h</span>
                </div>
              </div>

              {/* CTA Buttons - Full width on mobile */}
              <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:justify-center sm:gap-4">
                <Link href="/contact">
                  <Button 
                    variant="luxury" 
                    size="xl" 
                    className="group w-full sm:w-auto"
                    aria-label="Demander une consultation stratégique avec notre équipe"
                  >
                    <span className="hidden sm:inline">Demander une consultation stratégique</span>
                    <span className="sm:hidden">Consultation stratégique</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="xl" 
                  className="group w-full border-primary/50 text-foreground hover:border-accent hover:bg-secondary/50 sm:w-auto"
                >
                  <FileText className="mr-2 h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
                  <span className="hidden sm:inline">Télécharger notre brochure</span>
                  <span className="sm:hidden">Notre brochure</span>
                </Button>
              </div>

              {/* Security badges */}
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground sm:gap-4 sm:text-sm">
                <span className="flex items-center gap-1.5">
                  <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  NDA systématique
                </span>
                <span className="hidden text-primary/50 sm:inline" aria-hidden="true">•</span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  Protocoles de sécurité avancés
                </span>
                <span className="hidden text-primary/50 sm:inline" aria-hidden="true">•</span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  Équipe certifiée
                </span>
              </div>
            </div>

            {/* Bottom gradient line */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
})

CTA.displayName = "CTA"

export default CTA