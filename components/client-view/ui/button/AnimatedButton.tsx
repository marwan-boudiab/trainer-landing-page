export default function AnimatedButton({ text, containerStyles, contact, pending, onClick, primary = true }: AnimatedButtonProps) {
  return (
    <button className={`${containerStyles} group relative cursor-pointer overflow-hidden rounded-xl border-2 ${primary ? 'bg-accent' : 'bg-primary'} uppercase text-white`} disabled={contact ? pending : false} onClick={onClick}>
      <span className={`ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 ${primary ? 'bg-primary' : 'bg-accent'} transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32`}></span>

      {pending ? (
        // <div className="flex items-center justify-center">
        //   <div className="h-8 w-8 animate-spin rounded-full border-b-4 border-white text-white"></div>
        // </div>
        <div className="flex items-center justify-center scale-50">
          <div className="loader"></div>
        </div>
      ) : (
        <span className="ease relative text-white transition duration-300 group-hover:text-white">{text}</span>
      )}
    </button>
  );
}
