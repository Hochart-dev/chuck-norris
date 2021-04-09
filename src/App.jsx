import Header from './components/Header';
import Footer from './components/Footer';
import QuoteList from './components/QuoteList';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <QuoteList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
