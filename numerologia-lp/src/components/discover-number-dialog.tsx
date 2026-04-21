import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getMapaLead, redirectToCheckoutIfConfigured, saveMapaLead, scrollToOferta } from "@/lib/mapa-lead";
import { submitLeadToGoogleSheets } from "@/lib/sheets-lead";
import { toast } from "sonner";

const schema = z.object({
  fullName: z.string().min(3, "Informe o nome completo"),
  email: z.string().min(1, "Informe o e-mail").email("Informe um e-mail válido"),
  birthDate: z.string().min(1, "Informe a data de nascimento"),
  whatsapp: z
    .string()
    .min(1, "Informe o WhatsApp")
    .refine((v) => {
      const d = v.replace(/\D/g, "");
      return d.length >= 10 && d.length <= 13;
    }, "Informe um WhatsApp válido (com DDD)"),
});

export type DiscoverFormValues = z.infer<typeof schema>;

type DiscoverNumberDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCaptured?: () => void;
};

export function DiscoverNumberDialog({ open, onOpenChange, onCaptured }: DiscoverNumberDialogProps) {
  const form = useForm<DiscoverFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { fullName: "", email: "", birthDate: "", whatsapp: "" },
  });
  const { reset, handleSubmit: handleFormSubmit } = form;

  useEffect(() => {
    if (!open) return;
    const lead = getMapaLead();
    if (lead) {
      reset({
        fullName: lead.fullName,
        email: lead.email,
        birthDate: lead.birthDate,
        whatsapp: lead.whatsappDigits,
      });
    } else {
      reset({ fullName: "", email: "", birthDate: "", whatsapp: "" });
    }
  }, [open, reset]);

  function onSubmit(values: DiscoverFormValues) {
    const whatsappDigits = values.whatsapp.replace(/\D/g, "");
    const lead = saveMapaLead({
      fullName: values.fullName.trim(),
      email: values.email.trim().toLowerCase(),
      birthDate: values.birthDate,
      whatsappDigits,
    });
    submitLeadToGoogleSheets(lead);
    onCaptured?.();
    onOpenChange(false);
    reset();

    const went = redirectToCheckoutIfConfigured(lead);
    if (!went) {
      scrollToOferta();
      toast.success("Dados recebidos! Agora complete o pagamento abaixo.", {
        duration: 5000,
      });
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md border-gold-soft/40 bg-deep/95 text-cream backdrop-blur-md sm:rounded-2xl">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-center text-cream md:text-2xl">
            Descobrir meu número
          </DialogTitle>
          <DialogDescription className="text-center text-cream/70 text-sm">
            Preencha para seguirmos com o seu mapa. Depois você será direcionada ao pagamento.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={handleFormSubmit(onSubmit)} className="space-y-4 pt-2">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-cream/90">Nome completo</FormLabel>
                  <FormDescription className="rounded-lg border border-gold-soft/30 bg-gold/5 px-3 py-2.5 text-xs leading-snug text-cream/90">
                    <span className="font-semibold text-gold">Atenção:</span> use o nome{" "}
                    <strong className="text-cream">igual ao da certidão de nascimento</strong> (acentos e
                    ordem dos nomes) — o mapa depende de ser a mesma grafia do registro.
                  </FormDescription>
                  <FormControl>
                    <Input
                      placeholder="Igual à certidão de nascimento"
                      autoComplete="name"
                      className="border-gold-soft/30 bg-deep/80 text-cream placeholder:text-cream/40"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-cream/90">E-mail</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="seu@email.com"
                      className="border-gold-soft/30 bg-deep/80 text-cream placeholder:text-cream/40"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="birthDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-cream/90">Data de nascimento</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      className="border-gold-soft/30 bg-deep/80 text-cream [color-scheme:dark]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="whatsapp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-cream/90">WhatsApp</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      inputMode="numeric"
                      placeholder="(00) 00000-0000"
                      autoComplete="tel"
                      className="border-gold-soft/30 bg-deep/80 text-cream placeholder:text-cream/40"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full rounded-full bg-gold-gradient font-bold uppercase tracking-wide text-deep shadow-gold hover:opacity-95"
              size="lg"
            >
              Continuar para o pagamento
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
