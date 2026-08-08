import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const COLORS = {
  bg: '#0B0F17',
  glassBg: 'rgba(255, 255, 255, 0.07)',
  glassBorder: 'rgba(255, 255, 255, 0.15)',
  textPrimary: '#FFFFFF',
  textSecondary: '#98A2B3',
  googleBlue: '#4285F4',
  googleRed: '#EA4335',
  googleYellow: '#FBBC05',
  googleGreen: '#34A853',
};

const FONTS = {
  primary:
    '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", sans-serif',
};

const GlassCard: React.FC<{
  children: React.ReactNode;
  borderColor?: string;
  style?: React.CSSProperties;
}> = ({ children, borderColor = COLORS.glassBorder, style }) => {
  return (
    <div
      style={{
        background: COLORS.glassBg,
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
        borderRadius: '36px',
        border: `1.5px solid ${borderColor}`,
        boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2)',
        padding: '48px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const TagBadge: React.FC<{ text: string; color: string }> = ({ text, color }) => {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '10px 24px',
        borderRadius: '100px',
        fontSize: '22px',
        fontWeight: 700,
        letterSpacing: '1px',
        color: '#FFFFFF',
        backgroundColor: color,
        boxShadow: `0 8px 20px ${color}55`,
        textTransform: 'uppercase',
        marginBottom: '20px',
        width: 'fit-content',
      }}
    >
      {text}
    </span>
  );
};

const Scene1Intro = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, config: { damping: 12, stiffness: 120 } });
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <div style={{ transform: `scale(${scale})`, opacity, width: '100%' }}>
      <GlassCard borderColor={COLORS.googleBlue}>
        <TagBadge text="08 AGOSTO 2026" color={COLORS.googleBlue} />
        <h1
          style={{
            fontSize: '68px',
            fontWeight: 800,
            color: COLORS.textPrimary,
            lineHeight: 1.1,
            margin: '10px 0 20px 0',
          }}
        >
          PANORAMA GLOBAL DA <span style={{ color: COLORS.googleBlue }}>REGULAÇÃO DE IA</span>
        </h1>
        <p
          style={{
            fontSize: '32px',
            color: COLORS.textSecondary,
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          O mapa completo das novas leis que mudam o jogo no mundo do desenvolvimento e negócios.
        </p>
      </GlassCard>
    </div>
  );
};

const Scene2EU = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slideIn = spring({ frame, fps, config: { damping: 14 } });
  const translateY = interpolate(slideIn, [0, 1], [100, 0]);

  return (
    <div style={{ transform: `translateY(${translateY}px)`, width: '100%' }}>
      <GlassCard borderColor={COLORS.googleYellow}>
        <div style={{ display: 'flex', gap: '12px' }}>
          <TagBadge text="🇪🇺 UNIÃO EUROPEIA" color={COLORS.googleYellow} />
          <TagBadge text="EU AI ACT" color="rgba(255,255,255,0.15)" />
        </div>

        <h2
          style={{
            fontSize: '56px',
            fontWeight: 800,
            color: COLORS.textPrimary,
            lineHeight: 1.15,
            marginBottom: '24px',
          }}
        >
          European AI Office Assume <span style={{ color: COLORS.googleYellow }}>Fiscalização Direta</span>
        </h2>

        <ul
          style={{
            fontSize: '28px',
            color: COLORS.textPrimary,
            lineHeight: 1.5,
            paddingLeft: '28px',
            margin: 0,
          }}
        >
          <li style={{ marginBottom: '16px' }}>
            Poder de auditoria formal sobre modelos de IA de Uso Geral (GPAI).
          </li>
          <li style={{ marginBottom: '16px' }}>
            Obrigatória a comprovação de dados de treino e rotulagem sintética.
          </li>
          <li>Multas pesadas para descumprimento de conformidade técnica.</li>
        </ul>
      </GlassCard>
    </div>
  );
};

const Scene3ChinaUSA = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({ frame, fps, config: { damping: 15 } });

  return (
    <div
      style={{
        transform: `scale(${interpolate(progress, [0, 1], [0.9, 1])})`,
        opacity: progress,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}
    >
      <GlassCard borderColor={COLORS.googleRed} style={{ padding: '36px' }}>
        <TagBadge text="🇨🇳 CHINA" color={COLORS.googleRed} />
        <h3 style={{ fontSize: '38px', color: COLORS.textPrimary, margin: '8px 0' }}>
          Agentes Antropomórficos & Finanças
        </h3>
        <p style={{ fontSize: '26px', color: COLORS.textSecondary, margin: 0 }}>
          Autuações do CAC para plataformas. Filtros rígidos de saúde mental e restrição de dados pessoais bancários.
        </p>
      </GlassCard>

      <GlassCard borderColor={COLORS.googleBlue} style={{ padding: '36px' }}>
        <TagBadge text="🇺🇸 ESTADOS UNIDOS" color={COLORS.googleBlue} />
        <h3 style={{ fontSize: '38px', color: COLORS.textPrimary, margin: '8px 0' }}>
          NIST x Fragmentação Estadual
        </h3>
        <p style={{ fontSize: '26px', color: COLORS.textSecondary, margin: 0 }}>
          Sem lei federal única: NIST cria regras de teste para Frontier Models enquanto Estados criam regras próprias.
        </p>
      </GlassCard>
    </div>
  );
};

