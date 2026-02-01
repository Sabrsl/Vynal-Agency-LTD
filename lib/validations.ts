import { z } from "zod"

export const contactFormSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  phone: z.string().optional(),
  profile: z.enum(["Artiste", "Athlète", "CEO", "Influenceur", "Autre"], {
    message: "Veuillez sélectionner votre profil",
  }),
  situation: z.string().max(500, "Le message ne doit pas dépasser 500 caractères"),
  urgency: z.enum(["Normal", "Urgent 48h", "Crise en cours"], {
    message: "Veuillez sélectionner le niveau d'urgence",
  }),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter le traitement confidentiel de vos données",
  }),
  newsletter: z.boolean().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
