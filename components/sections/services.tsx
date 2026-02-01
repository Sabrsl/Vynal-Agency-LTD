"use client"

import React, { memo, useState } from "react"
import { motion } from "framer-motion"
import { 
  Target, 
  Shield, 
  AlertTriangle, 
  Users, 
  TrendingUp, 
  Lock,
  Mic,
  Brain,
  Globe
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  title: string
  description: string
  features?: string[]
  index?: number
  href?: string
}

const ServiceCard = memo(function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  index = 0,
  href
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={href || "/services"}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.08,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative h-full cursor-pointer"
      >
      {/* Glow Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0 blur-xl transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))',
        }}
        animate={{
          opacity: isHovered ? 0.3 : 0,
        }}
      />

      {/* Card Container */}
      <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card backdrop-blur-xl transition-all duration-500 hover:border-primary hover:shadow-2xl hover:shadow-primary/10 min-h-[280px] sm:min-h-[320px]">
        
        {/* Animated Background Pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />
          <motion.div
            className="absolute inset-0 will-change-transform"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.08) 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
            animate={{
              backgroundPosition: isHovered ? ['0px 0px', '20px 20px'] : '0px 0px',
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative flex h-full flex-col p-5 sm:p-6">
          {/* Icon Container */}
          <motion.div
            className="mb-4 inline-flex items-center justify-center sm:mb-5"
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Icon Glow */}
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-xl blur-lg"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))',
                }}
                animate={{
                  opacity: isHovered ? 0.5 : 0.25,
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Icon Background */}
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-primary shadow-lg sm:h-12 sm:w-12">
                <Icon className="h-5 w-5 text-foreground sm:h-6 sm:w-6" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <h3 className="mb-2 text-base font-bold leading-tight text-foreground sm:mb-3 sm:text-lg lg:text-xl">
            {title}
          </h3>

          {/* Description */}
          <p className="mb-3 text-xs leading-relaxed text-muted-foreground flex-1 sm:mb-4 sm:text-sm">
            {description}
          </p>

          {/* Features List */}
          {features && features.length > 0 && (
            <ul className="space-y-1.5 sm:space-y-2">
              {features.slice(0, 3).map((feature, idx) => (
                <motion.li
                  key={`${title}-feature-${idx}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  className="flex items-start gap-2 text-xs text-muted-foreground sm:gap-2.5"
                >
                  <svg
                    className="mt-0.5 h-3 w-3 flex-shrink-0 text-primary sm:h-4 sm:w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="flex-1 line-clamp-2">{feature}</span>
                </motion.li>
              ))}
            </ul>
          )}

          {/* Hover Indicator */}
          <motion.div
            className="mt-auto pt-3 flex items-center gap-2 text-xs font-medium text-primary sm:pt-4 sm:text-sm"
            animate={{
              x: isHovered ? 4 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <span>En savoir plus</span>
            <svg
              className="h-3 w-3 sm:h-4 sm:w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.div>
        </div>

        {/* Bottom Gradient Line */}
        <motion.div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-500"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
        />
      </div>
    </motion.div>
    </Link>
  )
})

ServiceCard.displayName = "ServiceCard"

const Services = memo(() => {
  const services = [
    {
      icon: Target,
      title: "Personal Branding Stratégique",
      description: "Développement d'une image publique authentique et impactante, alignée avec vos objectifs professionnels.",
      features: [
        'Audit complet de votre présence digitale',
        'Stratégie de positionnement personnalisée',
        'Optimisation multi-plateformes',
      ],
      href: "/services/personal-branding"
    },
    {
      icon: Shield,
      title: "Gestion de Réputation en Ligne",
      description: "Protection et optimisation de votre e-réputation à travers une veille constante et des actions stratégiques.",
      features: [
        'Monitoring 24/7 de votre e-réputation',
        'Gestion des avis et commentaires',
        'Stratégie de contenu positif',
      ],
      href: "/services/reputation-management"
    },
    {
      icon: AlertTriangle,
      title: "Communication de Crise Digitale",
      description: "Intervention rapide et coordonnée pour gérer les situations critiques et préserver votre image.",
      features: [
        'Cellule de crise dédiée',
        'Protocole d\'intervention rapide',
        'Stratégie de récupération d\'image',
      ],
      href: "/services/crisis-communication"
    },
    {
      icon: Users,
      title: "Optimisation Médias Sociaux",
      description: "Stratégie de contenu et engagement sur les plateformes clés pour maximiser votre influence.",
      features: [
        'Stratégie de contenu sur-mesure',
        'Croissance organique ciblée',
        'Analytics et optimisation continue',
      ],
      href: "/services/social-media"
    },
    {
      icon: TrendingUp,
      title: "Stratégie d'Influence & Partenariats",
      description: "Identification et négociation de partenariats stratégiques pour amplifier votre portée.",
      features: [
        'Identification des opportunités',
        'Négociation et gestion de partenariats',
        'Mesure de l\'impact et ROI',
      ],
      href: "/services/influence-strategy"
    },
    {
      icon: Lock,
      title: "Protection & Nettoyage d'Image",
      description: "Correction proactive des informations négatives et renforcement de votre image publique.",
      features: [
        'Suppression de contenus négatifs',
        'Protection des données personnelles',
        'Veille juridique et techniques',
      ],
      href: "/services/image-protection"
    },
    {
      icon: Mic,
      title: "Media Training & Préparation",
      description: "Formation aux médias et interventions publiques pour maîtriser votre communication.",
      features: [
        'Coaching interviews TV/radio/podcast',
        'Préparation aux crises médiatiques',
        'Formation prise de parole publique',
      ],
      href: "/services/media-training"
    },
    {
      icon: Brain,
      title: "Content Strategy & Production",
      description: "Création de contenu premium qui renforce votre crédibilité et positionne votre expertise.",
      features: [
        'Ghostwriting articles & LinkedIn',
        'Production vidéo professionnelle',
        'Storytelling personnel & thought leadership',
      ],
      href: "/services/content-production"
    },
    {
      icon: Globe,
      title: "SEO & Autorité de Marque",
      description: "Optimisation recherche et contrôle de votre narrative digitale sur Google.",
      features: [
        'Optimisation résultats recherche nom',
        'Création contenu \"héro\" (TEDx, Forbes)',
        'Gestion Wikipédia/Knowledge Graph',
      ],
      href: "/services/seo-authority"
    },
  ]

  return (
    <section className="relative overflow-hidden bg-background section-padding">
      {/* Background Effects - 100% système */}
      <div className="pointer-events-none absolute inset-0 bg-anthracite-gradient" />
      <div className="pointer-events-none absolute left-0 top-1/4 h-64 w-64 rounded-full bg-secondary/15 blur-3xl sm:h-96 sm:w-96 sm:bg-secondary/20" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-64 w-64 rounded-full bg-primary/15 blur-3xl sm:h-96 sm:w-96 sm:bg-primary/20" />

      <div className="container-padding relative mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-secondary/20 px-3 py-1.5 backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-2">
            <div className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-xs font-medium text-muted-foreground sm:text-sm">Nos Expertises</span>
          </div>

          <h2 className="mb-4 text-2xl font-bold leading-tight text-foreground sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
            Des solutions complètes pour
            <span className="mt-1 block gradient-strategy sm:mt-2">
              votre influence digitale
            </span>
          </h2>

          <p className="responsive-text-base leading-relaxed text-muted-foreground">
            Une approche stratégique et personnalisée pour chaque aspect de votre présence en ligne
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              index={index}
              href={service.href}
            />
          ))}
        </div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center sm:mt-16"
        >
          <p className="mb-4 responsive-text-sm text-muted-foreground sm:mb-6">
            Besoin d'une solution personnalisée ?
          </p>
          <button 
            className="btn-luxury group"
            aria-label="Discuter de votre projet avec notre équipe"
          >
            <span className="relative z-10">Discutons de votre projet</span>
            <svg
              className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
})

Services.displayName = "Services"

export default Services