import { motion } from "framer-motion";

function WordReveal({ as: Element = "span", children, className = "" }) {
  const words = children.split(/(\s+)/);

  return (
    <Element className={className} aria-label={children}>
      {words.map((word, index) =>
        /^\s+$/.test(word) ? (
          word
        ) : (
          <motion.span
            key={`${word}-${index}`}
            aria-hidden="true"
            className="inline-block"
            initial={{ y: 22, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.65 }}
            transition={{
              duration: 0.45,
              delay: index * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        )
      )}
    </Element>
  );
}

export default WordReveal;