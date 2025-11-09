import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ScenarioAnalysis from './components/AdventureGame';
import Chatbot from './components/Chatbot';
import type { View } from './types';

const PlaceholderComponent: React.FC<{ title: string }> = ({ title }) => (
    <div className="p-4 md:p-6 ml-64">
        <div className="bg-white rounded-xl shadow-lg p-6">
            <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
            <p className="text-gray-500 mt-2">Dados e análises sobre {title.toLowerCase()} serão exibidos aqui. Esta seção está em construção.</p>
        </div>
    </div>
);

const App: React.FC = () => {
    const [activeView, setActiveView] = useState<View>('Painel');

    const renderView = () => {
        switch (activeView) {
            case 'Painel':
                return <Dashboard />;
            case 'Análise de Cenários':
                return <ScenarioAnalysis />;
            case 'Violência':
                return <PlaceholderComponent title="Violência de Gênero" />;
            case 'Trabalho e Renda':
                return <PlaceholderComponent title="Trabalho e Renda" />;
            case 'Educação':
                return <PlaceholderComponent title="Educação" />;
            case 'Participação Política':
                return <PlaceholderComponent title="Participação Política" />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className="flex h-screen bg-[#f0f5ff]">
            <Sidebar activeView={activeView} setActiveView={setActiveView} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-x-hidden overflow-y-auto">
                    {renderView()}
                </main>
            </div>
            <Chatbot />
        </div>
    );
};

export default App;