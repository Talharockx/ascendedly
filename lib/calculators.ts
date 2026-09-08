import { formatCurrency, formatNumber } from "@/lib/utils";
import type { ServiceSlug } from "@/data/servicesData";

export type CalculatorValues = Record<string, number | string | string[]>;

export interface EstimateResult {
  service: ServiceSlug;
  investmentLow: number;
  investmentHigh: number;
  investmentLabel: string;
  cadence: "monthly" | "project";
  timeline: string;
  teamSize: string;
  summary: string;
  highlights: string[];
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function asNumber(value: number | string | string[] | undefined, fallback: number) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  }
  return fallback;
}

function asString(value: number | string | string[] | undefined, fallback: string) {
  return typeof value === "string" ? value : fallback;
}

function asList(value: number | string | string[] | undefined, fallback: string[]) {
  return Array.isArray(value) ? value : fallback;
}

function rangeLabel(low: number, high: number, cadence: EstimateResult["cadence"]) {
  const suffix = cadence === "monthly" ? " / month" : " project";
  return `${formatCurrency(low)} – ${formatCurrency(high)}${suffix}`;
}

export function calculateEstimate(
  slug: ServiceSlug,
  values: CalculatorValues
): EstimateResult {
  switch (slug) {
    case "seo":
      return calculateSeo(values);
    case "smm":
      return calculateSmm(values);
    case "web-development":
      return calculateWeb(values);
    case "gen-ai":
      return calculateGenAi(values);
    case "app-development":
      return calculateApp(values);
  }
}

function calculateSeo(values: CalculatorValues): EstimateResult {
  const keywords = clamp(asNumber(values.keywords, 40), 10, 200);
  const traffic = clamp(asNumber(values.traffic, 8000), 0, 250000);
  const scope = asString(values.scope, "national");

  const scopeMultiplier = scope === "local" ? 0.82 : scope === "global" ? 1.45 : 1;
  const keywordLoad = 4200 + keywords * 95;
  const recoveryLoad = traffic < 3000 ? 1800 : traffic > 80000 ? 4200 : 2600;
  const base = (keywordLoad + recoveryLoad) * scopeMultiplier;
  const low = Math.round(base / 500) * 500;
  const high = Math.round((base * 1.38) / 500) * 500;

  const roiMonths =
    scope === "global" ? "7–10 months" : traffic < 5000 ? "5–8 months" : "4–7 months";

  const scopeLabel =
    scope === "local" ? "local" : scope === "global" ? "global" : "national";

  return {
    service: "seo",
    investmentLow: low,
    investmentHigh: high,
    investmentLabel: rangeLabel(low, high, "monthly"),
    cadence: "monthly",
    timeline: roiMonths,
    teamSize: keywords > 120 || scope === "global" ? "5 specialists" : "3–4 specialists",
    summary: `A ${scopeLabel} SEO program covering ${formatNumber(keywords)} target keywords from a ${formatNumber(traffic)} session baseline.`,
    highlights: [
      `Technical, on-page, and authority work sized for ${formatNumber(keywords)} keywords`,
      `${scopeLabel.charAt(0).toUpperCase() + scopeLabel.slice(1)} SERP competition baked into the fee`,
      `Expected compounding ROI window: ${roiMonths}`,
      "Transparent analytics and monthly executive reporting included",
    ],
  };
}

