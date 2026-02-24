const PageMainTitle = ({ title = "" }) => {
  return (
    <div className="ex-title py-4 px-5 sticky top-0 bg-cyan-100 shadow-2xs z-50">
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
};

export default PageMainTitle;
