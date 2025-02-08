interface ContainerProp {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProp) => {
  return (
    <div className={`max-w-7xl mx-auto px-6 ${className}`}>{children}</div>
  );
};

export default Container;
