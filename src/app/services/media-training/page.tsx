"use client"

import React, { memo } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Users, Mic, Camera, FileText, Award, CheckCircle, Play, BookOpen, Video, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const MediaTraining = memo(() => {
  const programs = [
    {
      icon: Mic,
      title: "Interviews TV/Radio",
      description: "Maîtrise des techniques d'interview pour les médias audiovisuels.",
      modules: ["Gestion du stress", "Messages clés", "Langage corporel", "Réponses difficiles"],
      color: "from-indigo-500/20 to-violet-500/20"
    },
    {
      icon: Camera,
      title: "Présentations Publiques",
      description: "Développement de votre présence et impact sur scène.",
      modules: ["Storytelling", "Gestion de l'audience", "Supports visuels", "Improvisation"],
      color: "from-violet-500/20 to-purple-500/20"
    },
    {
      icon: FileText,
      title: "Conférences Presse",
      description: "Préparation aux annonces et déclarations publiques importantes.",
      modules: ["Discours structuré", "Gestion des questions", "Relations journalistes", "Crise communication"],
      color: "from-indigo-500/20 to-blue-500/20"
    },
    {
      icon: Users,
      title: "Leadership & Influence",
      description: "Développement de votre charisme et pouvoir de persuasion.",
      modules: ["Communication non-verbale", "Intelligence émotionnelle", "Négociation", "Réseautage"],
      color: "from-violet-500/20 to-indigo-500/20"
    }
  ]

  const methodology = [
    {
      phase: "Évaluation Initiale",
      description: "Analyse de vos forces et faiblesses en communication publique.",
      activities: ["Enregistrement vidéo", "Feedback expert", "Plan personnalisé"],
      icon: Video
    },
    {
      phase: "Formation Intensive",
      description: "Sessions pratiques avec simulations réelles et coaching personnalisé.",
      activities: ["Mises en situation", "Caméras professionnelles", "Coaching 1:1"],
      icon: Camera
    },
    {
      phase: "Pratique Avancée",
      description: "Exercices complexes pour maîtriser les situations les plus exigeantes.",
      activities: ["Interviews surprise", "Conférences simulées", "Gestion de crise"],
      icon: Mic
    },
    {
      phase: "Suivi & Optimisation",
      description: "Accompagnement continu pour perfectionner vos compétences.",
      activities: ["Sessions de rappel", "Analyse performances", "Support post-formation"],
      icon: CheckCircle
    }
  ]

  const benefits = [
    { text: "Confiance accrue en public", icon: Award },
    { text: "Messages plus percutants", icon: Sparkles },
    { text: "Meilleure gestion du stress", icon: CheckCircle },
    { text: "Impact médiatique renforcé", icon: Play },
    { text: "Relations presse optimisées", icon: Users },
    { text: "Leadership affirmé", icon: Award }
  ]

  const testimonials = [
    {
      role: "CEO Tech",
      result: "Interview CNBC réussie avec 2M+ vues",
      improvement: "+300% d'impact médiatique"
    },
    {
      role: "Ministre",
      result: "Conférence presse internationale parfaite",
      improvement: "Gestion de crise maîtrisée"
    },
    {
      role: "Athlète Olympique",
      result: "Discours victoire émouvant et viral",
      improvement: "+500K followers en 48h"
    }
  ]

  const stats = [
    { value: "500+", label: "Professionnels formés", subtext: "avec succès" },
    { value: "95%", label: "Satisfaction", subtext: "des participants" },
    { value: "24h", label: "Temps moyen", subtext: "pour maîtriser" },
    { value: "100%", label: "Mise en pratique", subtext: "garantie" }
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
              <Mic className="h-4 w-4 text-indigo-500" />
              <span className="text-sm font-medium text-indigo-500">Media Training</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Maîtrisez l'art de
              <span className="mt-2 block bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600 bg-clip-text text-transparent">
                communiquer en public
              </span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Formation aux médias et prises de parole publiques pour transformer 
              votre présence et captiver votre audience avec confiance et authenticité.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg"
                className="group h-12 bg-gradient-to-r from-indigo-500 to-violet-600 px-8 text-base font-semibold shadow-lg shadow-indigo-500/25 transition-all hover:shadow-xl hover:shadow-indigo-500/30"
                asChild
              >
                <Link href="/contact">
                  Réserver ma formation
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

      {/* Programs Section */}
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
              Programmes de formation spécialisés
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Des parcours adaptés à vos objectifs spécifiques de communication
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((program, index) => {
              const Icon = program.icon
              return (
                <motion.div
                  key={program.title}
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
                    <div className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${program.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`} />
                    
                    <CardContent className="relative flex h-full flex-col p-6">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-transparent backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:border-indigo-500/40">
                        <Icon className="h-7 w-7 text-indigo-500 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground">
                          {program.title}
                        </h3>
                        <p className="mb-4 text-[13px] leading-relaxed text-muted-foreground">
                          {program.description}
                        </p>
                        
                        <ul className="space-y-2">
                          {program.modules.map((module, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <BookOpen className="mt-0.5 h-3 w-3 flex-shrink-0 text-indigo-500" />
                              <span>{module}</span>
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

      {/* Methodology Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[120px]" />
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
              Notre méthodologie éprouvée
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Une approche structurée en 4 phases pour des résultats garantis
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2">
            {methodology.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Card className="group h-full overflow-hidden border border-indigo-500/20 bg-gradient-to-br from-indigo-500/5 to-transparent backdrop-blur-xl transition-all duration-500 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-base font-bold text-white shadow-lg">
                          {index + 1}
                        </div>
                        <Icon className="h-6 w-6 text-indigo-500" strokeWidth={1.5} />
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-foreground">
                        {item.phase}
                      </h3>
                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                      <div className="space-y-2">
                        {item.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-500" />
                            <span className="text-sm text-muted-foreground">{activity}</span>
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

      {/* Benefits Section */}
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
              Bénéfices transformateurs
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Les compétences que vous allez acquérir
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={benefit.text}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.08,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <Card className="border-indigo-500/20 bg-gradient-to-br from-indigo-500/5 to-transparent backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:shadow-lg">
                      <CardContent className="flex items-center gap-3 p-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500/10">
                          <Icon className="h-5 w-5 text-indigo-500" strokeWidth={1.5} />
                        </div>
                        <span className="text-sm font-medium text-foreground">{benefit.text}</span>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-violet-500/5 blur-[120px]" />
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
              Succès vérifiés
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Les résultats de nos formations parlent d'eux-mêmes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1]
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Card className="h-full overflow-hidden border border-indigo-500/20 bg-gradient-to-br from-indigo-500/5 to-transparent backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/20 to-violet-500/20">
                        <Play className="h-5 w-5 text-indigo-500" strokeWidth={1.5} />
                      </div>
                      <span className="text-sm font-bold text-foreground">{testimonial.role}</span>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {testimonial.result}
                    </p>
                    <div className="inline-flex rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1.5">
                      <span className="text-xs font-semibold text-indigo-500">
                        {testimonial.improvement}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
                  <Camera className="h-4 w-4 text-indigo-500" />
                  <span className="text-sm font-medium text-indigo-500">Formation Premium</span>
                </div>

                <h2 className="mb-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                  Transformez votre
                  <span className="mt-2 block bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                    communication publique
                  </span>
                </h2>
                
                <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Acquérez les compétences pour captiver n'importe quelle audience 
                  et devenir un communicant exceptionnel avec notre formation experte.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button 
                    size="lg"
                    className="group h-12 bg-gradient-to-r from-indigo-500 to-violet-600 px-8 text-base font-semibold shadow-lg shadow-indigo-500/25 transition-all hover:shadow-xl hover:shadow-indigo-500/30"
                    asChild
                  >
                    <Link href="/contact">
                      Commencer ma formation
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="h-12 border-indigo-500/30 px-8 text-base backdrop-blur-sm hover:border-indigo-500/50 hover:bg-indigo-500/10"
                    asChild
                  >
                    <Link href="/portfolio">
                      Témoignages clients
                    </Link>
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-indigo-500" />
                    <span>Coaching personnalisé</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-indigo-500" />
                    <span>Simulations réelles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-indigo-500" />
                    <span>Résultats garantis</span>
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

MediaTraining.displayName = "MediaTraining"

export default MediaTraining