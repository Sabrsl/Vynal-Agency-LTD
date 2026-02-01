"use client"

import React, { memo } from "react"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Globe, Shield, CheckCircle, Users, Eye, Edit3, Lock, Award, TrendingUp, Clock, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const WikipediaManagement = memo(() => {
  const features = [
    {
      icon: BookOpen,
      title: "Création Page Wikipédia",
      description: "Création professionnelle de votre page selon les stricts standards de Wikipédia",
      details: [
        "Recherche approfondie des sources fiables",
        "Rédaction neutre et vérifiable",
        "Formatage selon les conventions Wikipédia",
        "Soumission et suivi du processus de validation"
      ],
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: Shield,
      title: "Monitoring 24/7",
      description: "Surveillance continue de votre page contre les modifications malveillantes",
      details: [
        "Alertes instantanées de modifications",
        "Réversion automatique des vandalismes",
        "Gestion des conflits éditoriaux",
        "Historique complet des changements"
      ],
      color: "from-purple-500/20 to-blue-500/20"
    },
    {
      icon: Edit3,
      title: "Optimisation Contenu",
      description: "Mise à jour stratégique pour maintenir votre page pertinente et à jour",
      details: [
        "Ajout de nouvelles réalisations",
        "Mise à jour des informations biographiques",
        "Amélioration des références et sources",
        "Optimisation SEO pour moteurs de recherche"
      ],
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      icon: Globe,
      title: "Gestion Multi-langues",
      description: "Développement de votre présence sur Wikipédia dans plusieurs langues",
      details: [
        "Traduction professionnelle des contenus",
        "Adaptation culturelle des informations",
        "Création de pages dans les langues clés",
        "Coordination internationale des éditeurs"
      ],
      color: "from-purple-500/20 to-violet-500/20"
    }
  ]

  const benefits = [
    {
      icon: Eye,
      title: "Visibilité Organique",
      description: "Wikipédia apparaît dans le top 3 des résultats Google pour 95% des personnalités publiques"
    },
    {
      icon: Award,
      title: "Crédibilité Instantanée",
      description: "Une page Wikipédia valide votre statut d'expert et de personnalité publique reconnue"
    },
    {
      icon: TrendingUp,
      title: "Autorité de Marque",
      description: "Contrôlez votre narrative digitale avec une source faisant autorité"
    },
    {
      icon: Lock,
      title: "Protection Long Terme",
      description: "Sécurisez votre héritage numérique contre les tentatives de manipulation"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Audit & Stratégie",
      description: "Analyse de votre éligibilité Wikipédia et définition de la stratégie optimale",
      icon: Eye
    },
    {
      step: "02", 
      title: "Recherche Sources",
      description: "Identification et validation des sources fiables et références pertinentes",
      icon: BookOpen
    },
    {
      step: "03",
      title: "Création Contenu",
      description: "Rédaction professionnelle selon les standards stricts de Wikipédia",
      icon: Edit3
    },
    {
      step: "04",
      title: "Soumission & Suivi",
      description: "Déploiement et monitoring continu du processus de validation",
      icon: CheckCircle
    }
  ]

  const stats = [
    { value: "95%", label: "Pages créées", subtext: "avec succès" },
    { value: "24/7", label: "Monitoring", subtext: "actif" },
    { value: "< 48h", label: "Temps réponse", subtext: "modification" },
    { value: "50+", label: "Langues", subtext: "disponibles" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-background to-background" />
          <div className="absolute left-1/3 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
          <div className="absolute bottom-0 right-1/3 h-[600px] w-[600px] translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px]" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-5 py-2 backdrop-blur-sm">
              <BookOpen className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-500">Gestion Wikipédia</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Contrôlez votre narrative
              <span className="mt-2 block bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                sur Wikipédia
              </span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              La gestion professionnelle de votre page Wikipédia pour sécuriser 
              votre crédibilité et contrôler votre image publique mondiale.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg"
                className="group h-12 bg-gradient-to-r from-blue-500 to-purple-600 px-8 text-base font-semibold shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30"
                asChild
              >
                <Link href="/contact">
                  Créer ma page Wikipédia
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
              Services Complets Wikipédia
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Une approche holistique pour maximiser votre présence Wikipédia
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
                  <Card className="group relative h-full overflow-hidden border border-border/50 bg-card/40 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/30 hover:bg-card/60 hover:shadow-2xl hover:shadow-blue-500/10">
                    <div className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${feature.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`} />
                    
                    <CardContent className="relative flex h-full flex-col p-6">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:border-blue-500/40">
                        <Icon className="h-7 w-7 text-blue-500 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground">
                          {feature.title}
                        </h3>
                        <p className="mb-4 text-[13px] leading-relaxed text-muted-foreground">
                          {feature.description}
                        </p>
                        
                        <ul className="space-y-2">
                          {feature.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <CheckCircle className="mt-0.5 h-3 w-3 flex-shrink-0 text-blue-500" />
                              <span>{detail}</span>
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

      {/* Benefits Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-purple-500/5 blur-[120px]" />
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
              Pourquoi Wikipédia est Essentiel
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              L'impact stratégique d'une présence Wikipédia professionnelle
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
                  <Card className="h-full overflow-hidden border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg">
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent">
                        <Icon className="h-6 w-6 text-blue-500" strokeWidth={1.5} />
                      </div>
                      <h3 className="mb-3 text-lg font-bold text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {benefit.description}
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
              Notre Processus Wikipédia
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
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-base font-bold text-white shadow-lg">
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
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
              
              <div className="relative text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2">
                  <BookOpen className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium text-blue-500">Encyclopédie Mondiale</span>
                </div>

                <h2 className="mb-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                  Sécurisez votre héritage
                  <span className="mt-2 block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    sur Wikipédia
                  </span>
                </h2>
                
                <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Ne laissez pas votre narrative digitale au hasard. Une page Wikipédia 
                  professionnelle est votre meilleur atout pour contrôler votre image 
                  publique et asseoir votre crédibilité mondiale.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button 
                    size="lg"
                    className="group h-12 bg-gradient-to-r from-blue-500 to-purple-600 px-8 text-base font-semibold shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30"
                    asChild
                  >
                    <Link href="/contact">
                      Démarrer ma page
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
                      Exemples de pages
                    </Link>
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    <span>Conformité garantie</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    <span>Sources vérifiées</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    <span>Monitoring permanent</span>
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

WikipediaManagement.displayName = "WikipediaManagement"

export default WikipediaManagement