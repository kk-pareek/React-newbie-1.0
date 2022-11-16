import {Route, Routes} from 'react-router-dom';

import Todo from './components/Todo';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import MeetupsPage from './pages/Meetups';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/meetups/*" element={<MeetupsPage />}></Route>
        <Route path="/todos" element={<Todo text="learn react" />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
