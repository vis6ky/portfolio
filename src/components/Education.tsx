import React, { useCallback, useLayoutEffect, useRef, useState } from "react";

interface IEducation {
  degree: string;
  institution?: string;
  school?: string;
  period: string;
  location?: string;
  score?: string;
  img?: string;
  details?: string[];
}

interface EducationProps {
  data?: {
    education?: IEducation[];
  };
}

interface TimelineGeometry {
  path: string;
  width: number;
  height: number;
}

const Education: React.FC<EducationProps> = ({ data }) => {
  const academicHistory = data?.education || [];

  const containerRef = useRef<HTMLDivElement>(null);
  const spineRef = useRef<HTMLDivElement>(null);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [geometry, setGeometry] = useState<TimelineGeometry>({
    path: "",
    width: 0,
    height: 0,
  });

const buildTimelinePath = useCallback(() => {
  const container = containerRef.current;
  const spine = spineRef.current;

  if (!container || !spine || academicHistory.length === 0) {
    return;
  }

  const containerRect = container.getBoundingClientRect();
  const spineRect = spine.getBoundingClientRect();

  const width = containerRect.width;
  const height = containerRect.height;

  /*
   * Convert viewport coordinates into coordinates
   * relative to the timeline container.
   */
  const relativeX = (value: number) => value - containerRect.left;
  const relativeY = (value: number) => value - containerRect.top;

  /*
   * EXACT CENTER OF THE EXISTING SPINE
   */
  const spineX =
    relativeX(spineRect.left) + spineRect.width / 2;

  /*
   * EXACT TOP OF SPINE
   */
  const spineTop = relativeY(spineRect.top);

  /*
   * EXACT BOTTOM OF SPINE
   */
  const spineBottom = relativeY(spineRect.bottom);

  /*
   * Start exactly at the top of the existing spine.
   */
  let path = `M ${spineX} ${spineTop}`;

  academicHistory.forEach((_, index) => {
    const card = cardRefs.current[index];
    const node = nodeRefs.current[index];

    if (!card || !node) {
      return;
    }

    const cardRect = card.getBoundingClientRect();
    const nodeRect = node.getBoundingClientRect();

    /*
     * EXACT CENTER OF NODE
     */
    const nodeX =
      relativeX(nodeRect.left) + nodeRect.width / 2;

    const nodeY =
      relativeY(nodeRect.top) + nodeRect.height / 2;

    /*
     * Detect whether the card is on the left
     * or right side of the spine from the actual DOM.
     */
    const cardCenterX =
      relativeX(cardRect.left) + cardRect.width / 2;

    const isLeftCard = cardCenterX < spineX;

    /*
     * Read the actual card border width.
     */
    const computedStyle = getComputedStyle(card);

    const borderWidth =
      parseFloat(computedStyle.borderTopWidth) || 1;

    const halfBorder = borderWidth / 2;

    /*
     * Animated path should sit in the CENTER
     * of the existing CSS border.
     */
    const x =
      relativeX(cardRect.left) + halfBorder;

    const y =
      relativeY(cardRect.top) + halfBorder;

    const w =
      cardRect.width - borderWidth;

    const h =
      cardRect.height - borderWidth;

    /*
     * Read actual border radius.
     */
    const cssRadius =
      parseFloat(
        computedStyle.borderTopLeftRadius
      ) || 0;

    const radius = Math.min(
      cssRadius,
      w / 2,
      h / 2
    );

    /*
     * Vertical center of the card.
     */
    const cardCenterY =
      y + h / 2;

    /*
     * =====================================================
     * IMPORTANT
     * =====================================================
     *
     * The connector MUST touch the edge of the card
     * closest to the spine.
     *
     * LEFT CARD:
     *
     *        SPINE
     *          │
     *          ● NODE
     *          │
     *          ├───────────────┐
     *                          │
     *                     CARD │
     *                          │
     *
     * Therefore:
     *
     * cardStartX = x + w
     *
     *
     * RIGHT CARD:
     *
     *        SPINE
     *          │
     *          ● NODE
     *          │
     *          └───────────────┐
     *                          │ CARD
     *                          │
     *
     * Therefore:
     *
     * cardStartX = x
     *
     * =====================================================
     */

    const cardStartX = isLeftCard
      ? x + w
      : x;

    /*
     * =====================================================
     * 1. SPINE → NODE
     * =====================================================
     *
     * The first iteration starts from the top of
     * the spine.
     *
     * Every following iteration starts from the
     * previous card/node position.
     */
    path += ` L ${nodeX} ${nodeY}`;

    /*
     * =====================================================
     * 2. NODE → CARD BORDER
     * =====================================================
     *
     * This line ONLY travels through the empty space
     * between the spine and card.
     *
     * It terminates exactly on the card border.
     *
     * It NEVER enters the card.
     */
    path += ` L ${cardStartX} ${cardCenterY}`;

    /*
     * =====================================================
     * 3. COMPLETE CARD BORDER - 360°
     * =====================================================
     *
     * The path starts at the center of the nearest edge,
     * travels around the entire card, and returns to
     * EXACTLY the same point.
     */

    if (isLeftCard) {
      /*
       * LEFT CARD
       *
       * Start:
       * RIGHT CENTER
       *
       * Direction:
       *
       * right-center
       * ↓
       * bottom-right
       * ←
       * bottom-left
       * ↑
       * top-left
       * →
       * top-right
       * ↓
       * right-center
       */

      path += `
        L ${cardStartX} ${y + h - radius}

        Q ${cardStartX} ${y + h}
          ${cardStartX - radius} ${y + h}

        L ${x + radius} ${y + h}

        Q ${x} ${y + h}
          ${x} ${y + h - radius}

        L ${x} ${y + radius}

        Q ${x} ${y}
          ${x + radius} ${y}

        L ${x + w - radius} ${y}

        Q ${x + w} ${y}
          ${x + w} ${y + radius}

        L ${cardStartX} ${cardCenterY}
      `;
    } else {
      /*
       * RIGHT CARD
       *
       * Start:
       * LEFT CENTER
       *
       * Direction:
       *
       * left-center
       * ↑
       * top-left
       * →
       * top-right
       * ↓
       * bottom-right
       * ←
       * bottom-left
       * ↑
       * left-center
       */

      path += `
        L ${cardStartX} ${y + radius}

        Q ${cardStartX} ${y}
          ${cardStartX + radius} ${y}

        L ${x + w - radius} ${y}

        Q ${x + w} ${y}
          ${x + w} ${y + radius}

        L ${x + w} ${y + h - radius}

        Q ${x + w} ${y + h}
          ${x + w - radius} ${y + h}

        L ${x + radius} ${y + h}

        Q ${x} ${y + h}
          ${x} ${y + h - radius}

        L ${cardStartX} ${cardCenterY}
      `;
    }

    /*
     * =====================================================
     * 4. CARD BORDER → NODE
     * =====================================================
     *
     * We are now back at the exact same point where
     * we entered the card.
     *
     * Return to the node.
     */
    path += ` L ${nodeX} ${nodeY}`;
  });

  /*
   * =====================================================
   * 5. FINAL NODE → BOTTOM OF SPINE
   * =====================================================
   *
   * After the last card completes its full border loop,
   * return to the node and continue down the spine.
   */
  path += ` L ${spineX} ${spineBottom}`;

  setGeometry({
    path,
    width,
    height,
  });
}, [academicHistory]);

  /*
   * Build geometry after browser has completed layout.
   */
  useLayoutEffect(() => {
    if (!containerRef.current) {
      return;
    }

    /*
     * Wait one frame so all CSS/flex dimensions
     * are finalized.
     */
    const frame = requestAnimationFrame(() => {
      buildTimelinePath();
    });

    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(() => {
        buildTimelinePath();
      });
    });

    resizeObserver.observe(containerRef.current);

    cardRefs.current.forEach((card) => {
      if (card) {
        resizeObserver.observe(card);
      }
    });

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
    };
  }, [academicHistory, buildTimelinePath]);

  if (academicHistory.length === 0) {
    return null;
  }

  /*
   * Animation duration.
   *
   * Longer timeline = longer complete cycle.
   */
  const animationDuration = Math.max(academicHistory.length * 10, 12);

  return (
    <section
      className="
                py-24
                bg-white
                overflow-hidden
            "
    >
      <div
        className="
                    w-full
                    mx-auto
                    px-4
                "
      >
        {/* HEADER */}
        <div
          className="
                        text-center
                        mb-28
                    "
        >
          <span
            className="
                            text-sky-500
                            font-bold
                            tracking-[0.2em]
                            text-[10px]
                            uppercase
                        "
          >
            Qualifications
          </span>

          <h2
            className="
                            text-4xl
                            font-black
                            text-slate-900
                            mt-2
                        "
          >
            Academic Journey
          </h2>

          <p
            className="
                            text-slate-500
                            mt-4
                            text-sm
                            font-medium
                        "
          >
            A continuous current flowing through my academic journey.
          </p>
        </div>

        {/*
         * IMPORTANT:
         *
         * This container controls the layout.
         * SVG is only an absolute overlay.
         */}
        <div
          ref={containerRef}
          className="
                        relative
                    "
        >
          {/*
           * STATIC CENTRAL SPINE
           *
           * This is your ORIGINAL spine.
           */}
          <div
            ref={spineRef}
            className="
                            absolute
                            w-[2px]
                            bg-slate-100
                            h-full
                            left-4
                            md:left-1/2
                            transform
                            md:-translate-x-1/2
                            top-0
                            z-0
                        "
          />

          {/*
           * ======================================
           * ELECTRIC CURRENT SVG
           * ======================================
           *
           * Absolute overlay.
           *
           * It cannot affect card layout.
           */}
          {geometry.path && (
            <svg
              className="
                                absolute
                                inset-0
                                w-full
                                h-full
                                pointer-events-none
                                z-40
                                overflow-visible
                            "
              viewBox={`
                                0
                                0
                                ${geometry.width}
                                ${geometry.height}
                            `}
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                {/* Soft electric glow */}
                <filter
                  id="education-current-glow"
                  x="-100%"
                  y="-100%"
                  width="300%"
                  height="300%"
                >
                  <feGaussianBlur stdDeviation="3" result="blur" />

                  <feMerge>
                    <feMergeNode in="blur" />

                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/*
               * Very subtle path underneath.
               *
               * This makes the current feel
               * integrated with the existing
               * timeline.
               */}
              <path
                d={geometry.path}
                fill="none"
                stroke="#0ea5e9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.06"
              />

              {/*
               * ONE SINGLE MOVING CURRENT
               *
               * pathLength=100 normalizes the
               * animation regardless of actual
               * SVG path length.
               */}
              <path
                d={geometry.path}
                fill="none"
                stroke="#0ea5e9"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength="100"
                strokeDasharray="3 97"
                filter="
                                    url(#education-current-glow)
                                "
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-100"
                  dur={`${animationDuration}s`}
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          )}

          {/*
           * ======================================
           * ORIGINAL TIMELINE CARDS
           * ======================================
           *
           * DO NOT CHANGE THIS LAYOUT.
           */}
          {academicHistory.map((edu, index) => {
            const isEven = index % 2 === 0;

            const targetInstitution =
              edu.school || edu.institution || "Institution";

            return (
              <div
                key={index}
                className="
                                        relative
                                        flex
                                        flex-col
                                        md:h-40
                                    "
              >
                {/*
                 * NODE
                 *
                 * The SVG reads this element's
                 * actual position.
                 */}
                <div
                  ref={(el) => {
                    nodeRefs.current[index] = el;
                  }}
                  className="
                                            absolute
                                            left-4
                                            md:left-1/2
                                            top-1/2
                                            transform
                                            -translate-x-1/2
                                            -translate-y-1/2
                                            z-50
                                        "
                >
                  <div
                    className="
                                                w-12
                                                h-12
                                                rounded-full
                                                bg-white
                                                border-2
                                                border-slate-200
                                                flex
                                                items-center
                                                justify-center
                                                p-2
                                                shadow-sm
                                            "
                  >
                    {edu.img ? (
                      <img
                        src={edu.img}
                        alt="logo"
                        className="
                                                        w-full
                                                        h-full
                                                        object-contain
                                                    "
                      />
                    ) : (
                      <div
                        className="
                                                        w-2
                                                        h-2
                                                        rounded-full
                                                        bg-sky-400
                                                    "
                      />
                    )}
                  </div>
                </div>

                {/*
                 * =================================
                 * ORIGINAL ALTERNATING ROW
                 * =================================
                 *
                 * EVEN  = LEFT CARD
                 * ODD   = RIGHT CARD
                 */}
                <div
                  className={`
                                            relative
                                            flex
                                            items-center
                                            w-full
                                            h-full
                                            ${
                                              isEven
                                                ? ""
                                                : "md:flex-row-reverse"
                                            }
                                        `}
                >
                  {/*
                   * CARD
                   */}
                  <div
                    className={`
                                                w-full
                                                pl-16
                                                md:pl-0
                                                md:w-1/2
                                                ${
                                                  isEven
                                                    ? "md:pr-24"
                                                    : "md:pl-24"
                                                }
                                            `}
                  >
                    <div
                      ref={(el) => {
                        cardRefs.current[index] = el;
                      }}
                      className="
                                                    relative
                                                    p-8
                                                    rounded-3xl
                                                    bg-white
                                                    border
                                                    border-slate-100
                                                    shadow-sm
                                                "
                    >
                      {/* CARD CONTENT */}
                      <div
                        className="
                                                        flex
                                                        flex-col
                                                        mb-4
                                                    "
                      >
                        <span
                          className="
                                                            text-[11px]
                                                            font-black
                                                            text-sky-500
                                                            uppercase
                                                            tracking-widest
                                                            mb-2
                                                        "
                        >
                          {edu.period}
                        </span>

                        <h3
                          className="
                                                            text-xl
                                                            font-bold
                                                            text-slate-800
                                                            leading-tight
                                                        "
                        >
                          {edu.degree}
                        </h3>

                        <p
                          className="
                                                            text-slate-500
                                                            font-medium
                                                            mt-1
                                                        "
                        >
                          {targetInstitution}
                        </p>
                      </div>

                      {/*
                       * CARD FOOTER
                       */}
                      <div
                        className="
                                                        flex
                                                        items-center
                                                        justify-between
                                                        pt-6
                                                        mt-2
                                                        border-t
                                                        border-slate-50
                                                        text-[10px]
                                                        font-bold
                                                        text-slate-400
                                                        uppercase
                                                        tracking-tighter
                                                    "
                      >
                        <span
                          className="
                                                            flex
                                                            items-center
                                                            gap-1.5
                                                        "
                        >
                          <svg
                            className="
                                                                w-3.5
                                                                h-3.5
                                                            "
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="
                                                                    M17.657 16.657
                                                                    L13.414 20.9
                                                                    a1.998 1.998 0 01-2.827 0
                                                                    l-4.244-4.243
                                                                    a8 8 0 1111.314 0z
                                                                "
                            />
                          </svg>

                          {edu.location}
                        </span>

                        {edu.score && (
                          <span
                            className="
                                                                text-sky-500
                                                            "
                          >
                            {edu.score}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/*
       * Reduced motion.
       */}
      <style>{`
                @media (prefers-reduced-motion: reduce) {
                    svg path:last-child {
                        display: none;
                    }
                }

                /*
                 * On small screens the original design hides
                 * horizontal connectors, so the electric
                 * desktop circuit is disabled there.
                 */
                @media (max-width: 767px) {
                    .education-current-svg {
                        display: none;
                    }
                }
            `}</style>
    </section>
  );
};

export default Education;
