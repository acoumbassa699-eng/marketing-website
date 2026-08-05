export type WorkspaceStatus = "idle" | "starting" | "running" | "stopping" | "failed";

export interface Workspace {
  id: string;
  name: string;
  template: string;
  owner: string;
  status: WorkspaceStatus;
  region: string;
  lastActiveAt: string;
}

export interface EngineJob {
  id: string;
  workspaceId: string;
  kind: "provision" | "start" | "stop" | "destroy";
  status: "queued" | "running" | "succeeded" | "failed";
  createdAt: string;
}
