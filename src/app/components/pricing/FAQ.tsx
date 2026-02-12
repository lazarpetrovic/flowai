import { motion } from "framer-motion";

const faqs = [
    {
      question: 'Can I change plans later?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise customers.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! Professional and Enterprise plans come with a 14-day free trial. No credit card required.',
    },
    {
      question: 'What happens if I exceed my task limit?',
      answer: 'We\'ll notify you before you hit your limit. You can either upgrade your plan or purchase additional tasks.',
    },
    {
      question: 'Do you offer discounts for nonprofits?',
      answer: 'Yes! We offer 50% discounts for qualified nonprofit organizations. Contact us to learn more.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Absolutely. You can cancel your subscription at any time with no cancellation fees.',
    },
  ];

export function FAQ() {
    return (
    <section className="py-32 border-t border-border">
        <div className="container mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently asked{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                questions
              </span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto grid gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-card/50 backdrop-blur-xl border border-border"
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
}