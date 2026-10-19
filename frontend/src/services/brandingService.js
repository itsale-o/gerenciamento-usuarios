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
  if (fromQuery && /^[a-z0-9][a-z0-9._-]{0,62}$/i.test(fromQuery)) return fromQuery;

  const host = window.location.hostname; // ex: cliente1.seusistema.com.br
  const parts = host.split('.');
  const isIpv4 = parts.length === 4 && parts.every((part) => /^\d+$/.test(part));

  // Em localhost/dev, usa o próprio domínio como tenant para a API futura.
  const isLocalOrIp = host === 'localhost' || host === '::1' || isIpv4;
  if (isLocalOrIp) return host;

  return /^[a-z0-9][a-z0-9-]{0,62}$/i.test(parts[0]) ? parts[0] : null;
}


// 2. Formato padrão que a API deverá devolver (contrato sugerido)

// Combine esse shape com o backend antes de implementarem a rota de verdade.
const DEFAULT_BRANDING = {
  tenantId: null,
  companyName: 'BR SOFT TECNOLOGIA LTDA-ME',
  cnpj: '12.345.678/0001-90',
  logoUrl: null,        // se null, o componente usa o SVG placeholder
  faviconUrl: null,
  heroTitle: 'Soluções Inteligentes para seu Negócio!',
  whatsappLink: '#',
  colors: {
    primary: '#1E3A5F',
    primaryHover: '#1B3555',
    accent: '#3B82A0',
  },
};

const HEX_COLOR_PATTERN = /^#[0-9a-f]{6}$/i;

function normalizeColor(value, fallback) {
  return typeof value === 'string' && HEX_COLOR_PATTERN.test(value)
    ? value
    : fallback;
}

function normalizeAssetUrl(value) {
  if (typeof value !== 'string' || value.length > 2048) return null;

  try {
    const url = new URL(value, window.location.origin);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return null;
    return url.href;
  } catch {
    return null;
  }
}

function normalizeBranding(branding) {
  const colors = branding?.colors || {};

  return {
    ...DEFAULT_BRANDING,
    ...branding,
    companyName: typeof branding?.companyName === 'string'
      ? branding.companyName.slice(0, 120)
      : DEFAULT_BRANDING.companyName,
    cnpj: typeof branding?.cnpj === 'string'
      ? branding.cnpj.slice(0, 24)
      : DEFAULT_BRANDING.cnpj,
    logoUrl: normalizeAssetUrl(branding?.logoUrl),
    faviconUrl: normalizeAssetUrl(branding?.faviconUrl),
    heroTitle: typeof branding?.heroTitle === 'string'
      ? branding.heroTitle.slice(0, 160)
      : DEFAULT_BRANDING.heroTitle,
    whatsappLink: normalizeAssetUrl(branding?.whatsappLink) || '#',
    colors: {
      primary: normalizeColor(colors.primary, DEFAULT_BRANDING.colors.primary),
      primaryHover: normalizeColor(colors.primaryHover, DEFAULT_BRANDING.colors.primaryHover),
      accent: normalizeColor(colors.accent, DEFAULT_BRANDING.colors.accent),
    },
  };
}


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
    return normalizeBranding(branding);
  } catch (err) {
    console.error('Erro ao carregar branding do tenant, usando padrão.', err);
    return normalizeBranding(DEFAULT_BRANDING);
  }
}