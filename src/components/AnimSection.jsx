import useInView from "../hooks/useInView";

function AnimSection({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`anim-section ${inView ? "visible" : "hidden"} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

export default AnimSection;
