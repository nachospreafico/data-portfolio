import React from "react";

const HowIThink = () => {
  return (
    <section id="how-i-think" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
            How I Think
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            My approach to analytics, problem-solving, and data-driven
            decision-making.
          </p>
        </div>

        {/* Framework grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-semibold text-slate-900">
              1. Start with the Decision
            </h3>
            <p className="mt-2 text-slate-600">
              Every analysis should answer a real question. I first clarify the
              decision to be made, the business context, and what success looks
              like before reaching for the data.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              2. Define Success Properly
            </h3>
            <p className="mt-2 text-slate-600">
              A metric is only useful when it represents what actually matters.
              I define clear KPIs, understand their drivers, and use supporting
              metrics to avoid optimizing one number in isolation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              3. Separate Signal from Noise
            </h3>
            <p className="mt-2 text-slate-600">
              I distinguish patterns worth acting on from random variation, and
              correlation from causation. When certainty isn't possible, I make
              assumptions and limitations explicit.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              4. Think in Trade-offs
            </h3>
            <p className="mt-2 text-slate-600">
              Business decisions rarely optimize everything at once. I consider
              impact, cost, risk, and unintended consequences rather than
              looking at a metric in isolation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              5. From Insight to Action
            </h3>
            <p className="mt-2 text-slate-600">
              Analysis shouldn't end with a dashboard or a number. I translate
              findings into a clear recommendation, explain the expected impact
              and risks, and define how results should be monitored.
            </p>
          </div>
        </div>

        <p className="max-w-2xl mx-auto mt-16 text-slate-700 text-center leading-relaxed italic">
          I aim to reduce uncertainty and help teams make better decisions with
          confidence.
        </p>
      </div>
    </section>
  );
};

export default HowIThink;
