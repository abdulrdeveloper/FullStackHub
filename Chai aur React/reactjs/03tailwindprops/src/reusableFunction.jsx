const Container = ({ title, description, image }) => {
  return (
    <div className="flex flex-col flex-1 min-w-[250px] max-w-sm bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-neutral-800/50">
      {image}
      <div className="flex flex-col flex-1 p-4">
        <span className="self-start text-[10px] font-semibold tracking-widest uppercase text-green-400 bg-green-500/10 border border-green-500/30 rounded-sm px-2.5 py-1 mb-3">
          Animal
        </span>
        <h2 className="text-base font-semibold text-white mb-2">{title}</h2>
        <p className="text-sm text-neutral-400 leading-relaxed flex-1 mb-6">
          {description}
        </p>
        <button className="self-center flex items-center justify-center gap-2 text-sm font-semibold text-white bg-green-600 hover:bg-green-500 rounded-lg px-8 py-2.5 transition-all duration-300 shadow-md hover:shadow-green-500/25 border border-green-500/50 w-full mb-1">
          View more →
        </button>
      </div>
    </div>
  );
};

export default Container;
