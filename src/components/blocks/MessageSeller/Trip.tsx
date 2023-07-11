const Trip = () => {
  return (
    <div className="bg-white md:border-b-[1px] border-slate-300 p-6 flex flex-col gap-5">
      <div className="text-2xl">Your purchase</div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="font-[600] text-black">Dates</div>
          <div>Jul 6 - 11</div>
        </div>
        <div className="underline font-[600]">Edit</div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="font-[600] text-black">Guests</div>
          <div>1 guest</div>
        </div>
        <div className="underline font-[600]">Edit</div>
      </div>
    </div>
  );
};

export default Trip;
