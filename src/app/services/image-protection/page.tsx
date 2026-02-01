"use client"

import React, { memo } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Shield, Eye, Lock, Trash2, Search, CheckCircle, AlertTriangle, FileCheck, Zap, Gavel } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const ImageProtection = memo(() => {
  const services = [
    {
      icon: Search,
      title: "Audit d'Image Complet",
      description: "Identification exhaustive de tous les contenus vous concernant sur internet",
      features: ["Scan algorithmique avancé", "Analyse sémantique", "Cartographie complète", "Rapport détaillé"],
      color: "from-indigo-500/20 to-violet-500/20",
      accentColor: "text-indigo-500"
    },
    {
      icon: Trash2,
      title: "Suppression Contenus Négatifs",
      description: "Élimination des informations préjudiciables avec techniques juridiques et SEO",
      features: ["Demandes de retrait légales", "Optimisation SEO négatif", "Déréférencement", "Veille continue"],
      color: "from-red-500/20 to-orange-500/20",
      accentColor: "text-red-500"
    },
    {
      icon: Shield,
      title: "Protection Données Personnelles",
      description: "Sécurisation de vos informations privées et prévention des fuites",
      features: ["Monitoring dark web", "Alertes intrusions", "Chiffrement données", "Protection vie privée"],
      color: "from-blue-500/20 to-cyan-500/20",
      accentColor: "text-blue-500"
    },
    {
      icon: Gavel,
      title: "Veille Juridique Active",
      description: "Surveillance légale et actions rapides contre les contenus illicites",
      features: ["Alertes automatiques", "Procédures judiciaires", "Cessation et abstention", "Dommages intérêts"],
      color: "from-purple-500/20 to-pink-500/20",
      accentColor: "text-purple-500"
    }
  ]

  const threats = [
    {
      type: "Contenus diffamatoires",
      severity: "Élevé",
      description: "Allégations fausses ou trompeuses nuisant à votre réputation",
      solution: "Demande de retrait + poursuites si nécessaire"
    },
    {
      type: "Informations privées",
      severity: "Critique",
      description: "Données personnelles exposées sans consentement",
      solution: "Signalement RGPD + retrait immédiat"
    },
    {
      type: "Photos non autorisées",
      severity: "Moyen",
      description: "Images utilisées sans votre autorisation",
      solution: "Demande de retrait pour violation droits d'auteur"
    },
    {
      type: "Avis négatifs injustifiés",
      severity: "Modéré",
      description: "Commentaires biaisés ou faux sur plateformes d'avis",
      solution: "Signalement et demande de modération"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Détection & Analyse",
      description: "Identification précise de tous les contenus problématiques et évaluation de leur impact",
      icon: Search
    },
    {
      step: "02",
      title: "Stratégie Juridique",
      description: "Élaboration du plan d'action légal et communication avec les plateformes",
      icon: Gavel
    },
    {
      step: "03",
      title: "Action & Suppression",
      description: "Mise en œuvre des procédures de retrait et déréférencement",
      icon: Trash2
    },
    {
      step: "04",
      title: "Protection Continue",
      description: "Monitoring permanent et prévention de nouvelles menaces",
      icon: Shield
    }
  ]

  const stats = [
    { value: "94%", label: "Taux de résolution", subtext: "des cas traités" },
    { value: "< 48h", label: "Temps moyen", subtext: "d'intervention" },
    { value: "100%", label: "Confidentialité", subtext: "des démarches" },
    { value: "24/7", label: "Monitoring", subtext: "actif" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-background to-background" />
          <div className="absolute left-1/3 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
          <div className="absolute bottom-0 right-1/3 h-[600px] w-[600px] translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-5 py-2 backdrop-blur-sm">
              <Shield className="h-4 w-4 text-indigo-500" />
              <span className="text-sm font-medium text-indigo-500">Protection & Nettoyage d'Image</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Reprenez le contrôle
              <span className="mt-2 block bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600 bg-clip-text text-transparent">
                de votre récit digital
              </span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Suppression ou neutralisation des contenus préjudiciables avec techniques 
              juridiques et de référencement avancées pour protéger votre réputation.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg"
                className="group h-12 bg-gradient-to-r from-indigo-500 to-violet-600 px-8 text-base font-semibold shadow-lg shadow-indigo-500/25 transition-all hover:shadow-xl hover:shadow-indigo-500/30"
                asChild
              >
                <Link href="/contact">
                  Nettoyer mon image
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="h-12 border-border/50 px-8 text-base backdrop-blur-sm hover:border-indigo-500/50 hover:bg-indigo-500/10"
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
                  className="relative overflow-hidden rounded-xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/5 to-transparent p-5 text-center backdrop-blur-sm sm:p-6"
                >
                  <div className="mb-1 text-2xl font-bold text-indigo-500 sm:text-3xl lg:text-4xl">
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
              Services de protection complète
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Une approche multi-dimensionnelle pour sécuriser votre image publique
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
                  <Card className="group relative h-full overflow-hidden border border-border/50 bg-card/40 backdrop-blur-xl transition-all duration-500 hover:border-indigo-500/30 hover:bg-card/60 hover:shadow-2xl hover:shadow-indigo-500/10">
                    <div className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${service.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`} />
                    
                    <CardContent className="relative flex h-full flex-col p-6">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-transparent backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:border-indigo-500/40">
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
                              <CheckCircle className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-indigo-500" />
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

      {/* Threats Section */}
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
              Menaces identifiées
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Les risques digitaux les plus courants et nos solutions éprouvées
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
            {threats.map((threat, index) => (
              <motion.div
                key={threat.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1]
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Card className="h-full overflow-hidden border border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent backdrop-blur-xl transition-all duration-300 hover:border-red-500/40 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" />
                        <h3 className="text-lg font-bold text-foreground">{threat.type}</h3>
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs font-bold ${
                        threat.severity === "Critique" ? "bg-red-500/20 text-red-500" :
                        threat.severity === "Élevé" ? "bg-orange-500/20 text-orange-500" :
                        threat.severity === "Moyen" ? "bg-yellow-500/20 text-yellow-600" :
                        "bg-blue-500/20 text-blue-500"
                      }`}>
                        {threat.severity}
                      </span>
                    </div>
                    <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                      {threat.description}
                    </p>
                    <div className="rounded-lg border border-indigo-500/20 bg-indigo-500/5 p-3">
                      <p className="text-xs font-medium text-indigo-500">
                        Solution: {threat.solution}
                      </p>
                    </div>
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
              Notre processus d'intervention
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              4 étapes pour une protection efficace et durable de votre image
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
                  <Card className="group h-full overflow-hidden border border-indigo-500/20 bg-gradient-to-br from-indigo-500/5 to-transparent backdrop-blur-xl transition-all duration-500 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10">
                    <CardContent className="flex flex-col p-6">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-base font-bold text-white shadow-lg">
                          {item.step}
                        </div>
                        <Icon className="h-6 w-6 text-indigo-500" strokeWidth={1.5} />
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
                      <ArrowRight className="h-6 w-6 text-indigo-500/30" />
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
            <div className="relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-card/80 via-card/50 to-background/80 p-8 backdrop-blur-xl sm:p-12 lg:p-16">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
              
              <div className="relative text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2">
                  <Lock className="h-4 w-4 text-indigo-500" />
                  <span className="text-sm font-medium text-indigo-500">Sécurisation Digitale</span>
                </div>

                <h2 className="mb-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                  Protégez votre réputation
                  <span className="mt-2 block bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                    dès aujourd'hui
                  </span>
                </h2>
                
                <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Ne laissez pas des contenus préjudiciables nuire à votre carrière. 
                  Notre équipe d'experts intervient rapidement pour sécuriser votre image.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button 
                    size="lg"
                    className="group h-12 bg-gradient-to-r from-indigo-500 to-violet-600 px-8 text-base font-semibold shadow-lg shadow-indigo-500/25 transition-all hover:shadow-xl hover:shadow-indigo-500/30"
                    asChild
                  >
                    <Link href="/contact">
                      Sécuriser mon image
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="h-12 border-indigo-500/30 px-8 text-base backdrop-blur-sm hover:border-indigo-500/50 hover:bg-indigo-500/10"
                    asChild
                  >
                    <Link href="/audit">
                      Audit gratuit
                    </Link>
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-indigo-500" />
                    <span>Intervention sous 48h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-indigo-500" />
                    <span>Confidentialité absolue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-indigo-500" />
                    <span>94% de succès garanti</span>
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

ImageProtection.displayName = "ImageProtection"

export default ImageProtection
