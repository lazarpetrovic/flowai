import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO at TechCorp',
      image: '1',
      content: 'FlowAI transformed our operations. We automated 80% of our repetitive tasks in the first month.',
      rating: 5,
    },
    {
      name: 'Michael Rodriguez',
      role: 'Founder at StartupXYZ',
      image: '2',
      content: 'The no-code builder is incredibly intuitive. Our non-technical team was up and running in hours.',
      rating: 5,
    },
    {
      name: 'Emily Watson',
      role: 'Operations Manager',
      image: '3',
      content: 'Best automation platform we\'ve used. The AI capabilities are truly next-level.',
      rating: 5,
    },
  ];
  
  export function Testimonials() {
    return (
      <section className="py-32 relative">
        {/* Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
  
        <div className="container mx-auto max-w-7xl px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Loved by{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                thousands
              </span>
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              See what our customers have to say about FlowAI.
            </p>
          </motion.div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-card/50 backdrop-blur-xl border border-border hover:border-primary/50 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
  
                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
  
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-background font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
  
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-8 px-8 py-4 rounded-2xl bg-card/50 border border-border">
              <div>
                <div className="text-2xl font-bold text-primary">4.9/5</div>
                <div className="text-sm text-muted">Average Rating</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-2xl font-bold text-primary">2,000+</div>
                <div className="text-sm text-muted">Reviews</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
  