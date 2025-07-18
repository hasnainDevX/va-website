import { motion } from "framer-motion";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { Star } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah K.",
      title: "Founder, Bloom Cosmetics",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      quote:
        "Hiring this VA was the best business decision I made this year. They handle my calendar, customer emails, and even social media - giving me 15+ hours back each week to focus on product development.",
      rating: 5,
      imageAlt: "Sarah K., founder of a cosmetics brand, smiling confidently"
    },
    {
      name: "Michael T.",
      title: "CEO, TechStart Inc.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      quote:
        "The level of organization and professionalism is unmatched. My VA manages my chaotic schedule flawlessly and anticipates needs before I even realize them. Like having a right-hand person!",
      rating: 5,
      imageAlt: "Michael T., tech CEO looking impressed"
    },
    {
      name: "Priya M.",
      title: "Life Coach",
      img: "https://randomuser.me/api/portraits/women/63.jpg",
      quote:
        "As a solopreneur, I was drowning in admin work. My VA took over all my backend operations and client onboarding. My business runs smoother than ever and I'm finally able to scale.",
      rating: 5,
      imageAlt: "Priya M., life coach looking relieved and happy"
    },
    {
      name: "David R.",
      title: "E-commerce Store Owner",
      img: "https://randomuser.me/api/portraits/men/71.jpg",
      quote:
        "The customer service my VA provides is better than what I could do myself. Response times improved by 80% and customer satisfaction scores went through the roof. Worth every penny.",
      rating: 5,
      imageAlt: "David R., e-commerce entrepreneur giving thumbs up"
    },
    {
      name: "Jessica L.",
      title: "Real Estate Agent",
      img: "https://randomuser.me/api/portraits/women/28.jpg",
      quote:
        "From managing my listings to coordinating with clients, my VA handles it all with such care. I've tripled my listings this year thanks to the time they've freed up for me.",
      rating: 5,
      imageAlt: "Jessica L., real estate agent looking professional"
    }
  ];

  return (
    <section className="py-20 md:py-28 ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal-black mb-4 font-playfair">
            Client Success Stories
          </h2>
          <p className="text-lg text-[#555555] max-w-xl mx-auto">
            Hear how busy entrepreneurs regained their time and grew their businesses
          </p>
        </motion.div>

        <div className="relative">
          <InfiniteMovingCards
            items={testimonials.map(testimonial => ({
              ...testimonial,
              content: (
                <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                  <div className="flex gap-3 mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FFB6C1] text-[#FF5E8A]" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.img} 
                      alt={testimonial.imageAlt}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-[#333333]">{testimonial.name}</h4>
                      <p className="text-sm text-[#777777]">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              )
            }))}
            direction="right"
            speed="slow"
            pauseOnHover={true}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;