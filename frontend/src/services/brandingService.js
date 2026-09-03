/**
 * brandingService.js
 *
 * Camada única responsável por resolver os dados de branding (white-label)
 * de um tenant a partir da URL. Hoje retorna dados mockados; quando a API
 * do backend estiver pronta, troque APENAS a função `fetchBrandingFromApi`
 * abaixo — o resto do app (Login.jsx, contexto, etc.) não precisa mudar.
 */

// 1. Como descobrir o tenant a partir da URL

// Ajuste esta função conforme a estratégia definida com o time de infra.
// As duas mais comuns em white-label:
//
//   a) Subdomínio:  cliente1.seusistema.com.br  -> tenant = "cliente1"
//   b) Query param: app.seusistema.com.br?tenant=cliente1
//
// Deixei as duas prontas; a querystring tem prioridade (útil pra testar
// localmente sem mexer no DNS/hosts).

export function getTenantIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const fromQuery = params.get('tenant');
  if (fromQuery) return fromQuery;

  const host = window.location.hostname; // ex: cliente1.seusistema.com.br
  const parts = host.split('.');
  const isIpv4 = parts.length === 4 && parts.every((part) => /^\d+$/.test(part));

  // Em localhost/dev, usa o próprio domínio como tenant para a API futura.
  const isLocalOrIp = host === 'localhost' || host === '::1' || isIpv4;
  if (isLocalOrIp) return host;

  return parts[0]; // "cliente1"
}


// 2. Formato padrão que a API deverá devolver (contrato sugerido)

// Combine esse shape com o backend antes de implementarem a rota de verdade.
const DEFAULT_BRANDING = {
  tenantId: null,
  companyName: 'Websoft',
  logoUrl: null,        // se null, o componente usa o SVG placeholder
  faviconUrl: null,
  heroTitle: 'Soluções Inteligentes para seu Negócio!',
  whatsappLink: '#',
  colors: {
    primary: '#1c2733',      // fundo do painel direito / botão
    primaryHover: '#2b3a4a',
    accent: '#4CAF50',       // destaques (tag "nas Suas Mãos!", play button hover)
  },
};


// 3. Função que efetivamente vai chamar a API (SUBSTITUIR quando pronta)

async function fetchBrandingFromApi(tenantId) {
  // TODO: trocar pelo endpoint real, algo como:
  // const res = await fetch(`${import.meta.env.VITE_API_URL}/tenants/${tenantId}/branding`);
  // if (!res.ok) throw new Error('Falha ao buscar branding do tenant');
  // return res.json();

  // --- MOCK enquanto a API não existe ---

  if (!tenantId) {
    return DEFAULT_BRANDING;
  }

  // Cliente usado durante o desenvolvimento local.
  if (tenantId === 'localhost') {
    return {
      ...DEFAULT_BRANDING,
      tenantId,
      companyName: 'Cliente Local',
      logoUrl: '/favicon.svg',
      heroTitle: 'A plataforma do seu negócio local!',
    };
  }

  // Simula um tenant customizado só pra você ver a tela reagindo.
  // Pode apagar esse "if" assim que a API real estiver no ar.
  if (tenantId === 'cliente1') {
    return {
      ...DEFAULT_BRANDING,
      tenantId,
      companyName: 'Cliente 1 Tech',
      heroTitle: 'A plataforma completa para o seu negócio!',
    };
  }

  return { ...DEFAULT_BRANDING, tenantId };
}

// 4. Função pública usada pelos componentes
export async function getTenantBranding() {
  const tenantId = getTenantIdFromUrl();

  try {
    const branding = await fetchBrandingFromApi(tenantId);
    return { ...DEFAULT_BRANDING, ...branding };
  } catch (err) {
    console.error('Erro ao carregar branding do tenant, usando padrão.', err);
    return DEFAULT_BRANDING;
  }
}