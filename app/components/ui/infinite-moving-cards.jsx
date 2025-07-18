import { cn } from "../../lib/utils";
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-duration",
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <style jsx>{`
        @keyframes scroll {
          to {
            transform: translateX(calc(-50% - 1rem));
          }
        }
        .animate-scroll {
          animation: scroll var(--animation-duration) linear infinite;
          animation-direction: var(--animation-direction);
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full w-max flex-nowrap gap-8 py-4",
          start && "animate-scroll"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full flex-shrink-0 rounded-2xl border border-[#2C2C2C] bg-white px-8 py-6 shadow-lg md:w-[450px] hover:shadow-xl transition-shadow"
            key={`${item.name}-${idx}`}
          >
            <blockquote>
              <div className="flex items-center justify-between mb-4">
                <div className="flex">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#FF5E8A] fill-[#FF5E8A]"
                    />
                  ))}
                </div>
                <div className="flex gap-3 items-center">
                  <img 
                    src={item.img} 
                    alt={item.imageAlt || "Client"} 
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-[#333333]">{item.name}</p>
                    <p className="text-xs text-[#777777]">{item.title}</p>
                  </div>
                </div>
              </div>
              <p className="text-[#555555] italic">"{item.quote}"</p>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};