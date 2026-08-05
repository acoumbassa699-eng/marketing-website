import type { EngineJob } from "@optimus/types";

export interface EngineAdapter { provision(job: EngineJob): Promise<void>; stop(job: EngineJob): Promise<void>; }

export const localEngineAdapter: EngineAdapter = {
  async provision(job) { console.log(`Provisioning workspace ${job.workspaceId} from ${job.id}`); },
  async stop(job) { console.log(`Stopping workspace ${job.workspaceId} from ${job.id}`); }
};

console.log("Optimus Engine worker ready. Deploy this service to VPS only, never to Vercel.");
