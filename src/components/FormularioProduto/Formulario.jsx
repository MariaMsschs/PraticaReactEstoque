import styles from "./FormularioProduto.module.css";
import { useState, useRef } from "react";

export default function TodoForm({ addProduto }) {
    const [produtoNome, setProdutoNome] = useState('')
    const [produtoQuant, setProdutoQuant] = useState(0)
    const [produtoVenda, setVenda] = useState(0)
    const [produtoCompra, setCompra] = useState(0)
    const produtoVendaRef = useRef()
    const produtoNomeRef = useRef()
    const produtoQuantRef = useRef()

    return (
        <div className={styles.formulario}>
            <a className={styles.label}>Nome do Produto:</a>
            <input
                className={styles.input}
                type="text"
                ref={produtoNomeRef}
                onChange={(e) => setProdutoNome(e.target.value)}
                value={produtoNome}
            />

            <a className={styles.label}>Quantidade em Estoque:</a>
            <input
                className={styles.input}
                type="number"
                ref={produtoQuantRef}
                onChange={(e) => setProdutoQuant(e.target.value)}
                value={produtoQuant}
            />

            <a className={styles.label}>Valor de Compra:</a>
            <input
                className={styles.input}
                type="number"
                ref={produtoQuantRef}
                onChange={(e) => setProdutoQuant(e.target.value)}
                value={produtoQuant}
            />

            <button
                className={styles.botao}
                type="submit"
                onClick={() => {
                    const produtoNome = produtoNomeRef.current.value;
                    const produtoQuant = produtoQuantRef.current.value;
                    addProduto(produtoNome, produtoQuant)
                    setProdutoNome('')
                    setProdutoQuant(0)
                    produtoNomeRef.current.value = ''
                    produtoQuantRef.current.value = 0
                }}
            >Adicionar produto</button>

        </div>
    )
}