"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MapPin, Shield, Clock, CheckCircle, ArrowRight, Sparkles } from "lucide-react"

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  profile: string
  situation: string
  urgency: string
  privacyConsent: boolean
  newsletter: boolean
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profile: "Artiste",
    situation: "",
    urgency: "Normal",
    privacyConsent: false,
    newsletter: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleInputChange = (field: keyof ContactFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center pt-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl w-full"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-strategy/20 to-accent/20 blur-3xl rounded-full"></div>
            
            <div className="relative glass-strong rounded-3xl p-8 md:p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow-lg"
              >
                <CheckCircle className="h-10 w-10 text-white" strokeWidth={2.5} />
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Demande reçue avec succès
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-300 mb-10 leading-relaxed"
              >
                Merci pour votre confiance. Notre équipe vous contactera dans les 24 heures 
                pour organiser votre consultation confidentielle.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 text-left mb-8 border border-border"
              >
                <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-accent" />
                  Prochaines étapes
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Shield, text: "Réception sécurisée de votre demande" },
                    { icon: Clock, text: "Analyse et vérification de confidentialité" },
                    { icon: Mail, text: "Contact sous 24h pour planifier votre consultation" }
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                        <step.icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-300 text-sm pt-1">{step.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                onClick={() => window.location.href = "/"}
                className="btn-luxury group"
              >
                Retour à l'accueil
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-luxury-gradient">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
            >
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">100% Confidentiel</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Consultation
              <br />
              <span className="gradient-strategy">Stratégique</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Premier échange confidentiel et sans engagement. Notre équipe d'experts vous accompagne 
              vers une maîtrise totale de votre image publique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-32 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="glass-strong rounded-2xl p-8 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Nos coordonnées</h2>
                  
                  <div className="space-y-5">
                    {[
                      { icon: Mail, label: "Email", value: "contact@vynal-agency.com", href: "mailto:contact@vynal-agency.com" },
                      { icon: Phone, label: "Téléphone", value: "+33 1 42 86 83 45", href: "tel:+33142868345" },
                      { icon: MapPin, label: "Localisation", value: "Paris, France", href: null }
                    ].map((contact, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        {contact.href ? (
                          <a href={contact.href} className="flex items-start gap-4 p-3 -m-3 rounded-xl hover:bg-primary/5 transition-colors">
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:shadow-glow-md transition-shadow">
                              <contact.icon className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-gray-400 mb-1">{contact.label}</p>
                              <p className="text-white font-medium group-hover:text-accent transition-colors break-words">{contact.value}</p>
                            </div>
                          </a>
                        ) : (
                          <div className="flex items-start gap-4">
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                              <contact.icon className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-gray-400 mb-1">{contact.label}</p>
                              <p className="text-white font-medium break-words">{contact.value}</p>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-5">Nos engagements</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Shield, text: "NDA systématique pour tous les échanges" },
                      { icon: Clock, text: "Réponse garantie sous 24 heures" },
                      { icon: CheckCircle, text: "Première consultation sans engagement" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <item.icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-gray-300 text-sm leading-relaxed pt-1">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="glass-strong rounded-2xl p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Demander une consultation
                  </h2>
                  <p className="text-gray-400">Remplissez le formulaire ci-dessous pour être contacté</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { field: "firstName", label: "Prénom", placeholder: "Jean" },
                      { field: "lastName", label: "Nom", placeholder: "Dupont" }
                    ].map((item) => (
                      <div key={item.field}>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          {item.label} <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData[item.field as keyof ContactFormData] as string}
                          onChange={(e) => handleInputChange(item.field as keyof ContactFormData, e.target.value)}
                          onFocus={() => setFocusedField(item.field)}
                          onBlur={() => setFocusedField(null)}
                          placeholder={item.placeholder}
                          required
                          className={`w-full bg-background/50 border ${
                            focusedField === item.field ? 'border-primary shadow-glow-sm' : 'border-border'
                          } rounded-xl px-4 py-3 text-white placeholder-gray-500 transition-all focus:outline-none focus:border-primary focus:shadow-glow-sm`}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email professionnel <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="jean@exemple.com"
                      required
                      className={`w-full bg-background/50 border ${
                        focusedField === "email" ? 'border-primary shadow-glow-sm' : 'border-border'
                      } rounded-xl px-4 py-3 text-white placeholder-gray-500 transition-all focus:outline-none focus:border-primary focus:shadow-glow-sm`}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Téléphone <span className="text-gray-500 text-xs">(optionnel)</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="+33 6 12 34 56 78"
                      className={`w-full bg-background/50 border ${
                        focusedField === "phone" ? 'border-primary shadow-glow-sm' : 'border-border'
                      } rounded-xl px-4 py-3 text-white placeholder-gray-500 transition-all focus:outline-none focus:border-primary focus:shadow-glow-sm`}
                    />
                  </div>

                  {/* Profile and Urgency */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Votre profil <span className="text-accent">*</span>
                      </label>
                      <select
                        value={formData.profile}
                        onChange={(e) => handleInputChange("profile", e.target.value)}
                        onFocus={() => setFocusedField("profile")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full bg-background/50 border ${
                          focusedField === "profile" ? 'border-primary shadow-glow-sm' : 'border-border'
                        } rounded-xl px-4 py-3 text-white transition-all focus:outline-none focus:border-primary focus:shadow-glow-sm`}
                      >
                        <option value="Artiste">Artiste</option>
                        <option value="Athlète">Athlète</option>
                        <option value="CEO">CEO</option>
                        <option value="Influenceur">Influenceur</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Niveau d'urgence <span className="text-accent">*</span>
                      </label>
                      <select
                        value={formData.urgency}
                        onChange={(e) => handleInputChange("urgency", e.target.value)}
                        onFocus={() => setFocusedField("urgency")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full bg-background/50 border ${
                          focusedField === "urgency" ? 'border-primary shadow-glow-sm' : 'border-border'
                        } rounded-xl px-4 py-3 text-white transition-all focus:outline-none focus:border-primary focus:shadow-glow-sm`}
                      >
                        <option value="Normal">Normal</option>
                        <option value="Urgent 48h">Urgent 48h</option>
                        <option value="Crise en cours">Crise en cours</option>
                      </select>
                    </div>
                  </div>

                  {/* Situation */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Décrivez votre situation
                    </label>
                    <textarea
                      value={formData.situation}
                      onChange={(e) => handleInputChange("situation", e.target.value)}
                      onFocus={() => setFocusedField("situation")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Décrivez brièvement votre situation actuelle et vos objectifs..."
                      maxLength={500}
                      rows={4}
                      className={`w-full bg-background/50 border ${
                        focusedField === "situation" ? 'border-primary shadow-glow-sm' : 'border-border'
                      } rounded-xl px-4 py-3 text-white placeholder-gray-500 transition-all focus:outline-none focus:border-primary focus:shadow-glow-sm resize-none`}
                    />
                    <p className="text-xs text-gray-500 mt-1 text-right">
                      {formData.situation.length}/500 caractères
                    </p>
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-4 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center mt-0.5">
                        <input
                          type="checkbox"
                          checked={formData.privacyConsent}
                          onChange={(e) => handleInputChange("privacyConsent", e.target.checked)}
                          required
                          className="w-5 h-5 rounded border-2 border-border bg-background/50 checked:bg-gradient-to-br checked:from-primary checked:to-accent checked:border-primary transition-all appearance-none cursor-pointer"
                        />
                        {formData.privacyConsent && (
                          <CheckCircle className="absolute h-3 w-3 text-white pointer-events-none" strokeWidth={3} />
                        )}
                      </div>
                      <span className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                        J'accepte que mes données soient traitées confidentiellement (RGPD) <span className="text-accent">*</span>
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center mt-0.5">
                        <input
                          type="checkbox"
                          checked={formData.newsletter}
                          onChange={(e) => handleInputChange("newsletter", e.target.checked)}
                          className="w-5 h-5 rounded border-2 border-border bg-background/50 checked:bg-gradient-to-br checked:from-primary checked:to-accent checked:border-primary transition-all appearance-none cursor-pointer"
                        />
                        {formData.newsletter && (
                          <CheckCircle className="absolute h-3 w-3 text-white pointer-events-none" strokeWidth={3} />
                        )}
                      </div>
                      <span className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                        Je souhaite recevoir la newsletter Vynal Agency
                      </span>
                    </label>
                  </div>

                  {/* Security notice */}
                  <div className="flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-xl px-4 py-3">
                    <Shield className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-xs text-gray-400">
                      Vos informations sont protégées par cryptage SSL
                    </span>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-luxury w-full group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Demander une consultation stratégique
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}