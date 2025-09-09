import Header from "@/components/layout/Header";

const layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default layout;
