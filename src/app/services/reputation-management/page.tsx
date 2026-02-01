"use client"

import React, { memo } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Shield, Eye, AlertTriangle, TrendingUp, CheckCircle, Clock, BarChart, Zap, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const ReputationManagement = memo(() => {
  const features = [
    {
      icon: Eye,
      title: "Veille 24/7",
      description: "Surveillance continue de votre e-réputation sur tous les canaux digitaux et médias.",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Shield,
      title: "Protection Proactive",
      description: "Stratégies préventives pour anticiper et neutraliser les risques avant qu'ils ne surviennent.",
      color: "from-pink-500/20 to-purple-500/20"
    },
    {
      icon: AlertTriangle,
      title: "Gestion de Crise",
      description: "Intervention rapide et coordonnée pour minimiser l'impact des situations critiques.",
      color: "from-purple-500/20 to-violet-500/20"
    },
    {
      icon: TrendingUp,
      title: "Optimisation Positive",
      description: "Développement actif de votre image pour renforcer votre crédibilité et attractivité.",
      color: "from-pink-500/20 to-rose-500/20"
    }
  ]

  const monitoring = [
    {
      title: "Médias Sociaux",
      platforms: ["Twitter", "LinkedIn", "Instagram", "Facebook", "TikTok"],
      coverage: "Monitoring temps réel des mentions et sentiments",
      icon: Eye
    },
    {
      title: "Médias Traditionnels",
      platforms: ["Presse écrite", "TV", "Radio", "Podcasts"],
      coverage: "Veille sur les citations et couvertures médiatiques",
      icon: BarChart
    },
    {
      title: "Plateformes Spécialisées",
      platforms: ["Forums", "Blogs", "Avis clients", "Reddit"],
      coverage: "Analyse des discussions et opinions dans votre écosystème",
      icon: Sparkles
    }
  ]

  const process = [
    {
      step: "01",
      title: "Détection",
      description: "Alerte immédiate sur toute mention ou risque potentiel",
      icon: Eye
    },
    {
      step: "02",
      title: "Analyse",
      description: "Évaluation de l'impact et définition de la stratégie de réponse",
      icon: BarChart
    },
    {
      step: "03",
      title: "Action",
      description: "Mise en œuvre rapide des mesures correctives et préventives",
      icon: Zap
    },
    {
      step: "04",
      title: "Suivi",
      description: "Monitoring post-intervention et optimisation continue",
      icon: CheckCircle
    }
  ]

  const results = [
    { value: "95%", label: "Crises potentielles", subtext: "évitées" },
    { value: "+200%", label: "Sentiment positif", subtext: "amélioré" },
    { value: "< 2h", label: "Temps de réponse", subtext: "aux alertes" },
    { value: "100%", label: "Protection image", subtext: "publique" }
  ]

  const stats = [
    { value: "1000+", label: "Réputations protégées", subtext: "avec succès" },
    { value: "24/7", label: "Surveillance", subtext: "continue" },
    { value: "98%", label: "Satisfaction", subtext: "client" },
    { value: "< 15min", label: "Alerte moyenne", subtext: "détection" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-background to-background" />
          <div className="absolute left-1/3 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px]" />
          <div className="absolute bottom-0 right-1/3 h-[600px] w-[600px] translate-x-1/2 rounded-full bg-pink-500/10 blur-[120px]" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-5 py-2 backdrop-blur-sm">
              <Shield className="h-4 w-4 text-purple-500" />
              <span className="text-sm font-medium text-purple-500">Gestion de Réputation</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Protégez et améliorez
              <span className="mt-2 block bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                votre réputation
              </span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Une surveillance continue et une gestion proactive de votre image publique 
              pour maintenir une réputation irréprochable dans un monde digital.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg"
                className="group h-12 bg-gradient-to-r from-purple-500 to-pink-600 px-8 text-base font-semibold shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-purple-500/30"
                asChild
              >
                <Link href="/contact">
                  Protéger ma réputation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="h-12 border-border/50 px-8 text-base backdrop-blur-sm hover:border-purple-500/50 hover:bg-purple-500/10"
                asChild
              >
                <Link href="/services">
                  Tous les services
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.3 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="relative overflow-hidden rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent p-5 text-center backdrop-blur-sm sm:p-6"
                >
                  <div className="mb-1 text-2xl font-bold text-purple-500 sm:text-3xl lg:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mb-1 text-xs font-medium text-foreground sm:text-sm">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.subtext}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Protection complète à 360°
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Une approche multi-dimensionnelle pour protéger et valoriser votre image
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Card className="group relative h-full overflow-hidden border border-border/50 bg-card/40 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/30 hover:bg-card/60 hover:shadow-2xl hover:shadow-purple-500/10">
                    <div className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${feature.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`} />
                    
                    <CardContent className="relative flex h-full flex-col items-center p-6 text-center">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-transparent backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:border-purple-500/40">
                        <Icon className="h-7 w-7 text-purple-500 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Monitoring Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-purple-500/5 blur-[120px]" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Surveillance complète
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Monitoring temps réel sur tous les canaux où votre présence compte
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3">
            {monitoring.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Card className="h-full overflow-hidden border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20">
                          <Icon className="h-5 w-5 text-purple-500" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">
                          {item.title}
                        </h3>
                      </div>
                      <div className="mb-4 flex flex-wrap gap-2">
                        {item.platforms.map((platform, idx) => (
                          <span 
                            key={idx}
                            className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-500"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.coverage}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Notre processus d'intervention
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Une méthodologie rigoureuse pour une protection optimale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {process.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative"
                >
                  <Card className="group h-full overflow-hidden border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent backdrop-blur-xl transition-all duration-500 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10">
                    <CardContent className="flex flex-col p-6">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-600 text-base font-bold text-white shadow-lg">
                          {item.step}
                        </div>
                        <Icon className="h-6 w-6 text-purple-500" strokeWidth={1.5} />
                      </div>
                      <h3 className="mb-3 text-lg font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                  
                  {index < process.length - 1 && (
                    <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                      <ArrowRight className="h-6 w-6 text-purple-500/30" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-pink-500/5 blur-[120px]" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto mb-12 max-w-4xl text-center sm:mb-16 lg:mb-20"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Résultats garantis
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Des performances mesurables qui protègent votre image
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Card className="overflow-hidden border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:shadow-lg">
                    <CardContent className="flex items-center gap-4 p-6">
                      <CheckCircle className="h-6 w-6 flex-shrink-0 text-purple-500" strokeWidth={1.5} />
                      <div className="flex-1">
                        <div className="text-2xl font-bold text-purple-500">{result.value}</div>
                        <div className="text-sm text-foreground">{result.label}</div>
                        <div className="text-xs text-muted-foreground">{result.subtext}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="mx-auto max-w-4xl"
          >
            <div className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-card/80 via-card/50 to-background/80 p-8 backdrop-blur-xl sm:p-12 lg:p-16">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl" />
              
              <div className="relative text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2">
                  <Shield className="h-4 w-4 text-purple-500" />
                  <span className="text-sm font-medium text-purple-500">Protection 24/7</span>
                </div>

                <h2 className="mb-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                  Protégez votre image
                  <span className="mt-2 block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    dès maintenant
                  </span>
                </h2>
                
                <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Ne laissez pas votre réputation au hasard. Notre équipe d'experts 
                  veille 24/7 pour protéger et valoriser votre image publique.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button 
                    size="lg"
                    className="group h-12 bg-gradient-to-r from-purple-500 to-pink-600 px-8 text-base font-semibold shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-purple-500/30"
                    asChild
                  >
                    <Link href="/contact">
                      Démarrer la protection
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="h-12 border-purple-500/30 px-8 text-base backdrop-blur-sm hover:border-purple-500/50 hover:bg-purple-500/10"
                    asChild
                  >
                    <Link href="/portfolio">
                      Cas de succès
                    </Link>
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Surveillance continue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Intervention rapide</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Résultats garantis</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
})

ReputationManagement.displayName = "ReputationManagement"

export default ReputationManagement