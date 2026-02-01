"use client"

import React, { memo } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Shield, Globe, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Hero = memo(() => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background gradient - Optimisé */}
      <div className="pointer-events-none absolute inset-0 bg-luxury-gradient" />
      
      {/* Subtle animated background elements - GPU Optimized */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent/5 blur-3xl sm:h-96 sm:w-96" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto container-padding py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mx-auto max-w-5xl"
        >
          {/* Logo/Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 flex justify-center sm:mb-8"
          >
            <div className="rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 p-3 backdrop-blur-sm sm:p-4">
              <Shield className="h-10 w-10 text-primary sm:h-12 sm:w-12" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Headline - Mobile First Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 responsive-text-4xl font-bold leading-tight text-foreground sm:mb-6"
          >
            Nous façonnons
            <span className="mt-2 block gradient-strategy">
              l'influence publique
            </span>
          </motion.h1>

          {/* Subtitle - Responsive */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mb-8 max-w-3xl responsive-text-base leading-relaxed text-muted-foreground sm:mb-10"
          >
            Agence internationale de gestion d'image digitale 
            pour personnalités publiques et leaders d'opinion
          </motion.p>

          {/* CTA Buttons - Mobile First */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <Link href="/contact">
              <Button 
                variant="luxury" 
                size="xl" 
                className="group w-full sm:w-auto"
                aria-label="Demander une consultation confidentielle avec notre équipe"
              >
                <span className="hidden sm:inline">Demander une consultation confidentielle</span>
                <span className="sm:hidden">Consultation confidentielle</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="xl" 
              className="w-full border-primary/50 text-foreground hover:border-accent hover:bg-secondary/50 sm:w-auto"
            >
              Découvrir notre approche
            </Button>
          </motion.div>

          {/* Trust indicators - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-col items-center justify-center gap-4 text-sm text-muted-foreground sm:mt-16 sm:flex-row sm:gap-6 md:gap-8 md:text-base"
          >
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 flex-shrink-0 text-primary" strokeWidth={2} />
              <span>Confidentialité absolue</span>
            </div>
            <div className="hidden h-4 w-px bg-primary/30 sm:block" aria-hidden="true" />
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 flex-shrink-0 text-primary" strokeWidth={2} />
              <span>Équipe internationale</span>
            </div>
            <div className="hidden h-4 w-px bg-primary/30 sm:block" aria-hidden="true" />
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 flex-shrink-0 text-primary" strokeWidth={2} />
              <span>Résultats mesurables</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - Optimisé et caché sur mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 transform sm:bottom-8 md:block"
        aria-hidden="true"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border border-primary/50">
          <motion.div 
            className="mt-2 h-3 w-1 rounded-full bg-primary"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  )
})

Hero.displayName = "Hero"

export default Hero