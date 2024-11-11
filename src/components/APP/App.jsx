import { useState } from "react";
import style from './App.module.css';
import Formulario from '../FormularioProduto/Formulario'
import ListaEstoque from "../ListaEstoque/ListaEstoque";

export default function App() {
    const [produtos, setProdutos] = useState([])

    const addProduto = (nome, quantidade, valor_compra, valor_venda) => {

        const produto = {
            id: Date.now(),
            nome,
            quantidade,
            valor_compra,
            valor_venda
        }

        setProdutos([...produtos, produto])
    }

    return (
        <>
            <div className={style.aplicativo}>
                <h1 className={style.titulo}>Gerenciador de estoque</h1>
                <a className={style.caixa}>Caixa:</a>
            </div>

            <Formulario
                addProduto={addProduto}
            />

            <ListaEstoque produtos={produtos}/>

            {/* <TodoFilter
                setFilter={setFilter}
            />

            <TodoList
                tasks={filteredTasks}
                removeTask={removeTask}
                editTask={editTask}
                toggleCompleted={toggleCompleted}
            /> */}
        </>
    )
}