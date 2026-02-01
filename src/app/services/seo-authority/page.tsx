"use client"

import React, { memo } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Globe, Search, TrendingUp, Award, BookOpen, CheckCircle, BarChart, Target, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const SEOAuthority = memo(() => {
  const services = [
    {
      icon: Search,
      title: "SEO Personnel Avancé",
      description: "Optimisation des résultats de recherche pour votre nom et marque personnelle",
      features: ["Audit SEO personnel complet", "Optimisation on-page et off-page", "Gestion des SERP features", "Monitoring des positions"],
      color: "from-orange-500/20 to-red-500/20",
      accentColor: "text-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Content Héo Strategy",
      description: "Création de contenu à forte valeur qui domine les résultats de recherche",
      features: ["Pillars pages stratégiques", "Content clusters thématiques", "Optimisation E-A-T", "Link building qualitatif"],
      color: "from-red-500/20 to-pink-500/20",
      accentColor: "text-red-500"
    },
    {
      icon: BookOpen,
      title: "Gestion Wikipédia",
      description: "Création et optimisation de votre présence sur l'encyclopédie mondiale",
      features: ["Création page Wikipédia", "Monitoring des modifications", "Optimisation des sources", "Multi-langues"],
      color: "from-blue-500/20 to-purple-500/20",
      accentColor: "text-blue-500"
    },
    {
      icon: Globe,
      title: "Knowledge Graph",
      description: "Optimisation de votre présence dans les graphes de connaissances Google",
      features: ["Schema markup avancé", "Optimisation entités Google", "Brand SERP optimization", "Local SEO enhancement"],
      color: "from-purple-500/20 to-indigo-500/20",
      accentColor: "text-purple-500"
    }
  ]

  const strategies = [
    {
      icon: Target,
      title: "Brand Dominance",
      description: "Positionnement monopolistique des résultats de première page",
      metrics: ["8/10 résultats page 1", "95% brand visibility", "0 concurrence visible"]
    },
    {
      icon: Shield,
      title: "Réputation Protection",
      description: "Contrôle total de votre narrative dans les résultats de recherche",
      metrics: ["100% contenus positifs", "Suppression négatifs", "Crisis SEO ready"]
    },
    {
      icon: Award,
      title: "Authority Building",
      description: "Établissement de votre autorité dans votre domaine d'expertise",
      metrics: ["E-A-T score maximum", "Domain authority 70+", "Thought leadership recognition"]
    },
    {
      icon: Zap,
      title: "Growth Acceleration",
      description: "Accélération de votre visibilité et impact organique",
      metrics: ["300% traffic growth", "Viral content creation", "Media mentions tracking"]
    }
  ]

  const process = [
    {
      step: "01",
      title: "Audit & Analyse",
      description: "Évaluation complète de votre présence digitale et identification des opportunités",
      icon: BarChart
    },
    {
      step: "02",
      title: "Stratégie Authority",
      description: "Définition de votre positionnement et plan de domination digitale",
      icon: Target
    },
    {
      step: "03",
      title: "Content & Links",
      description: "Création de contenu autoritaire et acquisition de liens qualitatifs",
      icon: TrendingUp
    },
    {
      step: "04",
      title: "Optimisation Continue",
      description: "Monitoring et optimisation pour maintenir votre domination",
      icon: Shield
    }
  ]

  const stats = [
    { value: "Page 1", label: "Google garanti", subtext: "pour votre nom" },
    { value: "300%", label: "Croissance trafic", subtext: "organique moyen" },
    { value: "70+", label: "Domain Authority", subtext: "moyen clients" },
    { value: "24/7", label: "Monitoring", subtext: "positions" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-background to-background" />
          <div className="absolute left-1/3 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px]" />
          <div className="absolute bottom-0 right-1/3 h-[600px] w-[600px] translate-x-1/2 rounded-full bg-red-500/10 blur-[120px]" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-5 py-2 backdrop-blur-sm">
              <Globe className="h-4 w-4 text-orange-500" />
              <span className="text-sm font-medium text-orange-500">SEO & Autorité de Marque</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Dominez les résultats
              <span className="mt-2 block bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
                de recherche
              </span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Contrôlez ce qui apparaît quand on vous cherche. Optimisation Google, 
              création de contenu héro, gestion Wikipédia pour une autorité digitale absolue.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg"
                className="group h-12 bg-gradient-to-r from-orange-500 to-red-600 px-8 text-base font-semibold shadow-lg shadow-orange-500/25 transition-all hover:shadow-xl hover:shadow-orange-500/30"
                asChild
              >
                <Link href="/contact">
                  Dominer Google
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="h-12 border-border/50 px-8 text-base backdrop-blur-sm hover:border-orange-500/50 hover:bg-orange-500/10"
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
                  className="relative overflow-hidden rounded-xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-transparent p-5 text-center backdrop-blur-sm sm:p-6"
                >
                  <div className="mb-1 text-2xl font-bold text-orange-500 sm:text-3xl lg:text-4xl">
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

      {/* Services Section */}
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
              Services d'autorité digitale
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Une approche holistique pour construire et maintenir votre domination digitale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Card className="group relative h-full overflow-hidden border border-border/50 bg-card/40 backdrop-blur-xl transition-all duration-500 hover:border-orange-500/30 hover:bg-card/60 hover:shadow-2xl hover:shadow-orange-500/10">
                    <div className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${service.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`} />
                    
                    <CardContent className="relative flex h-full flex-col p-6">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:border-orange-500/40">
                        <Icon className={`h-7 w-7 ${service.accentColor} transition-transform duration-500 group-hover:scale-110`} strokeWidth={1.5} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground">
                          {service.title}
                        </h3>
                        <p className="mb-4 text-[13px] leading-relaxed text-muted-foreground">
                          {service.description}
                        </p>
                        
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <CheckCircle className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-orange-500" />
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

      {/* Strategies Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-red-500/5 blur-[120px]" />
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
              Stratégies de domination
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Des approches éprouvées pour établir votre autorité digitale absolue
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
                  <Card className="h-full overflow-hidden border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-transparent backdrop-blur-xl transition-all duration-300 hover:border-orange-500/40 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20">
                          <Icon className="h-5 w-5 text-orange-500" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-bold text-foreground">
                          {strategy.title}
                        </h3>
                      </div>
                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                        {strategy.description}
                      </p>
                      <div className="space-y-2">
                        {strategy.metrics.map((metric, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                            <span className="text-xs text-muted-foreground">{metric}</span>
                          </div>
                        ))}
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Processus d'autorité
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              4 phases pour construire et maintenir votre domination digitale
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
                  <Card className="group h-full overflow-hidden border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-transparent backdrop-blur-xl transition-all duration-500 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10">
                    <CardContent className="flex flex-col p-6">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-base font-bold text-white shadow-lg">
                          {item.step}
                        </div>
                        <Icon className="h-6 w-6 text-orange-500" strokeWidth={1.5} />
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
                      <ArrowRight className="h-6 w-6 text-orange-500/30" />
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
            <div className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-gradient-to-br from-card/80 via-card/50 to-background/80 p-8 backdrop-blur-xl sm:p-12 lg:p-16">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-red-500/20 blur-3xl" />
              
              <div className="relative text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2">
                  <Search className="h-4 w-4 text-orange-500" />
                  <span className="text-sm font-medium text-orange-500">Domination Google</span>
                </div>

                <h2 className="mb-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                  Contrôlez votre
                  <span className="mt-2 block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    narrative digitale
                  </span>
                </h2>
                
                <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Ne laissez pas le hasard décider de votre image en ligne. 
                  Dominez les résultats de recherche et contrôlez votre narrative digitale.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button 
                    size="lg"
                    className="group h-12 bg-gradient-to-r from-orange-500 to-red-600 px-8 text-base font-semibold shadow-lg shadow-orange-500/25 transition-all hover:shadow-xl hover:shadow-orange-500/30"
                    asChild
                  >
                    <Link href="/contact">
                      Dominer Google
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="h-12 border-orange-500/30 px-8 text-base backdrop-blur-sm hover:border-orange-500/50 hover:bg-orange-500/10"
                    asChild
                  >
                    <Link href="/audit-seo">
                      Audit SEO gratuit
                    </Link>
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Page 1 garantie</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Authority building</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Monitoring 24/7</span>
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

SEOAuthority.displayName = "SEOAuthority"

export default SEOAuthority
