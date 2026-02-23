"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Header, Footer } from "@/components/sections";
import { Button } from "@/components/ui/Button";

export default function ThankYou() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section
          className="min-h-[70vh] flex items-center justify-center py-16 md:py-24"
          style={{ backgroundColor: "#fdfbf7" }}
        >
          <div className="section-padding container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-trust-100 rounded-full flex items-center justify-center mx-auto mb-8"
              >
                <CheckCircle className="w-10 h-10 text-trust-600" />
              </motion.div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-charcoal-950 mb-4">
                Thank You!
              </h1>
              <p className="text-lg text-charcoal-600 leading-relaxed mb-8">
                We&apos;ve received your evaluation request. A member of our
                team will contact you within 24 hours to schedule your free
                property evaluation.
              </p>

              <Link href="/">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Back to Home
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
