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
  bg: '#080B11',
  glassBg: 'rgba(255, 255, 255, 0.08)',
  glassBorder: 'rgba(255, 255, 255, 0.18)',
  textPrimary: '#FFFFFF',
  textSecondary: '#A1A1AA',
  googleBlue: '#4285F4',
  googleRed: '#EA4335',
  googleYellow: '#FBBC05',
  googleGreen: '#34A853',
};

const AnimatedBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const scale1 = 1 + Math.sin(frame / 20) * 0.1;
  const scale2 = 1 + Math.cos(frame / 25) * 0.15;

  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '-20%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${COLORS.googleBlue}50 0%, transparent 70%)`,
          filter: 'blur(100px)',
          transform: `scale(${scale1})`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-20%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${COLORS.googleRed}40 0%, transparent 70%)`,
          filter: 'blur(100px)',
          transform: `scale(${scale2})`,
        }}
      />
    </>
  );
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
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        borderRadius: '44px',
        border: `2px solid ${borderColor}`,
        boxShadow: '0 40px 80px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.3)',
        padding: '56px 48px',
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
        padding: '14px 28px',
        borderRadius: '100px',
        fontSize: '24px',
        fontWeight: 800,
        color: '#FFFFFF',
        backgroundColor: color,
        boxShadow: `0 10px 25px ${color}66`,
        textTransform: 'uppercase',
        marginBottom: '28px',
        width: 'fit-content',
      }}
    >
      {icon && <span style={{ fontSize: '28px' }}>{icon}</span>}
      <span>{text}</span>
    </div>
  );
};

const Scene1Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, config: { damping: 12, stiffness: 100 } });
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <div style={{ transform: `scale(${scale})`, opacity, width: '100%' }}>
      <GlassCard borderColor={COLORS.googleBlue}>
        <TagBadge text="08 AGOSTO 2026" color={COLORS.googleBlue} icon="📅" />
        <h1
          style={{
            fontSize: '72px',
            fontWeight: 900,
            color: COLORS.textPrimary,
            lineHeight: 1.1,
            margin: '0 0 24px 0',
            letterSpacing: '-1.5px',
          }}
        >
          PANORAMA GLOBAL DA{' '}
          <span
            style={{
              background: `linear-gradient(90deg, ${COLORS.googleBlue}, ${COLORS.googleGreen})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            REGULAÇÃO DE IA
          </span>
        </h1>
        <p
          style={{
            fontSize: '34px',
            color: COLORS.textSecondary,
            lineHeight: 1.45,
            margin: 0,
            fontWeight: 500,
          }}
        >
          O mapa completo das novas leis que mudam o jogo no mercado de tecnologia e inovação.
        </p>
      </GlassCard>
    </div>
  );
};

const Scene2EU: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slideIn = spring({ frame, fps, config: { damping: 14 } });
  const translateY = interpolate(slideIn, [0, 1], [120, 0]);

  const items: string[] = [
    'Poder formal de auditoria sobre modelos GPAI',
    'Comprovação obrigatória de dados de treino',
    'Rotulagem ostensiva de mídias sintéticas',
  ];

  return (
    <div style={{ transform: `translateY(${translateY}px)`, width: '100%' }}>
      <GlassCard borderColor={COLORS.googleYellow}>
        <TagBadge text="🇪🇺 UNIÃO EUROPEIA" color={COLORS.googleYellow} icon="⚖️" />

        <h2
          style={{
            fontSize: '58px',
            fontWeight: 800,
            color: COLORS.textPrimary,
            lineHeight: 1.15,
            marginBottom: '32px',
          }}
        >
          European AI Office Assume <span style={{ color: COLORS.googleYellow }}>Fiscalização Direta</span>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {items.map((item: string, index: number) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                fontSize: '28px',
                color: COLORS.textPrimary,
                background: 'rgba(255,255,255,0.05)',
                padding: '18px 24px',
                borderRadius: '20px',
              }}
            >
              <span style={{ color: COLORS.googleYellow, fontSize: '30px' }}>✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
};