const Scene4Brazil = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slide = spring({ frame, fps, config: { damping: 12 } });

  return (
    <div
      style={{
        transform: `translateX(${interpolate(slide, [0, 1], [-100, 0])}px)`,
        width: '100%',
      }}
    >
      <GlassCard borderColor={COLORS.googleGreen}>
        <TagBadge text="🇧🇷 BRASIL (PL 2338/2023)" color={COLORS.googleGreen} />
        <h2
          style={{
            fontSize: '52px',
            fontWeight: 800,
            color: COLORS.textPrimary,
            lineHeight: 1.2,
            marginBottom: '20px',
          }}
        >
          Liderança Regulatória na <span style={{ color: COLORS.googleGreen }}>América Latina</span>
        </h2>
        <p
          style={{
            fontSize: '28px',
            color: COLORS.textSecondary,
            lineHeight: 1.5,
            margin: '0 0 20px 0',
          }}
        >
          Substitutivo do PL 2338/2023 alinha o Brasil aos padrões europeus com foco na interoperabilidade e direitos contra decisões automatizadas.
        </p>
      </GlassCard>
    </div>
  );
};

const Scene5CTA = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pop = spring({ frame, fps, config: { damping: 10, stiffness: 100 } });

  return (
    <div
      style={{
        transform: `scale(${pop})`,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}
    >
      <GlassCard
        borderColor={COLORS.googleBlue}
        style={{
          background: 'linear-gradient(135deg, rgba(66,133,244,0.2) 0%, rgba(52,168,83,0.2) 100%)',
          textAlign: 'center',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontSize: '24px',
            color: COLORS.googleYellow,
            fontWeight: 800,
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          RESUMO DA GOVERNANÇA
        </span>
        <h2 style={{ fontSize: '46px', color: COLORS.textPrimary, margin: '12px 0 24px 0' }}>
          Europa (Rigor) • China (Controle Estatal) • EUA (Técnica)
        </h2>

        <div
          style={{
            width: '100%',
            height: '2px',
            background: 'rgba(255,255,255,0.2)',
            margin: '20px 0',
          }}
        />

        <div style={{ marginTop: '10px' }}>
          <h3
            style={{
              fontSize: '54px',
              fontWeight: 900,
              color: '#FFFFFF',
              margin: '0 0 10px 0',
              letterSpacing: '-1px',
            }}
          >
            IAMAZING SCHOOL
          </h3>
          <p style={{ fontSize: '28px', color: COLORS.textSecondary, margin: 0 }}>
            Aprenda a liderar e construir produtos em IA no novo cenário global.
          </p>
          <div
            style={{
              marginTop: '28px',
              padding: '16px 40px',
              borderRadius: '100px',
              background: '#FFFFFF',
              color: '#000000',
              fontWeight: 800,
              fontSize: '28px',
              display: 'inline-block',
              boxShadow: '0 10px 30px rgba(255,255,255,0.3)',
            }}
          >
            iamazing.school 🚀
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export const MainVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const progressPercent = (frame / durationInFrames) * 100;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.bg,
        fontFamily: FONTS.primary,
        padding: '80px 50px 120px 50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${COLORS.googleBlue}40 0%, transparent 70%)`,
          filter: 'blur(80px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${COLORS.googleGreen}35 0%, transparent 70%)`,
          filter: 'blur(80px)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '70px',
          left: '60px',
          right: '60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontSize: '22px',
            fontWeight: 800,
            color: COLORS.textPrimary,
            letterSpacing: '2px',
          }}
        >
          IA NEWS <span style={{ color: COLORS.googleRed }}>● LIVE</span>
        </span>
        <span style={{ fontSize: '20px', color: COLORS.textSecondary }}>08/08/2026</span>
      </div>

      <Sequence from={0} durationInFrames={120}>
        <Scene1Intro />
      </Sequence>

      <Sequence from={120} durationInFrames={180}>
        <Scene2EU />
      </Sequence>

      <Sequence from={300} durationInFrames={210}>
        <Scene3ChinaUSA />
      </Sequence>

      <Sequence from={510} durationInFrames={180}>
        <Scene4Brazil />
      </Sequence>

      <Sequence from={690} durationInFrames={210}>
        <Scene5CTA />
      </Sequence>

      <div
        style={{
          position: 'absolute',
          bottom: '50px',
          left: '60px',
          right: '60px',
          textAlign: 'center',
          fontSize: '18px',
          color: COLORS.textSecondary,
          letterSpacing: '0.5px',
        }}
      >
        Fontes: European AI Office, CAC (China), NIST (EUA), PL 2338/2023 (Congresso BR)
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          height: '8px',
          width: `${progressPercent}%`,
          background: `linear-gradient(90deg, ${COLORS.googleBlue}, ${COLORS.googleRed}, ${COLORS.googleYellow}, ${COLORS.googleGreen})`,
          boxShadow: '0 0 12px rgba(66,133,244,0.8)',
        }}
      />
    </AbsoluteFill>
  );
};
