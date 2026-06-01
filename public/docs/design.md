# Friday Web Design Implementation Guide

Use this guide to implement the Friday visual identity in a production web app.

## Brand Position

Friday is an AI-native insurance guidance platform.

Friday is not a broker, insurer, comparison site, lead-generation marketplace, or recommendation engine. Friday helps users understand insurance, compare quotes factually, review policies, prepare broker questions, and connect to licensed brokers when needed.

The user decides. The broker advises. Friday guides.

## Core Copy

- The future of insurance understanding.
- Insurance guidance, without the pressure.
- Built for clarity. Designed for confidence.
- Understanding changes everything.
- Friday doesn’t sell you insurance. Friday helps you understand it.
- One step at a time. Always Friday.

## Visual Direction

The experience should feel premium, cinematic, intelligent, and emotionally calm. Think Apple, OpenAI, Linear, and cinematic editorial design. Avoid generic SaaS templates, corporate insurance language, fintech neon, dry documentation layouts, and heavy sales funnels.

## Color Tokens

```css
:root {
  --friday-ink: #082828;
  --friday-forest: #0a3d3a;
  --friday-emerald: #0fa98f;
  --friday-mint: #8fe3c2;
  --friday-soft-mint: #e6f6f1;
  --friday-pearl: #f7faf9;
  --friday-navy: #0f172a;
  --friday-slate: #64748b;
  --friday-mist: #cbd5e1;
  --friday-light: #e5e7eb;
  --friday-white: #ffffff;
}
```

## Typography

Use a large editorial serif for brand moments and a clean sans serif for interface work.

Recommended pairing:

- Display: Recoleta, Canela, Cormorant Garamond, or a similar editorial serif.
- Body and UI: Inter, Geist, or a similarly quiet geometric sans.
- Code and tokens: JetBrains Mono or SF Mono.

Scale:

- Hero: 88-128px desktop, 54-64px mobile, tight line height.
- Section heading: 56-84px desktop, 40-52px mobile.
- Card heading: 24-36px.
- Body: 16px / 28px.
- Caption: 12px / 18px with wide uppercase tracking.

## Path Symbol

The path symbol is more than a mark. It is the spatial metaphor for the whole product.

Use it as:

- A progress path.
- A loading system.
- A scroll reveal motif.
- A guided journey marker.
- A subtle glow source.
- An app icon or product signature.

The path should always imply calm upward movement. Avoid sharp edges, frantic motion, or decorative repetition without meaning.

## Glow And Depth

Glow is a guidance behavior, not decoration.

- Default glow: subtle, atmospheric, low opacity.
- Focus glow: stronger on active states, selected items, AI input, and next-step buttons.
- System glow: communicates intelligence, progress, or attention.
- Avoid loud neon, saturated blue-purple gradients, and heavy bloom.

## Motion

Motion should feel directional, smooth, and intentional.

Recommended easing:

```css
--motion-calm: 420ms cubic-bezier(.22, 1, .36, 1);
```

Use:

- Sequential scroll reveals.
- Gentle path movement.
- Soft panel elevation.
- Input focus glow.
- Guided transitions from question to understanding.

Avoid:

- Bouncy motion.
- Abrupt modal entrances.
- Excessive parallax.
- Animation that makes insurance feel gamified.

## Component Rules

Buttons:

- Primary buttons use emerald fill and deep ink text.
- Secondary buttons use transparent glass with a quiet border.
- Focus state uses a mint ring.
- Include a small arrow or task-specific icon when useful.

Cards:

- Use glass or pearl surfaces.
- Keep radius around 24-30px for major editorial panels.
- Use restrained borders and soft shadows.
- Cards should hold meaningful product surfaces, not generic marketing filler.

Inputs:

- Use rounded full or soft pill shapes for conversational entry.
- Pair with an arrow send action.
- Use glow on focus.
- Placeholder copy should feel helpful, not salesy.

Notifications:

- Calm, factual, and specific.
- Use status icons and compact metadata.
- Avoid urgency language unless legally or practically necessary.

AI Chat:

- Friday explains, compares, and prepares.
- Friday does not recommend products or decide for the user.
- Use language like “what matters,” “what to ask,” and “what this means.”
- Avoid “best policy,” “top pick,” or “recommended provider.”

## Layout

Use generous whitespace, cinematic sections, and layered product surfaces.

Recommended structure:

1. Hero with path metaphor and core promise.
2. Brand philosophy.
3. Logo system.
4. Color palette.
5. Gradient and glow behavior.
6. Typography.
7. Iconography.
8. Motion language.
9. AI conversational UI.
10. Components.
11. Product surfaces.
12. Responsive examples.
13. Export assets.
14. Developer tokens.

## Accessibility

- Maintain strong contrast in both dark and light mode.
- Do not rely on glow alone for state.
- Use visible focus states.
- Respect reduced motion preferences.
- Use clear alt text for the exact Friday logo asset.

## Implementation Checklist

- Use the exact Friday logo asset.
- Preserve the emerald, teal, black, and pearl visual language.
- Preserve the cinematic path metaphor.
- Include dark and light mode.
- Include color tokens and CSS variables.
- Include button, card, input, navigation, chat, dashboard, notification, and mobile examples.
- Keep product language neutral and guidance-led.
- Make the user feel informed, never pushed.
