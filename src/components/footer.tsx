const Footer = () => {
  return (
    <footer
      style={{
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#f8f9fa",
        borderTop: "1px solid #ddd",
        fontSize: "0.9rem",
      }}
    >
      <p>
        © {new Date().getFullYear()} Dra. Yasmim Othon  | Biomédica Esteta. Todos os
        direitos reservados.
      </p>
      <p>Contato: (00) 1234-5678 | Email: contato@clinicadrayasmim.com</p>
    </footer>
  );
};

export default Footer;
