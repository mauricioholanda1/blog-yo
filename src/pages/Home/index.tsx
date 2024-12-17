import Footer from "../../components/footer";
import Header from "../../components/header";

const styles = {
  list: {
    listStyleType: "none",
    padding: 0,
  },
  quote: {
    fontStyle: "italic",
    margin: "10px 0",
  },
  gallery: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

const Home = () => {
  return (
    <div>
      <Header />
      {/* Seção 1: Introdução */}
      <section
        style={{
          padding: "20px",
          textAlign: "center",
          borderBottom: "1px solid #ddd",
        }}
      >
        <h1>Bem-vinda à Clínica da Dra. Yasmim Othon</h1>
        <p>
          Sou Dra. Yasmim Othon, biomédica esteta especializada em tratamentos
          de beleza e bem-estar. Transformo vidas por meio de procedimentos
          modernos e seguros.
        </p>
      </section>

      {/* Seção 2: Serviços */}
      <section
        style={{
          padding: "20px",
          textAlign: "center",
          borderBottom: "1px solid #ddd",
        }}
      >
        <h2>Nossos Serviços</h2>
        <ul style={styles.list}>
          <li>Harmonização Facial</li>
          <li>Aplicação de Toxina Botulínica</li>
          <li>Preenchimento Labial</li>
          <li>Microagulhamento</li>
          <li>Peelings Químicos</li>
        </ul>
      </section>

      {/* Seção 3: Depoimentos */}
      <section
        style={{
          padding: "20px",
          textAlign: "center",
          borderBottom: "1px solid #ddd",
        }}
      >
        <h2>O que Nossos Pacientes Dizem</h2>
        <blockquote style={styles.quote}>
          "A Dra. Yasmim Othon mudou minha vida! O atendimento é impecável, e os
          resultados são incríveis." – Ana Paula, 34 anos
        </blockquote>
        <blockquote style={styles.quote}>
          "Muito profissional e atenciosa. Recomendo a todos!" – Carlos Eduardo,
          29 anos
        </blockquote>
      </section>

      {/* Seção 4: Galeria de Resultados */}
      <section
        style={{
          padding: "20px",
          textAlign: "center",
          borderBottom: "1px solid #ddd",
        }}
      >
        <h2>Antes e Depois</h2>
        <div style={styles.gallery}>
          <img src="https://via.placeholder.com/150" alt="Antes e Depois 1" />
          <img src="https://via.placeholder.com/150" alt="Antes e Depois 2" />
          <img src="https://via.placeholder.com/150" alt="Antes e Depois 3" />
        </div>
      </section>

      {/* Seção 5: Contato */}
      <section
        style={{
          padding: "20px",
          textAlign: "center",
          borderBottom: "1px solid #ddd",
        }}
      >
        <h2>Agende Sua Consulta</h2>
        <p>
          Entre em contato e descubra como posso ajudar você a alcançar seus
          objetivos estéticos!
        </p>
        <button style={styles.button}>Entrar em Contato</button>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
