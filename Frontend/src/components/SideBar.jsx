export const SideBar = () => {
  return (
    <div className="bg-slate-200 h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="max-w-lg">
          <div className="text-3xl font-bold text-left">Project Name</div> {/* Added text-left class */}
          <div className="max-w-md text-xl font-semibold text-left mt-4 ml-0">
            Code For Good
          </div>
        </div>
      </div>
    </div>
  );
};
