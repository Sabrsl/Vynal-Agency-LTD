"use client"

import React, { memo } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Camera, Video, FileText, Palette, Sparkles, Award, CheckCircle, TrendingUp, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const ContentCreation = memo(() => {
  const services = [
    {
      icon: Camera,
      title: "Photographie Premium",
      tagline: "Capturez votre essence",
      description: "Shooting photo professionnel qui sublime votre image",
      features: ["Portraits professionnels haute définition", "Shooting événementiel et lifestyle", "Photo produit et corporate", "Retouche experte et postproduction"],
      color: "from-amber-500/20 to-yellow-500/20",
      accentColor: "text-amber-500"
    },
    {
      icon: Video,
      title: "Production Vidéo",
      tagline: "Racontez votre histoire",
      description: "Création de contenu vidéo engageant et cinématographique",
      features: ["Interviews et documentaires", "Vidéos promotionnelles brand", "Contenu réseaux sociaux optimisé", "Montage professionnel et effets"],
      color: "from-red-500/20 to-pink-500/20",
      accentColor: "text-red-500"
    },
    {
      icon: FileText,
      title: "Rédaction de Contenu",
      tagline: "Les mots qui marquent",
      description: "Textes percutants qui renforcent votre crédibilité",
      features: ["Articles de thought leadership", "Discours et keynotes", "Contenu LinkedIn et blog", "Biographies et communications"],
      color: "from-blue-500/20 to-cyan-500/20",
      accentColor: "text-blue-500"
    },
    {
      icon: Palette,
      title: "Design Graphique",
      tagline: "Votre identité visuelle",
      description: "Création graphique qui reflète votre marque personnelle",
      features: ["Identité visuelle complète", "Infographies et data viz", "Présentations impactantes", "Templates réseaux sociaux"],
      color: "from-purple-500/20 to-indigo-500/20",
      accentColor: "text-purple-500"
    }
  ]

  const portfolio = [
    {
      category: "Photographie",
      count: "500+",
      items: ["Portraits CEO Fortune 500", "Shootings magazine mode", "Événements corporates premium", "Campagnes publicitaires"],
      gradient: "from-amber-500 to-yellow-600",
      bgGradient: "from-amber-500/10 to-yellow-500/10"
    },
    {
      category: "Vidéo",
      count: "200+",
      items: ["Interviews TEDx & keynotes", "Documentaires corporate", "Campagnes virales 10M+ vues", "Contenu YouTube premium"],
      gradient: "from-red-500 to-pink-600",
      bgGradient: "from-red-500/10 to-pink-500/10"
    },
    {
      category: "Design",
      count: "1000+",
      items: ["Rebranding personnalités", "Pitch decks investisseurs", "Infographies data complexe", "Guidelines visuelles"],
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-500/10 to-purple-500/10"
    },
    {
      category: "Rédaction",
      count: "300+",
      items: ["Articles Forbes & Harvard BR", "Biographies best-sellers", "Discours historiques", "Ghostwriting livres"],
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-500/10 to-emerald-500/10"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Brief Créatif",
      description: "Compréhension approfondie de vos objectifs, audience cible et positionnement souhaité.",
      icon: Sparkles
    },
    {
      step: "02",
      title: "Concept & Planification",
      description: "Élaboration du concept créatif, moodboard et planification détaillée de la production.",
      icon: Palette
    },
    {
      step: "03",
      title: "Production",
      description: "Création du contenu avec nos équipes d'experts et équipements professionnels.",
      icon: Camera
    },
    {
      step: "04",
      title: "Postproduction",
      description: "Retouche, montage et optimisation pour garantir un résultat exceptionnel.",
      icon: Zap
    },
    {
      step: "05",
      title: "Validation",
      description: "Review collaborative et ajustements selon vos retours jusqu'à satisfaction totale.",
      icon: CheckCircle
    },
    {
      step: "06",
      title: "Livraison",
      description: "Finalisation et livraison des fichiers dans tous les formats requis.",
      icon: Award
    }
  ]

  const stats = [
    { value: "2500+", label: "Projets livrés", subtext: "avec excellence" },
    { value: "98%", label: "Satisfaction client", subtext: "recommandations" },
    { value: "75+", label: "Prix créatifs", subtext: "internationaux" },
    { value: "24h", label: "Turnaround express", subtext: "disponible" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-background to-background" />
          <div className="absolute left-1/3 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[120px]" />
          <div className="absolute bottom-0 right-1/3 h-[600px] w-[600px] translate-x-1/2 rounded-full bg-yellow-500/10 blur-[120px]" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-5 py-2 backdrop-blur-sm">
              <Camera className="h-4 w-4 text-amber-500" />
              <span className="text-sm font-medium text-amber-500">Content Strategy & Production</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Créez du contenu
              <span className="mt-2 block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                qui inspire et convertit
              </span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Production de contenu premium multi-format qui renforce votre crédibilité, 
              capte l'attention et positionne votre expertise auprès de votre audience.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg"
                className="group h-12 bg-gradient-to-r from-amber-500 to-amber-600 px-8 text-base font-semibold shadow-lg shadow-amber-500/25 transition-all hover:shadow-xl hover:shadow-amber-500/30"
                asChild
              >
                <Link href="/contact">
                  Démarrer mon projet
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="h-12 border-border/50 px-8 text-base backdrop-blur-sm hover:border-amber-500/50 hover:bg-card/50"
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
                <div 
                  key={stat.label}
                  className="relative overflow-hidden rounded-xl border border-border/50 bg-card/30 p-5 text-center backdrop-blur-sm sm:p-6"
                >
                  <div className="mb-1 text-2xl font-bold text-amber-500 sm:text-3xl lg:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mb-1 text-xs font-medium text-foreground sm:text-sm">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.subtext}
                  </div>
                </div>
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
              Services de création premium
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Une offre complète pour tous vos besoins de contenu professionnel
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
                  <Card className="group relative h-full overflow-hidden border border-border/50 bg-card/40 backdrop-blur-xl transition-all duration-500 hover:border-amber-500/30 hover:bg-card/60 hover:shadow-2xl hover:shadow-amber-500/10">
                    <div className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${service.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`} />
                    
                    <CardContent className="relative flex h-full flex-col p-6">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-transparent backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:border-amber-500/40">
                        <Icon className={`h-7 w-7 ${service.accentColor} transition-transform duration-500 group-hover:scale-110`} strokeWidth={1.5} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="mb-2 text-lg font-bold tracking-tight text-foreground">
                          {service.title}
                        </h3>
                        <p className={`mb-3 text-sm font-semibold ${service.accentColor}`}>
                          {service.tagline}
                        </p>
                        <p className="mb-4 text-[13px] leading-relaxed text-muted-foreground">
                          {service.description}
                        </p>
                        
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <div className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-amber-500" />
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

      {/* Portfolio Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-amber-500/5 blur-[120px]" />
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
              Portfolio créatif d'excellence
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Des réalisations qui ont marqué les esprits et généré des résultats
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {portfolio.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1]
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Card className="group h-full overflow-hidden border border-border/50 bg-card/40 backdrop-blur-xl transition-all duration-500 hover:border-amber-500/30 hover:bg-card/60 hover:shadow-xl">
                  <div className={`h-1 bg-gradient-to-r ${category.gradient}`} />
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold text-foreground">
                        {category.category}
                      </h3>
                      <span className={`rounded-full bg-gradient-to-r ${category.bgGradient} px-3 py-1 text-xs font-bold`}>
                        {category.count}
                      </span>
                    </div>
                    <div className="space-y-3">
                      {category.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
                          <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                        </div>
                      ))}
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
              Processus créatif éprouvé
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              6 étapes pour garantir un contenu exceptionnel à chaque projet
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
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
                >
                  <Card className="group h-full overflow-hidden border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent backdrop-blur-xl transition-all duration-500 hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/10">
                    <CardContent className="flex flex-col p-6">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-base font-bold text-white shadow-lg">
                          {item.step}
                        </div>
                        <Icon className="h-6 w-6 text-amber-500" strokeWidth={1.5} />
                      </div>
                      <h3 className="mb-3 text-lg font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
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
            <div className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-card/80 via-card/50 to-background/80 p-8 backdrop-blur-xl sm:p-12 lg:p-16">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-yellow-500/20 blur-3xl" />
              
              <div className="relative text-center">
                <h2 className="mb-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                  Transformez vos idées en
                  <span className="mt-2 block bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
                    contenu mémorable
                  </span>
                </h2>
                
                <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Donnez vie à votre vision avec notre équipe créative experte. 
                  Du concept à la réalisation, nous transformons vos idées en contenu d'exception.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button 
                    size="lg"
                    className="group h-12 bg-gradient-to-r from-amber-500 to-amber-600 px-8 text-base font-semibold shadow-lg shadow-amber-500/25 transition-all hover:shadow-xl hover:shadow-amber-500/30"
                    asChild
                  >
                    <Link href="/contact">
                      Lancer mon projet créatif
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="h-12 border-border/50 px-8 text-base backdrop-blur-sm hover:border-amber-500/50 hover:bg-card/50"
                    asChild
                  >
                    <Link href="/portfolio">
                      Voir notre portfolio
                    </Link>
                  </Button>
                </div>

                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border/30 bg-card/30 px-5 py-2.5 backdrop-blur-sm">
                  <Award className="h-4 w-4 text-amber-500" />
                  <span className="text-xs text-muted-foreground sm:text-sm">
                    75+ prix créatifs internationaux
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
})

ContentCreation.displayName = "ContentCreation"

export default ContentCreation