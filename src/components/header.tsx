const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Dra. Yasmim Othon | Biomédica Esteta</h1>
      <nav>
        <a href="#services" style={styles.link}>
          Serviços
        </a>
        <a href="#testimonials" style={styles.link}>
          Depoimentos
        </a>
        <a href="#contact" style={styles.link}>
          Contato
        </a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderBottom: "1px solid #ddd",
  },
  logo: {
    fontSize: "1.5rem",
  },
  link: {
    margin: "0 10px",
    textDecoration: "none",
    color: "#007bff",
  },
};

export default Header;
