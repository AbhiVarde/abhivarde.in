export const PageHeader = ({ icon: Icon, title }) => {
  return (
    <div className="flex items-center gap-2 sm:gap-2.5 mb-2">
      <div className="bg-[#FF3B00] p-1 sm:p-1.5 rounded-md">
        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
      </div>

      <h1 className="text-base sm:text-lg font-medium tracking-normal">
        {title}
      </h1>
    </div>
  );
};
