import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-r from-yellow-900 to-yellow-800`}>
      <Layout title="Sistema de Cadastro">
        <span>Conteudo</span>
      </Layout>
    </div>
  );
}
