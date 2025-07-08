import './ToDoList.css'
import { useState } from 'react'

// Componente principal que representa a lista de tarefas
export default function ListaDeTarefas() {
    // Estados que armazenam os dados da tarefa a ser adicionada
    const [nome, setNome] = useState('')
    const [prioridade, setPrioridade] = useState('Média')
    const [dataLimite, setDataLimite] = useState('')
    const [concluida, setConcluida] = useState(false)

    // Lista geral de tarefas
    const [lista, setLista] = useState([])

    // Estados para filtros e ordenação
    const [filtroStatus, setFiltroStatus] = useState('Todas')
    const [ordenarPrioridade, setOrdenarPrioridade] = useState(false)

    // Função acionada ao submeter o formulário
    const handleSubmit = (e) => {
        e.preventDefault() // Impede o recarregamento da página

        // Verifica se o nome da tarefa foi informado
        if (!nome) return

        // Cria um novo objeto de tarefa
        const novaTarefa = {
            id: Date.now(), // Identificador único baseado na data/hora atual
            nome,
            prioridade,
            dataLimite,
            concluida
        }

        // Adiciona a nova tarefa à lista e reseta os campos do formulário
        setLista([...lista, novaTarefa])
        setNome('')
        setPrioridade('Média')
        setDataLimite('')
        setConcluida(false)
    }

    // Alterna o status de conclusão de uma tarefa específica
    const toggleConcluida = (id) => {
        setLista(lista.map(tarefa =>
            tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
        ))
    }

    // Remove uma tarefa da lista com base no id
    const removerTarefa = (id) => {
        setLista(lista.filter(tarefa => tarefa.id !== id))
    }

    // Limpa toda a lista de tarefas
    const handleClear = () => {
        setLista([])
    }

    // Aplica o filtro de acordo com o status selecionado
    const aplicarFiltro = (tarefa) => {
        if (filtroStatus === 'Todas') return true
        if (filtroStatus === 'Concluídas') return tarefa.concluida
        if (filtroStatus === 'Pendentes') return !tarefa.concluida
    }

    // Converte as prioridades para valores numéricos para facilitar a ordenação
    const prioridadeParaNumero = (prioridade) => {
        if (prioridade === 'Alta') return 1
        if (prioridade === 'Média') return 2
        if (prioridade === 'Baixa') return 3
        return 4
    }

    // Lista final, filtrada por status e ordenada por prioridade (se ativado)
    const listaFiltrada = lista
        .filter(aplicarFiltro)
        .sort((a, b) => {
            if (!ordenarPrioridade) return 0
            return prioridadeParaNumero(a.prioridade) - prioridadeParaNumero(b.prioridade)
        })

    return (
        <div className="container">
            <h2>Lista de Tarefas</h2>

            {/* Formulário para adicionar nova tarefa */}
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    placeholder="Nome da tarefa"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />

                <select value={prioridade} onChange={(e) => setPrioridade(e.target.value)}>
                    <option>Alta</option>
                    <option>Média</option>
                    <option>Baixa</option>
                </select>

                <input
                    type="date"
                    value={dataLimite}
                    onChange={(e) => setDataLimite(e.target.value)}
                />

                <label>
                    <input
                        type="checkbox"
                        checked={concluida}
                        onChange={(e) => setConcluida(e.target.checked)}
                    />
                    Marcar como concluída
                </label>

                <button type="submit">Adicionar</button>
            </form>

            {/* Filtros e ordenações visuais */}
            <div className="filtros">
                <label>Status:
                    <select value={filtroStatus} onChange={(e) => setFiltroStatus(e.target.value)}>
                        <option>Todas</option>
                        <option>Concluídas</option>
                        <option>Pendentes</option>
                    </select>
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={ordenarPrioridade}
                        onChange={(e) => setOrdenarPrioridade(e.target.checked)}
                    />
                    Ordenar por prioridade
                </label>
            </div>

            {/* Renderiza a lista de tarefas filtradas */}
            <ul>
                {listaFiltrada.map((tarefa) => (
                    <li
                        key={tarefa.id}
                        className={`tarefa ${tarefa.concluida ? 'concluida' : 'pendente'}`}
                    >
                        <p><strong>{tarefa.nome}</strong></p>
                        <p>Prioridade: {tarefa.prioridade}</p>
                        <p>Limite: {tarefa.dataLimite || 'Sem data'}</p>
                        <p>Status: {tarefa.concluida ? 'Concluída' : 'Pendente'}</p>

                        <button onClick={() => toggleConcluida(tarefa.id)}>
                            {tarefa.concluida ? 'Desmarcar' : 'Concluir'}
                        </button>

                        <button onClick={() => removerTarefa(tarefa.id)} className="remover">
                            Remover
                        </button>
                    </li>
                ))}
            </ul>

            {/* Botão para resetar todas as tarefas */}
            <button onClick={handleClear} className="resetar">Resetar Tudo</button>
        </div>
    )
}
