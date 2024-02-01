import Client from "../core/client"
import { IconEdit, IconTrash } from "./Icons"

interface TableProps {
    clients: Client[]
    clientSelected?: (client: Client) => void
    clientDeleted?: (client: Client) => void
}

export default function Table( props: TableProps ) {
    const showActions = props.clientDeleted || props.clientSelected

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {showActions ? <th className="p-4">Ações</th> : false}
            </tr>
        )
    }

    function renderData() {
        return props.clients?.map((client, i) => {
            return (
                <tr key={client.id} className={`${i % 2 === 0 ? 'bg-orange-200' : 'bg-orange-100'}`}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age}</td>
                    {showActions ? renderActions(client) : false}
                </tr>
            )
        })
    }

    function renderActions(client: Client) {
        return (
            <td className="flex justify-center">
                {props.clientSelected ? (
                    <button onClick={() => props.clientSelected?.(client)} className={`flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-green-50`}>{IconEdit}</button>
                ) : false}
                {props.clientDeleted ? (
                    <button onClick={() => props.clientDeleted?.(client)} className={`flex justify-center items-center text-red-500 rounded-full p-2 m-1 hover:bg-green-50`}>{IconTrash}</button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`bg-gradient-to-r from-orange-500 to-orange-800 text-gray-100`}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}