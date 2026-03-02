initial, animate , exit
whileHover, whileTap, whileInView

transition

<AnimatePresence> is used to enable exit animations when components are removed from the React tree. directly wrapping the components that will be animated on exit.

variants
```jsx
const boxVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 100, transition: { duration: 0.5 } },
};  
```

```jsx
import { motion, AnimatePresence } from "framer-motion";  
function MyComponent({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={boxVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          Animated Box
        </motion.div>
      )}
    </AnimatePresence>
  );
}  
```

orchestration

```jsx
const containerVariants = {
  hidden: { opacity: 0 }, 
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between children animations
    },
  },
};  
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};  
```

```jsx
<motion.div
  variants={containerVariants}  
  initial="hidden"  
  animate="visible"
>  
  <motion.div variants={itemVariants}>Item 1</motion.div>  
  <motion.div variants={itemVariants}>Item 2</motion.div>  
  <motion.div variants={itemVariants}>Item 3</motion.div>  
</motion.div>
```

---
Hooks
useScroll
useMotionTemplate 
useMotionValue
useTransform
useAnimation
useInView
---

layout id 