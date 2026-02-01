"use client"

import React, { memo } from "react"
import { motion } from "framer-motion"
import { Search, Target, Rocket, TrendingUp, Shield, ArrowRight, Sparkles } from "lucide-react"

const Methodology = memo(() => {
  const steps = [
    {
      icon: Search,
      title: "ANALYSE",
      description: "Audit complet de votre présence digitale",
      details: "Évaluation 360° de votre image publique, analyse de sentiment, identification des risques et opportunités.",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Target,
      title: "STRATÉGIE",
      description: "Plan d'action personnalisé",
      details: "Définition d'objectifs mesurables, création de roadmap sur mesure, validation avec votre équipe.",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Rocket,
      title: "EXÉCUTION",
      description: "Déploiement expert",
      details: "Mise en œuvre coordonnée des actions, gestion multi-canaux, communication proactive.",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: TrendingUp,
      title: "OPTIMISATION",
      description: "Monitoring & ajustements continus",
      details: "Suivi temps réel des performances, ajustements data-driven, rapports détaillés.",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Shield,
      title: "PROTECTION",
      description: "Veille permanente",
      details: "Surveillance continue, gestion de crise réactive, évolution stratégique adaptative.",
      color: "from-violet-500/20 to-indigo-500/20"
    }
  ]

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
      {/* Premium Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute left-1/3 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 h-[600px] w-[600px] translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-24"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 backdrop-blur-sm sm:mb-6">
            <Sparkles className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
            <span className="text-xs font-medium text-primary sm:text-sm">Méthodologie éprouvée</span>
          </div>
          
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Notre Méthodologie
          </h2>
          
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Une approche structurée en 5 phases pour garantir des résultats exceptionnels
          </p>
        </motion.div>

        <div className="mx-auto max-w-7xl">
          {/* Desktop - Horizontal flow */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Animated Connection Line */}
              <div className="absolute left-0 right-0 top-[52px] h-[2px] overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-transparent via-border to-transparent" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/60 to-transparent"
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
                  viewport={{ once: true }}
                />
              </div>
              
              <div className="relative grid grid-cols-5 gap-4 xl:gap-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.12,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="group relative"
                  >
                    {/* Card */}
                    <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-xl transition-all duration-500 hover:border-primary/30 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/10 xl:p-8">
                      {/* Gradient Overlay */}
                      <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${step.color} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />
                      
                      {/* Icon Circle */}
                      <div className="relative mb-6 flex justify-center">
                        <div className="relative">
                          <div className="flex h-[88px] w-[88px] items-center justify-center rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/20">
                            <step.icon className="h-9 w-9 text-primary transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                          </div>
                          
                          {/* Number Badge */}
                          <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-sm font-bold text-primary-foreground shadow-lg">
                            {index + 1}
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative">
                        <h3 className="mb-2 text-lg font-bold tracking-tight text-foreground xl:text-xl">
                          {step.title}
                        </h3>
                        <p className="mb-3 text-sm font-medium text-primary/90">
                          {step.description}
                        </p>
                        <p className="text-xs leading-relaxed text-muted-foreground xl:text-sm">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile & Tablet - Vertical flow */}
          <div className="space-y-4 sm:space-y-6 lg:hidden">
            {steps.map((step, index) => (
              <React.Fragment key={step.title}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-5 backdrop-blur-xl transition-all duration-500 hover:border-primary/30 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/5 sm:p-6">
                    {/* Gradient Overlay */}
                    <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${step.color} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />
                    
                    <div className="relative flex items-start gap-4 sm:gap-5">
                      {/* Icon + Number */}
                      <div className="relative flex-shrink-0">
                        <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:border-primary/40 sm:h-[72px] sm:w-[72px]">
                          <step.icon className="h-7 w-7 text-primary transition-transform duration-500 group-hover:scale-110 sm:h-8 sm:w-8" strokeWidth={1.5} />
                        </div>
                        <div className="absolute -bottom-1.5 -right-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-xs font-bold text-primary-foreground shadow-lg sm:h-8 sm:w-8 sm:text-sm">
                          {index + 1}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 pt-0.5">
                        <h3 className="mb-2 text-lg font-bold tracking-tight text-foreground sm:text-xl">
                          {step.title}
                        </h3>
                        <p className="mb-3 text-sm font-medium text-primary/90 sm:text-base">
                          {step.description}
                        </p>
                        <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Arrow Connector (except after last item) */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.1 + 0.3,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex justify-center py-1"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <ArrowRight className="h-4 w-4 rotate-90 text-primary/60" strokeWidth={2} />
                    </div>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto mt-12 text-center sm:mt-16 lg:mt-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border/30 bg-card/30 px-5 py-2.5 backdrop-blur-sm sm:px-6 sm:py-3">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            <p className="text-xs text-muted-foreground sm:text-sm">
              Processus adapté à chaque client selon ses objectifs spécifiques
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

Methodology.displayName = "Methodology"

export default Methodology