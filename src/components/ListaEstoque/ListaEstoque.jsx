import styles from "./ListaEstoque.module.css";
import { useState, useRef } from "react";
import ItemEstoque from '../ItemEstoque/ItemEstoque'

export default function ListaEstoque({ produtos, removeTask, editTask, toggleCompleted }) {
    return (
        <>
        <div className={styles.listaEstoque}>
            <h2>Estoque atual</h2>
            <li>
                <ul>
                    {
                        produtos.map(produto => (
                            <ItemEstoque
                                id={produto.id}
                                nome={produto.nome}
                                quantidade={produto.quantidade}
                            />
                        ))
                    }
                </ul>
            </li>
        </div>
        </>
    )
}