const Scene3ChinaUSA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({ frame, fps, config: { damping: 15 } });

  return (
    <div
      style={{
        transform: `scale(${interpolate(progress, [0, 1], [0.88, 1])})`,
        opacity: progress,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '28px',
      }}
    >
      <GlassCard borderColor={COLORS.googleRed} style={{ padding: '40px' }}>
        <TagBadge text="🇨🇳 CHINA" color={COLORS.googleRed} icon="🐉" />
        <h3 style={{ fontSize: '40px', fontWeight: 800, color: COLORS.textPrimary, margin: '0 0 12px 0' }}>
          Agentes Antropomórficos & Finanças
        </h3>
        <p style={{ fontSize: '28px', color: COLORS.textSecondary, margin: 0, lineHeight: 1.4 }}>
          Autuações do CAC. Filtros de saúde mental obrigatórios e restrições a dados bancários.
        </p>
      </GlassCard>

      <GlassCard borderColor={COLORS.googleBlue} style={{ padding: '40px' }}>
        <TagBadge text="🇺🇸 ESTADOS UNIDOS" color={COLORS.googleBlue} icon="🦅" />
        <h3 style={{ fontSize: '40px', fontWeight: 800, color: COLORS.textPrimary, margin: '0 0 12px 0' }}>
          NIST x Fragmentação Estadual
        </h3>
        <p style={{ fontSize: '28px', color: COLORS.textSecondary, margin: 0, lineHeight: 1.4 }}>
          Novos testes do NIST para Frontier Models. Regras divididas entre estados como CA e NY.
        </p>
      </GlassCard>
    </div>
  );
};

const Scene4Brazil: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slide = spring({ frame, fps, config: { damping: 12 } });

  return (
    <div
      style={{
        transform: `translateX(${interpolate(slide, [0, 1], [-120, 0])}px)`,
        width: '100%',
      }}
    >
      <GlassCard borderColor={COLORS.googleGreen}>
        <TagBadge text="🇧🇷 BRASIL (PL 2338/2023)" color={COLORS.googleGreen} icon="🔰" />
        <h2
          style={{
            fontSize: '54px',
            fontWeight: 800,
            color: COLORS.textPrimary,
            lineHeight: 1.2,
            marginBottom: '24px',
          }}
        >
          Liderança Regulatória na <span style={{ color: COLORS.googleGreen }}>América Latina</span>
        </h2>
        <p
          style={{
            fontSize: '30px',
            color: COLORS.textSecondary,
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          Alinhamento aos padrões europeus para garantir interoperabilidade e proteger direitos dos usuários sobre decisões automatizadas.
        </p>
      </GlassCard>
    </div>
  );
};

const Scene5CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pop = spring({ frame, fps, config: { damping: 10, stiffness: 100 } });

  return (
    <div style={{ transform: `scale(${pop})`, width: '100%' }}>
      <GlassCard
        borderColor={COLORS.googleBlue}
        style={{
          background: 'linear-gradient(135deg, rgba(66,133,244,0.25) 0%, rgba(52,168,83,0.25) 100%)',
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
            marginBottom: '12px',
          }}
        >
          RESUMO DA GOVERNANÇA GLOBAL
        </div>

        <h2
          style={{
            fontSize: '42px',
            color: COLORS.textPrimary,
            margin: '0 0 32px 0',
            lineHeight: 1.3,
            fontWeight: 700,
          }}
        >
          🇪🇺 Rigor • 🇨🇳 Controle • 🇺🇸 Técnica
        </h2>

        <div
          style={{
            width: '100%',
            height: '2px',
            background: 'rgba(255,255,255,0.2)',
            margin: '0 0 36px 0',
          }}
        />

        <h3
          style={{
            fontSize: '56px',
            fontWeight: 900,
            color: '#FFFFFF',
            margin: '0 0 16px 0',
            letterSpacing: '-1px',
          }}
        >
          IAMAZING SCHOOL
        </h3>
        <p style={{ fontSize: '28px', color: COLORS.textSecondary, margin: '0 0 36px 0' }}>
          Domine e lidere a criação de produtos com Inteligência Artificial.
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
          iamazing.school 🚀
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
      <AnimatedBackground />

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
          IA NEWS <span style={{ color: COLORS.googleRed, fontSize: '18px' }}>● LIVE</span>
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
          08/08/2026
        </span>
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
          bottom: '40px',
          left: '60px',
          right: '60px',
          textAlign: 'center',
          fontSize: '18px',
          color: COLORS.textSecondary,
          fontWeight: 500,
        }}
      >
        Fontes: European AI Office, CAC, NIST & PL 2338/2023
      </div>

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
