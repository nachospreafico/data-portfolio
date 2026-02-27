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
            My approach to product analytics, experimentation, and
            decision-making under uncertainty.
          </p>
        </div>

        {/* Framework grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-semibold text-slate-900">
              1. Start with the Decision
            </h3>
            <p className="mt-2 text-slate-600">
              Every analysis should support a concrete decision. I clarify the
              objective, the behavior we want to change, and who is impacted
              before writing a single query.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              2. Define Success Properly
            </h3>
            <p className="mt-2 text-slate-600">
              Metrics form a system. I align on the North Star, primary KPI,
              guardrails, and segment-level effects to avoid local optimization.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              3. Separate Correlation from Causation
            </h3>
            <p className="mt-2 text-slate-600">
              I distinguish descriptive insights from causal inference and favor
              experimentation when possible. When not, I identify biases and
              confounders before recommending action.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              4. Think in Trade-offs
            </h3>
            <p className="mt-2 text-slate-600">
              Product decisions create second-order effects. I consider
              short-term impact, long-term ecosystem health, and potential
              unintended consequences.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              5. From Insight to Action
            </h3>
            <p className="mt-2 text-slate-600">
              I conclude with a clear recommendation, expected impact, risk
              assessment, and monitoring plan. Analysis should move the product
              forward.
            </p>
          </div>
        </div>

        <p className="max-w-2xl mx-auto mt-16 text-slate-700 text-center leading-relaxed italic">
          I aim to reduce uncertainty, and help teams move forward with
          confidence
        </p>
      </div>
    </section>
  );
};

export default HowIThink;
