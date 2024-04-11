interface LoaderProps {
  title: string;
}

function Loader({ title }: LoaderProps) {
  return (
    <div
      className={`fixed right-0 top-0 z-50 flex h-screen w-full flex-col items-center justify-center gap-5  ${title ? 'bg-white/90 dark:bg-black/90 dark:text-white' : 'bg-black/50'}`}
    >
      <p className="text-2xl">{title}</p>
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
