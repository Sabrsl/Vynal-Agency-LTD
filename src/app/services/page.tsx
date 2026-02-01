"use client"

import React, { memo } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Shield, TrendingUp, Zap, Target, Megaphone, Camera, Users, Brain, Award, Globe, FileCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const services = [
  {
    icon: Target,
    title: "Personal Branding Stratégique",
    tagline: "Devenez une référence incontournable",
    description: "Construction d'une marque personnelle authentique et impactante",
    details: "Transformez votre expertise en autorité reconnue. Positionnement thought leader avec invitations prestigieuses et couvertures médias.",
    features: ["Audit complet présence digitale", "Stratégie de positionnement personnalisée", "Optimisation multi-plateformes"],
    metrics: "Clients TEDx speakers & auteurs publiés",
    color: "from-blue-500/20 to-cyan-500/20",
    accentColor: "text-blue-500",
    href: "/services/personal-branding"
  },
  {
    icon: Shield,
    title: "Gestion de Réputation en Ligne",
    tagline: "Blindez votre réputation",
    description: "Protection et optimisation de votre e-réputation",
    details: "Surveillance continue et stratégie de contenu positif pour maintenir une image publique irréprochable à travers tous les canaux.",
    features: ["Monitoring 24/7 de votre e-réputation", "Gestion des avis et commentaires", "Stratégie de contenu positif"],
    metrics: "98% de contenus négatifs neutralisés",
    color: "from-purple-500/20 to-pink-500/20",
    accentColor: "text-purple-500",
    href: "/services/reputation-management"
  },
  {
    icon: Megaphone,
    title: "Communication de Crise Digitale",
    tagline: "Éteignez les crises avant qu'elles ne viralisent",
    description: "Intervention rapide et coordonnée",
    details: "Cellule de crise dédiée avec protocole d'intervention <2h pour gérer les situations critiques et préserver votre image.",
    features: ["Cellule de crise dédiée 24/7", "Protocole d'intervention <2h", "Stratégie de récupération d'image"],
    metrics: "+340% sentiment positif post-crise",
    color: "from-red-500/20 to-orange-500/20",
    accentColor: "text-red-500",
    href: "/services/crisis-communication"
  },
  {
    icon: TrendingUp,
    title: "Optimisation Médias Sociaux",
    tagline: "Transformez votre audience en communauté",
    description: "Stratégie de contenu et engagement ciblé",
    details: "Maximisez votre influence sur les plateformes clés avec une stratégie de croissance organique qui génère des résultats mesurables.",
    features: ["Stratégie de contenu sur-mesure", "Croissance organique ciblée", "Analytics et optimisation continue"],
    metrics: "+2M followers organiques clients",
    color: "from-green-500/20 to-emerald-500/20",
    accentColor: "text-green-500",
    href: "/services/social-media"
  },
  {
    icon: Award,
    title: "Stratégie d'Influence & Partenariats",
    tagline: "Monétisez votre influence",
    description: "Identification et négociation de partenariats stratégiques",
    details: "Amplifiez votre portée et créez des opportunités lucratives à travers des partenariats alignés avec vos valeurs et objectifs.",
    features: ["Identification des opportunités premium", "Négociation et gestion de partenariats", "Mesure de l'impact et ROI"],
    metrics: "Contrats majeurs obtenus pour nos clients",
    color: "from-yellow-500/20 to-amber-500/20",
    accentColor: "text-yellow-600",
    href: "/services/influence-strategy"
  },
  {
    icon: FileCheck,
    title: "Protection & Nettoyage d'Image",
    tagline: "Reprenez le contrôle de votre récit",
    description: "Correction proactive des informations négatives",
    details: "Suppression ou neutralisation des contenus préjudiciables avec techniques juridiques et de référencement avancées.",
    features: ["Suppression de contenus négatifs", "Protection des données personnelles", "Veille juridique et techniques SEO"],
    metrics: "Moyenne 94% de résolution",
    color: "from-indigo-500/20 to-violet-500/20",
    accentColor: "text-indigo-500",
    href: "/services/image-protection"
  },
  {
    icon: Users,
    title: "Media Training & Préparation",
    tagline: "Brillez dans chaque prise de parole",
    description: "Formation aux médias et interventions publiques",
    details: "Coaching personnalisé pour interviews TV/podcast, conférences et présentations. Maîtrisez l'art de la communication publique.",
    features: ["Coaching interviews TV/radio/podcast", "Préparation aux crises médiatiques", "Formation prise de parole publique"],
    metrics: "Clients interviewés Forbes, CNN, BBC",
    color: "from-pink-500/20 to-rose-500/20",
    accentColor: "text-pink-500",
    href: "/services/media-training"
  },
  {
    icon: Brain,
    title: "Content Strategy & Production",
    tagline: "Votre expertise, amplifiée",
    description: "Création de contenu premium et engageant",
    details: "Production de contenu professionnel (articles, vidéos, podcasts) qui renforce votre crédibilité et positionne votre expertise.",
    features: ["Ghostwriting articles & LinkedIn", "Production vidéo professionnelle", "Storytelling personnel & thought leadership"],
    metrics: "Contenu publié médias prestigieux",
    color: "from-cyan-500/20 to-teal-500/20",
    accentColor: "text-cyan-500",
    href: "/services/content-production"
  },
  {
    icon: Globe,
    title: "SEO & Autorité de Marque",
    tagline: "Dominez les résultats de recherche",
    description: "Optimisation recherche de nom et autorité digitale",
    details: "Contrôlez ce qui apparaît quand on vous cherche. Optimisation Google, création de contenu héro, gestion Wikipédia.",
    features: ["Optimisation résultats recherche nom", "Création contenu \"héro\" (TEDx, Forbes)", "Gestion Wikipédia/Knowledge Graph"],
    metrics: "Page 1 Google garantie pour votre nom",
    color: "from-orange-500/20 to-red-500/20",
    accentColor: "text-orange-500",
    href: "/services/seo-authority"
  }
]

