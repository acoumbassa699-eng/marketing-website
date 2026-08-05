import type { Workspace, EngineJob } from "@optimus/types";

export const workspaces: Workspace[] = [
  { id: "ws-next", name: "Next.js Growth Lab", template: "nextjs-node-20", owner: "platform-team", status: "running", region: "fra1", lastActiveAt: "2026-08-05T09:30:00Z" },
  { id: "ws-agent", name: "AI Agent Sandbox", template: "python-node-gpu", owner: "research", status: "starting", region: "par1", lastActiveAt: "2026-08-05T08:10:00Z" },
  { id: "ws-api", name: "API Integration", template: "go-postgres", owner: "backend", status: "idle", region: "lon1", lastActiveAt: "2026-08-04T18:20:00Z" }
];

export const engineJobs: EngineJob[] = [
  { id: "job-101", workspaceId: "ws-agent", kind: "provision", status: "running", createdAt: "2026-08-05T09:42:00Z" },
  { id: "job-100", workspaceId: "ws-next", kind: "start", status: "succeeded", createdAt: "2026-08-05T09:15:00Z" }
];
