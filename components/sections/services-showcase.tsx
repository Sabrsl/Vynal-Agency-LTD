"use client"

import React, { memo } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Shield, TrendingUp, Zap, Award, Target, Users, BarChart, CheckCircle, Star, Clock, Globe, Eye, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const ServicesShowcase = memo(() => {
  const coreServices = [
    {
      icon: Shield,
      title: "Blindage Réputation",
      subtitle: "Protection 24/7",
      description: "Blindez votre réputation contre les crises modernes avec monitoring temps réel et intervention d'urgence.",
      metrics: ["Temps réponse <2h", "98% crises neutralisées", "Veille 360° continue"],
      color: "from-purple-500 to-pink-500",
      href: "/services/reputation-management",
      badge: "Essentiel"
    },
    {
      icon: Zap,
      title: "Extinction Crise",
      subtitle: "Intervention d'urgence",
      description: "Éteignez les crises avant qu'elles ne deviennent virales avec notre cellule de crise dédiée.",
      metrics: ["Disponibilité 24/7", "Cellule crise dédiée", "Réparation image post-crise"],
      color: "from-red-500 to-orange-500", 
      href: "/services/crisis-communication",
      badge: "Critique"
    },
    {
      icon: Target,
      title: "Référence Incontournable",
      subtitle: "Personal Branding",
      description: "Devenez une référence incontournable dans votre domaine avec un positionnement thought leader.",
      metrics: ["+340% sentiment positif", "Positionnement Top 3", "Invitations TEDx/médias"],
      color: "from-blue-500 to-cyan-500",
      href: "/services/personal-branding",
      badge: "Premium"
    },
    {
      icon: TrendingUp,
      title: "Communauté Engagée",
      subtitle: "Stratégie d'Influence",
      description: "Transformez votre audience en communauté engagée qui génère des opportunités business.",
      metrics: ["500K+ followers qualifiés", "85% taux engagement", "50+ opportunités/an"],
      color: "from-green-500 to-emerald-500",
      href: "/services/influence-strategy",
      badge: "Croissance"
    }
  ]

  const additionalServices = [
    {
      icon: Users,
      title: "Maîtrise Média",
      description: "Formation aux interviews et prises de parole publiques pour captiver n'importe quelle audience.",
      href: "/services/media-training",
      category: "Formation"
    },
    {
      icon: Globe,
      title: "Contenu Premium",
      description: "Production vidéo, articles et design qui renforcent votre crédibilité et attractivité.",
      href: "/services/content-creation",
      category: "Création"
    },
    {
      icon: BookOpen,
      title: "Gestion Wikipédia",
      description: "Création et monitoring professionnel de votre page Wikipédia pour contrôler votre narrative digitale.",
      href: "/services/wikipedia-management",
      category: "Stratégie"
    },
    {
      icon: Eye,
      title: "SEO Autorité",
      description: "Optimisation recherche et veille concurrentielle pour identifier vos opportunités de différenciation.",
      href: "#",
      category: "Analytics"
    }
  ]

  const packages = [
    {
      name: "Shield Pro",
      subtitle: "Protection Essentielle",
      price: "Sur devis",
      description: "Package fondamental pour personnalités publiques émergentes",
      features: [
        "Monitoring réputation 24/7",
        "Alertes crises en temps réel",
        "Gestion basique réseaux sociaux",
        "Rapport mensuel performance"
      ],
      color: "border-blue-500/20 bg-blue-500/5",
      popular: false
    },
    {
      name: "Elite Guard",
      subtitle: "Protection Complète",
      price: "Sur devis",
      description: "Solution premium pour leaders établis et célébrités",
      features: [
        "Tous services Shield Pro",
        "Cellule de crise dédiée",
        "Personal branding stratégique",
        "Media training illimité",
        "Content creation mensuel",
        "Relations presse actives"
      ],
      color: "border-purple-500/20 bg-purple-500/5",
      popular: true
    },
    {
      name: "Empire Builder",
      subtitle: "Domination Marché",
      price: "Sur devis",
      description: "Package ultime pour construire un empire personnel durable",
      features: [
        "Tous services Elite Guard",
        "Stratégie influence mondiale",
        "Production contenu premium",
        "Intelligence concurrentielle",
        "SEO & autorité marque",
        "Partenariats stratégiques",
        "Accès VIP réseau exclusif"
      ],
      color: "border-yellow-500/20 bg-yellow-500/5",
      popular: false
    }
  ]

  const results = [
    { value: "98%", label: "Crises neutralisées", icon: Shield },
    { value: "<2h", label: "Temps intervention", icon: Clock },
    { value: "+340%", label: "Sentiment positif", icon: TrendingUp },
    { value: "500K+", label: "Followers générés", icon: Users }
  ]

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute left-1/4 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mb-12 max-w-4xl text-center sm:mb-16 lg:mb-20"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 backdrop-blur-sm">
            <Award className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-primary sm:text-sm">Services Premium</span>
          </div>
          
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Devenez une référence
            <span className="mt-2 block gradient-strategy sm:mt-3">
              incontournable
            </span>
          </h2>
          
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Une suite complète de services pour protéger, construire et monétiser 
            votre image publique dans l'économie de l'attention moderne.
          </p>
        </motion.div>

        {/* Results First */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto mb-16 max-w-6xl"
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {results.map((result, index) => {
              const Icon = result.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Card className="border-primary/20 bg-primary/5 backdrop-blur-xl">
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <Icon className="mb-3 h-6 w-6 text-primary" />
                      <div className="text-2xl font-bold text-primary sm:text-3xl">
                        {result.value}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {result.label}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Core Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-20"
        >
          <h3 className="mb-8 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Services Essentiels
          </h3>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {coreServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group"
                >
                  <Card className="relative h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-xl transition-all duration-500 hover:border-primary/30 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/10">
                    {/* Gradient Accent */}
                    <div className={`pointer-events-none absolute -right-12 -top-12 h-24 w-24 rounded-full bg-gradient-to-br ${service.color} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />
                    
                    {/* Badge */}
                    <div className="absolute left-4 top-4 z-10">
                      <span className={`rounded-full bg-gradient-to-r ${service.color} px-3 py-1 text-xs font-medium text-white`}>
                        {service.badge}
                      </span>
                    </div>
                    
                    <CardContent className="relative flex h-full flex-col p-6 sm:p-7 lg:p-8">
                      {/* Icon */}
                      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:border-primary/40">
                        <Icon className="h-8 w-8 text-primary transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h4 className="mb-2 text-lg font-bold tracking-tight text-foreground">
                          {service.title}
                        </h4>
                        <p className="mb-3 text-sm font-medium text-primary/90">
                          {service.subtitle}
                        </p>
                        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                          {service.description}
                        </p>
                        
                        {/* Metrics */}
                        <div className="space-y-2">
                          {service.metrics.map((metric, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-3.5 w-3.5 text-primary" />
                              <span className="text-xs text-muted-foreground">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* CTA */}
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-5 w-full border-primary/30 hover:bg-primary/10 hover:border-primary"
                        asChild
                      >
                        <Link href={service.href}>
                          Découvrir
                          <ArrowRight className="ml-2 h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-20"
        >
          <h3 className="mb-8 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Services Complémentaires
          </h3>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {additionalServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Card className="h-full border-border/30 bg-card/30 backdrop-blur-xl transition-all duration-300 hover:border-primary/20 hover:bg-card/50">
                    <CardContent className="p-5">
                      <div className="mb-3 flex items-start justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/5">
                          <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                        </div>
                        <span className="rounded-full border border-primary/20 bg-primary/5 px-2 py-0.5 text-xs text-primary">
                          {service.category}
                        </span>
                      </div>
                      <h4 className="mb-2 text-base font-bold text-foreground">
                        {service.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3 className="mb-8 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Packages Sur Mesure
          </h3>
          
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                    <span className="rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-sm font-medium text-white">
                      Plus Populaire
                    </span>
                  </div>
                )}
                
                <Card className={`relative h-full border ${pkg.color} backdrop-blur-xl ${pkg.popular ? 'shadow-lg shadow-primary/10' : ''}`}>
                  <CardContent className="p-6 sm:p-8">
                    <div className="mb-4">
                      <h4 className="mb-2 text-xl font-bold text-foreground">
                        {pkg.name}
                      </h4>
                      <p className="text-sm text-primary">{pkg.subtitle}</p>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-lg font-bold text-foreground">{pkg.price}</span>
                    </div>
                    
                    <p className="mb-6 text-sm text-muted-foreground">
                      {pkg.description}
                    </p>
                    
                    <ul className="mb-6 space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant={pkg.popular ? "luxury" : "outline"} 
                      size="lg" 
                      className="w-full"
                      asChild
                    >
                      <Link href="/contact">
                        {pkg.popular ? "Choisir Elite Guard" : "Demander un devis"}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto mt-16 max-w-4xl text-center"
        >
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-card/80 to-background/80 p-8 backdrop-blur-xl sm:rounded-3xl sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />
            
            <div className="relative">
              <h3 className="mb-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Prêt à construire votre
                <span className="mt-1 block gradient-strategy sm:mt-2">
                  empire personnel ?
                </span>
              </h3>
              
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground sm:mb-8">
                Transformez votre expertise en une marque influente qui génère 
                des opportunités et sécurise votre héritage professionnel.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                <Button 
                  variant="luxury" 
                  size="xl" 
                  className="group"
                  asChild
                >
                  <Link href="/contact">
                    <span className="hidden sm:inline">Construire mon empire</span>
                    <span className="sm:hidden">Commencer</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="xl" 
                  className="border-primary/50 text-foreground hover:border-accent hover:bg-secondary/50"
                  asChild
                >
                  <Link href="/methodology">
                    Notre processus
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

ServicesShowcase.displayName = "ServicesShowcase"

export default ServicesShowcase
