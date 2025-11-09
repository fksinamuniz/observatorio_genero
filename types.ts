export type View = 'Painel' | 'Violência' | 'Trabalho e Renda' | 'Educação' | 'Participação Política' | 'Análise de Cenários';

export interface MenuItem {
    name: View;
    icon: string;
}

export interface ScenarioState {
    scenario: string;
    imageUrl: string;
    policyOptions: string[];
    keyIndicators: string[];
    policyGoal: string;
}

export interface ChatMessage {
    sender: 'user' | 'bot';
    text: string;
}