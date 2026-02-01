"use client"

import React, { memo } from "react"
import { motion } from "framer-motion"
import { ArrowRight, AlertTriangle, Shield, Clock, MessageSquare, Users, CheckCircle, Zap, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const CrisisCommunication = memo(() => {
  const services = [
    {
      icon: AlertTriangle,
      title: "Plan de Crise Préventif",
      description: "Élaboration de stratégies complètes pour anticiper et gérer toutes les situations critiques.",
      features: ["Scénarios de crise", "Protocoles d'intervention", "Formation des porte-parole"],
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      icon: Shield,
      title: "Gestion d'Urgence 24/7",
      description: "Intervention immédiate et coordonnée lors de crises réelles ou imminentes.",
      features: ["Cellule de crise", "Communication d'urgence", "Coordination médias"],
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: MessageSquare,
      title: "Communication Stratégique",
      description: "Développement de messages clairs et cohérents pour toutes les parties prenantes.",
      features: ["Discours officiels", "Communiqués de presse", "Gestion réseaux sociaux"],
      color: "from-red-500/20 to-pink-500/20"
    },
    {
      icon: Users,
      title: "Reconstruction Post-Crise",
      description: "Stratégies pour restaurer la confiance et reconstruire votre image après une crise.",
      features: ["Analyse post-crise", "Plan de reconstruction", "Monitoring de réputation"],
      color: "from-orange-500/20 to-yellow-500/20"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Alerte & Évaluation",
      description: "Détection immédiate et évaluation de l'impact potentiel de la situation.",
      time: "< 30min",
      icon: Zap
    },
    {
      step: "02",
      title: "Activation Cellule",
      description: "Mise en place immédiate de l'équipe de crise et des protocoles d'urgence.",
      time: "< 1h",
      icon: Shield
    },
    {
      step: "03",
      title: "Communication Coord",
      description: "Déploiement des messages clés sur tous les canaux pertinents.",
      time: "< 2h",
      icon: MessageSquare
    },
    {
      step: "04",
      title: "Monitoring & Ajust",
      description: "Surveillance continue et adaptation de la stratégie en temps réel.",
      time: "24/7",
      icon: CheckCircle
    }
  ]

  const stats = [
    { value: "95%", label: "Crises contenues", subtext: "avec succès" },
    { value: "< 2h", label: "Temps moyen", subtext: "d'intervention" },
    { value: "24/7", label: "Disponibilité", subtext: "de l'équipe" },
    { value: "100%", label: "Confidentialité", subtext: "assurée" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500/10 via-background to-background" />
          <div className="absolute left-1/3 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[120px]" />
          <div className="absolute bottom-0 right-1/3 h-[600px] w-[600px] translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px]" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-5 py-2 backdrop-blur-sm">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <span className="text-sm font-medium text-red-500">Communication de Crise</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Gérez les crises avec
              <span className="mt-2 block bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
                expertise et rapidité
              </span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Une intervention d'urgence 24/7 et une communication stratégique 
              pour protéger votre réputation dans les moments les plus critiques.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg"
                className="group h-12 bg-gradient-to-r from-red-500 to-red-600 px-8 text-base font-semibold shadow-lg shadow-red-500/25 transition-all hover:shadow-xl hover:shadow-red-500/30"
                asChild
              >
                <Link href="/contact">
                  Urgence : Contact immédiat
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="h-12 border-border/50 px-8 text-base backdrop-blur-sm hover:border-red-500/50 hover:bg-red-500/10"
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
                  className="relative overflow-hidden rounded-xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent p-5 text-center backdrop-blur-sm sm:p-6"
                >
                  <div className="mb-1 text-2xl font-bold text-red-500 sm:text-3xl lg:text-4xl">
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

      {/* Emergency Banner */}
      <section className="relative overflow-hidden border-y border-red-500/20 bg-gradient-to-r from-red-500/5 via-red-500/10 to-red-500/5 py-6 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-between gap-4 sm:flex-row"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-lg shadow-red-500/25">
                <Zap className="h-7 w-7 text-white" strokeWidth={2} />
              </div>
              <div className="text-left">
                <h3 className="text-base font-bold text-foreground sm:text-lg">Urgence Communication</h3>
                <p className="text-sm text-muted-foreground">Intervention 24/7 - Disponible immédiatement</p>
              </div>
            </div>
            <Button 
              size="lg"
              className="h-12 w-full bg-gradient-to-r from-red-500 to-red-600 px-6 font-semibold shadow-lg shadow-red-500/25 transition-all hover:shadow-xl hover:shadow-red-500/30 sm:w-auto"
              asChild
            >
              <Link href="/contact">
                <Phone className="mr-2 h-4 w-4" />
                Contacter l'urgence
              </Link>
            </Button>
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
              Services complets de gestion de crise
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              De la prévention à la reconstruction, une couverture totale de vos besoins
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
                  <Card className="group relative h-full overflow-hidden border border-border/50 bg-card/40 backdrop-blur-xl transition-all duration-500 hover:border-red-500/30 hover:bg-card/60 hover:shadow-2xl hover:shadow-red-500/10">
                    <div className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${service.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`} />
                    
                    <CardContent className="relative flex h-full flex-col p-6">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:border-red-500/40">
                        <Icon className="h-7 w-7 text-red-500 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
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
                              <div className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-500" />
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
              Processus d'intervention d'urgence
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Une méthodologie éprouvée pour une réponse rapide et efficace
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
                  <Card className="group h-full overflow-hidden border border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent backdrop-blur-xl transition-all duration-500 hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/10">
                    <CardContent className="flex flex-col p-6">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 text-base font-bold text-white shadow-lg">
                          {item.step}
                        </div>
                        <div className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1">
                          <span className="text-xs font-bold text-red-500">{item.time}</span>
                        </div>
                      </div>
                      <div className="mb-3 flex items-center gap-2">
                        <Icon className="h-5 w-5 text-red-500" strokeWidth={1.5} />
                        <h3 className="text-lg font-bold text-foreground">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                  
                  {index < process.length - 1 && (
                    <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                      <ArrowRight className="h-6 w-6 text-red-500/30" />
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
            <div className="relative overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-br from-card/80 via-card/50 to-background/80 p-8 backdrop-blur-xl sm:p-12 lg:p-16">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />
              
              <div className="relative text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2">
                  <Shield className="h-4 w-4 text-red-500" />
                  <span className="text-sm font-medium text-red-500">Préparation & Protection</span>
                </div>

                <h2 className="mb-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                  Préparez-vous à
                  <span className="mt-2 block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    toute éventualité
                  </span>
                </h2>
                
                <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Ne subissez pas une crise. Anticipez, préparez-vous et protégez 
                  votre réputation avec notre expertise en communication de crise.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button 
                    size="lg"
                    className="group h-12 bg-gradient-to-r from-red-500 to-red-600 px-8 text-base font-semibold shadow-lg shadow-red-500/25 transition-all hover:shadow-xl hover:shadow-red-500/30"
                    asChild
                  >
                    <Link href="/contact">
                      Plan de crise préventif
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="h-12 border-red-500/30 px-8 text-base backdrop-blur-sm hover:border-red-500/50 hover:bg-red-500/10"
                    asChild
                  >
                    <Link href="tel:+33142868345">
                      <Clock className="mr-2 h-4 w-4" />
                      Urgence 24/7
                    </Link>
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-red-500" />
                    <span>Réponse garantie sous 30min</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-red-500" />
                    <span>Confidentialité absolue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-red-500" />
                    <span>Équipe d'experts disponible</span>
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

CrisisCommunication.displayName = "CrisisCommunication"

export default CrisisCommunication