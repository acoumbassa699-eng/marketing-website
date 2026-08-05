import type { EngineJob, Workspace } from "@optimus/types";

const engineUrl = process.env.OPTIMUS_ENGINE_URL ?? "http://localhost:4100";

const demoWorkspace: Workspace = { id: "ws-demo", name: "Demo Workspace", template: "nextjs-node-20", owner: "demo", status: "idle", region: "local", lastActiveAt: new Date().toISOString() };

export async function createEngineJob(workspaceId: string, kind: EngineJob["kind"]): Promise<EngineJob> {
  return { id: `job-${Date.now()}`, workspaceId, kind, status: "queued", createdAt: new Date().toISOString() };
}

console.log(`Optimus API ready. Engine endpoint: ${engineUrl}`);
console.log({ workspace: demoWorkspace });
