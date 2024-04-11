interface DividerProps {
  className: string;
}

function Divider({ className }: DividerProps) {
  return <span className={className}></span>;
}

export default Divider;
