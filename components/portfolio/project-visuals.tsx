"use client"

// RAG Pipeline Diagram for NIST Cybersecurity Q&A System
export function RAGPipelineDiagram() {
  return (
    <div className="relative rounded-lg bg-secondary/50 p-4 overflow-hidden">
      <div className="flex items-center justify-between gap-2 text-xs">
        {/* Query */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-16 h-10 rounded border border-primary/40 bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-mono text-[10px]">Query</span>
          </div>
        </div>
        
        {/* Arrow */}
        <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-primary/20 relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary/40 border-y-2 border-y-transparent" />
        </div>
        
        {/* FAISS Retriever */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-20 h-10 rounded border border-primary/40 bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-mono text-[10px]">FAISS</span>
          </div>
        </div>
        
        {/* Arrow */}
        <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-primary/20 relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary/40 border-y-2 border-y-transparent" />
        </div>
        
        {/* Context */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-18 h-10 rounded border border-primary/40 bg-primary/10 flex items-center justify-center px-2">
            <span className="text-primary font-mono text-[10px]">Context</span>
          </div>
        </div>
        
        {/* Arrow */}
        <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-primary/20 relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary/40 border-y-2 border-y-transparent" />
        </div>
        
        {/* Mistral LLM */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-18 h-10 rounded border border-primary/60 bg-primary/20 flex items-center justify-center px-2">
            <span className="text-primary font-mono text-[10px] font-medium">Mistral</span>
          </div>
        </div>
        
        {/* Arrow */}
        <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-primary/20 relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary/40 border-y-2 border-y-transparent" />
        </div>
        
        {/* Answer + Sources */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-20 h-10 rounded border border-foreground/30 bg-foreground/5 flex items-center justify-center">
            <span className="text-foreground/80 font-mono text-[10px]">Answer</span>
          </div>
        </div>
      </div>
      
      <p className="text-[10px] text-muted-foreground mt-3 text-center">
        Query flows through FAISS retrieval to Mistral LLM with automatic source attribution
      </p>
    </div>
  )
}

// Grad-CAM Heatmap Visualization for Malware Classification
export function GradCAMVisualization() {
  return (
    <div className="relative rounded-lg bg-secondary/50 p-4 overflow-hidden">
      <div className="flex items-center gap-4">
        {/* Simulated malware image with heatmap overlay */}
        <div className="relative w-24 h-24 rounded border border-border overflow-hidden shrink-0">
          {/* Base grid pattern (representing binary structure) */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4px_4px]" />
          
          {/* Simulated structural patterns */}
          <div className="absolute inset-0">
            {/* Dark regions */}
            <div className="absolute top-2 left-2 w-8 h-6 bg-foreground/10 rounded-sm" />
            <div className="absolute bottom-3 right-2 w-10 h-8 bg-foreground/15 rounded-sm" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-10 bg-foreground/12 rounded-sm" />
          </div>
          
          {/* Heatmap overlay - attention regions */}
          <div className="absolute top-3 left-4 w-8 h-8 rounded-full bg-primary/30 blur-md" />
          <div className="absolute bottom-4 right-3 w-10 h-6 rounded-full bg-primary/40 blur-md" />
          <div className="absolute top-1/2 left-1/3 w-6 h-6 rounded-full bg-primary/25 blur-sm" />
        </div>
        
        {/* Legend and description */}
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-primary/40" />
              <span className="text-[10px] text-muted-foreground">High attention</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-foreground/10" />
              <span className="text-[10px] text-muted-foreground">Structure</span>
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-[10px] text-muted-foreground mt-3">
        Model attention highlights structural fingerprints used for classification
      </p>
    </div>
  )
}

// Network Intrusion Detection Pipeline
export function NIDSPipelineDiagram() {
  return (
    <div className="relative rounded-lg bg-secondary/50 p-4 overflow-hidden">
      <div className="flex items-center justify-between gap-1 text-xs">
        {/* Network Flows */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-16 h-10 rounded border border-border bg-secondary/80 flex items-center justify-center">
            <span className="text-muted-foreground font-mono text-[9px]">Flows</span>
          </div>
        </div>
        
        {/* Arrow */}
        <div className="flex-1 h-px bg-gradient-to-r from-border to-primary/30 relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary/30 border-y-2 border-y-transparent" />
        </div>
        
        {/* Feature Engineering */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-18 h-10 rounded border border-primary/30 bg-primary/5 flex items-center justify-center px-1">
            <span className="text-primary/80 font-mono text-[9px]">Features</span>
          </div>
        </div>
        
        {/* Arrow */}
        <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-primary/50 relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary/50 border-y-2 border-y-transparent" />
        </div>
        
        {/* LightGBM */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-18 h-10 rounded border border-primary/60 bg-primary/15 flex items-center justify-center px-1">
            <span className="text-primary font-mono text-[9px] font-medium">LightGBM</span>
          </div>
        </div>
        
        {/* Arrow */}
        <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-primary/30 relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary/30 border-y-2 border-y-transparent" />
        </div>
        
        {/* SHAP */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-14 h-10 rounded border border-foreground/30 bg-foreground/5 flex items-center justify-center">
            <span className="text-foreground/80 font-mono text-[9px]">SHAP</span>
          </div>
        </div>
      </div>
      
      {/* Mini SHAP-style bar visualization */}
      <div className="mt-3 flex items-center gap-1">
        <span className="text-[9px] text-muted-foreground w-12 shrink-0">Protocol</span>
        <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-gradient-to-r from-primary/60 to-primary/30 rounded-full" />
        </div>
      </div>
      <div className="mt-1 flex items-center gap-1">
        <span className="text-[9px] text-muted-foreground w-12 shrink-0">Duration</span>
        <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
          <div className="h-full w-1/2 bg-gradient-to-r from-primary/50 to-primary/20 rounded-full" />
        </div>
      </div>
      
      <p className="text-[10px] text-muted-foreground mt-2">
        SHAP reveals protocol-level attack signatures across 2.2M+ flows
      </p>
    </div>
  )
}

// Anomaly Detection Timeline
export function AnomalyTimelineVisualization() {
  // Simulated anomaly scores over time
  const scores = [0.1, 0.15, 0.12, 0.18, 0.14, 0.85, 0.92, 0.2, 0.16, 0.11, 0.13, 0.78, 0.15, 0.12, 0.1]
  const maxScore = Math.max(...scores)
  
  return (
    <div className="relative rounded-lg bg-secondary/50 p-4 overflow-hidden">
      {/* Timeline visualization */}
      <div className="flex items-end gap-1 h-16">
        {scores.map((score, i) => {
          const isAnomaly = score > 0.5
          const height = (score / maxScore) * 100
          return (
            <div
              key={i}
              className="flex-1 rounded-t transition-all duration-300"
              style={{
                height: `${height}%`,
                backgroundColor: isAnomaly 
                  ? `oklch(0.65 0.08 200 / ${0.4 + score * 0.4})` 
                  : `oklch(0.93 0.005 260 / 0.15)`,
              }}
            />
          )
        })}
      </div>
      
      {/* Threshold line */}
      <div className="absolute left-4 right-4 top-[calc(50%+8px)] border-t border-dashed border-primary/40">
        <span className="absolute -top-2 right-0 text-[8px] text-primary/60 font-mono">p95 threshold</span>
      </div>
      
      <div className="flex items-center justify-between mt-2">
        <span className="text-[9px] text-muted-foreground font-mono">Block sequence</span>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-primary/60" />
            <span className="text-[9px] text-muted-foreground">Anomaly</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-foreground/15" />
            <span className="text-[9px] text-muted-foreground">Normal</span>
          </div>
        </div>
      </div>
      
      <p className="text-[10px] text-muted-foreground mt-2">
        Long-tail anomalies prioritized for investigation, not hard classification
      </p>
    </div>
  )
}