const stats = [
  { value: "98%", label: "Taux de satisfaction client" },
  { value: "<2h", label: "Temps de réponse crise" },
  { value: "24/7", label: "Monitoring actif" },
  { value: "100%", label: "Confidentialité NDA" }
]

const ServicesPage = memo(() => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-accent/10 blur-[100px]" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 backdrop-blur-sm">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Solutions Premium</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Services d'excellence pour
              <span className="mt-2 block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                personnalités exigeantes
              </span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Une gamme complète de services sur mesure pour bâtir, protéger et amplifier 
              votre image publique avec des résultats mesurables et exceptionnels.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg"
                className="group h-12 bg-gradient-to-r from-primary to-primary/90 px-8 text-base font-semibold shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
                asChild
              >
                <Link href="/contact">
                  Consultation gratuite
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="h-12 border-border/50 px-8 text-base backdrop-blur-sm hover:border-primary/50 hover:bg-card/50"
                asChild
              >
                <Link href="/methodology">
                  Notre méthodologie
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
                  <div className="mb-2 text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              Une expertise complète
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Neuf services spécialisés pour couvrir tous les aspects de votre image publique digitale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  <Card className="group relative h-full overflow-hidden border border-border/50 bg-card/40 backdrop-blur-xl transition-all duration-500 hover:border-primary/30 hover:bg-card/60 hover:shadow-2xl hover:shadow-primary/5">
                    {/* Gradient Accent */}
                    <div className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${service.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`} />
                    
                    <CardContent className="relative flex h-full flex-col p-6 sm:p-7">
                      {/* Icon */}
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/10">
                        <Icon className={`h-7 w-7 ${service.accentColor} transition-transform duration-500 group-hover:scale-110`} strokeWidth={1.5} />
                      </div>
                      
                      {/* Content */}
                      <div className="mb-4 flex-1">
                        <h3 className="mb-2 text-lg font-bold tracking-tight text-foreground sm:text-xl">
                          {service.title}
                        </h3>
                        <p className={`mb-3 text-sm font-semibold ${service.accentColor}`}>
                          {service.tagline}
                        </p>
                        <p className="mb-4 text-[13px] leading-relaxed text-muted-foreground sm:text-sm">
                          {service.details}
                        </p>
                        
                        {/* Features */}
                        <ul className="mb-4 space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <div className={`mt-1.5 h-1 w-1 flex-shrink-0 rounded-full ${service.accentColor}`} />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Metrics Badge */}
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5">
                          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                          <span className="text-xs font-medium text-primary">{service.metrics}</span>
                        </div>
                      </div>
                      
                      {/* CTA */}
                      <Button 
                        variant="ghost"
                        size="sm" 
                        className="group/btn w-full justify-between border border-border/50 hover:border-primary/50 hover:bg-primary/5"
                        asChild
                      >
                        <Link href={service.href}>
                          <span>En savoir plus</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
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
            <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-card/80 via-card/50 to-background/80 p-8 backdrop-blur-xl sm:p-12 lg:p-16">
              {/* Background Effects */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
              
              <div className="relative text-center">
                <h2 className="mb-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                  Prêt à transformer votre
                  <span className="mt-2 block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    image publique ?
                  </span>
                </h2>
                
                <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Échangeons sur vos objectifs et découvrons ensemble comment nos services 
                  peuvent vous propulser vers l'excellence.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button 
                    size="lg"
                    className="group h-12 bg-gradient-to-r from-primary to-primary/90 px-8 text-base font-semibold shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
                    asChild
                  >
                    <Link href="/contact">
                      Démarrer maintenant
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="h-12 border-border/50 px-8 text-base backdrop-blur-sm hover:border-primary/50 hover:bg-card/50"
                    asChild
                  >
                    <Link href="/case-studies">
                      Voir nos cas clients
                    </Link>
                  </Button>
                </div>

                {/* Trust Badge */}
                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border/30 bg-card/30 px-5 py-2.5 backdrop-blur-sm">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-xs text-muted-foreground sm:text-sm">
                    100% des clients protégés par NDA
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

ServicesPage.displayName = "ServicesPage"

export default ServicesPage