function calculateSmm(values: CalculatorValues): EstimateResult {
  const platforms = asList(values.platforms, ["linkedin", "meta"]);
  const adSpend = asString(values.adSpend, "25k");
  const velocity = clamp(asNumber(values.velocity, 8), 3, 21);

  const platformCount = Math.max(platforms.length, 1);
  const spendMap: Record<string, number> = {
    "10k": 10000,
    "25k": 25000,
    "50k": 50000,
    "100k": 100000,
  };
  const media = spendMap[adSpend] ?? 25000;
  const management = 4500 + platformCount * 1600 + velocity * 220 + media * 0.12;
  const low = Math.round(management / 500) * 500;
  const high = Math.round((management * 1.28) / 500) * 500;

  const platformNames = platforms
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(", ");

  return {
    service: "smm",
    investmentLow: low,
    investmentHigh: high,
    investmentLabel: rangeLabel(low, high, "monthly"),
    cadence: "monthly",
    timeline: media >= 50000 ? "60–90 days to efficient scale" : "45–75 days to efficient scale",
    teamSize: platformCount >= 3 || velocity >= 14 ? "4–5 person pod" : "3 person pod",
    summary: `Management for ${platformCount} platform${platformCount === 1 ? "" : "s"} at ${formatCurrency(media)} media with ${velocity} assets per week.`,
    highlights: [
      `Platform mix: ${platformNames || "LinkedIn"}`,
      `${velocity} original assets / week plus paid variants`,
      `Media steer: ${formatCurrency(media)} / month (not included in management fee)`,
      "Creative testing, listening, and conversion tracking included",
    ],
  };
}

function calculateWeb(values: CalculatorValues): EstimateResult {
  const scope = asString(values.scope, "corporate");
  const templates = clamp(asNumber(values.templates, 8), 1, 40);
  const dataAuth = asString(values.dataAuth, "auth");

  const scopeBase = scope === "landing" ? 28000 : scope === "saas" ? 140000 : 72000;
  const templateLoad = templates * (scope === "saas" ? 4200 : 2800);
  const dataLoad = dataAuth === "none" ? 0 : dataAuth === "auth" ? 18000 : 52000;
  const total = scopeBase + templateLoad + dataLoad;
  const low = Math.round(total / 1000) * 1000;
  const high = Math.round((total * 1.32) / 1000) * 1000;

  const weeks =
    scope === "landing"
      ? Math.max(4, Math.ceil(templates * 0.6 + (dataAuth === "none" ? 0 : 2)))
      : scope === "saas"
        ? Math.max(16, Math.ceil(templates * 0.9 + (dataAuth === "full" ? 8 : 4)))
        : Math.max(8, Math.ceil(templates * 0.7 + (dataAuth === "full" ? 5 : 2)));

  const scopeLabel =
    scope === "landing"
      ? "landing page"
      : scope === "saas"
        ? "SaaS platform"
        : "corporate site";

  const dataLabel =
    dataAuth === "none"
      ? "CMS-only"
      : dataAuth === "auth"
        ? "authenticated"
        : "full database + auth";

  return {
    service: "web-development",
    investmentLow: low,
    investmentHigh: high,
    investmentLabel: rangeLabel(low, high, "project"),
    cadence: "project",
    timeline: `${weeks}–${weeks + 3} sprint weeks`,
    teamSize: scope === "saas" || dataAuth === "full" ? "5–7 engineers" : "3–5 engineers",
    summary: `${scopeLabel.charAt(0).toUpperCase() + scopeLabel.slice(1)} with ${templates} unique templates and ${dataLabel} architecture.`,
    highlights: [
      `Capital budget sized for a ${scopeLabel}`,
      `${templates} unique templates in the design system`,
      `Data gravity: ${dataLabel}`,
      `Delivery window: ${weeks}–${weeks + 3} weeks of production sprints`,
    ],
  };
}

