"use client"

import React, { memo } from "react"
import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Users, Target, BarChart, Zap, Eye, Heart, MessageCircle, Share2, CheckCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const SocialMediaOptimization = memo(() => {
  const platforms = [
    {
      name: "LinkedIn",
      icon: Users,
      description: "Réseau professionnel pour thought leadership",
      strategy: "Content stratégique et networking B2B",
      color: "from-blue-500/20 to-blue-600/20",
      accentColor: "text-blue-500"
    },
    {
      name: "Instagram",
      icon: Eye,
      description: "Plateforme visuelle pour storytelling",
      strategy: "Contenu visuel premium et engagement communautaire",
      color: "from-pink-500/20 to-purple-500/20",
      accentColor: "text-pink-500"
    },
    {
      name: "Twitter/X",
      icon: MessageCircle,
      description: "Micro-blogging pour opinions d'expert",
      strategy: "Tendances sectorielles et networking rapide",
      color: "from-slate-500/20 to-slate-600/20",
      accentColor: "text-slate-500"
    },
    {
      name: "TikTok",
      icon: Share2,
      description: "Courtes vidéos pour viralité",
      strategy: "Contenu divertissant et tendances émergentes",
      color: "from-black/20 to-gray-500/20",
      accentColor: "text-black"
    }
  ]

  const strategies = [
    {
      icon: Target,
      title: "Content Strategy",
      description: "Développement d'une ligne éditoriale qui positionne votre expertise",
      features: ["Calendrier éditorial optimisé", "Formats adaptés à chaque plateforme", "Analyse des tendances"]
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Création d'une communauté engagée autour de votre marque personnelle",
      features: ["Engagement personnalisé", "Animation de communauté", "Gestion des commentaires"]
    },
    {
      icon: BarChart,
      title: "Analytics & ROI",
      description: "Mesure précise des performances et optimisation continue",
      features: ["KPIs personnalisés", "Rapports mensuels", "A/B testing"]
    },
    {
      icon: Zap,
      title: "Growth Hacking",
      description: "Technologies avancées pour croissance organique rapide",
      features: ["Viral loops", "Collaborations stratégiques", "Influence marketing"]
    }
  ]

  const process = [
    {
      step: "01",
      title: "Audit & Analyse",
      description: "Évaluation complète de votre présence actuelle et identification des opportunités",
      icon: BarChart
    },
    {
      step: "02",
      title: "Stratégie Sur-mesure",
      description: "Création d'une stratégie adaptée à vos objectifs et votre audience",
      icon: Target
    },
    {
      step: "03",
      title: "Création & Publication",
      description: "Production de contenu premium et déploiement coordonné",
      icon: Sparkles
    },
    {
      step: "04",
      title: "Optimisation & Scaling",
      description: "Analyse des performances et scaling des stratégies gagnantes",
      icon: TrendingUp
    }
  ]

  const stats = [
    { value: "+2M", label: "Followers organiques", subtext: "générés pour nos clients" },
    { value: "85%", label: "Taux d'engagement", subtext: "moyen supérieur au marché" },
    { value: "4.8x", label: "ROI moyen", subtext: "sur 12 mois" },
    { value: "24/7", label: "Monitoring", subtext: "actif et réactif" }
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
              <span className="text-sm font-medium text-green-500">Optimisation Médias Sociaux</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Transformez votre audience
              <span className="mt-2 block bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 bg-clip-text text-transparent">
                en communauté engagée
              </span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Maximisez votre influence sur les plateformes clés avec une stratégie de croissance 
              organique qui génère des résultats mesurables et durables.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg"
                className="group h-12 bg-gradient-to-r from-green-500 to-emerald-600 px-8 text-base font-semibold shadow-lg shadow-green-500/25 transition-all hover:shadow-xl hover:shadow-green-500/30"
                asChild
              >
                <Link href="/contact">
                  Optimiser mes réseaux
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
              Plateformes optimisées
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Une maîtrise complète des écosystèmes sociaux pour maximiser votre impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {platforms.map((platform, index) => {
              const Icon = platform.icon
              return (
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
                    <div className={`h-1 bg-gradient-to-r ${platform.color}`} />
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-xl font-bold text-foreground">
                          {platform.name}
                        </h3>
                        <div className={`rounded-full bg-gradient-to-r ${platform.color} p-2`}>
                          <Icon className={`h-4 w-4 ${platform.accentColor}`} strokeWidth={1.5} />
                        </div>
                      </div>
                      <p className="mb-3 text-sm font-semibold text-green-500">
                        {platform.description}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {platform.strategy}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
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
              Stratégies de croissance
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Une approche data-driven pour une expansion organique et durable
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
                  <Card className="group h-full overflow-hidden border border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent backdrop-blur-xl transition-all duration-500 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10">
                    <CardContent className="flex flex-col p-6">
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
                        
                        <ul className="space-y-2">
                          {strategy.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <CheckCircle className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-green-500" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
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
          <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[120px]" />
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
              Processus d'optimisation
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              4 étapes pour transformer votre présence sociale en levier de croissance
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
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium text-green-500">Croissance Organique</span>
                </div>

                <h2 className="mb-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                  Prêt à transformer votre
                  <span className="mt-2 block bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                    présence sociale ?
                  </span>
                </h2>
                
                <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Développez une communauté engagée qui amplifie votre message et 
                  accélère votre croissance professionnelle avec notre expertise sociale.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button 
                    size="lg"
                    className="group h-12 bg-gradient-to-r from-green-500 to-emerald-600 px-8 text-base font-semibold shadow-lg shadow-green-500/25 transition-all hover:shadow-xl hover:shadow-green-500/30"
                    asChild
                  >
                    <Link href="/contact">
                      Démarrer ma croissance
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
                    <span>Croissance organique garantie</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Content strategy sur-mesure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>ROI mesurable et tracking</span>
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

SocialMediaOptimization.displayName = "SocialMediaOptimization"

export default SocialMediaOptimization
