import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Discover from './components/Discover/Discover';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Discover />
      <Footer />
    </QueryClientProvider>
  );
}
