import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2, Zap, Globe, ShoppingCart, MessageSquare, Smartphone } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  const [formData, setFormData] = useState({
    companyName: '',
    siteType: '',
    wantsAI: false,
    siteVision: '',
    requirements: '',
  });

  const handleFormChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      siteType: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*Novo Orçamento - Ricardo Amorim*\n\n` +
      `📋 *Empresa:* ${formData.companyName}\n` +
      `🌐 *Tipo de Site:* ${formData.siteType}\n` +
      `🤖 *Assistente IA:* ${formData.wantsAI ? 'Sim' : 'Não'}\n` +
      `💭 *Visão do Site:* ${formData.siteVision}\n` +
      `⭐ *Requisitos:* ${formData.requirements}`;

    const whatsappUrl = `https://wa.me/5562994613564?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setFormData({
      companyName: '',
      siteType: '',
      wantsAI: false,
      siteVision: '',
      requirements: '',
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full mix-blend-screen blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Sua Empresa no <span className="text-accent neon-glow">Topo</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Sites Profissionais e IA que vende por você
                </p>
              </div>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Transformo seu negócio com tecnologia de ponta, sites rápidos e automação inteligente que economiza seu tempo e aumenta seu faturamento.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#form" className="cta-button text-center">
                  Solicitar Orçamento Gratuito
                </a>
                <a href="#services" className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-bold transition-all duration-200 hover:bg-accent hover:text-accent-foreground text-center">
                  Ver Serviços
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-secondary">
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-accent">50+</p>
                  <p className="text-sm text-muted-foreground">Projetos Entregues</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-accent">98%</p>
                  <p className="text-sm text-muted-foreground">Taxa de Satisfação</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 lg:h-full hidden lg:flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-3xl"></div>
              <div className="relative z-10 text-center">
                <div className="text-8xl font-bold text-accent/30">💻</div>
                <p className="text-accent text-lg font-bold mt-4">Tecnologia que Vende</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Modelos Prontos de <span className="text-accent">Alta Conversão</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vitrines digitais que organizam seus produtos e enviam pedidos direto para seu WhatsApp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sport Store', icon: '👟', desc: 'Loja de artigos esportivos com catálogo completo' },
              { name: 'Loja de Moda Urbana', icon: '👕', desc: 'Vitrine elegante para roupas e acessórios' },
              { name: 'Clínica Bem-Estar', icon: '💆', desc: 'Agendamentos e serviços de saúde' },
            ].map((model, idx) => (
              <div key={idx} className="group bg-card border border-secondary rounded-2xl p-8 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
                <div className="text-5xl mb-4">{model.icon}</div>
                <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                <p className="text-muted-foreground mb-6">{model.desc}</p>
                <button className="text-accent font-semibold hover:text-white transition-colors">
                  Ver Exemplo →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Plans Section */}
      <section id="services" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Serviços e <span className="text-accent">Planos</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Escolha o plano perfeito para seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Landing Page Express',
                price: 'R$ 349',
                desc: 'Ideal para profissionais liberais',
                features: ['Design Responsivo', 'SEO Otimizado', 'Formulário de Contato', 'Suporte por 30 dias'],
              },
              {
                title: 'Site Institucional Completo',
                price: 'R$ 799',
                desc: 'Ideal para empresas de autoridade',
                features: ['Múltiplas Páginas', 'Blog Integrado', 'Galeria de Projetos', 'Análise de Tráfego', 'Suporte por 90 dias'],
                featured: true,
              },
              {
                title: 'Catálogo de Vendas (Vitrine)',
                price: 'R$ 499',
                desc: 'Para quem precisa vender produtos',
                features: ['Catálogo Dinâmico', 'Integração WhatsApp', 'Carrinho de Compras', 'Gestão de Produtos', 'Suporte por 60 dias'],
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.featured
                    ? 'bg-gradient-to-br from-accent/20 to-blue-500/20 border-2 border-accent scale-105'
                    : 'bg-card border border-secondary hover:border-accent'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                    Mais Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <p className="text-muted-foreground mb-4">{plan.desc}</p>
                <div className="text-4xl font-bold text-accent mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full font-bold py-3 px-6 rounded-lg transition-all duration-200 ${
                  plan.featured
                    ? 'bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/50'
                    : 'border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground'
                }`}>
                  Escolher Plano
                </button>
              </div>
            ))}
          </div>

          {/* AI Add-on */}
          <div className="bg-gradient-to-r from-accent/10 to-blue-500/10 border-2 border-accent rounded-2xl p-8 text-center">
            <Zap className="inline-block text-accent mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-2">Diferencial Premium: Assistente de IA</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Adicione <span className="text-accent font-bold">+R$ 250</span> em qualquer plano
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tenha uma IA que atende seus clientes 24h/dia, responde dúvidas, agenda orçamentos e nunca perde uma venda enquanto você trabalha.
            </p>
          </div>
        </div>
      </section>

      {/* AI Differentials Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                  Exclusivo: <span className="text-accent">Atendimento Automático</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Não perca mais nenhuma venda. Tenho assistentes de IA que respondem clientes, tiram dúvidas e agendam orçamentos enquanto você trabalha.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: <MessageSquare className="text-accent" size={24} />, title: 'Respostas Automáticas', desc: 'IA responde perguntas frequentes em segundos' },
                  { icon: <Smartphone className="text-accent" size={24} />, title: 'Integração WhatsApp', desc: 'Atende direto no WhatsApp do seu cliente' },
                  { icon: <Zap className="text-accent" size={24} />, title: 'Agendamentos 24h', desc: 'Marca reuniões e orçamentos automaticamente' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-96 hidden lg:flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-3xl"></div>
              <div className="relative z-10 text-center">
                <div className="text-8xl font-bold text-accent/30">🤖</div>
                <p className="text-accent text-lg font-bold mt-4">IA Inteligente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section id="form" className="py-20">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Solicite seu <span className="text-accent">Orçamento</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Preencha o formulário abaixo e receba uma proposta personalizada no seu WhatsApp
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-secondary rounded-2xl p-8">
            {/* Company Name */}
            <div>
              <label className="block text-sm font-semibold mb-2">Nome da Empresa *</label>
              <Input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleFormChange}
                placeholder="Ex: Oficina Silva"
                required
                className="bg-secondary/50 border-secondary focus:border-accent"
              />
            </div>

            {/* Site Type */}
            <div>
              <label className="block text-sm font-semibold mb-2">Tipo de Site Desejado *</label>
              <Select value={formData.siteType} onValueChange={handleSelectChange}>
                <SelectTrigger className="bg-secondary/50 border-secondary focus:border-accent">
                  <SelectValue placeholder="Selecione um tipo de site" />
                </SelectTrigger>
                <SelectContent className="bg-card border-secondary">
                  <SelectItem value="landing">Landing Page Express</SelectItem>
                  <SelectItem value="institucional">Site Institucional Completo</SelectItem>
                  <SelectItem value="vitrine">Catálogo de Vendas (Vitrine)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* AI Assistant */}
            <div className="flex items-center gap-3 bg-accent/10 border border-accent rounded-lg p-4">
              <input
                type="checkbox"
                id="wantsAI"
                name="wantsAI"
                checked={formData.wantsAI}
                onChange={handleFormChange}
                className="w-5 h-5 cursor-pointer accent-accent"
              />
              <label htmlFor="wantsAI" className="cursor-pointer flex-1">
                <span className="font-semibold">Deseja Assistente de IA? (+R$ 250)</span>
                <p className="text-sm text-muted-foreground">Atendimento automático 24h/dia</p>
              </label>
            </div>

            {/* Site Vision */}
            <div>
              <label className="block text-sm font-semibold mb-2">Como você imagina seu site?</label>
              <Textarea
                name="siteVision"
                value={formData.siteVision}
                onChange={handleFormChange}
                placeholder="Descreva sua visão para o site..."
                className="bg-secondary/50 border-secondary focus:border-accent min-h-24 resize-none"
              />
            </div>

            {/* Requirements */}
            <div>
              <label className="block text-sm font-semibold mb-2">O que não pode faltar?</label>
              <Textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleFormChange}
                placeholder="Ex: Catálogo de produtos, integração com Instagram, etc..."
                className="bg-secondary/50 border-secondary focus:border-accent min-h-24 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="cta-button w-full">
              Enviar Orçamento via WhatsApp
            </button>

            <p className="text-center text-sm text-muted-foreground">
              Responderemos em até 2 horas úteis
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-secondary py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">Ricardo Amorim</h3>
              <p className="text-muted-foreground">Web & IA para pequenas empresas</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="https://wa.me/5562994613564" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    WhatsApp: (62) 99461-3564
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/ricardo_amorim7" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    Instagram: @ricardo_amorim7
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#services" className="hover:text-accent transition-colors">Serviços</a></li>
                <li><a href="#form" className="hover:text-accent transition-colors">Orçamento</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-secondary pt-8 text-center text-muted-foreground">
            <p>&copy; 2026 Ricardo Amorim - Web & IA. Todos os direitos reservados.</p>
            <p className="text-sm mt-2">Otimizado para conversão e SEO</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}
