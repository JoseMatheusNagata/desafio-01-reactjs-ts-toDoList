import style from './Task.module.css';

export function Task() {
    return (
        <form className={style.taskForm}>
        <input
          name="task"
          placeholder="Deixe uma nova tarefa"
          required />

        <footer>
          <button type="submit">
            Criar
          </button>
        </footer>
      </form>
    );
}