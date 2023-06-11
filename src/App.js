import Portfolio from './components/Portfolio';


/**
 * Основной компонент приложения, отвечающий за отображение всех элементов на странице. Дочерний компонент Portfolio (Блок отображающий фильтры и портфолио)
 *
 */
function App() {
  return (
    <div className="App">
      <Portfolio />
    </div>
  );
}

export default App;
