"use client"

/* =======================
   RAG Pipeline Diagram
======================= */
export function RAGPipelineDiagram() {
  return (
    <div className="relative rounded-lg bg-secondary/50 p-4 overflow-x-hidden">
      <div className="flex flex-col sm:flex-row items-center gap-3 text-xs">

        <Box label="Query" />

        <Arrow />

        <Box label="FAISS" min />

        <Arrow />

        <Box label="Context" />

        <Arrow />

        <Box label="Mistral" strong />

        <Arrow />

        <Box label="Answer" neutral />
      </div>

      <p className="text-[10px] text-muted-foreground mt-3 text-center">
        Query flows through FAISS retrieval to Mistral LLM
      </p>
    </div>
  )
}

/* =======================
   Grad-CAM Visualization
======================= */
export function GradCAMVisualization() {
  return (
    <div className="relative rounded-lg bg-secondary/50 p-4 overflow-x-hidden">
      <div className="flex flex-col sm:flex-row items-center gap-4">

        <div className="relative w-24 h-24 rounded border border-border overflow-hidden shrink-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4px_4px]" />

          <div className="absolute top-3 left-4 w-8 h-8 rounded-full bg-primary/30 blur-md" />
          <div className="absolute bottom-4 right-3 w-10 h-6 rounded-full bg-primary/40 blur-md" />
        </div>

        <div className="space-y-2">
          <Legend color="bg-primary/40" label="High attention" />
          <Legend color="bg-foreground/10" label="Structure" />
        </div>
      </div>

      <p className="text-[10px] text-muted-foreground mt-3">
        Model attention highlights structural fingerprints
      </p>
    </div>
  )
}

/* =======================
   NIDS Pipeline
======================= */
export function NIDSPipelineDiagram() {
  return (
    <div className="relative rounded-lg bg-secondary/50 p-4 overflow-x-hidden">
      <div className="flex flex-col sm:flex-row items-center gap-2 text-xs">

        <Box label="Flows" neutral />

        <Arrow />

        <Box label="Features" />

        <Arrow />

        <Box label="LightGBM" strong />

        <Arrow />

        <Box label="SHAP" neutral />
      </div>

      <p className="text-[10px] text-muted-foreground mt-3">
        SHAP reveals protocol-level attack signatures
      </p>
    </div>
  )
}

/* =======================
   Anomaly Timeline
======================= */
export function AnomalyTimelineVisualization() {
  const scores = [0.1, 0.15, 0.85, 0.92, 0.2, 0.1]

  return (
    <div className="relative rounded-lg bg-secondary/50 p-4 overflow-x-hidden">
      <div className="flex items-end gap-1 h-16">
        {scores.map((s, i) => (
          <div
            key={i}
            className="flex-1 rounded-t"
            style={{
              height: `${s * 100}%`,
              backgroundColor: s > 0.5
                ? "oklch(0.65 0.08 200 / 0.6)"
                : "oklch(0.93 0.005 260 / 0.2)",
            }}
          />
        ))}
      </div>
    </div>
  )
}

/* =======================
   Shared Components
======================= */
function Box({
  label,
  strong,
  neutral,
  min,
}: {
  label: string
  strong?: boolean
  neutral?: boolean
  min?: boolean
}) {
  return (
    <div
      className={`
        min-w-[4rem] h-10 px-2 rounded border
        flex items-center justify-center
        ${strong ? "border-primary/60 bg-primary/20" : ""}
        ${neutral ? "border-foreground/30 bg-foreground/5" : ""}
        ${!strong && !neutral ? "border-primary/40 bg-primary/10" : ""}
      `}
    >
      <span className="text-[10px] font-mono text-center">{label}</span>
    </div>
  )
}

function Arrow() {
  return (
    <div className="hidden sm:flex flex-1 h-px bg-gradient-to-r from-primary/40 to-primary/20 relative">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary/40 border-y-2 border-y-transparent" />
    </div>
  )
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${color}`} />
      <span className="text-[10px] text-muted-foreground">{label}</span>
    </div>
  )
}
