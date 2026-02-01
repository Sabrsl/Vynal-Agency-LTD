"use client"

import React, { memo } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Brain, FileText, Video, Mic, PenTool, Camera, Sparkles, CheckCircle, TrendingUp, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const ContentProduction = memo(() => {
  const services = [
    {
      icon: PenTool,
      title: "Ghostwriting Premium",
      description: "Rédaction professionnelle d'articles et livres sous votre nom",
      features: ["Articles LinkedIn et blog", "Livre blanc et e-books", "Discours et présentations", "Biographies professionnelles"],
      color: "from-cyan-500/20 to-teal-500/20",
      accentColor: "text-cyan-500"
    },
    {
      icon: Video,
      title: "Production Vidéo",
      description: "Création de contenu vidéo professionnel pour toutes plateformes",
      features: ["Interviews expertes", "Vidéos corporate", "Contenu TikTok/Reels", "Webinaires et formations"],
      color: "from-blue-500/20 to-indigo-500/20",
      accentColor: "text-blue-500"
    },
    {
      icon: Mic,
      title: "Podcast & Audio",
      description: "Production de contenu audio pour captiver votre audience",
      features: ["Podcast series", "Audiobooks", "Voice-overs professionnels", "Musique et sound design"],
      color: "from-purple-500/20 to-pink-500/20",
      accentColor: "text-purple-500"
    },
    {
      icon: Camera,
      title: "Photographie Pro",
      description: "Shooting photo professionnel pour renforcer votre image",
      features: ["Portraits professionnels", "Photos corporate", "Shooting événementiel", "Retouche experte"],
      color: "from-amber-500/20 to-orange-500/20",
      accentColor: "text-amber-500"
    }
  ]

  const contentTypes = [
    {
      type: "Thought Leadership",
      description: "Articles et analyses qui positionnent votre expertise",
      platforms: ["LinkedIn", "Forbes", "Harvard Business Review", "Medium"],
      icon: Brain
    },
    {
      type: "Storytelling Personnel",
      description: "Contenu qui connecte émotionnellement avec votre audience",
      platforms: ["Instagram", "YouTube", "Blog personnel", "Podcast"],
      icon: Sparkles
    },
    {
      type: "Contenu Éducatif",
      description: "Formation et partage de connaissances pour valeur ajoutée",
      platforms: ["Webinaires", "E-learning", "YouTube", "LinkedIn Learning"],
      icon: Award
    },
    {
      type: "Content Viral",
      description: "Création de contenu à fort potentiel de partage",
      platforms: ["TikTok", "Twitter/X", "Instagram Reels", "LinkedIn"],
      icon: TrendingUp
    }
  ]

  const process = [
    {
      step: "01",
      title: "Stratégie & Planning",
      description: "Définition de votre ligne éditoriale et planning de contenu",
      icon: Brain
    },
    {
      step: "02",
      title: "Production Créative",
      description: "Création du contenu avec nos équipes d'experts",
      icon: Sparkles
    },
    {
      step: "03",
      title: "Optimisation & Publication",
      description: "Adaptation multi-plateformes et publication stratégique",
      icon: TrendingUp
    },
    {
      step: "04",
      title: "Analyse & Itération",
      description: "Mesure des performances et optimisation continue",
      icon: CheckCircle
    }
  ]

  const stats = [
    { value: "1000+", label: "Contenus créés", subtext: "par mois" },
    { value: "50+", label: "Médias prestigieux", subtext: "publications" },
    { value: "85%", label: "Taux d'engagement", subtext: "supérieur à la moyenne" },
    { value: "72h", label: "Délai moyen", subtext: "de production" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-background to-background" />
          <div className="absolute left-1/3 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="absolute bottom-0 right-1/3 h-[600px] w-[600px] translate-x-1/2 rounded-full bg-teal-500/10 blur-[120px]" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-2 backdrop-blur-sm">
              <Brain className="h-4 w-4 text-cyan-500" />
              <span className="text-sm font-medium text-cyan-500">Content Strategy & Production</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Votre expertise,
              <span className="mt-2 block bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                amplifiée
              </span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Production de contenu premium et engageant qui renforce votre crédibilité 
              et positionne votre expertise auprès de votre audience.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg"
                className="group h-12 bg-gradient-to-r from-cyan-500 to-teal-600 px-8 text-base font-semibold shadow-lg shadow-cyan-500/25 transition-all hover:shadow-xl hover:shadow-cyan-500/30"
                asChild
              >
                <Link href="/contact">
                  Créer mon contenu
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="h-12 border-border/50 px-8 text-base backdrop-blur-sm hover:border-cyan-500/50 hover:bg-cyan-500/10"
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
                  className="relative overflow-hidden rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent p-5 text-center backdrop-blur-sm sm:p-6"
                >
                  <div className="mb-1 text-2xl font-bold text-cyan-500 sm:text-3xl lg:text-4xl">
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
              Production multi-format
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
                  <Card className="group relative h-full overflow-hidden border border-border/50 bg-card/40 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/30 hover:bg-card/60 hover:shadow-2xl hover:shadow-cyan-500/10">
                    <div className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${service.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`} />
                    
                    <CardContent className="relative flex h-full flex-col p-6">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-transparent backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:border-cyan-500/40">
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
                              <CheckCircle className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-cyan-500" />
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

      {/* Content Types Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-teal-500/5 blur-[120px]" />
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
              Types de contenu spécialisés
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Du thought leadership au contenu viral, maîtrisez tous les formats
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contentTypes.map((contentType, index) => {
              const Icon = contentType.icon
              return (
                <motion.div
                  key={contentType.type}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Card className="h-full overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20">
                          <Icon className="h-5 w-5 text-cyan-500" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-bold text-foreground">
                          {contentType.type}
                        </h3>
                      </div>
                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                        {contentType.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {contentType.platforms.map((platform, idx) => (
                          <span 
                            key={idx}
                            className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2 py-1 text-xs font-medium text-cyan-500"
                          >
                            {platform}
                          </span>
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
              Processus de production
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              4 étapes pour un contenu exceptionnel et performant
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
                  <Card className="group h-full overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10">
                    <CardContent className="flex flex-col p-6">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 text-base font-bold text-white shadow-lg">
                          {item.step}
                        </div>
                        <Icon className="h-6 w-6 text-cyan-500" strokeWidth={1.5} />
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
                      <ArrowRight className="h-6 w-6 text-cyan-500/30" />
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
            <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-card/80 via-card/50 to-background/80 p-8 backdrop-blur-xl sm:p-12 lg:p-16">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl" />
              
              <div className="relative text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
                  <Sparkles className="h-4 w-4 text-cyan-500" />
                  <span className="text-sm font-medium text-cyan-500">Création Premium</span>
                </div>

                <h2 className="mb-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                  Transformez vos idées en
                  <span className="mt-2 block bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
                    contenu mémorable
                  </span>
                </h2>
                
                <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Donnez vie à votre vision avec notre équipe créative experte. 
                  Du concept à la réalisation, nous créons du contenu qui marque les esprits.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button 
                    size="lg"
                    className="group h-12 bg-gradient-to-r from-cyan-500 to-teal-600 px-8 text-base font-semibold shadow-lg shadow-cyan-500/25 transition-all hover:shadow-xl hover:shadow-cyan-500/30"
                    asChild
                  >
                    <Link href="/contact">
                      Lancer mon projet
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="h-12 border-cyan-500/30 px-8 text-base backdrop-blur-sm hover:border-cyan-500/50 hover:bg-cyan-500/10"
                    asChild
                  >
                    <Link href="/portfolio">
                      Voir nos créations
                    </Link>
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-cyan-500" />
                    <span>Création sur-mesure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-cyan-500" />
                    <span>Qualité professionnelle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-cyan-500" />
                    <span>Livraison rapide</span>
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

ContentProduction.displayName = "ContentProduction"

export default ContentProduction
