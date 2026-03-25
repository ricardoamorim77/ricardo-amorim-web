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
            <a href="https://ricardoamorim77.github.io/sport-store/" target="_blank" rel="noopener noreferrer" className="group bg-card border border-secondary rounded-2xl p-8 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 block">
              <div className="text-5xl mb-4">👟</div>
              <h3 className="text-xl font-bold mb-2">Sport Store</h3>
              <p className="text-muted-foreground mb-6">Loja de artigos esportivos com catálogo completo</p>
              <span className="text-accent font-semibold hover:text-white transition-colors">
                Ver Exemplo →
              </span>
            </a>

            <a href="https://ricardoamorim77.github.io/loja-moda-urbana/" target="_blank" rel="noopener noreferrer" className="group bg-card border border-secondary rounded-2xl p-8 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 block">
              <div className="text-5xl mb-4">👕</div>
              <h3 className="text-xl font-bold mb-2">Loja de Moda Urbana</h3>
              <p className="text-muted-foreground mb-6">Vitrine elegante para roupas e acessórios</p>
              <span className="text-accent font-semibold hover:text-white transition-colors">
                Ver Exemplo →
              </span>
            </a>

            <a href="https://ricardoamorim77.github.io/clinica-bem-estar/" target="_blank" rel="noopener noreferrer" className="group bg-card border border-secondary rounded-2xl p-8 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 block">
              <div className="text-5xl mb-4">💆</div>
              <h3 className="text-xl font-bold mb-2">Clínica Bem-Estar</h3>
              <p className="text-muted-foreground mb-6">Agendamentos e serviços de saúde</p>
              <span className="text-accent font-semibold hover:text-white transition-colors">
                Ver Exemplo →
              </span>
            </a>
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
                  { icon: <MessageSquare className="text-accent" size={24} />, title: 'Respostas Automáticas', desc: 'Responde mensagens 24/7 sem você fazer nada' },
                  { icon: <ShoppingCart className="text-accent" size={24} />, title: 'Aumento de Vendas', desc: 'Nunca perde uma oportunidade de venda' },
                  { icon: <Smartphone className="text-accent" size={24} />, title: 'Agendamentos', desc: 'Agenda orçamentos e consultas automaticamente' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-3xl p-8 text-center">
                <div className="text-6xl mb-4">🤖</div>
                <p className="text-accent text-lg font-bold">IA Inteligente</p>
                <p className="text-muted-foreground mt-2">Funciona 24 horas por dia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="form" className="py-20">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Pronto para <span className="text-accent">Crescer?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Preencha o formulário abaixo e receba seu orçamento gratuito em 24 horas
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card border border-secondary rounded-2xl p-8 space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Nome da Empresa</label>
              <Input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleFormChange}
                placeholder="Sua empresa"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Tipo de Site Desejado</label>
              <Select value={formData.siteType} onValueChange={handleSelectChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Landing Page Express">Landing Page Express</SelectItem>
                  <SelectItem value="Site Institucional">Site Institucional</SelectItem>
                  <SelectItem value="Catálogo de Vendas">Catálogo de Vendas</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="wantsAI"
                name="wantsAI"
                checked={formData.wantsAI}
                onChange={handleFormChange}
                className="w-5 h-5 rounded border-secondary"
              />
              <label htmlFor="wantsAI" className="text-sm font-semibold">
                Desejo adicionar Assistente de IA (+R$ 250)
              </label>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Como você imagina seu site?</label>
              <Textarea
                name="siteVision"
                value={formData.siteVision}
                onChange={handleFormChange}
                placeholder="Descreva sua visão..."
                rows={4}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">O que não pode faltar?</label>
              <Textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleFormChange}
                placeholder="Requisitos especiais..."
                rows={4}
              />
            </div>

            <button type="submit" className="cta-button w-full">
              Enviar Orçamento via WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-secondary py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Ricardo Amorim</h3>
              <p className="text-muted-foreground">Web & IA - Transformando negócios com tecnologia</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <a href="https://wa.me/5562994613564" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors block mb-2">
                WhatsApp: (62) 99461-3564
              </a>
            </div>
            <div>
              <h4 className="font-bold mb-4">Redes Sociais</h4>
              <a href="https://instagram.com/ricardo_amorim7" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors block">
                Instagram: @ricardo_amorim7
              </a>
            </div>
          </div>
          <div className="border-t border-secondary pt-8 text-center text-muted-foreground">
            <p>&copy; 2026 Ricardo Amorim. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}