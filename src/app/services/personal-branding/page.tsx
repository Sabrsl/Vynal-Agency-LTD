"use client"

import React, { memo } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Target, Users, TrendingUp, Award, CheckCircle, Star, Zap, Sparkles, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const PersonalBranding = memo(() => {
  const benefits = [
    {
      icon: Target,
      title: "Positionnement Stratégique",
      description: "Identification de votre niche et développement d'un positionnement unique qui vous distingue de la concurrence.",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Users,
      title: "Connexion Authentique",
      description: "Création d'une relation profonde avec votre audience grâce à une communication transparente et authentique.",
      color: "from-cyan-500/20 to-blue-500/20"
    },
    {
      icon: TrendingUp,
      title: "Croissance Mesurable",
      description: "Développement de votre influence avec des indicateurs clés de performance suivis et optimisés.",
      color: "from-blue-500/20 to-sky-500/20"
    },
    {
      icon: Award,
      title: "Reconnaissance d'Expertise",
      description: "Établissement de votre statut d'expert dans votre domaine et obtention de opportunités prestigieuses.",
      color: "from-cyan-500/20 to-teal-500/20"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Audit de marque",
      description: "Analyse complète de votre image actuelle et identification des opportunités d'amélioration.",
      icon: Target
    },
    {
      step: "02", 
      title: "Stratégie de contenu",
      description: "Développement d'une ligne éditoriale qui reflète vos valeurs et votre expertise.",
      icon: Sparkles
    },
    {
      step: "03",
      title: "Déploiement multi-canaux",
      description: "Mise en œuvre coordonnée sur tous les plateformes pertinentes pour votre audience.",
      icon: Users
    },
    {
      step: "04",
      title: "Optimisation continue",
      description: "Ajustements basés sur les données pour maximiser l'impact et l'engagement.",
      icon: Zap
    }
  ]

  const results = [
    { value: "+250%", label: "Engagement moyen", icon: TrendingUp },
    { value: "Top 3", label: "Positionnement niche", icon: Star },
    { value: "15+", label: "Invitations médias/mois", icon: Award },
    { value: "2x", label: "Croissance audience", icon: BarChart }
  ]

  const stats = [
    { value: "300+", label: "Marques créées", subtext: "avec succès" },
    { value: "92%", label: "Satisfaction", subtext: "client" },
    { value: "5x", label: "ROI moyen", subtext: "sur 12 mois" },
    { value: "24/7", label: "Support", subtext: "disponible" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-background to-background" />
          <div className="absolute left-1/3 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
          <div className="absolute bottom-0 right-1/3 h-[600px] w-[600px] translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-5 py-2 backdrop-blur-sm">
              <Target className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-500">Personal Branding</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Développez votre marque
              <span className="mt-2 block bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                personnelle d'excellence
              </span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Transformez votre expertise en une marque personnelle puissante qui inspire 
              confiance et ouvre les portes vers de nouvelles opportunités.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg"
                className="group h-12 bg-gradient-to-r from-blue-500 to-cyan-600 px-8 text-base font-semibold shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30"
                asChild
              >
                <Link href="/contact">
                  Commencer maintenant
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="h-12 border-border/50 px-8 text-base backdrop-blur-sm hover:border-blue-500/50 hover:bg-blue-500/10"
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
                  className="relative overflow-hidden rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent p-5 text-center backdrop-blur-sm sm:p-6"
                >
                  <div className="mb-1 text-2xl font-bold text-blue-500 sm:text-3xl lg:text-4xl">
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

      {/* Benefits Section */}
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
              Pourquoi le Personal Branding ?
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Une marque personnelle forte est votre atout le plus précieux dans l'économie de l'attention
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Card className="group relative h-full overflow-hidden border border-border/50 bg-card/40 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/30 hover:bg-card/60 hover:shadow-2xl hover:shadow-blue-500/10">
                    <div className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${benefit.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`} />
                    
                    <CardContent className="relative flex h-full flex-col items-center p-6 text-center">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:border-blue-500/40">
                        <Icon className="h-7 w-7 text-blue-500 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground">
                          {benefit.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {benefit.description}
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

      {/* Process Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />
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
              Notre processus en 4 étapes
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Une méthodologie éprouvée pour des résultats garantis
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
                  <Card className="group h-full overflow-hidden border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10">
                    <CardContent className="flex flex-col p-6">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 text-base font-bold text-white shadow-lg">
                          {item.step}
                        </div>
                        <Icon className="h-6 w-6 text-blue-500" strokeWidth={1.5} />
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
                      <ArrowRight className="h-6 w-6 text-blue-500/30" />
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto mb-12 max-w-4xl text-center sm:mb-16 lg:mb-20"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Résultats mesurables
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Des métriques concrètes qui prouvent l'impact de votre marque
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              {results.map((result, index) => {
                const Icon = result.icon
                return (
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
                    <Card className="overflow-hidden border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg">
                      <CardContent className="flex items-center gap-4 p-6">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                          <Icon className="h-6 w-6 text-blue-500" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1">
                          <div className="text-2xl font-bold text-blue-500">{result.value}</div>
                          <div className="text-sm text-muted-foreground">{result.label}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
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
            <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-card/80 via-card/50 to-background/80 p-8 backdrop-blur-xl sm:p-12 lg:p-16">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
              
              <div className="relative text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2">
                  <Star className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium text-blue-500">Excellence & Impact</span>
                </div>

                <h2 className="mb-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                  Prêt à construire votre
                  <span className="mt-2 block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                    marque personnelle ?
                  </span>
                </h2>
                
                <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Transformez votre expertise en une marque influente qui ouvre 
                  les portes vers de nouvelles opportunités professionnelles.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button 
                    size="lg"
                    className="group h-12 bg-gradient-to-r from-blue-500 to-cyan-600 px-8 text-base font-semibold shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30"
                    asChild
                  >
                    <Link href="/contact">
                      Planifier votre stratégie
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="h-12 border-blue-500/30 px-8 text-base backdrop-blur-sm hover:border-blue-500/50 hover:bg-blue-500/10"
                    asChild
                  >
                    <Link href="/portfolio">
                      Voir nos cas clients
                    </Link>
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    <span>Stratégie sur-mesure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    <span>ROI garanti</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    <span>Accompagnement expert</span>
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

PersonalBranding.displayName = "PersonalBranding"

export default PersonalBranding