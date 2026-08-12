import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

// ==========================================
// PALETA GOOGLE & CONFIGURAÇÕES VISUAIS
// ==========================================
const COLORS = {
  bg: '#0A0E17',
  glassBg: 'rgba(255, 255, 255, 0.08)',
  glassBorder: 'rgba(255, 255, 255, 0.18)',
  textPrimary: '#FFFFFF',
  textSecondary: '#9CA3AF',
  googleBlue: '#4285F4',
  googleRed: '#EA4335',
  googleYellow: '#FBBC05',
  googleGreen: '#34A853',
};

// Componente de iluminação de fundo dinâmica
const GoogleAnimatedGlow: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse1 = 1 + Math.sin(frame / 15) * 0.12;
  const pulse2 = 1 + Math.cos(frame / 18) * 0.15;

  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: '5%',
          left: '-25%',
          width: '750px',
          height: '750px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${COLORS.googleBlue}55 0%, transparent 70%)`,
          filter: 'blur(110px)',
          transform: `scale(${pulse1})`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-25%',
          width: '750px',
          height: '750px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${COLORS.googleGreen}45 0%, transparent 70%)`,
          filter: 'blur(110px)',
          transform: `scale(${pulse2})`,
        }}
      />
    </>
  );
};

// Cartão Estilo Glassmorphism
const GlassCard: React.FC<{
  children: React.ReactNode;
  borderColor?: string;
  style?: React.CSSProperties;
}> = ({ children, borderColor = COLORS.glassBorder, style }) => {
  return (
    <div
      style={{
        background: COLORS.glassBg,
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        borderRadius: '40px',
        border: `2px solid ${borderColor}`,
        boxShadow: '0 30px 70px rgba(0,0,0,0.6), inset 0 1px 2px rgba(255,255,255,0.3)',
        padding: '52px 44px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// Tag animada estilo Google Pill
const TagBadge: React.FC<{ text: string; color: string; icon?: string }> = ({
  text,
  color,
  icon,
}) => {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 26px',
        borderRadius: '100px',
        fontSize: '22px',
        fontWeight: 800,
        color: '#FFFFFF',
        backgroundColor: color,
        boxShadow: `0 8px 25px ${color}66`,
        textTransform: 'uppercase',
        marginBottom: '24px',
        width: 'fit-content',
      }}
    >
      {icon && <span style={{ fontSize: '26px' }}>{icon}</span>}
      <span>{text}</span>
    </div>
  );
};

// ==========================================
// CENA 1: DEEPFAKES E UNIÃO EUROPEIA (0s - 7s)
// ==========================================
const Scene1Deepfakes: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, config: { damping: 12, stiffness: 100 } });
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <div style={{ transform: `scale(${scale})`, opacity, width: '100%' }}>
      <GlassCard borderColor={COLORS.googleRed}>
        <TagBadge text="UNIÃO EUROPEIA • ART. 50" color={COLORS.googleRed} icon="🛡️" />
        <h1
          style={{
            fontSize: '60px',
            fontWeight: 900,
            color: COLORS.textPrimary,
            lineHeight: 1.15,
            margin: '0 0 24px 0',
            letterSpacing: '-1px',
          }}
        >
          MARCAÇÃO D'ÁGUA OBRIGATÓRIA CONTRA{' '}
          <span
            style={{
              background: `linear-gradient(90deg, ${COLORS.googleRed}, ${COLORS.googleYellow})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            DEEPFAKES
          </span>
        </h1>
        <p
          style={{
            fontSize: '30px',
            color: COLORS.textSecondary,
            lineHeight: 1.45,
            margin: 0,
            fontWeight: 500,
          }}
        >
          Reforço imediato na fiscalização de modelos de IA sintética antes das regras para sistemas de alto risco.
        </p>
      </GlassCard>
    </div>
  );
};

// ==========================================
// CENA 2: NIGÉRIA - FINTECHS & IA (7s - 14s)
// ==========================================
const Scene2Nigeria: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slideIn = spring({ frame, fps, config: { damping: 14 } });
  const translateY = interpolate(slideIn, [0, 1], [120, 0]);

  return (
    <div style={{ transform: `translateY(${translateY}px)`, width: '100%' }}>
      <GlassCard borderColor={COLORS.googleGreen}>
        <TagBadge text="🇳🇬 NIGÉRIA • SANDBOX" color={COLORS.googleGreen} icon="🏦" />

        <h2
          style={{
            fontSize: '54px',
            fontWeight: 800,
            color: COLORS.textPrimary,
            lineHeight: 1.2,
            marginBottom: '24px',
          }}
        >
          IA no Setor Financeiro & <span style={{ color: COLORS.googleGreen }}>Crédito</span>
        </h2>

        <p
          style={{
            fontSize: '30px',
            color: COLORS.textSecondary,
            lineHeight: 1.5,
            margin: '0 0 20px 0',
          }}
        >
          O Banco Central da Nigéria (CBN) abre inscrições para testar algoritmos de pagamento e ativos virtuais.
        </p>

        <div
          style={{
            padding: '16px 24px',
            background: 'rgba(52, 168, 83, 0.15)',
            borderRadius: '20px',
            borderLeft: `6px solid ${COLORS.googleGreen}`,
            fontSize: '24px',
            color: COLORS.textPrimary,
            fontWeight: 600,
          }}
        >
          Harmonização com o Roteiro Africano de Governança
        </div>
      </GlassCard>
    </div>
  );
};

// ==========================================
// CENA 3: ALEMANHA - ÉTICA E PESQUISA (14s - 22s)
// ==========================================
const Scene3Germany: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, config: { damping: 12 } });

  return (
    <div style={{ transform: `scale(${scale})`, width: '100%' }}>
      <GlassCard borderColor={COLORS.googleYellow}>
        <TagBadge text="🇩🇪 ALEMANHA • BREMEN" color={COLORS.googleYellow} icon="🔬" />

        <h2
          style={{
            fontSize: '52px',
            fontWeight: 800,
            color: COLORS.textPrimary,
            lineHeight: 1.2,
            marginBottom: '24px',
          }}
        >
          Fórum Global: <span style={{ color: COLORS.googleYellow }}>Pesquisa Aberta x Ética</span>
        </h2>

        <p
          style={{
            fontSize: '30px',
            color: COLORS.textSecondary,
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          Especialistas debatem protocolos para evitar que as exigências do EU AI Act travem a ciência acadêmica.
        </p>
      </GlassCard>
    </div>
  );
};

// ==========================================
// CENA 4: CTA - IAMAZING NOTÍCIAS (22s - 30s)
// ==========================================
const Scene4CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pop = spring({ frame, fps, config: { damping: 10, stiffness: 110 } });

  return (
    <div style={{ transform: `scale(${pop})`, width: '100%' }}>
      <GlassCard
        borderColor={COLORS.googleBlue}
        style={{
          background: 'linear-gradient(135deg, rgba(66,133,244,0.3) 0%, rgba(52,168,83,0.3) 100%)',
          textAlign: 'center',
          alignItems: 'center',
          padding: '60px 40px',
        }}
      >
        <div
          style={{
            fontSize: '22px',
            color: COLORS.googleYellow,
            fontWeight: 800,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          REGULAÇÃO & TECNOLOGIA
        </div>

        <h2
          style={{
            fontSize: '56px',
            fontWeight: 900,
            color: '#FFFFFF',
            margin: '0 0 16px 0',
            letterSpacing: '-1.5px',
          }}
        >
          IAMAZING NOTÍCIAS
        </h2>

        <p style={{ fontSize: '28px', color: COLORS.textSecondary, margin: '0 0 36px 0', lineHeight: 1.4 }}>
          Informação estratégica e atualizada sobre Inteligência Artificial no mundo.
        </p>

        <div
          style={{
            padding: '20px 48px',
            borderRadius: '100px',
            background: '#FFFFFF',
            color: '#000000',
            fontWeight: 900,
            fontSize: '32px',
            boxShadow: '0 15px 40px rgba(255,255,255,0.4)',
          }}
        >
          iamazing.news 🚀
        </div>
      </GlassCard>
    </div>
  );
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================
export const MainVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const progressPercent = (frame / durationInFrames) * 100;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.bg,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif',
        padding: '160px 50px 140px 50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Fundo Animado estilo Google */}
      <GoogleAnimatedGlow />

      {/* Topo do Vídeo */}
      <div
        style={{
          position: 'absolute',
          top: '60px',
          left: '60px',
          right: '60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 50,
        }}
      >
        <span
          style={{
            fontSize: '24px',
            fontWeight: 900,
            color: COLORS.textPrimary,
            letterSpacing: '2px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          IAMAZING <span style={{ color: COLORS.googleRed, fontSize: '18px' }}>● LIVE</span>
        </span>
        <span
          style={{
            fontSize: '22px',
            fontWeight: 700,
            color: COLORS.textSecondary,
            background: 'rgba(255,255,255,0.1)',
            padding: '6px 16px',
            borderRadius: '100px',
          }}
        >
          12/08/2026
        </span>
      </div>

      {/* Cronograma das Cenas (Total: 900 Frames / 30 Segundos) */}
      <Sequence from={0} durationInFrames={210}>
        <Scene1Deepfakes />
      </Sequence>

      <Sequence from={210} durationInFrames={210}>
        <Scene2Nigeria />
      </Sequence>

      <Sequence from={420} durationInFrames={240}>
        <Scene3Germany />
      </Sequence>

      <Sequence from={660} durationInFrames={240}>
        <Scene4CTA />
      </Sequence>

      {/* Fontes de Hoje */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50px',
          right: '50px',
          textAlign: 'center',
          fontSize: '16px',
          color: COLORS.textSecondary,
          fontWeight: 500,
        }}
      >
        Fontes: Future of Life Institute | TechAfrica News | Informationsdienst Wissenschaft
      </div>

      {/* Barra de Progresso Google Gradient */}
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          height: '10px',
          width: `${progressPercent}%`,
          background: `linear-gradient(90deg, ${COLORS.googleBlue}, ${COLORS.googleRed}, ${COLORS.googleYellow}, ${COLORS.googleGreen})`,
          boxShadow: '0 0 16px rgba(66,133,244,0.9)',
        }}
      />
    </AbsoluteFill>
  );
};

export default MainVideo;
