"use client"

import { motion } from "framer-motion"
import { Shield, Globe, Users, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Notre Vision &
              <span className="gradient-text"> Mission</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Chez Vynal Agency, nous croyons que chaque personnalité publique mérite 
              de maîtriser son image digitale avec excellence et discrétion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-anthracite">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Notre Vision
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Devenir la référence mondiale en gestion stratégique d'image digitale, 
                en offrant aux personnalités publiques les outils et l'expertise nécessaires 
                pour naviguer avec confiance dans un paysage médiatique complexe.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Nous aspirons à créer un écosystème où l'influence publique est exercée 
                de manière responsable, stratégique et durable, avec un impact positif 
                mesurable sur la société.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Notre Mission
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Protéger, amplifier et optimiser l'image digitale de nos clients à travers 
                une approche holistique qui combine technologie de pointe, expertise stratégique 
                et compréhension profonde des enjeux médiatiques contemporains.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Nous nous engageons à fournir des solutions personnalisées qui respectent 
                l'authenticité de chaque personnalité tout en maximisant leur impact positif 
                dans leur écosystème professionnel et public.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ADN Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Notre ADN
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Les valeurs fondamentales qui guident chaque action
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Excellence",
                description: "Standards irréprochables dans chaque intervention, avec une attention obsessionnelle aux détails."
              },
              {
                icon: Globe,
                title: "Confidentialité",
                description: "Protection absolue des informations sensibles avec des protocoles de sécurité de niveau militaire."
              },
              {
                icon: Users,
                title: "Stratégie",
                description: "Approche data-driven et intelligence avant action pour des résultats mesurables et durables."
              },
              {
                icon: Award,
                title: "Innovation",
                description: "Veille constante et adoption des technologies les plus avancées pour rester en avance."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-blue-primary" />
                    </div>
                    <CardTitle className="text-xl text-white">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-anthracite">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Notre Approche Stratégique
            </h2>
            
            <div className="space-y-8">
              <div className="glass rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Analyse 360°
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Nous commençons par une évaluation complète de votre écosystème digital : 
                  présence en ligne, perception publique, risques identifiés et opportunités 
                  de développement. Cette analyse approfondie sert de fondation à notre 
                  stratégie personnalisée.
                </p>
              </div>

              <div className="glass rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Stratégie Sur Mesure
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Chaque personnalité est unique. Nous développons des stratégies entièrement 
                  personnalisées qui respectent votre authenticité tout en optimisant votre 
                  impact. Nos plans d'action sont détaillés, mesurables et adaptés à vos 
                  objectifs spécifiques.
                </p>
              </div>

              <div className="glass rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Exécution Maîtrisée
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Notre équipe d'experts déploie les actions avec une coordination précise 
                  sur tous les canaux pertinents. Nous assurons une communication proactive 
                  et une gestion transparente tout au long du processus.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ethics Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Confidentialité & Éthique
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-12">
              La confiance est le fondement de notre relation avec chaque client. 
              Nous nous engageons à maintenir les standards éthiques les plus élevés 
              dans toutes nos interventions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass rounded-lg p-6 text-left">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Protection des Données
                </h3>
                <p className="text-gray-300">
                  Conformité RGPD stricte, cryptage de bout en bout, 
                  et protocoles de sécurité avancés pour toutes vos informations.
                </p>
              </div>

              <div className="glass rounded-lg p-6 text-left">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Transparence Totale
                </h3>
                <p className="text-gray-300">
                  Reporting détaillé, communication honnête sur les progrès, 
                  et aucune action sans votre approbation explicite.
                </p>
              </div>

              <div className="glass rounded-lg p-6 text-left">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Intégrité Professionnelle
                </h3>
                <p className="text-gray-300">
                  Refus de toute pratique contraire à l'éthique, 
                  respect des normes industrielles et engagement envers la vérité.
                </p>
              </div>

              <div className="glass rounded-lg p-6 text-left">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Engagement Long Terme
                </h3>
                <p className="text-gray-300">
                  Nous construisons des partenariats durables basés sur 
                  la performance continue et la confiance mutuelle.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