function calculateGenAi(values: CalculatorValues): EstimateResult {
  const useCase = asString(values.useCase, "rag");
  const volume = clamp(asNumber(values.volume, 10000), 500, 250000);
  const provider = asString(values.provider, "azure");

  const useCaseBase = useCase === "rag" ? 62000 : useCase === "agents" ? 98000 : 128000;
  const volumeLoad = Math.log10(volume) * 14000;
  const providerLoad = provider === "azure" || provider === "mixed" ? 12000 : 4000;
  const total = useCaseBase + volumeLoad + providerLoad;
  const low = Math.round(total / 1000) * 1000;
  const high = Math.round((total * 1.35) / 1000) * 1000;

  const weeks = useCase === "finetune" ? 14 : useCase === "agents" ? 12 : 8;
  const useCaseLabel =
    useCase === "rag"
      ? "RAG search"
      : useCase === "agents"
        ? "agent automation"
        : "custom fine-tuning";
  const providerLabel =
    provider === "openai"
      ? "OpenAI"
      : provider === "anthropic"
        ? "Anthropic"
        : provider === "mixed"
          ? "mixed model routing"
          : "Azure OpenAI";

  return {
    service: "gen-ai",
    investmentLow: low,
    investmentHigh: high,
    investmentLabel: rangeLabel(low, high, "project"),
    cadence: "project",
    timeline: `${weeks}–${weeks + 4} weeks to production`,
    teamSize: useCase === "rag" ? "3–4 AI engineers" : "4–6 AI + platform engineers",
    summary: `${useCaseLabel.charAt(0).toUpperCase() + useCaseLabel.slice(1)} on ${providerLabel} at ${formatNumber(volume)} documents/queries of scale.`,
    highlights: [
      `Primary use case: ${useCaseLabel}`,
      `Corpus / query volume: ${formatNumber(volume)}`,
      `Provider posture: ${providerLabel}`,
      "Evaluation harness and privacy sandbox included in the deployment",
    ],
  };
}

function calculateApp(values: CalculatorValues): EstimateResult {
  const os = asString(values.os, "cross");
  const features = asList(values.features, ["offline"]);

  const osBase = os === "cross" ? 110000 : 82000;
  const featureCost: Record<string, number> = {
    chat: 28000,
    gps: 22000,
    iap: 18000,
    offline: 24000,
  };
  const featureLoad = features.reduce((sum, feature) => sum + (featureCost[feature] ?? 0), 0);
  const total = osBase + featureLoad;
  const low = Math.round(total / 1000) * 1000;
  const high = Math.round((total * 1.3) / 1000) * 1000;

  const osWeeks = os === "cross" ? 18 : 14;
  const featureWeeks = features.length * 2;
  const weeks = osWeeks + featureWeeks;

  const osLabel =
    os === "ios" ? "iOS" : os === "android" ? "Android" : "cross-platform iOS + Android";
  const featureLabels: Record<string, string> = {
    chat: "real-time chat",
    gps: "GPS / mapping",
    iap: "in-app purchases",
    offline: "offline sync",
  };

  return {
    service: "app-development",
    investmentLow: low,
    investmentHigh: high,
    investmentLabel: rangeLabel(low, high, "project"),
    cadence: "project",
    timeline: `Phase 1–3 across ${weeks}–${weeks + 4} weeks`,
    teamSize: os === "cross" || features.length >= 3 ? "5–7 mobile engineers" : "4–5 mobile engineers",
    summary: `${osLabel} v1 including ${features.length || 1} advanced capability layer${features.length === 1 ? "" : "s"}.`,
    highlights: [
      `Target OS: ${osLabel}`,
      features.length
        ? `Complexity: ${features.map((f) => featureLabels[f] ?? f).join(", ")}`
        : "Lean v1 without advanced modules",
      "Roadmap: discovery → core loops → store compliance",
      `Capital envelope for v1: ${formatCurrency(low)} – ${formatCurrency(high)}`,
    ],
  };
}

export const ESTIMATE_STORAGE_KEY = "ascendedly-estimate";

export interface StoredEstimate {
  service: ServiceSlug;
  serviceName: string;
  investmentLabel: string;
  timeline: string;
  teamSize: string;
  summary: string;
  lockedAt: string;
}

export function serializeEstimate(
  result: EstimateResult,
  serviceName: string
): StoredEstimate {
  return {
    service: result.service,
    serviceName,
    investmentLabel: result.investmentLabel,
    timeline: result.timeline,
    teamSize: result.teamSize,
    summary: result.summary,
    lockedAt: new Date().toISOString(),
  };
}
