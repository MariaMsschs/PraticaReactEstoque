import styles from './ItemEstoque.module.css'

export default function TodoItem({ id, nome, quantidade}) {
    const [isEditing, setIsEditing] = useState(false)
    const [text, setText] = useState(title)

    return (
        <>
            <div className={styles.produtoItem}>
                <a className={styles.nomeProduto}>{nome}</a>
                <a className={styles.quantidadeProduto}>{quantidade}</a>
            </div>
        </>
    )
}