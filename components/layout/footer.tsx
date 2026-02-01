import React from "react"
import { Shield, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-padding container mx-auto py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary sm:h-7 sm:w-8" strokeWidth={2} />
              <span className="text-base font-bold text-foreground sm:text-lg sm:responsive-text-lg">Vynal Agency</span>
            </div>
            <p className="text-xs text-muted-foreground sm:text-sm sm:responsive-text-sm">
              Agence internationale de gestion d'image digitale pour personnalités publiques et leaders d'opinion.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground sm:text-base">Services</h3>
            <ul className="space-y-2 text-xs sm:space-y-2.5 sm:responsive-text-sm">
              <li>
                <a href="/services" className="text-muted-foreground transition-colors hover:text-foreground focus-luxury">
                  Personal Branding
                </a>
              </li>
              <li>
                <a href="/services" className="text-muted-foreground transition-colors hover:text-foreground focus-luxury">
                  Gestion de Réputation
                </a>
              </li>
              <li>
                <a href="/services" className="text-muted-foreground transition-colors hover:text-foreground focus-luxury">
                  Communication de Crise
                </a>
              </li>
              <li>
                <a href="/services" className="text-muted-foreground transition-colors hover:text-foreground focus-luxury">
                  Stratégie d'Influence
                </a>
              </li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground sm:text-base">Entreprise</h3>
            <ul className="space-y-2 text-xs sm:space-y-2.5 sm:responsive-text-sm">
              <li>
                <a href="/about" className="text-muted-foreground transition-colors hover:text-foreground focus-luxury">
                  À propos
                </a>
              </li>
              <li>
                <a href="/methodology" className="text-muted-foreground transition-colors hover:text-foreground focus-luxury">
                  Méthodologie
                </a>
              </li>
              <li>
                <a href="/cases" className="text-muted-foreground transition-colors hover:text-foreground focus-luxury">
                  Études de cas
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground transition-colors hover:text-foreground focus-luxury">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground sm:text-base">Contact</h3>
            <div className="space-y-3 text-xs sm:space-y-3 sm:responsive-text-sm">
              <a 
                href="mailto:contact@vynal-agency.com"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground focus-luxury"
              >
                <Mail className="h-4 w-4 flex-shrink-0" strokeWidth={2} />
                <span className="break-all sm:break-normal">contact@vynal-agency.com</span>
              </a>
              <a 
                href="tel:+33142868345"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground focus-luxury"
              >
                <Phone className="h-4 w-4 flex-shrink-0" strokeWidth={2} />
                <span>+33 1 42 86 83 45</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0" strokeWidth={2} />
                <span>Paris, France</span>
              </div>
            </div>
            <div className="mt-6">
              <Button variant="luxury" size="sm" className="w-full sm:w-auto">
                Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center gap-4 text-xs sm:flex-row sm:justify-between sm:text-sm">
            <p className="text-center text-muted-foreground sm:text-left">
              © 2024 Vynal Agency LTD. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-xs sm:gap-4 sm:text-sm">
              <a href="/privacy" className="text-muted-foreground transition-colors hover:text-foreground focus-luxury">
                Confidentialité
              </a>
              <a href="/legal" className="text-muted-foreground transition-colors hover:text-foreground focus-luxury">
                Mentions légales
              </a>
              <a href="/gdpr" className="text-muted-foreground transition-colors hover:text-foreground focus-luxury">
                RGPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer