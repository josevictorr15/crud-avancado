import Layout from "../components/Layout";
import Table from "@/components/Table";
import Client from "@/core/client";

export default function Home() {
  const clients = [
    new Client('Ana', 34, '1'),
    new Client('José', 21, '2'),
    new Client('Margarete', 47, '3'),
    new Client('Gabriela', 21, '4'),
  ]

  function clientSelected(client: Client) {
    console.log(client.name)
  }

  function clientDeleted(client: Client) {
    console.log(`Excluir ${client.name}`)
  }

  return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-r from-yellow-900 to-yellow-800`}>
      <Layout title="Sistema de Cadastro">
        <Table clients={clients} clientSelected={clientSelected} clientDeleted={clientDeleted}/>
      </Layout>
    </div>
  );
}
