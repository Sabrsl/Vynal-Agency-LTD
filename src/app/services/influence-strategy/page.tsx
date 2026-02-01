"use client"

import React, { memo } from "react"
import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Users, Globe, Target, Award, CheckCircle, BarChart, Zap, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const InfluenceStrategy = memo(() => {
  const strategies = [
    {
      icon: Target,
      title: "Positionnement d'Expert",
      description: "Établissement de votre autorité dans votre domaine d'expertise.",
      metrics: ["Thought Leadership", "Publications académiques", "Conférences keynote"],
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Users,
      title: "Communauté Engagée",
      description: "Développement d'une audience fidèle et active autour de vos idées.",
      metrics: ["Croissance organique", "Taux d'engagement", "Ambassadeurs de marque"],
      color: "from-emerald-500/20 to-green-500/20"
    },
    {
      icon: Globe,
      title: "Impact Global",
      description: "Extension de votre influence au-delà de votre marché initial.",
      metrics: ["Couverture internationale", "Partenariats stratégiques", "Médias globaux"],
      color: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: Award,
      title: "Reconnaissance",
      description: "Obtention de distinctions et opportunités prestigieuses.",
      metrics: ["Prix et récompenses", "Invitations exclusives", "Mentions VIP"],
      color: "from-emerald-500/20 to-green-600/20"
    }
  ]

  const platforms = [
    {
      name: "LinkedIn",
      focus: "Professional Networking",
      strategy: "Content stratégique et networking ciblé",
      gradient: "from-blue-600 to-blue-400",
      bgGradient: "from-blue-500/10 to-blue-600/10"
    },
    {
      name: "Twitter/X",
      focus: "Real-time Influence",
      strategy: "Opinions d'expert et tendances sectorielles",
      gradient: "from-slate-900 to-slate-700",
      bgGradient: "from-slate-500/10 to-slate-600/10"
    },
    {
      name: "Instagram",
      focus: "Visual Storytelling",
      strategy: "Contenu visuel premium et stories engageantes",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      name: "YouTube",
      focus: "Video Authority",
      strategy: "Contenu vidéo éducatif et divertissant",
      gradient: "from-red-600 to-red-400",
      bgGradient: "from-red-500/10 to-red-600/10"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Audit & Positionnement",
      description: "Analyse de votre écosystème et définition de votre positionnement unique.",
      icon: Target
    },
    {
      step: "02",
      title: "Stratégie de Contenu",
      description: "Création d'une ligne éditoriale qui renforce votre expertise.",
      icon: Globe
    },
    {
      step: "03",
      title: "Déploiement Multi-canaux",
      description: "Mise en œuvre coordonnée sur les plateformes pertinentes.",
      icon: Users
    },
    {
      step: "04",
      title: "Optimisation & Scaling",
      description: "Analyse des performances et scaling des stratégies gagnantes.",
      icon: Zap
    }
  ]

  const results = [
    { value: "500K+", label: "Followers qualifiés", subtext: "générés" },
    { value: "3M+", label: "Impressions", subtext: "mensuelles" },
    { value: "85%", label: "Taux d'engagement", subtext: "moyen" },
    { value: "50+", label: "Opportunités médias", subtext: "par an" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/10 via-background to-background" />
          <div className="absolute left-1/3 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-green-500/10 blur-[120px]" />
          <div className="absolute bottom-0 right-1/3 h-[600px] w-[600px] translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-5 py-2 backdrop-blur-sm">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium text-green-500">Stratégie d'Influence</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Maximisez votre
              <span className="mt-2 block bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 bg-clip-text text-transparent">
                impact et influence
              </span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Développez une influence authentique et durable qui ouvre les portes 
              vers de nouvelles opportunités professionnelles et médiatiques.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg"
                className="group h-12 bg-gradient-to-r from-green-500 to-emerald-600 px-8 text-base font-semibold shadow-lg shadow-green-500/25 transition-all hover:shadow-xl hover:shadow-green-500/30"
                asChild
              >
                <Link href="/contact">
                  Développer mon influence
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="h-12 border-border/50 px-8 text-base backdrop-blur-sm hover:border-green-500/50 hover:bg-green-500/10"
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
              {results.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.3 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="relative overflow-hidden rounded-xl border border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent p-5 text-center backdrop-blur-sm sm:p-6"
                >
                  <div className="mb-1 text-2xl font-bold text-green-500 sm:text-3xl lg:text-4xl">
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

      {/* Strategies Section */}
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
              Piliers de l'influence stratégique
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Une approche holistique pour construire une influence durable et mesurable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {strategies.map((strategy, index) => {
              const Icon = strategy.icon
              return (
                <motion.div
                  key={strategy.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Card className="group relative h-full overflow-hidden border border-border/50 bg-card/40 backdrop-blur-xl transition-all duration-500 hover:border-green-500/30 hover:bg-card/60 hover:shadow-2xl hover:shadow-green-500/10">
                    <div className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${strategy.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`} />
                    
                    <CardContent className="relative flex h-full flex-col p-6">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:border-green-500/40">
                        <Icon className="h-7 w-7 text-green-500 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground">
                          {strategy.title}
                        </h3>
                        <p className="mb-4 text-[13px] leading-relaxed text-muted-foreground">
                          {strategy.description}
                        </p>
                        
                        <div className="space-y-2">
                          {strategy.metrics.map((metric, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <BarChart className="mt-0.5 h-3 w-3 flex-shrink-0 text-green-500" />
                              <span>{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-green-500/5 blur-[120px]" />
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
              Plateformes stratégiques
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Optimisation multi-canaux pour maximiser votre portée et impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1]
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Card className="group h-full overflow-hidden border border-border/50 bg-card/40 backdrop-blur-xl transition-all duration-500 hover:border-green-500/30 hover:bg-card/60 hover:shadow-xl">
                  <div className={`h-1 bg-gradient-to-r ${platform.gradient}`} />
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold text-foreground">
                        {platform.name}
                      </h3>
                      <span className={`rounded-full bg-gradient-to-r ${platform.bgGradient} px-3 py-1 text-xs font-bold`}>
                        <Sparkles className="h-3 w-3" />
                      </span>
                    </div>
                    <p className="mb-3 text-sm font-semibold text-green-500">
                      {platform.focus}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {platform.strategy}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Notre méthodologie d'influence
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              4 phases pour construire une influence authentique et durable
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
                  <Card className="group h-full overflow-hidden border border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent backdrop-blur-xl transition-all duration-500 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10">
                    <CardContent className="flex flex-col p-6">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-base font-bold text-white shadow-lg">
                          {item.step}
                        </div>
                        <Icon className="h-6 w-6 text-green-500" strokeWidth={1.5} />
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
                      <ArrowRight className="h-6 w-6 text-green-500/30" />
                    </div>
                  )}
                </motion.div>
              )
            })}
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
            <div className="relative overflow-hidden rounded-3xl border border-green-500/20 bg-gradient-to-br from-card/80 via-card/50 to-background/80 p-8 backdrop-blur-xl sm:p-12 lg:p-16">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
              
              <div className="relative text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">
                  <Award className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium text-green-500">Leadership & Influence</span>
                </div>

                <h2 className="mb-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                  Devenez une référence
                  <span className="mt-2 block bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                    dans votre domaine
                  </span>
                </h2>
                
                <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Transformez votre expertise en une influence qui génère des 
                  opportunités et accélère votre carrière professionnelle.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button 
                    size="lg"
                    className="group h-12 bg-gradient-to-r from-green-500 to-emerald-600 px-8 text-base font-semibold shadow-lg shadow-green-500/25 transition-all hover:shadow-xl hover:shadow-green-500/30"
                    asChild
                  >
                    <Link href="/contact">
                      Lancer ma stratégie
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="h-12 border-green-500/30 px-8 text-base backdrop-blur-sm hover:border-green-500/50 hover:bg-green-500/10"
                    asChild
                  >
                    <Link href="/portfolio">
                      Voir nos cas clients
                    </Link>
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Stratégie personnalisée</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Résultats mesurables</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
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

InfluenceStrategy.displayName = "InfluenceStrategy"

export default InfluenceStrategy