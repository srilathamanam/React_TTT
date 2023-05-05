import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Blog from './component/Blog';
function App() {
  const title = 'My React Blog';
  const posts = [
    { title: 'Internship', content: '6 months course' },
    { title: 'Placements', content: 'Front end and Back end' },
   
  ];

  return (
    <div className="App">
      <Header title={title} />
      <Blog posts={posts} />
      <Footer />
    </div>
  );
}

export default App;
