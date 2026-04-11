function MainLayout({ children }) {
  return (
    <div>
      <h1 style={{background:"#4C97FF", color: "white", padding:"10px"}}>
        My Scratch Platform
      </h1>

      <div style={{padding:"20px"}}>
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
