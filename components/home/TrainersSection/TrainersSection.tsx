import TrainerCard from "./TrainerCard";
import TestimonialImg from "@/public/images/large-testimonial.jpg";

export default function TrainersSection() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <TrainerCard
            image={TestimonialImg}
            name="Mary Sullivan"
            role="CTO"
            company="Microsoft"
            companyLink="#0"
            quote="Simple has simplified my life in more ways than one. From managing my sites to keeping track of tasks, it's become my go-to tool for everything."
            highlight="keeping track of tasks"
          />
        </div>
      </div>
    </section>
  );
}
