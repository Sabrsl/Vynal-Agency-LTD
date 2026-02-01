"use client"

import React, { memo } from "react"
import { motion } from "framer-motion"
import { Globe, Lock, BarChart, Award } from "lucide-react"

const About = memo(() => {
  const features = [
    {
      icon: Lock,
      title: "Confidentialité garantie",
      description: "NDA systématique et protocoles de sécurité absolus"
    },
    {
      icon: Globe,
      title: "Équipe internationale",
      description: "Présence à Paris, Londres et NYC pour une couverture globale"
    },
    {
      icon: BarChart,
      title: "Approche data-driven",
      description: "Stratégies basées sur l'analyse et les résultats mesurables"
    },
    {
      icon: Award,
      title: "Excellence reconnue",
      description: "Des résultats prouvés avec les personnalités les plus exigeantes"
    }
  ]

  return (
    <section className="relative overflow-hidden bg-background section-padding">
      {/* Subtle background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/3 h-64 w-64 rounded-full bg-blue-night/10 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute bottom-1/3 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl sm:h-96 sm:w-96" />
      </div>

      <div className="container relative mx-auto container-padding">
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-12 text-center sm:mb-16 lg:mb-20"
        >
          <h2 className="mb-4 responsive-text-3xl font-bold text-foreground sm:mb-6">
            Qui sommes-nous ?
          </h2>
          <p className="mx-auto max-w-4xl responsive-text-base leading-relaxed text-muted-foreground">
            Vynal Agency est une agence internationale haut de gamme spécialisée dans la gestion stratégique 
            de l'image digitale pour les personnalités publiques. Avec une expertise reconnue et une portée 
            mondiale, nous transformons votre présence digitale en un actif stratégique mesurable.
          </p>
        </motion.div>

        {/* Why Vynal Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <h3 className="mb-10 responsive-text-2xl font-bold text-foreground sm:mb-12 lg:mb-16">
            Pourquoi Vynal ?
          </h3>
          
          {/* Features Grid - Mobile First */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.1 * index,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="group text-center"
                >
                  {/* Icon Container */}
                  <div className="relative mx-auto mb-4 inline-flex sm:mb-5">
                    {/* Glow effect on hover */}
                    <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-30" />
                    
                    {/* Icon background */}
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:from-secondary/30 group-hover:to-primary/30 sm:h-16 sm:w-16">
                      <Icon 
                        className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-accent sm:h-8 sm:w-8" 
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="mb-2 text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-accent sm:mb-3 sm:text-xl">
                    {feature.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
})

About.displayName = "About"

export default About